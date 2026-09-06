;; jank's build system runs this script with Babashka before compiling the project. Its
;; two jobs: build the Asio support library into the out directory, and print the flags
;; jank needs in order to compile against it.
;;
;; Why a build step at all, when Asio is header-only? Because jank's incremental C++
;; parser rejects asio/impl/cancellation_signal.ipp ("'auto_delete_helper' is a private
;; member of 'asio::cancellation_slot'") which ordinary Clang accepts. Compiling Asio
;; ahead of time in ASIO_SEPARATE_COMPILATION mode keeps those .ipp files away from the
;; JIT entirely, and has the happy side effect of cutting load time, since the JIT then
;; parses only declarations.

(require '[babashka.fs :as fs]
         '[babashka.process :refer [shell]]
         '[clojure.string :as str])

(def input *input*)
(def src-dir (:src-dir input))
(def out-dir (:out-dir input))
(def optimization-level (or (:optimization-level input) 0))

(defn- find-clang
  "jank ships the Clang it JITs with. Using that same compiler keeps the object file ABI
   compatible with the code jank generates."
  []
  (let [jank (fs/which "jank")
        base (some-> jank fs/real-path fs/parent fs/parent)
        candidates (concat (when base
                             (for [v (map fs/file-name (fs/list-dir (fs/path base "lib" "jank")))]
                               (fs/path base "lib" "jank" v "bin" "clang++")))
                           [(fs/path "/usr/local/lib/jank/0.1/bin/clang++")])]
    (or (some (fn [c] (when (fs/executable? c) (str c))) candidates)
        "c++")))

(defn- find-asio
  "Prefers a vendored Asio, then the usual system locations (libasio-dev, homebrew, nix)."
  []
  (let [candidates [(fs/path src-dir "third-party" "asio" "asio" "include")
                    "/usr/local/include"
                    "/opt/homebrew/include"
                    "/usr/include"]]
    (or (some (fn [dir] (when (fs/exists? (fs/path dir "asio.hpp")) (str dir))) candidates)
        (throw (ex-info (str "Standalone Asio not found. Install it (Debian/Ubuntu: "
                             "apt install libasio-dev, macOS: brew install asio) or vendor "
                             "it at third-party/asio.")
                        {:searched candidates})))))

(let [asio-include (find-asio)
      clang (find-clang)
      src (fs/path out-dir "asio_src.cpp")
      obj (fs/path out-dir "asio_src.o")
      lib (fs/path out-dir "libyakusoku-asio.a")
      defines ["-DASIO_STANDALONE" "-DASIO_NO_DEPRECATED" "-DASIO_SEPARATE_COMPILATION"]]

  (fs/create-dirs out-dir)
  (spit (str src) "#include <asio/impl/src.hpp>\n")

  (apply shell clang (concat ["-std=c++20" "-fPIC" "-w" (str "-O" optimization-level)]
                             defines
                             ["-I" asio-include "-c" (str src) "-o" (str obj)]))
  (shell "ar" "rcs" (str lib) (str obj))

  ;; Flags for jank itself. The defines matter as much as the paths: without
  ;; ASIO_SEPARATE_COMPILATION the JIT would pull in the .ipp files and fail.
  (doseq [d defines]
    (println (str "jank-build::define=" (subs d 2))))
  (println (str "jank-build::include-dir=" asio-include))
  (println (str "jank-build::include-dir=" (fs/path src-dir "native")))
  (println (str "jank-build::link-dir=" out-dir))
  (println "jank-build::link-library=yakusoku-asio")
  (println "jank-build::link-library=pthread")

  ;; Only the native layer affects this build; leave the jank sources out of it so an
  ;; edit to core.jank does not trigger an Asio rebuild.
  (println "jank-build::rerun-if-changed=native")
  (println "jank-build::rerun-if-changed=jank-build.bb"))
