class TicketsController < ApplicationController
    # after_action :authorization_status
# def index
#     ticket = Ticket.all
#     render json: ticket
# end

def show
    user ||= User.find_by(id: session[:user_id])
    if user

    ticket = Ticket.find_by(app_id: params[:app_id])
    if ticket.apps

    render json: ticket
    else
        render json: {error: "Not found"}, status: :not_found
    end
end
end

def create
user ||= User.find_by(id: session[:user_id])
if user
    app = user.apps.find_by(params[:id])
    if app
    ticket = app.tickets.create!(ticket_params)
    render json: ticket, status: :created
    else
        render json: {error: "not found"}, status: :not_found
    end
end
end



# def update
#     user = User.find_by(id: session[:id])
#     if user
#         ticket.update(ticket_params)
#         render json: ticket
#     else
#         render json: {error: "Not Found"}, status: :not_found
#     end
# end

def destroy
    user = User.find_by(id: session[:user_id])
    if user
        app = user.apps.find_by(id: params[:id])
        if app
            ticket = user.app.tickets.find_by(id: params[:id])
            if ticket;
        ticket.destroy
        head :no_content
    else
        render json: {error: "not found"}, status: :not_found
    end
end
end
end



private 

def ticket_params
    params.permit(:title,:description,:issue,:status,:priority)
end

end



# {
    # "title": "test",
    #  "description":"test",
    #  "issue":"test",
    #  "status":"test",
    #  "priority":"test"
     
# }
