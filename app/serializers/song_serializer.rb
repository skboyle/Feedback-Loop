class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist_name, :description, :genre, :username, :user, :heart_total, :song_url, :image_url, :feedbacks

  has_many :feedbacks

  def username
    object.user.name
  end

  def heart_total
    object.heart_total
  end


end
