class AppSerializer < ActiveModel::Serializer
  attributes :app_name,:app_details

has_one :user
has_many :tickets
end
