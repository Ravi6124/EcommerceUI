import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: []
  },
  mutations: {
    GET_CATEGORIES(state, value){
      state.categories = value
    },
    GET_PRODUCTSBYCATEGORY(state,value){
      // window.console.log('response data: '+value)
      // let index = state.products.findIndex((productId) => productId == value.productId)
      // window.console.log('index of products is:'+index)
      //   if (index == -1) 
      //       state.products = value;
      //   else 
      //       state.products[index] = value
      state.products = value
    }
  },
  actions: {
    getCategories({commit}){
      Axios
      .get('http://172.16.20.119:8082/productapi/product/category')
      .then(res => {
        commit('GET_CATEGORIES', res.data)
      })
    },
    getProductsByCategory({commit}, {params} = {}){
      window.console.log("PageNumber:", params.pageNum);
      Axios
      .get('http://172.16.20.119:8082/productapi/product/category/' + params.cid + '/' + params.pageNum + '/10')
      .then(res => {
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
