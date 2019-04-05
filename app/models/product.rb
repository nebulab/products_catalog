class Product < ApplicationRecord
  has_many :variants
  has_many_attached :images

  self.per_page = 9
end
