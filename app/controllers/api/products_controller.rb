module Api
  class ProductsController < Api::BaseController
    def index
      @products = Product.all
    end
  end
end
