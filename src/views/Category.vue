<template>
  <main class="category">
    <div v-for="products in abc" v-bind:key="products.productId" class="onecategoryproduct">
      <fieldset>
        <div class="category__image">
          <img :src="products.imageURL" alt="no image">
        </div>
        <h3>Name: {{products.productName}}</h3>
        <h4>Price: {{products.defaultPrice}}</h4>
      </fieldset>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Category',
    computed: {
      ...mapGetters(["productsGetter"]),
      abc() {
        return this.productsGetter.content;
      }
    },
    created() {
      this.$store.dispatch('getProductsByCategory', this.$route.params["cid"]);
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
.category__image {
  height: 200px;
  width: 300px;
}
.category__image > img {
  height: 100%;
  width: 100%;
}
</style>