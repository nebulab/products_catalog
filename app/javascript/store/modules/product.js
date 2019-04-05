import api from '../../api'
import * as types from '../../types'

const defaultState = {
  id: 0,
  name: '',
  description: '',
  price: 0.0,
  images: [],
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
  }
}

export const mutations = {
  [types.PRODUCT_RECEIVED](state, product) {
    state.id = product.id
    state.name = product.name
    state.description = product.description
    state.price = product.price
    state.images = product.images
    state.published = product.published
    state.created_at = product.created_at
  }
}

export default {
  state: defaultState,
  mutations,
  actions
}
