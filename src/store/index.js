import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import firebase from '../firebaseConfig.js'
import {
  googleauthprovider,
  fbProvider
} from '../firebaseConfig.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    totalElements: 0,
    product: {},
    merchants: [],
    guestId: null,
    signupResponse: {},
    loginResponse: {},
    addToCartResponse: {},
    cart: []
  },
  mutations: {
    GET_CATEGORIES(state, value){
      state.categories = value
    },
    GET_PRODUCTSBYCATEGORY(state, value) {
      state.products = state.products.concat(value.content);
      //state.products = value.content;
      state.totalElements = value.totalElements;
    },
    GET_PRODUCTS(state, value){
      state.product = value
    },
    GET_MERCHANTS(state,value) {
      state.merchants = value
    },
    SET_GUESTID(state,value) {
      state.guestId = value
    },
    RESET_PRODUCTS(state,value) {
      state.products = value
    },
    GET_SIGNUP_RESPONSE(state, value) {
      state.signupResponse = value
    },
    GET_LOGIN_RESPONSE(state, value) {
      state.loginResponse = value
    },
    GET_ADDTOCART_RESPONSE(state, value) {
      state.addToCartResponse = value
    },
    GET_CART_OF_CUSTOMER(state,value) {
      state.cart = value
    }
  },
  actions: {
    getCategories({commit}){
      Axios
      .get('http://172.16.20.119:8091/product/product/category')
      .then(res => {
        commit('GET_CATEGORIES', res.data)
      })
    },



    getProductsByCategory({commit}, {params} = {}){
      Axios
      .get('http://172.16.20.119:8091/product/product/category/' + params.cid + '/' + params.pageNum + '/3')
      .then(res => {
        commit('GET_PRODUCTSBYCATEGORY', res.data)
      })
    },



    getProductDetails({commit}, {params} = {}){
      Axios
      .get('http://172.16.20.119:8091/product/product/' + params.pid)
      .then(res => {
        commit('GET_PRODUCTS', res.data)
      })
    },



    resetProducts({commit}) {
      commit('RESET_PRODUCTS', []);
    },



    getMerchantByProductId({commit}, {params} = {}){
      Axios
      .get('http://172.16.20.119:8091/merchant/productListingController/getMerchantByProductId/'+ params.pid)
      .then(res => {
        window.console.log(res)
        commit('GET_MERCHANTS', res.data)
      })
    },



    getGuestId( {commit} ) {
      Axios({
        method: 'post',
        url: 'http://172.16.20.119:8091/login/guest', data: {
          type: 'web'
        }
      })
      .then(function(res){
        window.console.log(res)
        commit('SET_GUESTID', res.guestId)
      })
    },



    login({commit}, {params} = {}) {
      fetch("http://172.16.20.119:8091/login/login", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(params.data)
      }).then(function(res) {
        return res.json()
      }).then(res => {
        window.console.log(res)
        commit('GET_LOGIN_RESPONSE', res)
      })
    },



    signup({commit}, {params} = {}) {
      fetch("http://172.16.20.119:8091/customer/customer", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(params.data)
      }).then(function(res) {
        return res.json()
      }).then(res => {
        //window.console.log(res)
        commit('GET_SIGNUP_RESPONSE', res)
      })
    },



    addToCart({commit}, {params} = {}) {
      fetch("...", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(params.data)
      }).then(function(res) {
        return res.json()
      }).then(res => {
        //window.console.log(res)
        commit('GET_ADDTOCART_RESPONSE', res)
      })
    },



    getCartOfCustomer({commit} , {params}={}) {
      Axios
      .get('http://172.16.20.98:8080/cart/' + params.cid)
      .then(res => {
        commit('GET_CART_OF_CUSTOMER',res)
      })
    },



    googleAuth() {
      firebase.auth().signInWithPopup(googleauthprovider).then(function (result) {
        var token = result.credential.idToken;
        var user = result.user;
        window.console.log('token:'  + token + ' ,' + 'user: ' + user)
        Axios.get('http://172.16.20.114:8080/googlelogin/' + token)
          .then(res => {window.console.log(res)
            localStorage.setItem('userId',res.data.userId)
          localStorage.setItem('access',res.data.accessToken) });
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        window.console.log(errorCode + errorMessage + email + credential)
      })
    },
    // googleauth({ commit }) {
    //   firebase.signInWithPopup(googleauthprovider)
    //   var idToken = this.idToken
    //   var data = {
    //     'accessToken': this.accessToken,
    //     'platform': 'google',
    //     'idToken': '',
    //     'customerEmail': this.username,
    //     'customerPassword': this.password,
    //   }
    //   window.console.log('this is access token'+ data.idToken);
    //   Axios({
    //     method: 'post',
    //     url: '.....', idToken
    //   })
    //     .then(function (result) {
    //       var token = result.credential.accessToken;
    //       var user = result.user;
    //       window.console.log("token: " + token + " ," + "user: " + user)
    //       //window.console.log(response)
    //       commit('SET_TOKEN', result.token)
    //       commit(result.user)
    //       commit('SET_PLATFORM', 'GOOGLE')
    //     }).catch(function (error) {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       var email = error.email;
    //       var credential = error.credential;
    //       window.console.log(errorCode + errorMessage + email + credential)
    //     })
    // },



    fbAuth() {
      firebase.auth().signInWithPopup(fbProvider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        window.console.log('token: ' + token + ' ,' + 'user: ' + user)
        Axios.get('http://172.16.20.114:8080/facebooklogin/' + token)
        .then(res => {
          window.console.log(res)
          localStorage.setItem('userId',res.data.userId)
          localStorage.setItem('access',res.data.accessToken) });
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        window.console.log(errorCode + errorMessage + email + credential)
      })
    },
    // fbAuth({ commit }) {
    //   firebase.auth().signInWithPopup(fbProvider)
    //   var data = {
    //     'accessToken': this.token,
    //     'platform': 'facebook',
    //     'idToken': '',
    //     'customerEmail': this.username,
    //     'customerPassword': this.password,
    //   }
    //   Axios({
    //     method: 'post',
    //     url: '.....', data
    //   })
    //     .then(function (result) {
    //       var token = result.credential.accessToken;
    //       var user = result.user;
    //       //window.console.log(response)
    //       window.console.log("token: " + token + " ," + "user: " + user)
    //       commit('SET_TOKEN', result.token)
    //       commit(result.user)
    //       commit('SET_PLATFORM', 'FACEBOOK')
    //     }).catch(function (error) {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       var email = error.email;
    //       var credential = error.credential;
    //       window.console.log(errorCode + errorMessage + email + credential)
    //     })
    // }
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
    },
    merchantsGetter(state) {
      return state.merchants;
    },
    guestIdGetter(state) {
      return state.guestId;
    },
    signupResponseGetter(state) {
      return state.signupResponse;
    },
    loginResponseGetter(state) {
      return state.loginResponse;
    },
    addToCartResponseGetter(state) {
      return state.addToCartResponse;
    },
    cartGetter(state) {
      return state.cart;
    }
  },
  modules: {
  }
})
