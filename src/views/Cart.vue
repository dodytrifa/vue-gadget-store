<template>
<div>
  <nav class="navbar navbar-light bg-info">
    <div class="container">
      <h1 class="navbar-brand">Gadget Store</h1>
      <button
        @click='toShowProducts'
        class="btn btn-secondary rounded-pill"
        type="button"
        >Continue to shop
      </button>
      <button
        @click.prevent="logout"
        class="margin-right-20 btn btn-danger rounded-pill"
        type="button"
        >Logout
      </button>
    </div>
  </nav>
  <div class="column container center">
    <h2 class="p-5 text-center">Items in your cart</h2>
    <div class="row d-flex justify-content-center">
      <SubCart v-for='item in cart' :key='item.id' :item='item'/>
    </div>
  </div>
</div>
</template>

<script>
import SubCart from '../components/SubCart.vue'
export default {
  components: { SubCart },
  name: 'Cart',
  methods: {
    toShowProducts () {
      this.$router.push('/showproducts')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('CHANGEISLOGIN', false)
      this.$router.push('/')
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  },
  created () {
    this.$store.dispatch('getCart')
  }
}
</script>

<style scoped>
body {
  background-color: #EEFBFE;
}
</style>
