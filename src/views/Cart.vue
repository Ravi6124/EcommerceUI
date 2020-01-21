<template>
  <main class="cart">
    <h1>Cart</h1>
    <div class="loop" v-for="item in items" v-bind:key="item">
      <div class="container">
        <div class="image">
          <img :src="item.img_url" alt="image" height="220" width="210">
        </div>
        <div class="details">
          {{ item.name }} <br>
          Price: {{ item.price }} <br>
          Description: {{ item.description }} <br>
          Quantity: 
          <button>-</button>
          <label for=""></label>
          <button>+</button>
        </div>
      </div>
      <br>
    </div>
  </main>
</template>

import axios from "axios";

<script>
export default {
  name: 'Cart',
  data: function(){
    return {
      items: []
    }
  },
  mounted() {
    const axios = require('axios');
    axios({ method: "GET", url: "http://localhost:3000/items" })
    .then(result => {
      this.items = result.data;
      window.console.log(this.items);
      },
      error => {
        window.console.error(error);
      }
    );
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: row wrap;
    border: 1px solid;
  }
  .image {
    
  }
  .details {
    margin: 8px;
    padding: 10px;
    font-size: 22px;
  }
</style>