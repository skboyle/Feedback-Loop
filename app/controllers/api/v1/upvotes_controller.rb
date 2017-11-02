class Api::V1::UpvotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def create
    input = JSON.parse(request.body.read)
    user = User.find(input["user_id"])
    feedback = Feedback.find(input["feedback_id"])
    vote_value = input["vote"].to_i
    vote = user.upvotes.find_by(feedback: feedback)
    feedback.vote_total
    if vote
      if vote.vote == vote_value
        new_vote = 0
      else
        new_vote = vote_value
      end
      vote.update(vote: new_vote)
    else
      new_vote = Upvote.create(
        user_id: user.id,
        feedback_id: feedback.id,
        vote: vote_value
      )
    end

    render json: feedback.song.feedbacks
  end
end
