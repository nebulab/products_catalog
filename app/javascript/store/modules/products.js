import api from '../../api'
import * as types from '../../types'

const defaultState = {
  products: [],
  count: 0,
  current_page: 0,
  pages: 0,
  per_page: 0
}

export const actions = {
  fetchProducts({ commit }, page = 1) {
    api.product.index(page)
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
    state.products = data.products

    state.count = data.count
    state.current_page = data.current_page
    state.pages = data.pages
    state.per_page = data.per_page
  }
}

export default {
  state: defaultState,
  actions,
  mutations
}
