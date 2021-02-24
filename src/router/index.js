import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import ShowProducts from '../views/ShowProducts.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const navGuard = (to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  if (to.name === 'Landing' && accessToken) {
    next({ name: 'ShowProducts' })
  } else if (to.name !== 'Landing' && !accessToken) {
    next({ name: 'Landing' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    beforeEnter: navGuard
  },
  {
    path: '/showproducts',
    name: 'ShowProducts',
    component: ShowProducts,
    beforeEnter: navGuard
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter: navGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
