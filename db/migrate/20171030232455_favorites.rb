class Favorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.belongs_to :user, null: false
      t.belongs_to :song, null: false

      t.timestamps
    end
  end
end
