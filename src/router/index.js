import Vue from 'vue'
import VueRouter from 'vue-router'
import UserHome from '../views/UserHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userhome',
    component: UserHome
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/merchantaddtolist',
    name: 'merchantaddtolist',
    component: () => import('../views/MerchantAddToList.vue')
  },
  {
    path: '/merchantaddtoproduct',
    name: 'merchantaddtoproduct',
    component: () => import('../views/MerchantAddToProduct.vue')
  },
  {
    path: '/merchanthome',
    name: 'merchanthome',
    component: () => import('../views/MerchantHome.vue')
  },
  {
    path: '/merchantorderdetails',
    name: 'merchantorderdetails',
    component: () => import('../views/MerchantOrderDetails.vue')
  },
  {
    path: '/merchantproductcheck',
    name: 'merchantproductcheck',
    component: () => import('../views/MerchantProductCheck.vue')
  },
  {
    path: '/merchantprofile',
    name: 'merchantprofile',
    component: () => import('../views/MerchantProfile.vue')
  },
  {
    path: '/merchantupdateproduct',
    name: 'merchantupdateproduct',
    component: () => import('../views/MerchantUpdateProduct.vue')
  },
  {
    path: '/productdetails',
    name: 'productdetails',
    component: () => import('../views/ProductDetails.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/userhome',
    name: 'userhome',
    component: () => import('../views/UserHome.vue')
  },
  {
    path: '/userorderdetails',
    name: 'userorderdetails',
    component: () => import('../views/UserOrderDetails.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('../views/Error.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/happ.vue')
  },
  {
    path: '/searchresult/:skey',
    name: 'searchresult',
    component: () => import('../views/SearchResult.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router