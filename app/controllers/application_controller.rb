class ApplicationController < ActionController::API
  include ActionController::Cookies
# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
# before_action :authorize   



# def authenticate
#   @current_user = User.find_by(id: session[:user_id])
#   render json: {errors: "Not Authorized because not user"}, status: :unauthorized unless @current_user
# end

# def authorize
#   @current_user = User.find_by(id: session[:user_id])
#   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
# end


end
