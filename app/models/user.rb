class User < ApplicationRecord
has_many :comments
has_many :apps
has_many :tickets, through: :apps
end
