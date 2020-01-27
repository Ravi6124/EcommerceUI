<template>
  <main class="merchantaddtoproduct">
      <div class="main">
        <h1>Add a new Product</h1><hr><br>
        <!-- des, image -->
        <div class="container">
          <table>
          <tr>
            <td><span>Upload Image: </span></td>
            <td><input type="text" name="image" v-model="imageURL"></td>
          </tr><br>
          <tr>
            <td><span>Description: </span></td>
            <td><textarea name="description" cols="50" rows="4" v-model="description"></textarea></td>
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
  import { mapGetters } from 'vuex';
  const axios = require('axios').default;
  export default {
    name: 'MerchantAddToProduct',
    data: function() {
      return {
        imageURL: '',
        description: '',
        productDTO: {},
        pid: ''
      }
    },
    components: {
      MerchantSideBar
    },
    computed: {
      ...mapGetters([
        'fromFirstPageGetter' // product_name , select_category
      ])
    },
    methods: {
      addproduct() {
        this.productDTO = {
          imageURL: this.imageURL,
          description: this.description,
          productName: this.fromFirstPageGetter.product_name,
          categoryId: this.fromFirstPageGetter.select_category
        }
        axios.post('http://172.16.20.119:8091/product/product/product/', this.productDTO).then(res => {
          window.console.log('res datdadad', res.data)
          // vm.pid = res.data
          this.$store.commit('SET_PRODUCTINFO', {
          imageURL: this.imageURL,
          description: this.description,
          pid: res.data
        })
        this.$router.push({name: 'merchantaddtolist', params: {pname: this.fromFirstPageGetter.product_name, pcategory: this.fromFirstPageGetter.select_category}});
        });
        window.console.log('pid', this.pid)
        
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