<template>
  <main class="merchanthome">
    <div class="main">
      <h1>Product Details</h1><hr>
      <!-- <div class="container">
        <div class="loop" v-for="(product,index) in products" v-bind:key="index">
            <img class="image" @src="product.imageURL" alt="img" height="100px" width="100px">
            <div class="info">
              <div class="left">
                <span>Name:</span>
                <span>Description:</span>
                <span>Price:</span>
                <span>Quantity:</span>
                <span>Rating:</span>
              </div>
              <div class="right">
                <span>{{ product.productName }}</span>
                <span>{{ product.description }}</span>
                <span>{{ product.price }}</span>
                <span>{{ product.quantity }}</span>
                <span>{{ product.productListingRating }}</span>
              </div>
            </div>
        </div> 
      </div> -->
    
    </div>
    
    <MerchantSideBar />
  </main>
</template>

<script>
import MerchantSideBar from '@/components/MerchantSideBar.vue'
const axios = require('axios').default;
export default {
    name: 'MerchantHome',
    data: function() {

    },
    components: {
      MerchantSideBar
    },
    created() {
      axios.get(`172.16.20.119:8091/merchant/merchant/displayMerchantProducts/${this.merchantId}`)
    }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .main {
    margin-left: 20%
  }
</style>