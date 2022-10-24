class AppsController < ApplicationController
    # after_action :authorization_status
    # skip_before_action :authorize, only: :create
def index
    apps = App.all
    render json: apps
end

def show
user ||= User.find_by(params[:user_id])
if user
    apps = user.apps.find_by(params[:id])
    render json: apps
end
end


def create
 user ||= User.find_by(id: session[:user_id])
 if user
    app = user.apps.create!(app_params)

    render json: app 
end
end

def destroy
    user ||= User.find_by(id: session[:user_id])
    if user
        app = App.find_by(id: params[:id])
        # App.all.find_by(id: params[:id]).destroy
app.destroy
          head :no_content
          render json: app
        else
            render json: {error: "No Data"}, status: :not_found
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
