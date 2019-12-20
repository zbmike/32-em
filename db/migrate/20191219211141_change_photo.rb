class ChangePhoto < ActiveRecord::Migration[5.2]
  def change
    change_column :photos, :location, :string, null: true
  end
end
