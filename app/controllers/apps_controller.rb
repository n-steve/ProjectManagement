class AppsController < ApplicationController
    # after_action :authorization_status
    # skip_before_action :authorize, only: :create
def index
    apps = App.all
    render json: apps
end

def show
user ||= User.find_by(id: params[:user_id])
if user
    apps = user.apps.find_by(params[:id])
    render json: apps
end
end


def create
 user = User.find_by(params[:id])
 if user
    app = user.apps.find_by(params[:id])
    app = user.apps.create!(app_params)
    render json: app 
end
end

private

def find_app
     App.find_by(id: params[:id])
end

def app_params
    params.permit(:id,:app_name,:app_details)
end

end
# {
#     "title": "title",
#     "description": "title",
#     "issue": "TypeError",
#     "status": "Open",
#     "priority": "Low"
# }