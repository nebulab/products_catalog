# Create images for all the product and variants

after :products, :images do
  puts 'Add product and variant images'

  Product.all.each_with_index do |product, index|
    unless product.images.attached?
      downloaded_image = open("http://placehold.it/700x400?text=#{product.name}")
      product.images.attach(io: downloaded_image, filename: "product_image_#{index}.jpeg")
    end
  end

  Variant.all.each_with_index do |variant, index|
    unless variant.images.attached?
      downloaded_image = open("http://placehold.it/700x400?text=#{variant.name}")
      variant.images.attach(io: downloaded_image, filename: "variant_image_#{index}.jpeg")
    end
  end
end
