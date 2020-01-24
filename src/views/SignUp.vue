<template>
  <main class="signup">
    <h1>Create Account</h1>
    <form action name="signup">
      <div class="form-input form__email">
        <span class="label-text">Email</span>
        <br />
        <input type="email" name="email" v-model="email" required />
        <br />
        <br />
      </div>

      <div class="form-input form__password">
        <span class="label-text">Password</span>
        <br />
        <input type="password" name="password" v-model="password" required />
        <br />
        <br />
      </div>

      <div class="form-input form__confirm">
        <span class="label-text">Confirm Password</span>
        <br />
        <input type="password" name="confirm_password" v-model="cpwd" required />
        <br />
        <br />
      </div>

      <div class="form__usertype">
        <label>
          <input type="radio" name="user" value="customer" v-model="userType" checked />Customer
        </label>
        <label>
          <input type="radio" name="user" value="merchant" v-model="userType" />Merchant
          <br />
          <br />
        </label>
      </div>
      <!-- <input type="submit" class="myBtn" :class="{'disabled': disableBtn}" @click.prevent="postUserData()"> -->
      <button class="myBtn" @click.prevent="postUserData()">SignUp</button>
      <br />
      <br />
    </form>
    <br />
    <div class="created">{{ created }}</div>
    <div class="error">{{ error }}</div>
  </main>
</template>

<script>
// const axios = require('axios');
export default {
  name: "SignUp",
  data: function() {
    return {
      items: [],
      email: "",
      password: "",
      cpwd: "",
      userType: "",
      created: "",
      error: ""
    };
  },
  methods: {
    postUserData() {
      if (
        this.password == "" ||
        this.cpwd == "" ||
        this.email == "" ||
        this.userType == ""
      ) {
        this.error = "Above fields are required";
        this.created = "";
        return false;
      }
      // if(!this.validEmail(this.email)){
      //   this.error = 'Email is not valid'
      //   this.created = ''
      //   return false;
      // }

      if (this.password != this.cpwd) {
        this.error = "Passwords do not match!!";
        this.created = "";
        return false;
      }
      let email = this.email;
      let password = this.password;
      let userType = this.userType;

      const data = {
        emailAddress: email,
        password: password,
        role: userType
      };
      // window.console.log(data)
      fetch("http://172.16.20.121:8080/customer", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      }).then(function(res) {

        window.console.log("Response from reg: "+ res)
      }).catch(function(res) {
        window.console.log("error from reg:" + res)
      })

      this.created = "Account Created Successfully";
      this.error = "";
    }
    // validEmail: function (email) {
    //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   return re.test(email);
    // }
  }
};
</script>

<style scoped>
label {
  padding-right: 25px;
  padding-left: 0px;
  cursor: pointer;
}
body {
  margin: 0%;
  padding: 0%;
  background-repeat: no-repeat;
  background-size: 100%;
}
h1 {
  text-align: center;
}
input[type="email"],
input[type="password"] {
  width: 100%;
  height: 25px;
}
form {
  text-align: center;
  position: relative;
  border: 2px solid black;
  border-radius: 15px;
  padding-bottom: 30px;
  padding-top: 30px;
  margin-top: 0%;
  margin-bottom: 1%;
  margin-right: 35%;
  margin-left: 35%;
  background-color: palegoldenrod;
  background: rgba(255, 255, 255, 0.5);
}
.form-input {
  width: 70%;
  margin: 0 auto;
  text-align: left;
}
.label-text {
  font-weight: bold;
}
.created {
  text-align: center;
  color: darkgreen;
}
.error {
  text-align: center;
  color: red;
}
/* :class="{'disabled': disableBtn}" */
</style>

