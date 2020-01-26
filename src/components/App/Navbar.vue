<template>
  <nav id="nav" class="navbar">
    <router-link to="/" v-if="!loginStatusGetter">
      <i class="fa fa-home"></i>
    </router-link>
    <router-link to="/" v-if="loginStatusGetter=='customer'">
      <i class="fa fa-home"></i>
    </router-link>
    <router-link to="/merchanthome" v-if="loginStatusGetter=='merchant'">
      <i class="fa fa-home"></i>
    </router-link>
    <div class="search">
      <input
        type="text"
        class="search_input"
        placeholder="Search.."
        @keypress.enter="search"
        v-model="searchKey"
      />
      <button class="fas fa_search" @click="search()">&#xf002;</button>
    </div>
    <div class="right_corner">
      <router-link to="/cart/:cid" class="fas fa_cart">&#xf07a;</router-link>
      <a v-if="!loginStatusGetter" class="login" href="/login">
        <span class="fas fa-sign-in-alt"></span> Login
      </a>
      <a class="login" v-else-if="loginStatusGetter=='customer'" href @click="logout">
        <span class="fas fa-sign-in-alt"></span> Logout
      </a>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//const axios = require("axios");
export default {
  name: "Navbar",
  data: function() {
    return {
      searchKey: "",
      pageSize: 10,
      pageNumber: 0
    };
  },
  computed: {
    // loginStatus() {
    //   window.console.log(this.loginStatusGetter)
    //   return this.loginStatusGetter;
    // }
    ...mapGetters(["loginStatusGetter"])
  },
  methods: {
    // ...mapGetters([
    //   'loginStatusGetter'
    // ]),
    ...mapActions(["getSearchResult"]),
    logout() {
      localStorage.clear();
      this.$router.push({ name: "userhome" });
    },
    search() {
      // window.console.log(
      //   `172.16.20.110:8082/search/searchFunction/${this.pageSize}/${this.pageNumber}/${this.searchKey}`
      // );
      let skey = this.searchKey;
      this.getSearchResult({
        params: {
          skey: this.searchKey,
          pageNum: 0
        }
      });
      this.$router.push({ name: "searchresult", params: { skey } });

      // axios.get(`http://172.16.20.110:8082/search/searchFunction/${this.pageSize}/${this.pageNumber}/${this.searchKey}`).then(
      //   result => {
      //     window.console.log(result);

      //   },
      //   error => {
      //     window.console.log(error);
      //   }
      // );
    }
  }
};
</script>

<style scoped>
.fa_search {
  padding-left: 15px;
}
button {
  padding: 0;
  border: none;
  background: none;
  color: #007bff;
  font-size: 110%;
  cursor: pointer;
}
button:focus {
  outline: none;
}
button:hover {
  color: darkblue;
}
.fa-home {
  font-size: 200%;
}
.navbar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  text-align: center;
}
.login {
  font-size: 150%;
  cursor: pointer;
}
.fa_cart {
  font-size: 170%;
  padding-right: 40px;
}
.search_input {
  width: 30vw;
  height: 30px;
  border-radius: 3px;
  padding-right: 10px;
}
</style>

