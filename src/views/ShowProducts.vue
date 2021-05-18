<template>
<div style="background-color: #EEFBFE">
  <nav class="navbar navbar-light bg-info">
    <div class="container">
      <h1 class="navbar-brand">Gadget Store</h1>
      <button
        @click.prevent="logout"
        class="margin-right-20 btn btn-danger rounded-pill"
        type="button"
      >
        Logout
      </button>
    </div>
  </nav>
  <div class="column container">
    <div class="row d-flex justify-content-center">
      <Item v-for='product in products' :key='product.id' :product='product'/>
    </div>
  </div>
</div>
</template>

<script>
import Item from '../components/Item.vue'

export default {
  components: {
    Item
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('CHANGEISLOGIN', false)
      this.$router.push('/')
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
