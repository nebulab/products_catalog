import { instance as api } from './index'
import routes from '../routes'

/**
 * Get all the products
 */
const index = (page) => {
  return api.get(routes.api.products, { params: { page: page }})
    .then(response => response.data)
}

 export default {
  index
}
