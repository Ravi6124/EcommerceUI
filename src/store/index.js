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
  facebooklogin(context, payload) {
    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(res => {
        context.commit('SET_USER_DETAILS', res)
      })
  },
  gmaillogin (context, payload) {
    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(res => {
        context.commit('SET_USER_DETAILS',res)
      })
  },
  modules:{

  },
  getters: {
    products (state){
      return state.addproduct
    }
  }
})
