<template>
  <main class="signup">
    <h1>Create Account</h1>
    <form action="" name="signup">
      <div class="form-input form__email">
        <span class="label-text">Email</span> <br>
        <input type="email" name="email" v-model="email" required> <br><br>
      </div>

      <div class="form-input form__password">
        <span class="label-text">Password</span><br>
        <input type="password" name="password" v-model="password" required> <br><br>
      </div>

      <div class="form-input form__confirm">
        <span class="label-text">Confirm Password</span> <br>
        <input type="password" name="confirm_password" v-model="cpwd" required> <br><br>
      </div>

      <div class="user_type">
        <label>
          <input type="radio" name="user" value="C" checked>Customer
        </label>
        <label>
          <input type="radio" name="user" value="M">Merchant
        </label>
      </div><br>
      
      <button class="myBtn" :class="{'disabled': disableBtn}" @click.prevent="postUserData()">SignUp</button>
      <br><br>
    </form><br>
    <div class="created">{{ created }}</div>
    <div class="error">{{ error }}</div>
  </main>
</template>

<script>
const axios = require('axios');
export default {
  name: 'SignUp',
  data: function(){
    return {
      items: [],
      email: '',
      password: '',
      cpwd: '',
      userType: 'C',
      created: '',
      error: ''
    }
  },
  methods: {
    postUserData() {
      if (this.password != this.cpwd){
        this.error = 'Passwords do not match!!'
        this.created = ''
        return false;
      }
      const email = this.email;
      const password = this.password;
      const userType = this.userType;

      const data = {
        email,
        password,
        userType
      };
      axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(res => {
          window.console.log("res: ", res);
          return res;
        });
      this.created = 'Account Created Successfully';
      this.error = ''
      }
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
    border: 2px solid black;
    border-radius: 15px;
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

