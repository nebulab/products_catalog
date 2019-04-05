json.partial! 'api/shared/product', product: @product

json.variants @product.variants do |variant|
  json.partial! 'api/shared/variant', variant: variant
end
