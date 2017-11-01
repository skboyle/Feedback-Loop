class Collection < ApplicationRecord
  belongs_to :song
  belongs_to :album
end
