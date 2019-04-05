# Create 20 products

 if Product.count == 0
  puts 'Create products'

   20.times.each do
    Product.create!(
      name: FFaker::Product.product_name,
      description: FFaker::Lorem.paragraph,
      price: rand(5.0..100.0).round(2),
    )
  end
end
