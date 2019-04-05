JsRoutes.setup do |config|
  config.include = [
    /^api_products$/,
    /^api_product$/,
    /^product$/,
  ]
end
