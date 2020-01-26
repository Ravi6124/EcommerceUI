<template>
  <div id="app">
    <Navbar />
    <hr />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from '@/components/App/Footer'
import Navbar from "@/components/App/Navbar";
//import { mapGetters } from 'vuex';
import Axios from "axios";


export default {
  name: "App",
  components: {
    // Footer,
    Navbar
  },
  computed: {
    // ...mapGetters(["guestIdGetter"]),
    // guestId() {
    //   window.console.log('in app.vue'+this.guestIdGetter)
    //   return this.guestIdGetter;
    // }
  },
  created() {

    if (localStorage.getItem("userId") === null) {
      Axios({
        method: "post",
        url: "http://172.16.20.119:8091/login/guest?type=web"
      }).then(function(res) {
        localStorage.setItem("userId", res.data.guestId);
        localStorage.setItem("userRole", ""),
          localStorage.setItem("userEmail", "");
      });
      this.$store.state.loginStatus = localStorage.getItem("userRole")
    }

    this.$store.state.loginStatus = localStorage.getItem('userRole');

    //     if (localStorage.getItem("guestId") != "") {
    //       window.console.log("there already exists a guest");
    //     } else {
    //       Axios({
    //         method: "post",
    //         url: "http://172.16.20.119:8091/login/guest?type=web"
    //       }).then(function(res) {
    //         localStorage.setItem("guestId", res.data.guestId);
    //       });
    //     }

    //     if (localStorage.getItem("userRole") != "") {
    //       window.console.log("there already exists a user");
    //     } else {
    //       localStorage.setItem("userRole", ""),
    //         localStorage.setItem("userId", ""),
    //         localStorage.setItem("userEmail", "");
    //     }

    //     if(localStorage.getItem('userId')==''){
    //     localStorage.setItem("userRole", ""),
    //       localStorage.setItem("userId", ""),
    //       localStorage.setItem("userEmail", ""),
    //       localStorage.setItem("guestId", '');
    // }
  }
};
</script>

<style>
hr {
  color: black;
}
body {
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
main {
  min-height: calc(90vh - 40px);
}
button.myBtn {
  padding: 10px 20px;
  background: #f2784b;
  color: #fff;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 700;
}
button.myBtn.disabled {
  opacity: 0.3;
  pointer-events: none;
}
button.myBtn:hover {
  background: #fff;
  color: #f2784b;
  border: 1px solid currentColor;
}
</style>
