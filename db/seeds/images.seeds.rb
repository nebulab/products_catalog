# Create images for all the product and variants

after :products do
  puts 'Add product images'

  Product.all.each_with_index do |product, index|
    unless product.images.attached?
      downloaded_image = open("http://placehold.it/700x400?text=#{product.name}")
      product.images.attach(io: downloaded_image, filename: "product_image_#{index}.jpeg")
    end
  end
end

after :variants do
  puts 'Add variant images'

  Variant.all.each_with_index do |variant, index|
    unless variant.images.attached?
      downloaded_image = open("http://placehold.it/700x400?text=#{variant.name}")
      variant.images.attach(io: downloaded_image, filename: "variant_image_#{index}.jpeg")
    end
  end
end
