/* eslint no-console:0 */

import Vue from 'vue/dist/vue.esm'

import store from '../store'

// Import components
import ProductList from '../components/product/product_list'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#vue_application',
    store,
    components: {
      productlist: ProductList
    }
  })
})
