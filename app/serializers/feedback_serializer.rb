class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :song_id, :structure, :style, :mixdown, :username

  def username
    object.user.name
  end
end
