class CreateApiUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :api_users do |t|
      t.string :username, null:false
      t.string :password_digest, null:false
      t.string :session_token, null:false
      t.timestamps
    end
    add_index :api_users, :username, unique: true
    add_index :api_users, :password_digest, unique: true
    add_index :api_users, :session_token, unique: true
  end
end
