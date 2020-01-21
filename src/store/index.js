import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
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
        commit('GET_CATEGORIES', res.data)
      })
    },
    getProductsByCategory({commit}, cid, pageNum=0){
      // let catId = cid;
      window.console.log("category ID:", cid);
      Axios
      .get('http://172.16.20.119:8082/productapi/product/category/'+cid+'/' + pageNum + '/10')
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
