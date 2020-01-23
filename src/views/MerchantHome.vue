<template>
  <main class="merchanthome">
    <div class="sidenav">
      <router-link to="">Add Product</router-link>
      <router-link to="">Update Product Details</router-link>
      <router-link to="">Order</router-link>
      <router-link to="">View</router-link>
    </div>

  </main>
</template>

<script>
export default {
    name: 'MerchantHome'
}
</script>

<style scoped>
  .sidenav {
    margin-left: 25%;
  }
</style>