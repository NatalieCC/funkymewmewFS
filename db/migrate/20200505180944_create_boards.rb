class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
      t.boolean :is_public, default: true
      t.index :user_id
      t.timestamps
    end
  end
end
