class RemoveImgurlFromPins < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :img_url
  end
end
