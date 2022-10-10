class CommentsController < ApplicationController
    # skip_before_action :authorization_status
   
def index
    comment = Comment.all  
    render json: comment
end

def create
    user ||= User.find_by(id: session[:user_id])
    if user
        comment = user.comments.create!(comment_params)
        render json: comment, status: :created
    else
        render json: {errors: "Not Authorized"}, status: :unauthorized
    end
end

def update
    user = User.find_by(id: session[:user_id])
    if user
        comment = Comment.find_by(id: params[:id])
        comment.update(comment_params)
        render json: comment
    else
        render json: {error: "Not Found"}, status: :not_found
    end
end

def destroy
    user = User.find_by(id: session[:user_id])
    if user
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        head :no_content
    else
        render json: {error: "not found"}, status: :not_found
    end
end



private

def comment_params
    params.permit(:comment_chat)
end

end
