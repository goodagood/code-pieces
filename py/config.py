# 12 06 2014

config = {}
#module.exports = config

config["redis_host"] = "54.248.54.80"
config["redis_port"] = 6379  # // default is 6379
# // usage: client = redis.createClient(redis_port, redis_host)

# // a list to contain usernames, serves as current container:
config["current_user_name_roll"] = 'user.name.roll'
# // a list of all containers:
config["user_name_roll_of_roll"] = 'user.name.roll.of.roll'
config["user_id_max"] = 1403770226 # // epoc seconds now.

# // aws s3 bucket for user files, the old 'ggfsa' ruined in accident.
config["root_bucket"] = 'ggfsb'

# //config.formidable_upload_dir = '/tmp'
# //config.formidable_upload_dir = '/public/tmp'
# // this should be deprecated: 0901 ?
# //config.formidable_upload_dir = '/public/ggfsa'
config["formidable_upload_dir"] = '/public/ggfsb'

# // sqlite3 db for local info
# //config.local_file_info_db = 'myblueimp/local.sqlite3'
# // Put the db to root directory:
config["local_sqlite3"] = '/var/goodagood/local.sqlite3'
config["local_sqlite3_table_name"] = 'linfo'

# /* log file setting */
config["logfile"] = '/tmp/logfile'


# // most default folders get ".g" prefix.
# // Plan to put all of this to folder: 'goodagood_'
config["default_folders"] = ['.gpublic', '.getc', '.gvid', '.gmsg', '.gtmp', '.gpic', '.gmusic'  ]
config["default_goodagood_folder"] = 'goodagood_'
config["default_goodagood_sub_folders"] = ['public', 'etc']

config["user_home_structure_file"] = "goodagood/etc/home-structure.json"

config["default_folder_options"] = {
  # //owner : user_info.username,
  "permission" : 700,
  "name"       : "home",
  "parent_key" : '',
  "abspath"    : '',
  "links"      : 0,
  ".ggwhat"    : "folder_option",
}
# // 
# //config.default_folders_opts = {isFolder:true, parentFolder:'depends'}
config["default_files"] = ['/.getc/ggdefaults', ]

config["aws_access_key_id"] = "AKIAJMFE4ZJAB7ILB45A"
config["aws_secret_access_key"] = "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"
config["region"] = "ap-northeast-1"


config["underscore_template_path"] = "u_templates"

config["meta_file_ext"] = ".gmeta" #  // deprecated, to use meta_file_prefix

config["meta_file_prefix"] = ".meta/"
config["folder_meta_prefix"] = ".gg.folder.meta/"
config["folder_info_prefix"] = ".gg.folder.info/"

config["file_meta_prefix"] = ".gg.file.meta/"

config["raw_file_prefix"] = ".gg.file/"
config["new_meta_prefix"] = ".gg.new/"

config["raw_files_folder"] = '.files' # //d?
config["event_folder"] = 'goodagood/event'
config["message_folder"] = 'goodagood/message'
config["meta_folder"] = 'goodagood/.metas' # //d
config["new_meta_folder"] = 'goodagood/.new' # //d

config["thumbnail_prefix"] = ".thumbnails/"

config["income_folder"] = "goodagood/.in"
config["folder_option_file_name"] = ".folder_option.json"

config["s3_stream_prefix"] = '/ss/'
config["folder_list_prefix"] = '/list3/'

config["iamfolder"] = 'I-am-goodagood-s3-folder.2014-0620.'
config["iamlink"] = 'I-am-goodagood-s3-link-file.2014-0620.'

config["IamFolder"] = 'I-am-goodagood-folder.2014-0625.'
config["IamLink"]  = 'I-am-goodagood-link.2014-0625.'
config["IamFile"]  = 'I-am-goodagood-file.2014-0625.'

config["redis_folder_file_list_prefix"] = 'folder.file.list.' # //d

config["muji_root"] = '/home/ubuntu/workspace/muji'
config["swig_views_folder"] = 'swig-views'
config["swig_views_folder_abs"] =  '/home/ubuntu/workspace/muji/swig-views'
