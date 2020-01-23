import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    totalElements: 0,
    product: {}
  },
  mutations: {
    GET_CATEGORIES(state, value){
      state.categories = value
    },
    GET_PRODUCTSBYCATEGORY(state, value) {
      state.products = state.products.concat(value.content);
      state.totalElements = value.totalElements;
    },
    GET_PRODUCTS(state, value){
      state.product = value
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
      // window.console.log("PageNumber:", params.pageNum);
      Axios
      .get('http://172.16.20.119:8082/productapi/product/category/' + params.cid + '/' + params.pageNum + '/3')
      .then(res => {
        window.console.log(res),
        commit('GET_PRODUCTSBYCATEGORY', res.data)
      })
    },
    getProductDetails({commit}, {params} = {}){
      Axios
      .get('http://172.16.20.119:8082/productapi/product/' + params.pid)
      .then(res => {
        // window.console.log(res.data),
        commit('GET_PRODUCTS', res.data)
      })
    }
  },
  getters: {
    categoriesGetter(state){
      return state.categories;
    },
    productsGetter(state){
      return state.products;
    },
    productGetter(state){
      return state.product;
    },
    totalElementsGetter(state){
      return state.totalElements;
    }
  },
  modules: {
  }
})