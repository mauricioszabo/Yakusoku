;; jank's build system runs this script with Babashka before compiling the project -- both
;; when building Yakusoku itself and, crucially, when building a project that merely
;; *depends* on Yakusoku. Its two jobs: compile the native pool backend into the out
;; directory, and print the flags jank needs in order to compile and link against it.
;;
;; This is the only thing standing between a consumer and
;;
;;   JIT session error: Symbols not found: [ _ZN8yakusoku7backend8pool_newEj, ... ]
;;
;; Everything Taskflow/oneTBB/FastQueue-facing lives in native/yakusoku_pool.cpp, declared
;; but not defined in the header jank parses. A consumer therefore has to compile that file
;; too, and nothing else does it for them: bin/build-native only serves this repository's
;; own test and benchmark runs.

(require '[babashka.fs :as fs]
         '[babashka.process :refer [shell]])

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

(defn- find-tbb
  "oneTBB comes from the system; there is no vendored copy to fall back on."
  []
  (let [candidates ["/usr/include" "/usr/local/include" "/opt/homebrew/include"]]
    (or (some (fn [dir] (when (fs/exists? (fs/path dir "oneapi" "tbb" "task_arena.h")) (str dir)))
              candidates)
        (throw (ex-info (str "oneTBB not found. Install it (Debian/Ubuntu: apt install "
                             "libtbb-dev, macOS: brew install tbb).")
                        {:searched candidates})))))

(let [tbb-include (find-tbb)
      clang (find-clang)
      native (fs/path src-dir "native")
      src (fs/path native "yakusoku_pool.cpp")
      obj (fs/path out-dir "yakusoku_pool.o")
      lib (fs/path out-dir "libyakusoku-pool.a")]

  (fs/create-dirs out-dir)

  (apply shell clang (concat ["-std=c++20" "-fPIC" "-w" (str "-O" optimization-level)]
                             ["-I" tbb-include "-I" (str native)
                              "-c" (str src) "-o" (str obj)]))
  (shell "ar" "rcs" (str lib) (str obj))

  ;; jank never parses oneTBB -- it only ever sees the three declarations in
  ;; native/yakusoku_pool.hpp -- so no oneTBB include dir is published here. Only the
  ;; project's own native directory is.
  (println (str "jank-build::include-dir=" native))
  (println (str "jank-build::link-dir=" out-dir))
  (println "jank-build::link-library=yakusoku-pool")
  (println "jank-build::link-library=tbb")
  (println "jank-build::link-library=pthread")

  ;; Only the native layer affects this build; leave the jank sources out of it so an
  ;; edit to core.jank does not trigger a rebuild of the backend.
  (println "jank-build::rerun-if-changed=native")
  (println "jank-build::rerun-if-changed=jank-build.bb"))
