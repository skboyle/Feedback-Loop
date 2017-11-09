class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist_name, :description, :genre, :user, :heart_total, :song_url, :image_url, :feedbacks, :favorites

  has_many :feedbacks
  has_many :favorites

  # def username
  #   object.user.name
  # end

  def heart_total
    object.heart_total
  end

  def favorites
    object.favorites
  end

end
