class Song < ApplicationRecord
  belongs_to :user
  has_many :feedbacks
  has_many :favorites

  validates :description, presence: true, length: { in: 1...500 }
  validates :genre, presence: true
  validates :name, presence: true
  validates :artist_name, presence: true
  validates :song_url, presence: true
end
