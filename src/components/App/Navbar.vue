<template>
  <nav id="nav" class="navbar">
    <router-link to="/"><i class="fa fa-home"></i></router-link>
    <div class="search">
      <input type="text" class="search_input" placeholder="Search..">
      <router-link class="fas fa_search" to="">&#xf002;</router-link>
    </div>
    <div class="right_corner">
      <router-link to="/cart" class="fas fa_cart">&#xf07a;</router-link>
      <a class="login" href="/login"><span class="fas fa-sign-in-alt"></span> Login</a>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
  .fa_search {
    padding-left: 20px;
  }
  .fa-home {
    font-size: 200%;
    /* padding-left: 20px; */
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
    /* color: darkblue; */
  }
  .fa_cart{
    font-size: 170%;
    /* color: darkblue; */
    padding-right: 40px;
  }
  .search_input {
    width: 30vw;
    height: 30px;
    border-radius: 3px;
    padding-right: 20px;
  }
</style>

// Team 5:
// Harsh: navbar, signup, login, user profile
// Priya: login, cart vuex, checkout
// Mahesh: merchant pages

// Raghav: Zuul
// Ananya: Kafka
// Antas: Cart Backend
// Riya: Login Backend

// Ravi: User SignIN Android

