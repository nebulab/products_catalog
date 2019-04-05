module Api
  class ProductsController < Api::BaseController
    def index
      @products = Product.paginate(page: params[:page])
    end

    def show
      @product = Product.find(params[:id])
    end
  end
end
