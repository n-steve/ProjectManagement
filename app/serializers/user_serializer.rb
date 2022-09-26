class UserSerializer < ActiveModel::Serializer
  attributes :id,:first_name,:last_name,:email

has_many :apps
has_many :tickets
has_many :comments
end
