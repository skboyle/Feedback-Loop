class Upvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :upvotes do |t|
      t.belongs_to :user, null: false
      t.belongs_to :feedback, null: false
      t.integer :vote

      t.timestamps
    end
  end
end
