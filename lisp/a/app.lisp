(ql:quickload :a)

(defpackage a.app
  (:use :cl)
  (:import-from :clack.builder
                :builder)
  (:import-from :clack.middleware.static
                :<clack-middleware-static>)
  (:import-from :clack.middleware.session
                :<clack-middleware-session>)
  (:import-from :clack.middleware.backtrace
                :<clack-middleware-backtrace>)
  (:import-from :clack.middleware.let
                :<clack-middleware-let>)
  (:import-from :ppcre
                :scan
                :regex-replace)
  (:import-from :a.web
                :*web*)
  (:import-from :a.config
                :config
                :productionp
                :*static-directory*))
(in-package :a.app)

(builder
 (<clack-middleware-static>
  :path (lambda (path)
          (if (ppcre:scan "^(?:/images/|/css/|/js/|/robot\\.txt$|/favicon.ico$)" path)
              path
              nil))
  :root *static-directory*)
 (if (getf (config) :error-log)
     (make-instance '<clack-middleware-backtrace>
                    :output (getf (config) :error-log))
     nil)
 <clack-middleware-session>
 (if (productionp)
     nil
     (make-instance '<clack-middleware-let>
                    :bindings '((datafly:*trace-sql* t))))
 *web*)
