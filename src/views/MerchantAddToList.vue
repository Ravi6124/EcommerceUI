<template>
  <main class="merchantaddtolist">
      <MerchantSideBar />
      <div class="main">
        <h1>Add more Products</h1>
      </div>
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  export default {
      name: 'MerchantAddToList',
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