<template>
  <div class='m-2 col-3 p-2 border-0'>
  <div class="m-2 card" style="width: 13rem;">
  <img :src="item.Product.image_url" class="card-img-top" alt="...">
  <div class="card-body">
      <div class='m-2 d-flex justify-content-center'>
    <p class="card-title">{{item.Product.name}}</p>
      </div>
      <div class='m-2 d-flex justify-content-center'>
      <p class="card-title">Total Price</p>
      </div>
      <div class='m-2 d-flex justify-content-center'>
      <p class="card-title">Rp {{item.totalPrice}}</p>
      </div>
    <div class='m-2 d-flex justify-content-center'>
    <p class="m-2 card-text">Quantity: {{item.amount}}</p>
    </div>
    <div class='d-flex justify-content-center'>
      <form  action="">
    <input v-model='input' type="number" >
    <div class='m-2 d-flex justify-content-center'>
    <button @click.prevent='addAmount' type='button' class="m-2 btn btn-sm btn-secondary">Update</button>
    </div>
      </form>
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
  data () {
    return {
      input: ''
    }
  },
  props: ['item', 'product'],
  methods: {
    addAmount () {
      const obj = {
        productId: this.item.productId,
        amount: this.input,
        totalPrice: this.item.Product.price
      }
      this.$store.dispatch('updateToCart', obj)
      this.input = ''
    },
    subtractAmount () {
      this.item.amount--
    },
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
