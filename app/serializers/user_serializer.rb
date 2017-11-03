class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :website_url, :songs, :feedbacks, :favorites

  has_many :feedbacks
  has_many :songs
  has_many :favorites

  def feedbacks
    object.feedbacks
  end

  def songs
    object.songs
  end

  def favorites
    object.favorites
  end

end
