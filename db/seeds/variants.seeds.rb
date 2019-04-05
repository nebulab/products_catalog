# Create randomic number of variant for the first
# 10 products ordered randomly

after :products do
  if Variant.count == 0
    puts 'Create variants'

     Product.order('RANDOM()').limit(10).each do |product|
      rand(1...5).times.each do
        Variant.create!(
          name: FFaker::Color.name,
          price: rand(5.0..100.0).round(2),
          product: product,
        )
      end
    end
  end
end
