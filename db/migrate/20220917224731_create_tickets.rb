class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
t.string :title
t.string :description
t.string :type
t.string :status
t.string :priority
t.integer :user_id
t.integer :apps_id
      t.timestamps
    end
  end
end
