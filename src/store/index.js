import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    someValue: ''
  },
  mutations: {
    setSomeValue(state, someValue) {
      state.someValue = someValue
    }
  },
  actions: {
  },
  modules: {
  }
})
