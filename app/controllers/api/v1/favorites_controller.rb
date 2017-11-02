class Api::V1::FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def create
    input = JSON.parse(request.body.read)
    user = User.find(input["user_id"])
    song = Song.find(input["song_id"])
    heart_value = input["heart"].to_i
    heart = user.favorites.find_by(song: song)
    song.heart_total
    if heart
      if heart.heart == heart_value
        new_heart = 0
      else
        new_heart = heart_value
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
