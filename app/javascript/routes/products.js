// global Routes

const index = Routes.api_products_path()
const show = (id) => Routes.product_path(id)

export default {
  index,
  show
}
