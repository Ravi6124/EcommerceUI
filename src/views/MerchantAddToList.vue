<template>
  <main class="merchantaddtolist">
      <div class="main">
        <h1>Add more Products</h1>
      </div>

      <MerchantSideBar />
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
  }
  .main {
    margin-left: 20%
  }
</style>