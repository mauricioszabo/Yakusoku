;; jank's build system runs this script with Babashka before compiling the project -- both
;; when building Yakusoku itself and, crucially, when building a project that merely
;; *depends* on Yakusoku. Its two jobs: compile the native pool backend into the out
;; directory, and print the flags jank needs in order to compile and link against it.
;;
;; This is the only thing standing between a consumer and
;;
;;   JIT session error: Symbols not found: [ _ZN8yakusoku7backend8pool_newEj, ... ]
;;
;; Everything Taskflow-facing lives in native/yakusoku_pool.cpp, declared
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

(defn- find-taskflow
  "Prefers a copy vendored beside the dependency, then the usual system locations, and
   fetches one into the build directory as a last resort.

   Taskflow is header-only and has no distro package, which makes it the most awkward of the
   three backends to consume: there is nothing to apt-install. The fetch goes into out-dir
   rather than into the extracted dependency, since jank extracts dependencies read-only --
   and it is only a convenience. It fails in any environment where the build has no network
   (a CI sandbox, a proxied container that does not pass HTTPS_PROXY through to babashka),
   so the error below tells the consumer how to supply the headers instead."
  []
  (let [fetched (fs/path out-dir "taskflow")
        candidates [(fs/path src-dir "third-party" "taskflow")
                    fetched
                    "/usr/local/include"
                    "/opt/homebrew/include"
                    "/usr/include"]
        found (some (fn [dir] (when (fs/exists? (fs/path dir "taskflow" "taskflow.hpp"))
                                (str dir)))
                    candidates)]
    (or found
        (try
          (fs/create-dirs out-dir)
          (shell "git" "clone" "--depth" "1" "-q"
                 "https://github.com/taskflow/taskflow.git" (str fetched))
          (str fetched)
          (catch Exception _
            (throw (ex-info
                     (str "Taskflow not found, and fetching it failed.\n"
                          "Install its headers so that <taskflow/taskflow.hpp> resolves:\n"
                          "  git clone --depth 1 https://github.com/taskflow/taskflow\n"
                          "  sudo cp -r taskflow/taskflow /usr/local/include/\n"
                          "Taskflow is header-only and has no distro package.")
                     {:searched (mapv str candidates)})))))))

(let [tf-include (find-taskflow)
      clang (find-clang)
      native (fs/path src-dir "native")
      src (fs/path native "yakusoku_pool.cpp")
      obj (fs/path out-dir "yakusoku_pool.o")
      lib (fs/path out-dir "libyakusoku-pool.a")]

  (fs/create-dirs out-dir)

  (apply shell clang (concat ["-std=c++20" "-fPIC" "-w" (str "-O" optimization-level)]
                             ["-I" tf-include "-I" (str native)
                              "-c" (str src) "-o" (str obj)]))
  (shell "ar" "rcs" (str lib) (str obj))

  ;; jank never parses Taskflow -- it cannot; see native/yakusoku_pool.cpp -- so the
  ;; Taskflow include dir is deliberately NOT published here. Only the project's own native
  ;; directory is, which holds the three declarations jank does see.
  (println (str "jank-build::include-dir=" native))
  (println (str "jank-build::link-dir=" out-dir))
  (println "jank-build::link-library=yakusoku-pool")
  (println "jank-build::link-library=pthread")

  ;; Only the native layer affects this build; leave the jank sources out of it so an
  ;; edit to core.jank does not trigger a rebuild of the backend.
  (println "jank-build::rerun-if-changed=native")
  (println "jank-build::rerun-if-changed=jank-build.bb"))
