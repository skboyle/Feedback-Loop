class Api::V1::FavoritesController < ApplicationController
  # skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    id = current_user.id
    userfavorites = Favorite.where(user_id: id)

    favoritesongs = []

    userfavorites.each do |favorite|
      if favorite.heart == 1
        favoritesongs << favorite.song
      end
    end

    render json: favoritesongs
  end

  def create
    input = JSON.parse(request.body.read)
    user = User.find(input["user_id"])
    song = Song.find(input["song_id"])
    heart_value = input["heart"].to_i
    heart = user.favorites.find_by(song: song)

    if heart
      if heart.heart == 1
        new_heart = 0
      else
        new_heart = 1
      end
      heart.update(heart: new_heart)
    else
      new_heart = Favorite.create(
        user_id: user.id,
        song_id: song.id,
        heart: heart_value
      )
    end

    render json: song
  end
end
