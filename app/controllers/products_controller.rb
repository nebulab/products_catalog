class ProductsController < ApplicationController
  def index; end

  def show
    @product_id = Product.find(params[:id]).id
  end
end
