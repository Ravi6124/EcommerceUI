<template>
  <main class="mainclass">
    <div class="checkout">
      <div>E-mail verification</div>
      <div class="inner_checkout">
        <div>Customer Rating</div>
        <div>Merchant Rating</div>
      </div>
      <div><button class="myBtn" @click="continueShopping()">Continue Shopping!</button></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Checkout",
  methods: {
    continueShopping() {
      this.$router.push({name: '/'});
    }
  }
};
</script>

<style scoped>
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