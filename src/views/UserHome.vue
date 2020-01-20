<template>
  <main class="userhome">
      <!-- <button @click="getProduct()"></button> -->
      <div v-for="product in abc" v-bind:key="product" class="container">
        <router-link to="/Category"><img :src="product.imgae_url" alt="no image"/>
        <div class="textblock"> 
          <h1>{{product.name}}</h1>
        </div>
        </router-link>
      </div>
  </main>
</template>

<script>
import {mapGetters} from 'vuex'
// import axios from 'axios'
export default {
    name: 'UserHome',
    product: [],
    computed : {
      ...mapGetters(['categoriesGetter']),
      abc() {
        return this.categoriesGetter.categories
      }
    },
    created () {
      //this.getCategories();
      this.$store.dispatch('getCategories')
    },
    methods: {
      getCategories() {
        

      // },
      // getProduct() {
      //   window.console.log(this.$store.getters.categoriesGetter)
      // }
    }}
}
</script>

<style scoped>
.userhome {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px;
}
.userhome > div {
}
.container{
  position: relative;
}
.textblock{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  color: black;
  /* position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding: 5px; */
}
</style>