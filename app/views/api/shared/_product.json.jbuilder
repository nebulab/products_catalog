json.id product.id
json.name product.name
json.description product.description
json.price product.price

 if product.images.attached?
  json.images product.images do |image|
    json.partial! 'api/shared/image', image: image
  end
end

json.comments product.comments do |comment|
  json.partial! 'api/shared/comment', comment: comment
end

json.published product.published
json.created_at product.created_at
