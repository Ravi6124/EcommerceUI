<template>
  <main class="searchresult">
      <h1>{{this.$route.params["skey"]}}</h1>
      <hr>
      <div class="searchResults">
          <div v-for="search in searchResults" v-bind:key="search.productId" class="oneSearchResult" @click="passingPid(search.productId)">
              <fieldset>
                  <div class="search__image">
                      <img :src="search.imageURL" alt="no image">
                  </div>
                  <h3>Name: {{search.productName}}</h3>
                  <h4>Price: {{search.price}}</h4>
              </fieldset>
          </div>
      </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "SearchResult",
    created() {
        // eslint-disable-next-line no-debugger
        // debugger
        this.$store.dispatch("getSearchResult", {
            params: {
                skey: this.$route.params["skey"],
                pageNum: 0 
            }
        })
    },
    computed: {
        ...mapGetters(["searchResultGetter"]),
        searchResults() {
            return this.searchResultGetter;
        }
    }
}
</script>

<style scoped>
h1{
    text-align: center;
}
.searchResults{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.searchResults > div{
    margin: 20px;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    cursor: pointer;
}
.searchResults > div:hover{
    background-color: black;
    color: white;
}
.search__image{
    height: 200px;
    width: 300px;
}
.search__image > img{
    height: 100%;
    width: 100%;
}

</style>