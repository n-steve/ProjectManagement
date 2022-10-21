class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
t.string :title, null: false
t.string :description, null: false
t.string :issue, null: false
t.string :status, null: false
t.string :priority, null: false
t.integer :app_id, foreign_key: true
t.datetime :create

t.timestamps

    end
  end
end
