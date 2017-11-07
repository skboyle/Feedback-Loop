class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :website_url, :songs, :favorites, :rating

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

  def rating
    ratingTotal = 0
    object.feedbacks.each do |feedback|
      ratingTotal += favorite.vote_total
    end

  return ratingTotal
  end

end
