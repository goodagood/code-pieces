(in-package :cl-user)
(defpackage a.web
  (:use :cl
        :caveman2
        :a.config
        :a.view
        :a.db
        :datafly
        :sxql)
  (:export :*web*))
(in-package :a.web)

;;
;; Application

(defclass <web> (<app>) ())
(defparameter *web* (make-instance '<web>))

;;
;; Routing rules

(defroute "/" ()
  (with-layout (:title "Welcome to Caveman2")
    (render #P"index.tmpl")))

;;
;; Error pages

(defmethod on-exception ((app <web>) (code (eql 404)))
  (declare (ignore app))
  (merge-pathnames #P"_errors/404.html"
                   *template-directory*))
