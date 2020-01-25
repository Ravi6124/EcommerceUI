<template>
  <main class="merchanthome">
    <div class="main">
      <h1>Product Details</h1>
    </div>
    
    <MerchantSideBar />
  </main>
</template>

<script>
import MerchantSideBar from '@/components/MerchantSideBar.vue'
export default {
    name: 'MerchantHome',
    components: {
      MerchantSideBar
    },
    created() {
      
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