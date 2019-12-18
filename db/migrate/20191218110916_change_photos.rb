class ChangePhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :width, :integer
    add_column :photos, :height, :integer
  end
end
