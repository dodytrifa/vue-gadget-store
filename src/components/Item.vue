<template>
<div class='m-3 col-3 p-2 border-0'>
  <div class="m-3 card" style="width: 13rem;">
  <img :src="product.image_url" class="card-img-top" alt="...">
  <div class="card-body">
    <div class='m-2 d-flex justify-content-center'>
    <h5 class="card-title">{{product.name}}</h5>
</div>
<div class='m-2 d-flex justify-content-center'>
    <p class="card-text">Rp. {{product.price}}</p>
</div>
<div class='m-2 d-flex justify-content-center'>
    <p class="card-text">Stock: {{product.stock}}</p>
</div>
<div class='m-4 d-flex justify-content-center'>
    <button @click='itemToCart(product)' type='button' class="btn btn-success rounded-pill">Add to Cart</button>
</div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Item',
  props: ['product'],
  methods: {
    itemToCart (product) {
      this.$router.push('/cart')
      this.$store.dispatch('addToCart', product)
      // console.log(product)
    }
  }
}
</script>

<style>

</style>
