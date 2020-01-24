<template>
  <main class="merchantprofile">
    <MerchantSideBar />
    <div class="main">
      <h1>Profile</h1>
    </div>
  </main>
</template>

<script>
  import MerchantSideBar from '@/components/MerchantSideBar.vue'
  export default {
      name: 'MerchantProfile',
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