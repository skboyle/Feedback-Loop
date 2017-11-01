class Feedbacks < ActiveRecord::Migration[5.1]
  def change
    create_table :feedbacks do |t|
      t.text :structure, null: false
      t.text :mixdown, null: false
      t.text :style, null: false
      t.string :recomendations
      t.belongs_to :user, null: false
      t.belongs_to :song, null: false
      t.timestamps
    end
  end
end
