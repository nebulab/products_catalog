import api from '../../api'
import * as types from '../../types'

import { getErrors } from '../../api'

const defaultState = {
  id: 0,
  name: '',
  description: '',
  price: 0.0,
  images: [],
  variants: [],
  comments: [],
  published: true,
  created_at: null
}

export const actions = {
  fetchProduct({ state, commit }, id) {
    api.product.show(id)
      .then((data) => {
        commit(types.PRODUCT_RECEIVED, data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  addComment({ state, commit }, commentParams) {
   if (!state.id) return

   api.comment.create(state.id, commentParams)
     .then((comments) => {
       commit(types.COMMENTS_RECEIVED, comments)
     })
     .catch((error) => {
       console.log(error)
     })
 },

 updateComment({ state, commit }, commentParams) {
   if (!state.id) return

   api.comment.update(state.id, commentParams)
     .then((comment) => {
       commit(types.COMMENT_UPDATED, comment)
     })
     .catch((error) => {
       alert(getErrors(error))
     })
 },

 deleteComment({ state, commit }, commentId) {
   if (!state.id) return

   api.comment.destroy(state.id, commentId)
     .then(() => {
       commit(types.COMMENT_DELETED, commentId)
     })
     .catch((error) => {
       console.log(error)
     })
 }
}

export const mutations = {
  [types.PRODUCT_RECEIVED](state, product) {
    state.id = product.id
    state.name = product.name
    state.description = product.description
    state.price = product.price
    state.images = product.images
    state.variants = product.variants
    state.comments = product.comments
    state.published = product.published
    state.created_at = product.created_at
  },

  [types.COMMENTS_RECEIVED](state, comments) {
    state.comments = comments
  },

  [types.COMMENT_UPDATED](state, updatedComment) {
    state.comments.map((comment, index) => {
      if (updatedComment.id === comment.id) {
        state.comments[index].title = updatedComment.title
        state.comments[index].description = updatedComment.description
      }
    })
  },

  [types.COMMENT_DELETED](state, commentId) {
    state.comments = state.comments.filter(comment => (
      comment.id != commentId
    ))
  }
}

export const getters = {
  getVariantByID(state) {
    return variantID => {
      return state.variants.filter(variant => (
        variant.id == variantID
      ))[0]
    }
  }
}

export default {
  state: defaultState,
  mutations,
  actions,
  getters
}
