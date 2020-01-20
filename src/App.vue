<template>
  <div id="app">
      <Navbar/>
      <hr>
      <router-view/>
      <!-- <Footer/> -->
  </div>
</template>

<script>
// import Footer from '@/components/App/Footer'
import Navbar from '@/components/App/Navbar'

export default {
  name: 'App',
  components: {
    // Footer,
    Navbar
  }
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
main {
  min-height: calc(90vh - 60px);
}
</style>