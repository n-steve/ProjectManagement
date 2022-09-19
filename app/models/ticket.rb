class Ticket < ApplicationRecord
belongs_to :app
has_many :comments
end