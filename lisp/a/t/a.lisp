(in-package :cl-user)
(defpackage a-test
  (:use :cl
        :a
        :cl-test-more))
(in-package :a-test)

(plan nil)

;; blah blah blah.

(finalize)
