class Api::V1::UserController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def is_signed_in?
    if current_user
      rating = User.find(current_user.id).rating
      songs = User.find(current_user.id).songs
      feedbacks = User.find(current_user.id).feedbacks
      favorites = User.find(current_user.id).favorites
      render :json => {"signed_in" => true, "user" => current_user, "rating" => rating, "songs" => songs, "feedbacks" => feedbacks, "favorites" => favorites}
    else
      render :json => {"signed_in" => false}
    end
  end
end
