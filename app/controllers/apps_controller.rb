class AppsController < ApplicationController
    # after_action :authorization_status

def index
    app = App.all
    render json: app
end

def show
    user ||= User.find_by(id: session[:user_id])
    if user
        app = App.find_by(id: params[:id])
        render json: app, include: ["tickets"]
    else
        render json: {error: ["Not found"]}, status: :not_found
    end
end

def create 
    user ||= User.find_by(id: session[:user_id])
    if user
        app = user.apps.create!(app_params)
        render json: app, status: :created
    else
        render json: {error: "Not Authorized"}, status: :unauthorized
    end
end

def destroy
 user = User.find_by(id: session[:user_id])
 if user
    app = user.apps.find_by(id: params[:id])
    if app
    app.destroy
      head :no_content
    else
        render json: {error: "No Data"}, status: :not_found
    end
end
end

def update
    user ||= User.find_by(id: session[:user_id])
    if user
        app = user.apps.find_by(id: params[:id])
        if app
            app.update(app_params)
            render json: app, status: :created
        else
            render json: {error: "not found"}, status: :not_found
        end
    end
end


private

def app_params
    params.permit(:app_name,:app_details,:tickets)
end

end
