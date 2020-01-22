<template>
  <main class="userprofile">
    <h1>Profile</h1>
    <div class="user" v-for="i in info" v-bind:key="i">
      Name: {{ i.firstName }}{{ i.lastName }} <br>
      Email: {{ i.email }} <br>
      Contact Number: {{ i.contactNumber }} <br>
      Address: {{ i.address }}
    </div>
  </main>
</template>

<script>
export default {
    name: 'UserProfile',
    data: function(){
    return {
      info: []
    }
    },
    mounted() {
      const axios = require('axios');
      axios({ method: "GET", url: "http://localhost:3000/user" })
      .then(result => {
        this.info = result.data;
        window.console.log(this.info);
        },
        error => {
          window.console.error(error);
        }
      );
    }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .user {
    text-align: center;
    border: 2px solid black;
    border-radius: 15px;
    padding-bottom: 50px;
    padding-top: 50px;
    margin-right: 35%;
    margin-left: 35%;
  }
</style>