# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171030232631) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "name", null: false
    t.text "description", null: false
    t.text "genre", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_albums_on_user_id"
  end

  create_table "collections", force: :cascade do |t|
    t.bigint "song_id", null: false
    t.bigint "album_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_collections_on_album_id"
    t.index ["song_id"], name: "index_collections_on_song_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "song_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_favorites_on_song_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "feedbacks", force: :cascade do |t|
    t.text "structure", null: false
    t.text "mixdown", null: false
    t.text "style", null: false
    t.string "recomendations"
    t.bigint "user_id", null: false
    t.bigint "song_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_feedbacks_on_song_id"
    t.index ["user_id"], name: "index_feedbacks_on_user_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "name", null: false
    t.string "artist_name", null: false
    t.string "genre", null: false
    t.text "description", null: false
    t.string "song_url", null: false
    t.string "image_url", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_songs_on_user_id"
  end

  create_table "upvotes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "feedback_id", null: false
    t.integer "vote"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feedback_id"], name: "index_upvotes_on_feedback_id"
    t.index ["user_id"], name: "index_upvotes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "name"
    t.string "email"
    t.string "spotify_url"
    t.string "image"
    t.string "website_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
