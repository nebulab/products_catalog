# Create randomic number of comments for the products

after :products do
  if Comment.count == 0
    puts 'Create comments'

    Product.all.each do |product|
      rand(0...5).times.each do
        Comment.create!(
          title: FFaker::Lorem.phrase,
          description: FFaker::Lorem.paragraph,
          product: product,
        )
      end
    end
  end
end
