<template>
  <nav id="nav" class="navbar">
    <div>
      <router-link to="/"><button class="button">Home</button></router-link>
    </div>
    <div>
      Search Bar
    </div>
    <div>
      <router-link to="/Cart"><button class="button">Cart</button></router-link>
    </div>
    <div>
      <router-link to="/Login"><button class="button">Login</button></router-link>
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
  /* opacity: 0.5; */
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.button{
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
  outline: none;
  cursor: pointer;
}

.button:hover{
  background-color: black;
  color: white;
}

.navbar > div {
  text-align: center;
  width: 100px;
}
</style>