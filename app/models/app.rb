class App < ApplicationRecord
belongs_to :user
has_many :tickets
has_many :comments, through: :tickets
end
