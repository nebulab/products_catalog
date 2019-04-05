json.id variant.id
json.name variant.name
json.price variant.price

if variant.images.attached?
  json.images variant.images do |image|
    json.partial! 'api/shared/image', image: image
  end
end

json.created_at variant.created_at
