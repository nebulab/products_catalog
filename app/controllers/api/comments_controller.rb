module Api
  class CommentsController < Api::BaseController
  def create
    @comment = Comment.create(comment_params.merge(product_id: params[:product_id]))
    @comments = Product.find(params[:product_id]).comments
    render :index, status: :ok
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render :show, status: :ok
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:title, :description)
  end
end
end
