import Vue from 'vue'
import Vuex from 'vuex'
import axiosInit from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    isLogin: false
  },
  mutations: {
    CHANGEISLOGIN (state, payload) {
      state.isLogin = payload
    },
    CHANGEPRODUCTS (state, payload) {
      state.products = payload
    },
    CHANGECART (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    destroyCart (context, payload) {
      // console.log(payload)
      axiosInit({
        url: '/cart/' + payload,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          // console.log(response.data)
          console.log(response.data.message)
          context.dispatch('getCart')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addToCart (context, payload) {
      // console.log(payload)
      axiosInit({
        url: '/cart',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          productId: payload.id,
          amount: 1,
          totalPrice: payload.price
        }
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getCart (context, payload) {
      axiosInit({
        url: '/cart',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response)
          context.commit('CHANGECART', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    login (context, payload) {
      return axiosInit({
        url: 'users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axiosInit({
        url: 'users/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    getProducts (context, payload) {
      axiosInit({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('CHANGEPRODUCTS', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
})
