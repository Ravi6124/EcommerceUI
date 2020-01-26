<template>
  <main class="merchantorderdetails">
      <div class="main">
        <h1>Order History</h1>
      </div>
      
      <MerchantSideBar />
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  export default {
      name: 'MerchantOrderDetails',
      components: {
        MerchantSideBar
      }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .main {
    margin-left: 20%
  }
</style>