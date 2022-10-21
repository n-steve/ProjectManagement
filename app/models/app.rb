class App < ApplicationRecord
belongs_to :user
has_many :tickets, dependent: :destroy

validates :app_name, :app_details, presence: true

accepts_nested_attributes_for :tickets, allow_destroy: true


end
