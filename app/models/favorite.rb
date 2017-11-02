class Favorite < ApplicationRecord
 belongs_to :user
 belongs_to :song
 validates :heart, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 1 }

end
