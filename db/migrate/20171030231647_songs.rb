class Songs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.string :artist_name, null: false
      t.string :genre, null: false
      t.text :description, null: false
      t.string :song_url, null: false
      t.string :image_url, null: false
      t.belongs_to :user, null: false
      t.timestamps
    end
  end
end
