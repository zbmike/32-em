class AddViewcounts < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :views, :integer, :default => 0
  end
end
