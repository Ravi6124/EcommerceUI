import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

// import firebase from '../firebaseConfig.js'
import {
  auth,
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
    idToken: '',
    signupResponse: {},
    loginResponse: {},
    addToCartResponse: {},
    cart: [],
    searchResults: [],
    loginStatus: ''
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
    },
    GET_MERCHANTS(state,value) {
      state.merchants = value
    },
    // SET_GUESTID(state,value) {
    //   window.console.log('in store'+value)
    //   state.guestId = value
    // },
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
    },
    GET_SEARCHRESULTS(state, value) {
      state.searchResults = value
    },
    SET_TOKEN(state, value) {
      state.idToken = value
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
        //window.console.log(res)
        commit('GET_MERCHANTS', res.data)
      })
    },



    // getGuestId( {commit} ) {
    //   Axios({
    //     method: 'post',
    //     url: 'http://172.16.20.119:8091/login/guest?type=web'
    //   })
    //   .then(function(res){
    //     //window.console.log(res.data.guestId)
    //     commit('SET_GUESTID', res.data.guestId)
    //   })
    // },



    login({commit}, {params,success}) {
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
        success && success(res)
      })
    },



    signup({commit}, {params} = {}) {
      fetch("http://172.16.20.119:8091/login/customer", {
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



    addToCart({commit}, {params,success}) {
      fetch("http://172.16.20.119:8091/cartandorder/cart/item", {
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
        success && success(res)
      })
    },



    getCartOfCustomer({commit} , {params, success}) {
      Axios
      .get('http://172.16.20.119:8091/cartandorder/cart/' + params.cid)
      .then(res => {
        window.console.log(res)
        commit('GET_CART_OF_CUSTOMER',res.data)
        success && success(res)
      })
    },



    // googleAuth() {
    //   firebase.auth().signInWithPopup(googleauthprovider).then(function (result) {
    //     var token = result.credential.idToken;
    //     var user = result.user;
    //     window.console.log('token:'  + token + ' ,' + 'user: ' + user)
    //     Axios.get('http://172.16.20.114:8080/googlelogin/' + token)
    //       .then(res => {window.console.log(res)
    //         localStorage.setItem('userId',res.data.userId)
    //       localStorage.setItem('access',res.data.accessToken) });
    //   }).catch(function (error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     var email = error.email;
    //     var credential = error.credential;
    //     window.console.log(errorCode + errorMessage + email + credential)
    //   })
    // },
    
    googleAuth() {
      // let role = params.role
      auth.signInWithPopup(googleauthprovider)
      .then(res =>{
        window.console.log(res.credential.idToken)
        let idToken = res.credential.idToken
        var data = {
          accessToken: idToken,
          role: 'customer',
          guestId: localStorage.getItem('userId'),
          loginSource: 'google',
          type: 'web'
        }

        Axios({
          method: 'post',
          url: 'http://172.16.20.119:8091/login/login/googlelogin', data
        })
        .then(res => {
          window.console.log(res);
        })
      })
      // var idToken = this.idToken
      // window.console.log(this.idToken)

      // var data = {
      //   accessToken: this.idToken,
      //   role: params.role,
      //   guestId: localStorage.getItem('guestId'),
      //   loginSource: 'google',
      //   type: 'web'
      // }
      // window.console.log('this is access token'+ data.idToken);
      // Axios({
      //   method: 'post',
      //   url: 'http://172.16.20.119:8091/login/login', data
      // })
      //   .then(function (result) {
      //     var token = result.credential.accessToken;
      //     var user = result.user;
      //     window.console.log("token: " + token + " ," + "user: " + user)
      //     //window.console.log(response)
      //     commit('SET_TOKEN', result.token)
      //     commit(result.user)
      //     commit('SET_PLATFORM', 'GOOGLE')
      //   }).catch(function (error) {
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     var email = error.email;
      //     var credential = error.credential;
      //     window.console.log(errorCode + errorMessage + email + credential)
      //   })
    },



    // fbAuth() {
    //   firebase.auth().signInWithPopup(fbProvider).then(function (result) {
    //     window.console.log('inside fb auth')
    //     var token = result.credential.accessToken;
    //     var user = result.user;
    //     window.console.log('token: ' + token + ' ,' + 'user: ' + user)
    //     Axios.get('http://172.16.20.114:8080/facebooklogin/' + token)
    //     .then(res => {
    //       window.console.log(res)
    //       localStorage.setItem('userId',res.data.userId)
    //       localStorage.setItem('access',res.data.accessToken) });
    //   }).catch(function (error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     var email = error.email;
    //     var credential = error.credential;
    //     window.console.log(errorCode + errorMessage + email + credential)
    //   })
    // },




    fbAuth({commit} , {success}) {
      auth.signInWithPopup(fbProvider)
      .then(res => {
        window.console.log(res);


        let accessToken = res.credential.accessToken
        var data = {
          accessToken: accessToken,
          role: 'customer',
          guestId: localStorage.getItem('userId'),
          loginSource: 'facebook',
          type: 'web'
        }
        Axios({
          method: 'post',
          url: 'http://172.16.20.119:8091/login/login/facebooklogin', data
        })
        .then(res => {
          window.console.log(res);
          commit('GET_LOGIN_RESPONSE', res.data)
          success && success(res)
        })
      })


      // var data = {
      //   'accessToken': this.token,
      //   'platform': 'facebook',
      //   'idToken': '',
      //   'customerEmail': this.username,
      //   'customerPassword': this.password,
      // }
      // Axios({
      //   method: 'post',
      //   url: '.....', data
      // })
      //   .then(function (result) {
      //     var token = result.credential.accessToken;
      //     var user = result.user;
      //     //window.console.log(response)
      //     window.console.log("token: " + token + " ," + "user: " + user)
      //     commit('SET_TOKEN', result.token)
      //     commit(result.user)
      //     commit('SET_PLATFORM', 'FACEBOOK')
      //   }).catch(function (error) {
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     var email = error.email;
      //     var credential = error.credential;
      //     window.console.log(errorCode + errorMessage + email + credential)
      //   })
    },


    // getProductsByCategory({commit}, {params} = {}){
    //   // window.console.log("PageNumber:", params.pageNum);
    //   Axios
    //   .get('http://172.16.20.119:8082/productapi/product/category/' + params.cid + '/' + params.pageNum + '/3')
    //   .then(res => {
    //     window.console.log(res),
    //     commit('GET_PRODUCTSBYCATEGORY', res.data)
    //   })
    // },
    // getProductDetails({commit}, {params} = {}){
    //   Axios
    //   .get('http://172.16.20.119:8082/productapi/product/' + params.pid)
    //   .then(res => {
    //     // window.console.log(res.data),
    //     commit('GET_PRODUCTS', res.data)
    //   })
    // },


    getSearchResult({commit} , {params} = {}) {
      Axios
      .get('http://172.16.20.110:8082/search/searchFunction/10/'+ params.pageNum +' /' + params.skey)
      .then(res => {
        window.console.log(res.data.content)
        commit('GET_SEARCHRESULTS', res.data.content)
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
    },
    merchantsGetter(state) {
      return state.merchants;
    },
    // guestIdGetter(state) {
    //   return state.guestId;
    // },
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
    },
    searchResultGetter(state) {
      return state.searchResults;
    },
    loginStatusGetter(state) {
      return state.loginStatus
    }
  },
  modules: {
  }
})