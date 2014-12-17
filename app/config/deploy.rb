set :application, "CROSSFIT A6"
set :domain,      "85.214.18.143"
set :deploy_to,   "/var/www/crossfit"
set :app_path,    "app"
set :web_path,    "web"
set :user, "pacogarat"

set  :use_sudo,       false

set :use_composer, true
set :update_vendors, true

set :repository,  "git@github.com:pacogarat/crossfit.git"
set :scm,         :git
set :shared_files,      ["app/config/parameters.yml"]
set :shared_children,     [app_path + "/logs", web_path + "/uploads", "vendor"]

# Or: `accurev`, `bzr`, `cvs`, `darcs`, `subversion`, `mercurial`, `perforce`, or `none`

set :model_manager, "doctrine"
# Or: `propel`

role :web,        domain                         # Your HTTP server, Apache/etc
role :app,        domain, :primary => true       # This may be the same as your `Web` server

set  :keep_releases,  3

# Be more verbose by uncommenting the following line
logger.level = Logger::MAX_LEVEL