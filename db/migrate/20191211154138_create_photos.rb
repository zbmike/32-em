class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null:false
      t.string :description
      t.string :location, null:false
      t.integer :category, null:false
      t.integer :author_id, null:false
      t.timestamps
    end
    add_index :photos, :title
    add_index :photos, :location
    add_index :photos, :author_id
  end
end
