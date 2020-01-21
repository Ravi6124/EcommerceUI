<template>
  <main class="cart">
    <h1>Cart</h1>
    <div class="cart-container">


      <div class="container">
        <div class="product" v-for="item in items" v-bind:key="item">
          <div class="image">
            <img :src="item.img_url" alt="image" height="220" width="210">
          </div>
          <div class="details">
              <div class="details__name">
                <label>Name</label>
                <span><strong>{{ item.name }}</strong></span>
              </div>
              <div class="details__price">
                <label>Price</label>
                <span>{{ item.price }}</span>
              </div>
              <div class="details__desc">
                <label>Description</label>
                <span>{{ item.description }}</span>
              </div>
              <div class="details__qty">
                <label>Quantity</label>
                <div>
                    <button>-</button>
                    <span>{{ item.quantity || 0 }}</span>
                    <button>+</button>
                </div>
              </div>
              </div>
        </div>
    </div>
      <div class="checkout">
          <div class="checkout__name"><span>User Name: </span></div>
          <div class="checkout__total"><span>Total amount: </span></div>
          <button>Checkout</button>
        </div>
    </div>
  </main>
</template>

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
    flex-direction: column;
    flex-direction: row wrap;
    /* border: 1px solid; */
    width: 70%;
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
    display: flex;
    justify-content: space-between;
    border: 1px solid seagreen;
    padding: 10px;
  }
  .product {
    display: flex;
    /* justify-content: space-around; */
    padding: 20px 10px;
  }
  .product + .product {
    border-top: 1px solid sienna;
  }
  .checkout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 30%;
    border-left: 1px solid sienna;
  }
</style>