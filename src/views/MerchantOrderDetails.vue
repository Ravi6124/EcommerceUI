<template>
  <main class="merchantorderdetails">
      <div class="main">
        <h1>Order History</h1><hr>
        <div class="container">
          <div class="image">
            <img :src="imageURL" alt="img" height="200px" width="200px">
          </div>
          <div class="tag">
            <span>Product Name:</span><br>
            <span>CustomerId:</span><br>
            <span>Quantity:</span><br>
            <span>Order Date:</span><br>
            <span>Price:</span>
          </div>
          <div class="info" v-for="(item,index) in items" v-bind:key="index">
            <span>{{ item.productName }}</span>
            <span>{{ item.customerId }}</span>
            <span>{{ item.imageURL }}</span>
            <span>{{ item.quantity }}</span>
            <span>{{ item.orderDate }}</span>
            <span>{{ item.price }}</span>
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
      name: 'MerchantOrderDetails',
      components: {
        MerchantSideBar
      },
      data: function(){
        return {
          items: []
        }
      },
      created() {
        axios.get(`172.16.20.119:8091/cartandorder/order/getByMerchantId/${this.merchantId}`)
        .then(result => {
          this.items = result.data;
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
  .container {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
</style>