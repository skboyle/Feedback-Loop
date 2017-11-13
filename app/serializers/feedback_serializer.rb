class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :song_id, :structure, :style, :mixdown, :recomendations, :vote_total, :username

  belongs_to :song
  belongs_to :user

  def vote_total
    object.vote_total
  end

  def username
    object.user.name
  end
end
