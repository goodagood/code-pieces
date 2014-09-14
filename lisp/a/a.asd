(in-package :cl-user)
(defpackage a-asd
  (:use :cl :asdf))
(in-package :a-asd)

(defsystem a
  :version "0.1"
  :author "za"
  :license ""
  :depends-on (:clack
               :caveman2
               :envy
               :cl-ppcre

               ;; HTML Template
               :cl-emb

               ;; for CL-DBI
               :datafly
               :sxql)
  :components ((:module "src"
                :components
                ((:file "main" :depends-on ("config" "view" "db"))
                 (:file "web" :depends-on ("view"))
                 (:file "view" :depends-on ("config"))
                 (:file "db" :depends-on ("config"))
                 (:file "config"))))
  :description ""
  :in-order-to ((test-op (load-op a-test))))
