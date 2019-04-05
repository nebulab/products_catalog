import { instance as api } from './index'
import routes from '../routes'

/**
 * Get all the products
 */
const index = (page) => {
  return api.get(routes.products.index, { params: { page: page }})
    .then(response => response.data)
}

 export default {
  index
}
