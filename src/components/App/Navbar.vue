<template>
  <nav id="nav" class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: dodgerblue;
  min-height: 80px;
}
</style>