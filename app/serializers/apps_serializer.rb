class AppsSerializer < ActiveModel::Serializer
  attributes :id, :app_name

  has_one :user
end
