class Album < ApplicationRecord
  belongs_to :user
  has_many :collections
  validates :name, presence: true, length: { in: 1...100 }
  validates :description, presence: true, length: { in: 50...500 }
  validates :genre, presence: true
end
