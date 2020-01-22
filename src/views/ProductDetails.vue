<template>
<div class="head">
<div class="ab">
  <!-- <div> -->
    <!-- <img src="../assets/mainScreenBackgroundImage.jpg"> -->
  <!-- </div> -->
  <div class="imagee">
    
    <div v-for="item in results" v-bind:key="item">
        <img :src="item.im">
        
    </div>
    
  </div>
  <div class="right">
    <h1> Product Details</h1>
    <div v-for="item in results" v-bind:key="item">
        <!-- <img :src="item.im"> -->
        <strong>Name:</strong><span>{{item.name}}</span><br><br>
        <strong>Price:</strong ><span>{{item.price}}</span><br><br>
        <strong>Description:</strong ><span>{{item.description}}</span><br><br>
        <!-- <select><option> Merchant</option></select> -->
     <button>ADD TO CART</button>
     <button>BUY NOW</button>
     
    </div>
    <div>
      <hr>
      <H2>MORE SELLERS</H2>
      <br>
      <div class="scroll"> 
      <table >
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr v-for="details in some" v-bind:key="details">
          <td>{{details.merchantName}}</td>
          <td>{{details.newPrice}}</td>
        </tr>
      </table>
    </div>
    </div>
    
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
           results: [],
           some: [], 
           details: [],
        }
    },
    
    created() {
      axios.get("http://localhost:3000/items").then(response => {
              this.results = response.data
      }),
      axios.get("http://localhost:3001/details").then(response => {
              this.some = response.data
      })
      
    }
}
</script>
<style scoped>
.head{
  text-align: center;
  background-color: antiquewhite;
   align-self: auto;;
  border: 3px solid black;
  width: 100%
}
.ab{
  display: flex;
  justify-content:space-evenly;
}
img{
  border:3px solid black;
  margin: 20%;
  height: 200PX;
  width:300px;
  padding: 5px;
  
}
button{
  font-size: 20px;
  background-color:cornsilk;
  margin-right: 10px;
}
h1{
  text-align: center;
  text-decoration-line: underline;
  text-decoration-color: brown;
}
table,tr,td,th{
  padding: 10px;
}
table {
  border:1px solid black;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  
}
th, td {
  text-align: center;
  padding: 8px;
  border: 1px solid black
}
th{background-color: rgb(150, 146, 146);}
.scroll{
  overflow-y:auto;
  display:block; 
  height:150px ;border:1px solid black;
  margin-bottom: 10px;
}
.right{
  margin-top:30px;
  width: 50%
}
.imagee{
  width: 50%;
}
</style>
