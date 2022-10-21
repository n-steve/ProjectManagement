class CommentsController < ApplicationController
    # skip_before_action :authorization_status
   
def index 
    @comment = Comment.all
    render json: @comment
end

def show
    @comment = find_comment
    render json: @comment
end
private

def find_comment
    Comment.find_by(id: params[:id])
end

def comment_params
    params.require(:comment).permit(:comment_chat,:user_id,:ticket_id)
end

end
