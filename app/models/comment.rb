class Comment < ApplicationRecord
  belongs_to :product

  validates :title, presence: { allow_blank: false }
end
