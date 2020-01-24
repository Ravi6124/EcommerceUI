<template>
  <div id="app">
    <Navbar/>
    <hr>
    <router-view/>
    <!-- <Footer /> -->
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
hr {
  color: black;
}
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
