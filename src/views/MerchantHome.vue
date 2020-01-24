<template>
  <main class="merchanthome">
    <h2>Product Details</h2>
    <div class="sidenav">
      <router-link to="/merchanthome">Home</router-link> <!-- View --> <br>
      <router-link to="/merchantproductcheck">Add Product</router-link> <br>
      <router-link to="/merchantupdateproduct">Update Product Details</router-link> <br>
      <router-link to="/merchantorderdetails">Orders</router-link>
    </div>
  </main>
</template>

<script>
export default {
    name: 'MerchantHome'
}
</script>

<style scoped>
  h2 {
    text-align: center;
  }
  .sidenav {
    font-size: 20px;
    height: 100%;
    width: 220px;
    position: fixed;
    z-index: 1;
    top: 55px;
    left: 10px;
    overflow-x: hidden;
    padding-top: 20px;
    opacity: .7;
    border-right: 2px solid;
  }
  router-link {
    text-decoration: none;
  }
  router-link:focus {
    text-decoration: none;
  }
</style>