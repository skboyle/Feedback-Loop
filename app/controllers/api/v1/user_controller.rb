class Api::V1::UserController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def is_signed_in?
    if current_user
      songs = User.find(current_user.id).songs
      feedbacks = User.find(current_user.id).feedbacks
      favorites = User.find(current_user.id).favorites
      render :json => {"signed_in" => true, "user" => current_user, "songs" => songs, "feedbacks" => feedbacks}
    else
      render :json => {"signed_in" => false}
    end
  end
end
