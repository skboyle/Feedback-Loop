class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :genre, :username, :user, :song_url, :image_url, :feedbacks

  has_many :feedbacks

  def username
    object.user.name
  end

end
