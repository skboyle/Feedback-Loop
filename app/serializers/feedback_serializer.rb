class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :song, :structure, :style, :mixdown, :username

  def username
    object.user.name
  end
end
