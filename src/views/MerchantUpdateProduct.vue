<template>
  <main class="merchantupdateproducts">
      <MerchantSideBar />
      <div class="main">
        <h1>Update your Product Information</h1>
      </div>
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  export default {
      name: 'MerchantUpdateProducts',
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