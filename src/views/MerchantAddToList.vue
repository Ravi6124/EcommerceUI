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
            <td><input type="text" name="quantity"></td>
          </tr><br>
          <tr>
            <td>Price:</td>
            <td><input type="text" name="price" id="price"></td>
          </tr>
          <tr v-for="(attribute, index) in attributes" v-bind:key="index">
            <td>{{ attribute[index] }}</td>
            <td><input type="text" :name="attribute[index]" :id="attribute[index]"></td>
          </tr>
        </table><br>
        <button class="myBtn">Add Product</button>
      </div>
    </div>
    
    <MerchantSideBar />
  </main>
</template>

<script>
  // const axios = require('axios').default;
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
        attributes: []
      }
    },
    computed: {
      ...mapGetters([
        'categoryInfo',
        ''
      ])
    },
    created() {
    },
    mounted() {
      this.attributes = this.categoryInfo.attributeList
      window.console.log(this.categoryInfo);
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
</style>