import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: {},
    products: {}
  },
  mutations: {
    GET_CATEGORIES(state, value){
      state.categories = value
    },
    GET_PRODUCTSBYCATEGORY(state,value){
      state.products = value
    }
  },
  actions: {
    getCategories({commit}){
      Axios
      .get('http://172.16.20.119:8081/product/category')
      .then(res => {
        window.console.log(res),
        commit('GET_CATEGORIES', res.data)
      })
      // fetch('http://localhost:3000/myData')//use api getAllCategories()
      // .then(res => res.json())
      // .then(res => {
      //   context.commit('GET_CATEGORIES', res);
      // })
    },
    getProductsByCategory({commit}){
      Axios
      .get('http://localhost:3000/myProducts')
      .then(res => {
        window.console.log(res),
        commit('GET_PRODUCTSBYCATEGORY', res.data)
      })
    }
  },
  getters: {
    categoriesGetter(state){
      return state.categories;
    },
    productsGetter(state){
      return state.products;
    }
  },
  modules: {
  }
})
