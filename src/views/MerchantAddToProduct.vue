<template>
  <main class="merchantaddtoproduct">
      <div class="main">
        <h1>Add a new Product</h1><hr><br>
        <!-- des, image -->
        <div class="container">
          <table>
          <tr>
            <td><span>Upload Image: </span></td>
            <td><input type="text" name="image"></td>
          </tr><br>
          <tr>
            <td><span>Description: </span></td>
            <td><textarea name="description" id="description" cols="50" rows="4"></textarea></td>
          </tr>
        </table><br>
        <button class="myBtn" @click="addproduct">Add Product</button>
      </div>
        </div>
        
      <MerchantSideBar />
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  // const axios = require('axios').default;
  export default {
      name: 'MerchantAddToProduct',
      components: {
        MerchantSideBar
      },
      created() {

      },
      methods: {
        addproduct() {
          this.$router.push('/merchantaddtolist');
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
  input[type="text"]{
    border-radius: 3px;
    width: 150%;
  }
  textarea {
    border-radius: 3px;
    width: 150%;
  }
  button {
    margin-left: 29%;
  }
  .container {
    margin-left: 13%;
  }
</style>