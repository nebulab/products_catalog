import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
