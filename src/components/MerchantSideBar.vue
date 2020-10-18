<template>
  <div class="sidenav">
    <router-link class="home" to="/merchanthome">Home</router-link><br> <!-- View -->
    <router-link class="check" to="/merchantproductcheck">Add Product</router-link><br>
    <router-link class="update" to="/merchantupdateproduct">Update Product Details</router-link><br>
    <router-link class="details" to="/merchantorderdetails">Order History</router-link>
  </div>
</template>

<script>
export default {
    name: 'MerchantSideBar'
}
</script>

<style scoped>
  .sidenav {
    font-size: 20px;
    height: 100vH;
    width: 20%;
    position: fixed;
    top: 55px;
    left: 0px;
    overflow-x: hidden;
    padding-top: 20px;
    opacity: .7;
    border-right: 2px solid;
    border-top: 2px solid;
    background-color: black;
    display: flex;
    flex-direction: column;
  }
  .home {
    text-decoration: none;
    padding-left: 10px;
    color: white;
  }
  .home:hover {
    opacity: .5;
  }
  .check {
    text-decoration: none;
    padding-left: 10px;
    color: white;
  }
  .check:hover {
    opacity: .5;
  }
  .update {
    text-decoration: none;
    padding-left: 10px;
    color: white;
  }
  .update:hover {
    opacity: .5;
  }
  .details {
    text-decoration: none;
    padding-left: 10px;
    color: white;
  }
  .details:hover {
    opacity: .5;
  }
</style>