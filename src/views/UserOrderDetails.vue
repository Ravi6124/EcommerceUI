<template>
  <main class="userorderdetials">
    <h1>Your Past Orders</h1>
    <div class="orders" v-for="order in orders" v-bind:key="order.orderId">
      <fieldset>
        <h3>Order Date: {{order.date}}</h3>
        <h3>Total Amount: {{order.totalAmount}}</h3>
        <div class="one_order">
        <div v-for="item in order.items" v-bind:key="item.productId">
          <fieldset>
            <div class="category__image">
              <img :src="item.imageURL" alt="no image" />
            </div>
            <h4>Name: {{item.productName}}</h4>
            <h4>Price: {{item.price}}</h4>
            <h4>Quantity: {{item.quantity}}</h4>
          </fieldset>
        </div>
        </div>
      </fieldset>
      <br><br><br>
    </div>
  </main>
</template>

<script>
import Axios from "axios";
export default {
  name: "UserOrderDetails",
  data: function() {
    return{
      orders: []
    }
  },
  created() {
    let uid = localStorage.getItem("userId");
    Axios.get("http://172.16.20.119:8091/cartandorder/order/getByUserId?userId=" + uid)
    .then(res => {
      window.console.log(res.data.orders)
      this.orders = res.data.orders

    })
  }
};
</script>

<style scoped>

.orders{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.one_order{
  display: flex;
  /* flex-grow :1; */
  flex-wrap: wrap;
  justify-content: space-around;
}
h1{
  text-align: center;
}
.category__image {
  height: 200px;
  width: 300px;
}
.category__image > img {
  height: 100%;
  width: 100%;
}
</style>