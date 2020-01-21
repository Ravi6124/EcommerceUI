<template>
  <main class="userhome">
    <!-- <button @click="getProduct()"></button> -->
    <div v-for="categories in abc" v-bind:key="categories.categoryId" class="container" @click="passingCid(categories.categoryId)">
      <!-- <router-link to="/Category"> -->
        <img :src="categories.imageURL" alt="no image" />
        <div class="textblock">
          <h1>{{categories.name}}</h1>
        </div>
      <!-- </router-link> -->
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
// import axios from 'axios'
export default {
  name: "UserHome",
  categories: [],
  computed: {
    ...mapGetters(["categoriesGetter"]),
    abc() {
      return this.categoriesGetter.categories;
    }
  },
  created() {
    //this.getCategories();
    this.$store.dispatch('getCategories');
  },
  methods: {
    passingCid(cid) {
      // window.console.log(cid),
      this.$router.push({ name: 'category', params: {cid}})
      // },
      // getProduct() {
      //   window.console.log(this.$store.getters.categoriesGetter)
      // }
    }
  }
};
</script>

<style scoped>
.userhome {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px;
}
.userhome > div {
  margin: 20px;
  line-height: 75px;
}
.container {
  position: relative;
}
.textblock {
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