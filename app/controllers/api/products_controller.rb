module Api
  class ProductsController < Api::BaseController
    def index
      @products = Product.paginate(page: params[:page])
    end
  end
end
