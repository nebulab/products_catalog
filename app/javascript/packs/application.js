/* eslint no-console:0 */

import Vue from 'vue/dist/vue.esm'

import store from '../store'

// Import components
import ProductList from '../components/product/product_list'
import ProductDetail from '../components/product/product_detail'

// SCSS
import 'bootstrap/dist/css/bootstrap'
import 'owl.carousel/dist/assets/owl.carousel.min'
import '../scss/index'

// JS
import 'owl.carousel/dist/owl.carousel.min'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#vue_application',
    store,
    components: {
      productlist: ProductList,
      productdetail: ProductDetail
    }
  })
})
