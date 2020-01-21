<template>
  <main class="category">
    <div v-for="products in abc" v-bind:key="products.productId" class="onecategoryproduct">
      <fieldset>
        <img :src="products.imageURL" alt="no image">
        <h3>{{products.productName}}</h3>
        <h4>{{products.defaultPrice}}</h4>
      </fieldset>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Category',
    // products []: ,
    computed: {
      ...mapGetters(["productsGetter"]),
      abc() {
        window.console.log(this.productsGetter.products)
        return this.productsGetter.products;
      }
    },
    created() {
      this.$store.dispatch('getProductsByCategory');
    }
}
</script>

<style scoped>
.category{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* border: 1px solid; */
}
.category > div{
  margin: 20px;
}
</style>