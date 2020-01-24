<template>
  <main class="merchantaddtoproduct">
      <MerchantSideBar />
      <div class="main">
        <h1>Add a new Product</h1>
      </div>
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  export default {
      name: 'MerchantAddToProduct',
      components: {
        MerchantSideBar
      }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-left: 25%;
  }
</style>