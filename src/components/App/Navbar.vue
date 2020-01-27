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
    <div class="search" v-if="!(loginStatusGetter=='merchant')">
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
      <router-link
        to="/cart/:cid"
        class="fas fa_cart"
        v-if="!(loginStatusGetter=='merchant')"
      >&#xf07a;</router-link>
      <a v-if="!loginStatusGetter" class="login" href="/login">
        <span class="fas fa-sign-in-alt"></span> Login
      </a>
      <a class="login" v-else-if="loginStatusGetter=='customer'" href>
        <span class="fas fa-sign-in-alt"></span>
        <div class="dropdown">
          <button class="dropbtn">{{this.user}}</button>
          <div class="dropdown-content">
            <!-- <a href="/userprofile" @click="viewProfile">View Profile</a> -->
            <a href="/userorderdetails">View orders</a>
            <a href="#" @click="logout">Logout</a>
          </div>
        </div>
        <!-- <span class="fas fa-sign-in-alt"></span> Logout -->
      </a>
      <a class="login" v-else-if="loginStatusGetter=='merchant'" href @click="logout">
        <span class="fas fa-sign-in-alt"></span>
        <div class="dropdown">
          <button class="dropbtn">{{this.merchant}}</button>
          <div class="dropdown-content">
            <!-- <a href="/merchantprofile" @click="viewProfile">View Profile</a> -->
            <a href="#" @click="logout">Logout</a>
            <!-- <a href="#">Link 3</a> -->
          </div>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Axios from "axios";
//const axios = require("axios");
export default {
  name: "Navbar",
  data: function() {
    return {
      searchKey: "",
      pageSize: 10,
      pageNumber: 0,
      user: localStorage.getItem("userEmail"),
      merchant: localStorage.getItem('userEmail')
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
      // localStorage.clear();
      localStorage.setItem("userRole", "");
      localStorage.setItem("userEmail", "");
      localStorage.setItem("userId", "");

      if (localStorage.getItem("userId") == "") {
        Axios({
          method: "post",
          url: "http://172.16.20.119:8091/login/guest?type=web"
        }).then(function(res) {
          localStorage.setItem("userId", res.data.guestId);
          localStorage.setItem("userRole", ""),
            localStorage.setItem("userEmail", "");
        });
        this.$store.state.loginStatus = localStorage.getItem("userRole");
      }
      // this.$store.state.loginStatus = localStorage.getItem('userRole');
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
      window.console.log("My SKEY: " + skey);
      this.$router.push({ name: "searchresult", params: { skey } });
      // this.$router.go(1)

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
  justify-content: space-around;
  height: 40px;
  text-align: center;
  margin-top: 10px;
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

.dropbtn {
  /* background-color: #4CAF50; */
  color: rgb(63, 9, 63);
  padding: 10px;
  font-size: 20px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: rgb(63, 9, 63);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: rgba(63, 9, 63, 0.281);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: white;
}
</style>

