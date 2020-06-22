class CreatePinsOnBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :pins_on_boards do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
      t.text :description
      t.index [:pin_id, :board_id], unique: true
      t.timestamps
    end
  end
end
