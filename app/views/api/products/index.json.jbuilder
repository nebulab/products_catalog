json.products @products do |product|
  json.partial! 'api/shared/product', product: product
end
json.partial! 'api/shared/pagination', pagination: @products
