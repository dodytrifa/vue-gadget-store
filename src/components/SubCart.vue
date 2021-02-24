<template>
  <div class='m-2 col-3 p-2 border-0'>
  <div class="m-2 card" style="width: 13rem;">
  <img :src="item.Product.image_url" class="card-img-top" alt="...">
  <div class="card-body">
      <div class='m-2 d-flex justify-content-center'>
    <p class="card-text">{{item.Product.name}}</p>
      </div>
    <div class='d-flex justify-content-center'>
    <button type='button' class="m-2 btn btn-sm btn-secondary">-</button>
    <p class="m-2 card-text">x{{item.amount}}</p>
    <button type='button' class="m-2 btn btn-sm btn-secondary">+</button>
    </div>
    <div class='p-3 d-flex justify-content-center'>
    <button
          @click='deleteItem'
          class="margin-right-20 btn btn-sm btn-danger rounded-pill"
          type="button"
        >
          Remove from Cart
        </button>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['item'],
  methods: {
    deleteItem () {
      this.$store.dispatch('destroyCart', this.item.id)
    }
  },
  created () {
    this.$store.dispatch('getCart')
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>

<style>

</style>
