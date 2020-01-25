<template>
  <main class="cart">
    <h1>Cart</h1>
    <div class="cart-container">
      <div class="container">
        <div class="product" v-for="(item, index) in items" v-bind:key="index">
          <div class="image">
            <img :src="item.imageURL" alt="image" height="220" width="210">
          </div>
          <div class="details">
              <div class="details__name">
                <label>Name:</label>
                <span><strong>{{ item.productName }}</strong></span>
              </div>
              <div class="details__price">
                <label>Price:</label>
                <span>&#8377; {{ item.price }}</span>
              </div>
              <div class="details__qty">
                <label>Quantity:</label>
                <div>
                  <button @click="decrement(item, index)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="increment(item, index)">+</button>
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
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters(["cartGetter"]),
    cart(){
      return this.cartGetter;
    }
  },
  methods: {
    decrement(item, index) {
      if(this.items[index].quantity == 0)  return;
      this.items[index].quantity--;
      this.total -= this.items[index].price;
      window.console.log(this.customerId, item.productId);
      axios.delete('http://172.16.20.98:8080/cart/reduceitem', {
        customerId : 'fakeId', 
        productId: item.productId
      })
      .then(res => {
          window.console.log("res: ", res);
          return res;
        });
    },
    increment(item, index) {
      this.items[index].quantity++;
      this.total += this.items[index].price;
      item.quantity = this.items[index].quantity;
      window.console.log(this.customerId, item);
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        customerId: this.customerId, 
        item: this.item
        })
        .then(res => {
          window.console.log("res: ", res);
          return res;
        });
    },
    checkout(e) {
      e.preventDefault();
    //   const totalAmount = this.total;
    //   const items = this.items;
    //   const customerId = this.customerId;
    //   const checkout_response = [];
    //   const data = {
    //     totalAmount,
    //     items,
    //     customerId
    //   };
    //   axios.get("http://localhost:3000/items")
    //     .then(result => {
    //       this.checkout_response = result.data;
    //     },
    //     error => {
    //       window.console.error(error);
    //     }
    //   );
    //   if (!checkout_response.status){
    //     alert("You need to login to place an order!!");
    //     return;
    //   }
    //   axios.post('https://jsonplaceholder.typicode.com/posts', {
    //     customerId: this.customerId,
    //     totalAmount: this.totalAmount,
    //     data: this.data
    //   })
    //     .then(res => {
    //       window.console.log("res: ", res);
    //       return res;
    //     });
    // }
  },
  created() {
    this.$store.dispatch('getCartOfCustomer',{
      params: {
        cid: this.$route.params["cid"]
      }
    });

    this.total = this.cart.totalAmount;
    this.items = this.cart.items;

    // axios({ method: "GET", url: "http://172.16.20.98:8080/cart/fakeId" })
    // .then(result => {
    //   this.total = result.data.totalAmount;
    //   this.items = result.data.items;
    //   window.console.log(this.items);
    //   },
    //   error => {
    //     window.console.error(error);
    //   }
    // );
  }
  // this.$router.push
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