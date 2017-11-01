class Users < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :name
      t.string :email
      t.string :spotify_url
      t.string :image
      t.string :website_url
      t.timestamps
    end
  end
end
