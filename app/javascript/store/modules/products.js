import api from '../../api'
import * as types from '../../types'

const defaultState = {
  products: []
}

export const actions = {
  fetchProducts({ commit }) {
    api.product.index()
      .then((data) => {
        commit(types.PRODUCTS_RECEIVED, data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const mutations = {
  [types.PRODUCTS_RECEIVED](state, data) {
    state.products = data
  }
}

export default {
  state: defaultState,
  actions,
  mutations
}
