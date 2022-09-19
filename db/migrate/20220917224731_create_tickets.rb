class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
t.string :title
t.string :description
t.string :issue
t.string :status
t.string :priority
t.integer :app_id


      t.timestamps
    end
  end
end
