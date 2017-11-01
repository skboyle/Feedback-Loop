class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :website_url, :songs, :feedbacks

  has_many :feedbacks
  has_many :songs

  def feedbacks
    object.feedbacks
  end

  def songs
    object.songs
  end

end
