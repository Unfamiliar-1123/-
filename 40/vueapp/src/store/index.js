import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"darkorange",
    title:"电影"
  },
  mutations: {
    change(state,{color,title}){
      // console.log('1111')
      state.color = color;
      state.title = title;
    }
  },
  actions: {
  },
  modules: {
  }
})
