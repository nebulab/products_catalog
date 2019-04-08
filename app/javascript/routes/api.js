// global Routes

const products = Routes.api_products_path()
const product = (id) => Routes.api_product_path(id)

const comments = (productId) => Routes.api_product_comments_path(productId)
const comment = (productId, commentId) => Routes.api_product_comment_path(productId, commentId)

export default {
  products,
  product,
  comments,
  comment
}
