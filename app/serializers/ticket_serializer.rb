class TicketSerializer < ActiveModel::Serializer
  attributes :id,:title, :description, :issue, :status, :priority,:app_id

belongs_to :app
has_many :comments

end
