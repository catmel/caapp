import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:[]
  },
  mutations: {
    add(i){
      console.log(i)
    }
  },
  actions: {
  },
  modules: {
  }
})
