import Vue from 'vue'
import Vuex from 'vuex'
import activity from './activity'
import custom from './custom'
import mine from './mine'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      name:'index',
      showpa:false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    mine,
    activity,
    custom
  }
})
