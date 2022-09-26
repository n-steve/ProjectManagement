class UsersController < ApplicationController

def index
    user = User.all
    render json: user, include: ['apps.tickets.comments']
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


    def show
        user = User.find_by(id: session[:id])
        if user
            render json: user
        else
            render json: { error: "Not authorized"}, status: :unauthorized
        end
    end
    

    def user_params
        params.permit(:first_name,:last_name,:email,:password,:password_confirmation)
    end
end
