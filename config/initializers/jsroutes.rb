JsRoutes.setup do |config|
  config.include = [
    /^api_products$/,
    /^api_product$/,
    /^api_product_comments$/,
    /^api_product_comment$/,
    /^product$/
  ]
end
