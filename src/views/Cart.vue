<template>
  <main class="cart">
    <h1>Cart</h1>
    <div class="cart-container">
      <div class="container">
        <div class="product" v-for="(item, index) in items" v-bind:key="index">
          <div class="image">
            <img :src="item.img_url" alt="image" height="220" width="210">
          </div>
          <div class="details">
              <div class="details__name">
                <label>Name:</label>
                <span><strong>{{ item.name }}</strong></span>
              </div>
              <div class="details__price">
                <label>Price:</label>
                <span>&#8377; {{ item.price }}</span>
              </div>
              <div class="details__desc">
                <label>Description:</label>
                <span>{{ item.description }}</span>
              </div>
              <div class="details__qty">
                <label>Quantity:</label>
                <div>
                  <button @click="decrement(index)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="increment(index)">+</button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <hr>
      <div class="total">
        <span style="padding-left: 10px;">Total: </span>
        <strong><span>&#8377; {{ total }} </span></strong>
      </div><hr><br>
      <div class="buttons">
        <button class="myBtn" @click="checkout($event)">Buy Now</button>
      </div><br>
    </div>
  </main>
</template>

<script>
const axios = require('axios');
export default {
  name: 'Cart',
  data: function(){
    return {
      items: [],
      disableBtn: false,
      total: 0,
      customerId: 0
    }
  },
  methods: {
    decrement(index) {
      if(this.items[index].quantity == 0)  return;
      this.items[index].quantity--;
      this.total -= this.items[index].price;
      window.console.log(this.items);
    },
    increment(index) {
      this.items[index].quantity++;
      this.total += this.items[index].price;
      window.console.log(this.items);
    },
    checkout(e) {
      e.preventDefault();
      const total = this.total;
      const items = this.items;
      const customerId = this.customerId;
      const data = {
        total,
        items,
        customerId
      };
      axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(res => {
          window.console.log("res: ", res);
          return res;
        });
    }
  },
  created() {
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
  button {
    cursor: pointer;
  }
  .buttons{
    align-items: center;
    padding-left: 50%;
  }
  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 98%;
  }
  .container {
    display: flex;
    flex-direction: column;
    flex-direction: row wrap;
    text-align: center;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
  }
  .details > div {
    display: flex;
    justify-content: space-between;
  }
  .details__qty > div > span {
    margin: 0 5px;
  }
  .cart-container {
    border: 1px solid grey;
    padding: 10px;
  }
  .product {
    display: flex;
    padding: 20px 10px;
  }
  .product + .product {
    border-top: 1px solid grey;
  }
  .checkout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 30%;
    border-left: 1px solid grey;
    padding: 0 10px;
  }
</style>