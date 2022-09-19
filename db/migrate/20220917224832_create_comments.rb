class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :ticket_id
      t.string :comment_chat
      t.timestamps
    end
  end
end
