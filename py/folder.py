
###
# We has bash environment variables: 
#
#    AWS_ACCESS_KEY_ID - Your AWS Access Key ID
#    AWS_SECRET_ACCESS_KEY - Your AWS Secret Access Key
#
###

from boto.s3.connection import S3Connection
import os.path

from config import config as myconfig


conn = S3Connection()
# or:
#import boto 
#conn = boto.connect_s3()
#

bucket_name = 'ggfsb'
test_key    = '.meta/aa'

b = conn.get_bucket(bucket_name)

from boto.s3.key import Key

k = Key(b)
k.key = test_key
contents = k.get_contents_as_string()

import json

meta = json.loads(contents)
print "name: ", meta['name']
print meta['renders']['ul']



def check_folder(name):
    """ Let's check a folder with name
    """

class Folder:
    def __init__(self, path):
        self.path = path
        self.meta = {}

    def _calculate_s3_meta_file_path(self):
        # We changed the folder self.meta
        # prefix setting, this is going to be used. 0918.
        self.meta.folder_meta_s3key =
        os.path.join(myconfig["folder_meta_prefix"], folder_path) #d
        self.meta.meta_s3key = self.meta.folder_meta_s3key # this is going to be used
        
        #d `meta_file_path` is going to be deprecated. this is the old way:
        self.meta.meta_file_path = os.path.join(myconfig["meta_file_prefix"], self.meta.path)
        return self.meta.meta_file_path #d


#### js ####
#
#init_home_folder_11_15 = (username)->
#    s3key = path.join(myconfig.meta_file_prefix, username)
#
#    folder_opt = {}
#    folder_opt['path'] = username
#    folder_opt['name'] = username # Don't forget these two.
#    folder_opt['parent-dir'] = ''
#    folder_opt.owner = username
#    folder_opt.permission = {owner: 'rwx', other:'', group:''}
#    folder_opt['create-timestamp'] = Date.now()  #mili-seconds
#    folder_opt['timestamp'] = Date.now()  #stamp when modified
#
#    Home = null
#    Goodagood = null
#
#    build_new_folder(folder_opt).then(
#        (folder)->
#            p 1
#            Home = folder
#            Home.promised_add_folder('goodagood')
#    ).then(
#        (g)->
#            p 2
#            Goodagood = g
#            gm = g.get_meta()
#            p 'goodagood meta: ', gm
#            Goodagood.promised_add_folder('message')
#    ).then(
#        (msg)->
#            p 3
#            p 'msg obj: ', Object.keys(msg).sort()
#            Goodagood.promised_add_folder('etc')
#    ).then(
#        ()->
#            Goodagood.promise_to_list_files_and_save()
#
#            #return new Promise( (resolve, reject)->
#            #    Goodagood.build_file_list( ()->
#            #        Goodagood.save_meta((err,obj)->
#            #            if err
#            #                reject()
#            #            else
#            #                resolve(Goodagood)
#            #        )
#            #    )
#            #)
#    ).then(
#        ()->
#            Home.promised_add_folder('public')
#    ).then(
#        ()->
#            Home.promise_to_list_files_and_save()
#    )
#    ## build file list, save.
#

