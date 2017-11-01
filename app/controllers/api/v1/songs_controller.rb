class Api::V1::SongsController < ApplicationController
  def index
    render json: Song.all
  end

  def show
    song = Song.find(params[:id])
    render json: song
  end
end
