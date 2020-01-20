<template>
  <nav id="nav" class="navbar">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      Search Bar
    </div>
    <div>
      <router-link to="/Cart">Cart</router-link>
    </div>
    <div>
      <router-link to="/Login">Login</router-link>
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
  background-color: white;
  opacity: 0.5;
  min-height: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.navbar > div {
  background-color: white;
  /* opacity: 0.2; */
  margin: 5px;
  margin-top:15px;
  text-align: center;
  width: 100px;
  border: 1px;
  border-radius: 10px;
  line-height: 20px;
}
/* .navbar > div > a{
  text-decoration: none;
  color: black;
  opacity: 1;
} */

</style>