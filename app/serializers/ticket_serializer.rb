class TicketSerializer < ActiveModel::Serializer
  attributes :title, :description, :issue, :status, :priority

has_one :app
has_many :comments

end
