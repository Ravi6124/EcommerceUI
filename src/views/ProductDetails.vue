<template>
<div class="head">
<div class="ab">
  <!-- <div> -->
    <!-- <img src="../assets/mainScreenBackgroundImage.jpg"> -->
  <!-- </div> -->
<div>
    <h1> Product Details</h1>
<div v-for="item in results" v-bind:key="item">
   <img :src="item.im">
    <strong>Name:</strong><span>{{item.name}}</span><br><br>
   <strong>Price:</strong ><span>{{item.price}}</span><br><br>
   <strong>Description:</strong ><span>{{item.description}}</span><br><br>
    </div>
     <button>ADD TO CART</button>
     <button>BUY NOW</button>
  </div>
</div>
</div>
</template>
<script>
const axios = require('axios');
export default {
    name: 'login',
    data: function () {
        return {
           item: [],
           results: []
        }
    },
    created() {
      axios.get("http://localhost:3000/items").then(response => {
              this.results = response.data
      })
    }
}
</script>
<style scoped>
.head{
  text-align: center;
  background-color: antiquewhite;
  margin: 55px;
  border: 3px solid black
}
.ab{
  display: flex;
  justify-content: space-around;
}
img{
  border:3px solid black;
  margin: 20%;
  height: 200PX;
  width:300px;
  padding: 5px;
  
}
button{
  font-size: 30px;
  background-color: aqua;
  margin-right: 10px;
}
h1{
  text-align: center;
  text-decoration-line: underline;
  text-decoration-color: brown;
}
</style>
