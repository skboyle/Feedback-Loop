class Collections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.belongs_to :song, null: false
      t.belongs_to :album, null: false
      t.timestamps
    end
  end
end
