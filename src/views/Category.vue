<template>
  <main>
    <div class="category">
      <div
        v-for="products in abc"
        v-bind:key="products.productId"
        class="onecategoryproduct"
        @click="passingPid(products.productId)"
      >
        <fieldset>
          <div class="category__image">
            <img :src="products.imageURL" alt="no image" />
          </div>
          <h3>Name: {{products.productName}}</h3>
          <h4>Price: {{products.defaultPrice}}</h4>
        </fieldset>
      </div>
    </div>
    <button id="button" @click="incrementPageNumber()">View More</button>
    <br />
    <br />
    <br />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Category",
  data: function() {
    return {
      pageNum: 0
    };
  },
  computed: {
    ...mapGetters(["productsGetter"]),
    abc() {
      return this.productsGetter.content;
    }
  },
  created() {
    this.$store.dispatch("getProductsByCategory", {
      params: {
        cid: this.$route.params["cid"],
        pageNum: 0
      }
    });
  },
  methods: {
    passingPid(pid) {
      this.$router.push({ name: "productdetails", params: { pid } });
    },
    incrementPageNumber() {
      this.pageNum = this.pageNum + 1;
      // window.console.log("page number is equal to " + this.pageNum);
      this.$store.dispatch("getProductsByCategory", {
        params: {
          cid: this.$route.params["cid"],
          pageNum: this.pageNum
        }
      });
    }
  }
};
</script>

<style scoped>
.category {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* border: 1px solid; */
}
.category > div {
  margin: 20px;
  -webkit-transition-duration: 1s; /* Safari */
  transition-duration: 1s;
  cursor: pointer;
}
.category > div:hover {
  background-color: black;
  color: white;
}
.category__image {
  height: 200px;
  width: 300px;
}
.category__image > img {
  height: 100%;
  width: 100%;
}
#button {
  background-color: white;
  height: 40px;
  width: 100%;
  border: 1px solid;
  color: black;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 5px;
  /* box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); */
  -webkit-transition-duration: 1s; /* Safari */
  transition-duration: 1s;
  cursor: pointer;
  outline: none;
}
#button:hover {
  background-color: black;
  color: white;
}
</style>