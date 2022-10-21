class CreateApps < ActiveRecord::Migration[6.1]
  def change
    create_table :apps do |t|
      t.string :app_name,null: false
      t.string :app_details, null: false
      t.integer :user_id, foreign_key: true
      t.datetime :create
      t.timestamps 
    
    end
  end
end
