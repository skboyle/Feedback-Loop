class Api::V1::SongsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Song.all
  end

  def show
    song = Song.find(params[:id])
    render json: song
  end

  def create
    song = JSON.parse(request.body.read)
    new_song = Song.create(
      name: song["name"],
      artist_name: song["artist_name"],
      genre: song["genre"],
      song_url: song["song_url"],
      image_url: song["image_url"],
      description: song["description"],
      user_id: song["user_id"]
    )
    render json: new_song
  end
end
