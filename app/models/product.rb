class Product < ApplicationRecord
  has_many :variants
  has_many_attached :images
end
