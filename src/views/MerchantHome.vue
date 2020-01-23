<template>
  <main class="merchanthome">
    <div class="main">
    <div class="sidebar">
<button @click="$router.push('/MerchantProductCheck')">ADD</button>
<button @click="$router.push('/')">UPDATE</button>
<button @click="$router.push('/merchanthome')">VIEW</button>
<button @click="$router.push('/')">ORDER</button>
    </div>
    <div class="content">

<h1>product details</h1>

    </div>
    </div>
  </main>
</template>

<script>
export default {
    name: 'MerchantHome'
}
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-bottom: 200px;
}
.sidebar{
  display: flex;
  flex-direction: column;
  background-color:blue;
  width:10%;
  height: 100%;

}
.sidebar button:hover{
  color: red;
}
button{
  font-size: 20px;
  padding: 20px;
  background-color: aliceblue
}
.content{
  padding-left: 20%;
}

</style>