<template>
  <main class="userhome">
    <div v-for="categories in abc" v-bind:key="categories.categoryId" class="container" @click="passingCid(categories.categoryId,categories.name)">
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
    passingCid(cid,cname) {
      this.$router.push({ name: 'category', params: {cid, cname}})
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
  cursor: pointer;
  height: 200px;
  width: 300px;
}
.textblock {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  color: black;
}
.category__image {
  height: 200px;
  width: 300px;
  opacity: 0.5;
  -webkit-transition-duration: 0.8s; /* Safari */
  transition-duration: 0.8s;
}
.category__image > img {
  height: 100%;
  width: 100%;
}
.container{
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.category__image:hover{
  opacity: 1;
}
</style>