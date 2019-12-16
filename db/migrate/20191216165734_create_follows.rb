class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null:false
      t.integer :followee_id, null:false

      t.timestamps
    end
    add_index :follows, [:followee_id, :user_id], unique:true
  end
end
