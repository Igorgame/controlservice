import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import registration from './registration'
import logout from './logout'
import username from './username'
import category from './category'
import order from './order'
import user from './user'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
  },  
  actions: {
  },
  modules: {
    auth, registration, logout, username, category, order, user
  },
  getters: {
  }
})
