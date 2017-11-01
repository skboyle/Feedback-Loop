class Albums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.belongs_to :user, null: false
      t.text :name, null: false
      t.text :description, null: false
      t.text :genre, null: false
      t.timestamps
    end
  end
end
