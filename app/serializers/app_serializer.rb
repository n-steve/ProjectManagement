class AppSerializer < ActiveModel::Serializer
  attributes :app_name,:app_details,:id

belongs_to :user
has_many :tickets
end
