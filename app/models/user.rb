class User < ApplicationRecord

  has_many :songs
  has_many :feedbacks
  has_many :upvotes
  has_many :favorites

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.email = auth["info"]["email"]
      user.spotify_url = auth["info"]["url"]
      user.image = auth["info"]["image"]
    end
  end

  def admin?
    role == "admin"
  end

  def rating
    ratingTotal = 0
    self.feedbacks.each do |feedback|
      ratingTotal += feedback.vote_total
    end

  return ratingTotal
  end

end
