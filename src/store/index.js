import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    addproduct: []

  },
  mutations: {
    posting (state,value){
      state.addproduct=value
    },
    
  },
  actions: {
    PostMerchantAddToProduct: function({commit}) {
      axios.post('http://localhost:3000/items', {
      })
      .then(function (response) {
        commit('posting',response.data)
      })
      .catch(function (error) {
        window.console.log(error);
      });
    }
  },
  modules:{

  },
  getters: {
    products (state){
      return state.addproduct
    }
  }
})
