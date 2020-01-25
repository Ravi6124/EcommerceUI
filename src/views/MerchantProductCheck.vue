<template>
  <main class="merchantproductcheck">
      <div class="main">
        <h1>Add a Product</h1><hr><br>
        <div class="container">
          <table>
            <tr>
              <td><span>Enter product name: </span></td>
              <td><input type="text" name="name"></td>
            </tr><br>
            <tr>
              <td><span>Enter the category of the product: </span></td>
              <td>
                <select name="category" id="category">
                  <option v-for="category in categories" v-bind:key="category" @value="category.name" @name="category.name">
                    {{ category.name }}
                  </option>
                </select>
              </td>
            </tr>
          </table><br>
          <button class="myBtn" name="submit">Add Product</button>
        </div>
      </div>

      <MerchantSideBar />
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  const axios = require('axios').default;
  export default {
      name: 'MerchantProductCheck',
      components: {
        MerchantSideBar
      },
      data: function(){
        return {
          categories: []
        }
      },
      created() {
        axios.get('http://172.16.20.119:8091/product/product/category')
        .then(result => {
          window.console.log(result.data)
          this.categories = result.data;
        })
      },
      methods: {
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
  td {
    padding-right: 20px;
  }
  input[type="text"] {
    width: 200px;
    border-radius: 4px;
  }
</style>