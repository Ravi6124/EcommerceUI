import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    GET_CATEGORIES(state, value){
      state.categories = value
    }
  },
  actions: {
    getCategories(context){
      fetch('http://localhost:3000/myData')
      .then(res => res.json())
      .then(res => {
        context.commit('GET_CATEGORIES', res);
      })
    }
  },
  getters: {
    categoriesGetter(state){
      return state.categories;
    }
  },
  modules: {
  }
})
