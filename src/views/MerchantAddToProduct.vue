<template>
  <main class="merchantaddtoproduct">
    <div class="add">
    <div class="form">
      <img src="../assets/mainScreenBackgroundImage.jpg" alt="logo" width="80px" height="80px" ><br><br>
       <input type="file">
       <br>
      <br>
      Description:<br>
      <textarea rows="5" cols="40" v-model="description">
      </textarea>
      <br>
      <button @click="MerchantAddToProduct">Next</button> 
    </div>   
    </div>
 </main>
</template>

<script>
import {mapGetters} from "vuex"
// const axios = require('axios');   
export default {
    name: 'MerchantAddToProduct',
    data: function () {
        return {
           description:'',
        }
},
computed :{
  ...mapGetters(['productsending']),
  productdata (){
    return this.productsending
  }
},
methods:{
  MerchantAddToProduct : function(){
    this.$store.dispatch('PostMerchantAddToProduct')
  }
}
}
</script>

<style scoped>
.add{
  display: flex;
  justify-content: center;
  height:500px;
  width: 100%;
  border: 1px solid black;
  background-color: beige

}
.form{
  padding-top: 20px;
  border: 2px solid black;
  height: 400px;
  width:350px;
  text-align: center;
  margin-top: 3%;
  background-color: bisque
}
input{
 
  height: 25px;
  text-size-adjust: 30px
}
#myfile{
  size: 20px;
}

</style>
