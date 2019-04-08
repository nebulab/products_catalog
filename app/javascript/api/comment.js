import { instance as api } from './index'

import routes from '../routes'

/**
 * Create a new comment
 */
const create = (productId, comment) => {
  return api.post(routes.api.comments(productId), { comment })
    .then(response => response.data)
}

/**
 * Update a comment
 */
const update = (productId, comment) => {
  return api.put(routes.api.comment(productId, comment.id), { comment })
    .then(response => response.data)
}

/**
 * Destroy a comment
 */
const destroy = (productId, commentId) => {
  return api.delete(routes.api.comment(productId, commentId), {})
    .then(response => response.data)
}

export default {
  create,
  update,
  destroy
}
