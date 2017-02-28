(in-package :cl-user)
(defpackage a-test-asd
  (:use :cl :asdf))
(in-package :a-test-asd)

(defsystem a-test
  :author "za"
  :license ""
  :depends-on (:a
               :cl-test-more)
  :components ((:module "t"
                :components
                ((:file "a"))))
  :perform (load-op :after (op c) (asdf:clear-system c)))
