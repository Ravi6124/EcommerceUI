<template>
  <main class="userhome">
    <div v-for="categories in abc" v-bind:key="categories.categoryId" class="container" @click="passingCid(categories.categoryId)">
      <div class="category__image">
        <img :src="categories.imageURL" alt="no image" />
      </div>
      <div class="textblock">
        <h1>{{categories.name}}</h1>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserHome",
  categories: [],
  computed: {
    ...mapGetters(["categoriesGetter"]),
    abc() {
      return this.categoriesGetter;
    }
  },
  created() {
    this.$store.dispatch('getCategories');
  },
  methods: {
    passingCid(cid) {
      this.$router.push({ name: 'category', params: {cid}})
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
  opacity: 0.9;
  color: black;
  /* position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding: 5px; */
}
.category__image {
  height: 200px;
  width: 300px;
  opacity: 0.7;
}
.category__image > img {
  height: 100%;
  width: 100%;
}
</style>