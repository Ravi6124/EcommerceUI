<template>
  <main class="userprofile">
    <div class="user" v-bind="info">
      Name: {{ info.firstName + " " + info.lastName}} <br>
      Email: {{ info.email }} <br>
      Contact Number: {{ info.contactNumber }} <br>
      Address: {{ info.address }}
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
        this.info = result;
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

</style>