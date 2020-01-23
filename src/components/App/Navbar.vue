<template>
  <nav id="nav" class="navbar">
    <router-link to="/"><img src="src/assets/icon.jpg" alt="home" height="20" width="20"></router-link>
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
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 40px;
    text-align: center;
  }
  .login {
    cursor: pointer;
    /* color: darkblue; */
  }
  .fa_cart{
    font-size: 35px;
    /* color: darkblue; */
    padding-right: 50px;
  }
  .search_input {
    width: 90%;
    height: 30px;
    border-radius: 3px;
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

