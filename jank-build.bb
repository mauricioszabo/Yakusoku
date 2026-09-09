;; jank's build system runs this script with Babashka before compiling the project -- both
;; when building Yakusoku itself and, crucially, when building a project that merely
;; *depends* on Yakusoku. Its two jobs: compile the native pool backend into the out
;; directory, and print the flags jank needs in order to compile and link against it.
;;
;; This is the only thing standing between a consumer and
;;
;;   JIT session error: Symbols not found: [ _ZN8yakusoku7backend8pool_newEj, ... ]
;;
;; Everything FastQueue-facing lives in native/yakusoku_pool.cpp, declared
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

(defn- find-fastqueue
  "FastQueue has no distro package; it has to be built and installed from source.

   Returns the install prefix, since both the headers and the static library are needed --
   unlike the other two backends, FastQueue ships a .a rather than a shared object."
  []
  (let [candidates ["/usr/local" "/usr" "/opt/homebrew"]]
    (or (some (fn [prefix]
                (when (and (fs/exists? (fs/path prefix "include" "fastqueue" "thread_pool.h"))
                           (fs/exists? (fs/path prefix "lib" "libfastqueue.a")))
                  (str prefix)))
              candidates)
        (throw (ex-info
                 (str "FastQueue not found. Build and install it from source:\n"
                      "  git clone https://github.com/muhammad-fiaz/FastQueue\n"
                      "  cd FastQueue && cmake -B build -DCMAKE_BUILD_TYPE=Release \\\n"
                      "      -DCMAKE_POSITION_INDEPENDENT_CODE=ON\n"
                      "  cmake --build build && sudo cmake --install build\n"
                      "POSITION_INDEPENDENT_CODE matters: FastQueue ships a static library, "
                      "and linking a .a into relocatable code needs it.")
                 {:searched candidates})))))

(let [fq-prefix (find-fastqueue)
      clang (find-clang)
      native (fs/path src-dir "native")
      src (fs/path native "yakusoku_pool.cpp")
      obj (fs/path out-dir "yakusoku_pool.o")
      lib (fs/path out-dir "libyakusoku-pool.so")]

  (fs/create-dirs out-dir)

  (apply shell clang (concat ["-std=c++20" "-fPIC" "-w" (str "-O" optimization-level)]
                             ["-I" (str (fs/path fq-prefix "include")) "-I" (str native)
                              "-c" (str src) "-o" (str obj)]))
  ;; A shared object, not a static archive -- and this is forced, not a preference.
  ;;
  ;; FastQueue's scheduler.c uses thread-local storage, and jank's JIT linker cannot relocate
  ;; it out of a .a: "Unsupported x86-64 relocation type R_X86_64_TLSLD", followed by every
  ;; fq_scheduler_* symbol failing to materialise. Linking FastQueue into a .so hands those
  ;; relocations to the dynamic loader, which does support them.
  ;;
  ;; --whole-archive because nothing in this object references most of FastQueue directly;
  ;; without it the linker would drop the very symbols jank later needs.
  (shell clang "-shared" "-fPIC" "-o" (str lib) (str obj)
         "-Wl,--whole-archive" (str (fs/path fq-prefix "lib" "libfastqueue.a"))
         "-Wl,--no-whole-archive" "-lpthread"
         (str "-Wl,-rpath," out-dir))

  ;; jank never parses FastQueue -- it only ever sees the three declarations in
  ;; native/yakusoku_pool.hpp -- so no FastQueue include dir is published here. Only the
  ;; project's own native directory is.
  (println (str "jank-build::include-dir=" native))
  (println (str "jank-build::link-dir=" out-dir))
  (println "jank-build::link-library=yakusoku-pool")
  (println "jank-build::link-library=pthread")

  ;; Only the native layer affects this build; leave the jank sources out of it so an
  ;; edit to core.jank does not trigger a rebuild of the backend.
  (println "jank-build::rerun-if-changed=native")
  (println "jank-build::rerun-if-changed=jank-build.bb"))
