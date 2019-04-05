// global Routes

const products = Routes.api_products_path()
const product = (id) => Routes.api_product_path(id)

export default {
  products,
  product
}
