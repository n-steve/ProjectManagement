class CreateApps < ActiveRecord::Migration[6.1]
  def change
    create_table :apps do |t|
      t.string :app_name
t.integer :user_id

      t.timestamps
    end
  end
end
