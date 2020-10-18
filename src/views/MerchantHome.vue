<template>
  <main class="merchanthome">
    <div class="main">
      <h1>Product Details</h1><hr>

      <div class="container">

        <div class="loop" v-for="(product,index) in products" v-bind:key="index">
            <div class="info">
              <img class="image" :src="product.imageURL" alt="img" height="100px" width="100px">
              <div class="left">
                <span>Name:</span><br>
                <span>Description:</span><br>
                <span>Price:</span><br>
                <span>Quantity:</span><br>
                <span>Rating:</span>
              </div>
              <div class="right">
                <span>{{ product.productName }}</span><br>
                <span>{{ product.description }}</span><br>
                <span>{{ product.price }}</span><br>
                <span>{{ product.quantity }}</span><br>
                <span>{{ product.productListingRating }}</span>
              </div>

            </div>
            <br>
        </div>

      </div>
    
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
        return {
          products: [],
          merchantId: "1"
        }
      },
      components: {
        MerchantSideBar
      },
      created() {
        axios.get(`http://172.16.20.119:8091/merchant/merchant/displayMerchantProducts/${this.merchantId}`)
        .then(result => {
          this.products = result.data;
          window.console.log(this.productsAdd)
        })
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
  .info {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .left {
    width: 100px;
    margin-left: -20%;
    /* box-sizing: border-box; */
  }
  .right {
    width: 500px;
  }
</style>