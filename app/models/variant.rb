class Variant < ApplicationRecord
  belongs_to :product
  has_many_attached :images
end
