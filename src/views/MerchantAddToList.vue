<template>
  <main class="merchantaddtolist">
      <div class="main">
        <!-- product exists in database -->
        <h1>Add to your Inventory</h1>
        
        <!-- attri, quantity -->
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