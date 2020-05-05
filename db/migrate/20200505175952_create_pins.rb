class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :img_url, null: false
      t.integer :height
      t.integer :user_id, null: false
      t.text :title, null: false
      t.timestamps
    end
  end
end
