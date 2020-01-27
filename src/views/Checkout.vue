<template>
  <main class="mainclass">
    <div class="checkout">
      <br><h3>Your order has been placed successfully.</h3><br>
      <!-- <h5>Please take time to rate your shopping experience: </h5> -->
      <!-- <div class="inner_checkout">
        <div>
          <div><Rating id="p_rating" /></div>
          <div>Product Rating</div>
        </div>
        <div>
          <div><Rating id="m_rating" /></div>
          <div>Merchant Rating</div>
        </div>
      </div><br> -->
      <div>
        <button class="myBtn" @click="continueShopping()">Continue Shopping!</button>
      </div>
    </div>
  </main>
</template>

<script>
// const axios = require('axios').default;
// import Rating from '@/components/Rating.vue'
export default {
  name: "Checkout",
  components: {
    // Rating,
  },
  data: function() {
    return {
      productRating: String
    }
  },
  methods: {
    continueShopping() {
      this.$router.push({path: '/'});
      // axios.post('')
    }
  }
};
</script>

<style scoped>
h1, h5{
  text-align: center;
}
.mainclass{
  display: flex;
  justify-content: center;
}
.checkout {
  display: flex;
  flex-direction: column;
}
.checkout > div{
  margin: 20px;
  text-align: center;
}
.inner_checkout {
  display: flex;
  justify-content: space-around;
}
.inner_checkout > div{
  margin: 10px;
  text-align: center;
}
</style>