class Feedback < ApplicationRecord
  belongs_to :user
  belongs_to :song
  has_many :upvotes

  validates :structure, presence: true, length: { in: 50...500 }
  validates :style, presence: true, length: { in: 50...500 }
  validates :mixdown, presence: true, length: { in: 50...500 }

end
