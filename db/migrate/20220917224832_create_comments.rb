class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :user_id, foreign_key: true, null: false
      t.integer :ticket_id, foreign_key: true, null: false
      t.string :comment_chat,null: false
      t.datetime :create

      t.timestamps
   
    end
  end
end
