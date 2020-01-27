<template>
  <main class="merchantorderdetails">
      <h1>Your Past Orders</h1>
    <div v-if="orders.length > 0" class="category">
      <div
        v-for="(product, index) in orders"
        v-bind:key="index"
        class="onecategoryproduct"
        >

        <div class="categoryInfo">
          <div class="category__image">
            <img :src="product.imageURL" alt="no image" />
          </div>
          <div class="category__details">
            <h3>Name: {{product.productName}}</h3>
            <h4>Quantity: {{product.quantity}}</h4>
            <h4>Date: {{product.orderDate}}</h4>
            <h4>Price: {{product.price}}</h4>
          </div>
        </div>
<br><br>
      </div>
    </div>
      <div v-else class="noOrders">
        No Order History Found
      </div>
      <MerchantSideBar />
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  import Axios from "axios";
export default {
  name: "MerchantOrderDetails",
  components: {
    MerchantSideBar
  },
  data: function() {
    return{
      orders: []
    }
  },
  created() {
    let uid = localStorage.getItem("userId");
    Axios.get("http://172.16.20.119:8091/cartandorder/order/getByMerchantId/"+uid)
    .then(res => {
      window.console.log('dfhaekurfertuwy'+res)
      this.orders = res.data

    })
  }
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .main {
    margin-left: 20%
  }
  .category {
  display: flex;
  flex-direction: column;
  margin-left: 21%;
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
  /* border: 1px solid; */
}
.categoryInfo {
  display: flex;
  border: 1px solid black;
}
.onecategoryproduct{
  padding: 1px;
}
/* .onecategoryproduct > div{
  display: flex;
} */
.category__image {
  height: 200px;
  width: 300px;
  margin-right: 20px;
}
.category__image > img {
  height: 100%;
  width: 100%;
}
.noOrders {
  margin-left: 500px;
}
</style>