<template>
  <main class="merchantproductcheck">
      <div class="main">
        <h1>Add a Product</h1><hr><br>
        <div class="container">
          <table>
            <tr>
              <td><span>Enter product name: </span></td>
              <td><input type="text" name="name" v-model="product_name" /></td>
            </tr><br>
            <tr>
              <td><span>Enter the category of the product: </span></td>
              <td>
                <select name="select_category" id="category" v-model="select_category">
                  <option v-for="category in categories" v-bind:key="category" @value="category.name" @name="category.name">
                    {{ category.name }}
                  </option>
                </select>
              </td>
            </tr>
          </table><br><br>
          <button class="myBtn" name="submit" @click="check">Add Product</button>
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
          categories: [],
          productId: '',
          product_name: '',
          select_category: ''
        }
      },
      created() {
        axios.get('http://172.16.20.119:8091/product/product/category')
        .then(result => {
          this.$store.commit('SET_PRODUCT', result.data)
          this.categories = result.data;
        })
      },
      methods: {
        check() {
          //window.console.log(this.product_name)
          //window.console.log(this.select_category)
          let pname = this.product_name
          let pcategory = this.select_category
          axios.get(`http://172.16.20.119:8091/product/product/present/${this.product_name}`)
          .then(result => {
            this.productId = result.data;
            if (String(this.productId) == "#")
              this.$router.push({ name: 'merchantaddtoproduct', params: {pname, pcategory}} );
            else
              this.$router.push({name: 'merchantaddtolist', params: {pname, pcategory}});
          })
          //window.console.log(`${this.select_category}`);
        }
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
  .container {
    margin-left: 25%;
  }
  button {
    margin-left: 17.5%;
  }
</style>