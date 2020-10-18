<template>
  <main class="merchantaddtolist">
    <!-- product exists in database -->
    <!-- attri, quantity -->
    <div class="main">
      <h1>Add to your Inventory</h1><hr><br>
      <div class="container">
        <table>
          <tr>
            <td><span>Quantity of the product to add:</span></td>
            <td><input type="text" name="quantity" v-model="quantity"></td>
          </tr><br>
          <tr>
            <td>Price:</td>
            <td><input type="text" name="price" id="price" v-model="price"></td>
          </tr><br>
          <tr>
            <td>Color:</td>
            <td><input type="text" name="color" v-model="color"></td>
          </tr><br>
          <tr>
            <td>Theme:</td>
            <td><input type="text" name="theme" v-model="theme"></td>
          </tr><br>
          <tr>
            <td>Size:</td>
            <td><input type="text" name="size" v-model="size"></td>
          </tr><br>
        </table><br>
        <button class="myBtn" @click="addProduct">Add Product</button>
        <div class="success">{{ msg }}</div>
      </div>
    </div>
    
    <MerchantSideBar />
  </main>
</template>

<script>
  const axios = require('axios').default;
  import { mapGetters } from 'vuex'
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  export default {
    name: 'MerchantAddToList',
    components: {
      MerchantSideBar
    },
    data: function(){
      return {
        categoryInfo: [],
        attributes: [],
        productDTO: {},
        merchantId: '1'
      }
    },
    computed: {
      ...mapGetters([
        'fromFirstPageGetter',
        'newProductGetter',  // imageURL, description
        // this page: quantity, price, attributes
      ])
    },
    mounted() {
      this.attributes = this.categoryInfo.attributeList
      window.console.log(this.categoryInfo);
    },
    methods: {
      addProduct() {
        this.productDTO = {
          productId: this.newProductGetter.pid,
          productName: this.fromFirstPageGetter.product_name,
          categoryId: this.fromFirstPageGetter.select_category,
          price: parseInt(this.price),
          imageURL: this.newProductGetter.imageURL,
          description: this.newProductGetter.description,
          quantity: this.quantity,
          merchantId: this.merchantId,
          color: this.color,
          theme: this.theme,
          size: this.size
        }
        // eslint-disable-next-line no-debugger
        // debugger
        axios.post('http://172.16.20.119:8091/merchant/productListingController/addProductListing/', this.productDTO);
        this.msg = 'Product added Successfully '        
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
  .attribute, .quantity, .price {
    display: flex;
    flex-direction: row;
  }
  .container {
    margin-left: 25%;
  }
  td {
    padding-right: 20px;
  }
  button {
    margin-left: 15%;
  }
  input[type="text"] {
    width: 140%;
    border-radius: 3px;
  }
  .success {
    text-align: center;
    color: green;
  }
</style>