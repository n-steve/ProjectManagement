class Ticket < ApplicationRecord
belongs_to :app
has_many :comments

# validates :title,:description,:issue,:status,:priority, presence: true

accepts_nested_attributes_for :comments,allow_destroy:true

def find_app
    if app.find_by!(id:)
Ticket.create!(ticket_params)
    end
end
end