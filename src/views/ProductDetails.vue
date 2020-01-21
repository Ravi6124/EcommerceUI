<template>
  <main class="product details">

      this is product details page..
      <br>
      {{this.$route.params["pid"]}}
  </main>
</template>

<script>
export default {
    name: 'ProductDetails'
    // data: function(){
    //   return{
    //     this.$route.params["pid"]
    //   }
    // }
}
</script>

<style scoped>

</style>