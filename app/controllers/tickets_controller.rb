class TicketsController < ApplicationController

def index 
    @ticket = Ticket.all
    render json: @ticket
end

def show
    @ticket = find_ticket
    render json: @ticket
end

def create
 
ticket = Ticket.all.find_by(app_id: params[:app_id])
ticket = Ticket.create!(ticket_params)
 
        render json: ticket
    # end
end

private 

def find_ticket
   Ticket.find_by(id: params[:id])
end



def ticket_params
    params.permit(:title,:description,:issue,:status,:priority,:app_id)
end

end



# {
    # "title": "test",
    #  "description":"test",
    #  "issue":"test",
    #  "status":"test",
    #  "priority":"test"
     
# }

# def create
#     user ||= User.find_by(id: session[:user_id])
#     user =  user.apps.find_by(id: params[:id])
#     if user
#         ticket =  Ticket.find_by(id: params[:id])
#         if ticket
#         ticket = Ticket.create!(ticket_params)
#         render json: ticket, status: :created
#         else
#     render json: {error: "not found"}, status: :not_found
# end
# end
# end




# def create
#     app = App.find_by(params[:id])
#     if app
#         ticket= app.tickets.find_by(params[:id])
#         if ticket
#     respond_to? app.tickets.create!(ticket_params)
#     end
# end
# end

# def create
#     user ||= User.find_by(session[:user_id])
#     if user 
#         ticket = Ticket.find_by(params[:id])
#         if ticket
#             ticket = Ticket.create!(ticket_params)
#             render json: ticket, status: :created
#         else   
#             render json: {error: ["not found"]}, status: :not_found
#         end
#     end
# end
# def create
#     user ||= User.find_by(session[:user_id]);
#     if user 
#             ticket = user.apps.ticket.find_by(params[:id])
#             Ticket.create!(ticket_params)
#             render json: ticket, status: :created
# else
#     render json: {error: "not created"}, status: :not_found
# end
# end

# def create
# ticket = Ticket.find_by(params[:id])
# app = App.find_by(params[:id])
# if app
#     ticket = app.tickets.create!(ticket_params)
#     render json: ticket
# end
# end