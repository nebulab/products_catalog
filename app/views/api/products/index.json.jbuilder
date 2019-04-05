json.products @products do |product|
  json.name product.name
  json.description product.description
  json.price product.price

  if product.images.attached?
    json.images product.images do |image|
      json.partial! 'api/shared/image', image: image
    end
  end

  json.published product.published
  json.created_at product.created_at
end
json.partial! 'api/shared/pagination', pagination: @products
