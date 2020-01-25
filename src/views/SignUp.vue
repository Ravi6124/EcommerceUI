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

      <div class="user_type">
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
import { mapGetters } from 'vuex';
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
      error: "",
      res: {}
    };
  },
  computed: {
    ...mapGetters(["signupResponseGetter"]),
    signupRes() {
      return this.signupResponseGetter
    }
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

      let data = {
        emailAddress: email,
        password: password,
        role: userType,
        guestId: localStorage.getItem('guestId')
      };

      this.$store.dispatch('signup',{
        params: {
          data: data
        }
      });

      if(this.signupRes.statusCode == 1000){
        this.$router.push({name: 'login'})
      }else if(this.signupRes.statusCode == 800){
        this.error = this.signupRes.message
      }
    }
    // validEmail: function (email) {
    //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   return re.test(email);
    // }
  }
}
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
  input[type="email"], input[type="password"] {
   width: 100%; 
   height: 25px;
  }
  form {
    text-align: center;
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
    padding-bottom: 30px;
    padding-top: 30px;
    margin-top: 0%;
    margin-bottom: 1%;
    margin-right: 35%;
    margin-left: 35%;
    background-color:palegoldenrod;
    background:rgba(255,255,255,0.5);
  }
  .form_usertype {
    display: flex;
    justify-content: space-between;
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
</style>

