class UsersController < ApplicationController
    # before_action :authorize, only: :create

def index
    user = User.all
    render json: user
end

def show
   user ||= User.find_by(id: session[:user_id])
    render json: user, include: "apps.tickets.comments"
end

def create
    user = User.create!(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
    else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
end 





# def update 
#     user ||= User.find_by(:id session[:user_id]
#     if user
#     user.update(user_params)
#     render json: user
#     else
#         render json: {error: "Not Authorized"}, status: :unauthorized
#     end
# end

# def update
#     user = User.find_by(:id)
#     user.update(user_params)
#     render json: user
# end

    
private

# def find_user
# User.find_by(id: params[:id])
# end

    def user_params
        params.permit(:id,:first_name,:last_name,:email,:password,:password_confirmation)
    end

 
    
end
