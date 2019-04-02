/* eslint no-console:0 */

import Vue from 'vue/dist/vue.esm'

// Import components
import ProductList from '../components/product/product_list'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#vue_application',
    components: {
      productlist: ProductList
    }
  })
})
