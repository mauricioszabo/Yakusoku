(defproject org.clojars.mauricioszabo/yakusoku "0.1.0"
  :description "A promise and concurrency library for jank, in the spirit of promesa."
  :url "https://github.com/mauricioszabo/yakusoku"
  :license {:name "MPL 2.0"
            :url "https://www.mozilla.org/en-US/MPL/2.0/"}
  :dependencies []
  :plugins [[org.jank-lang/lein-jank "2026.09-7"]]
  :middleware [leiningen.jank/middleware]
  :source-paths ["src"]
  :test-paths ["test"]

  ;; The native header has to travel in the jar: jank-build.bb points the consuming build at
  ;; it (include-dir) and asks to be re-run when it changes (rerun-if-changed), and both
  ;; resolve inside the extracted dependency. Without it, a consumer's `lein compile` dies in
  ;; jank-build's change detection before compiling anything.
  ;;
  ;; The path must be absolute. lein-jank relativizes each entry against the project root,
  ;; and java.nio's relativize rejects an absolute base against a relative target with
  ;; "'other' is different type of Path" -- so a bare "native" would throw.
  :verbatim-paths [~(str (System/getProperty "user.dir") "/native")]
  :profiles {:base {:jank {:target-dir "target/debug"
                           :optimization-level 0}}
             :release {:jank {:target-dir "target/release"
                              :optimization-level 3}}})
