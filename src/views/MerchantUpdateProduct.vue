<template>
  <main class="merchantupdateproducts">
      <div class="main">
        <h1>Update your Product Information</h1><hr><br>
        <div class="container">
          <table>
            <tr>
              <td><span>Enter product name:</span></td>
              <td><input type="text" name="product_name" v-model="product_name"></td>
            </tr><br>
            <tr>
              <td><span>Enter product quantity: </span></td>
              <td><input type="text" name="product_quantity" v-model="product_quantity"></td>
            </tr>
          </table><br><br>
          <button class="myBtn" @click="addQuantity()">Update Quantity</button>
        </div><br>
        <div class="success">{{ msg }}</div>
      </div>

      <MerchantSideBar />
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  const axios = require('axios').default;
  export default {
    name: 'MerchantUpdateProducts',
    components: {
      MerchantSideBar
    },
    data: function() {
      return {
        product_name: '',
        product_quantity: this.product_quantity,
        merchantId: localStorage.getItem('userId'),
        msg: ''
      }
    },
    methods: {
      addQuantity() {
        axios.post(`http://172.16.20.119:8091/merchant/productListingController/increaseProductStock/${this.product_name}/${this.merchantId}/${this.product_quantity}`);
        this.msg = 'Quantity updated successfully';
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .main {
    margin-left: 20%;
  }
  td {
    padding-right: 20px;
  }
  .container {
    margin-left: 28%;
  }
  input[type="text"] {
    width: 140%;
    border-radius: 3px;
  }
  button {
    margin-left: 14%;
  }
  .success {
    text-align: center;
    color: green;
  }
</style>