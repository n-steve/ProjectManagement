class TicketsController < ApplicationController

def index
    ticket = Ticket.all
    render json: ticket
end



end
