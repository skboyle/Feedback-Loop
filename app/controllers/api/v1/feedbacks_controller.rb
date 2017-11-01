class Api::V1::FeedbacksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    feedback = JSON.parse(request.body.read)
    @new_feedback = Feedback.new(
      style: feedback["style"],
      structure: feedback["structure"],
      mixdown: feedback["mixdown"],
      song_id: feedback["song_id"],
      user_id: feedback["user_id"]
    )

    if @new_feedback.save
      render json: @new_feedback
    else
      render json: {error: "Sorry, your feedback didn't save!"}
    end
  end

end
