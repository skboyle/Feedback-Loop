class Api::V1::FeedbacksController < ApplicationController
  skip_before_action :verify_authenticity_token
  # protect_from_forgery unless: -> { request.format.json? }

  def index
    feedback = Feedback.all
    render json: feedback
  end

  def create
    feedback = JSON.parse(request.body.read)
    new_feedback = Feedback.create(
      style: feedback["style"],
      structure: feedback["structure"],
      mixdown: feedback["mixdown"],
      recomendations: feedback["recomendations"],
      song_id: feedback["song_id"],
      user_id: feedback["user_id"]
    )


    render json:  new_feedback
  end

end
