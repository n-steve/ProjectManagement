class AppSerializer < ActiveModel::Serializer
  attributes :id,:app_name,:app_details

belongs_to :user
has_many :tickets


end
