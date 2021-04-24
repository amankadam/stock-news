import Vue from 'vue'
import Vuex from 'vuex'
import  stock  from './stock';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stock
  }
})
