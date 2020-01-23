<template>
  <main class="login">
    <h1>Login</h1>
    <form action="">
      <div class="form-input email"><br>
        <label class="label-text">Email</label> <br>
        <input type="email" name="email"><br><br>
      </div>
      
      <div class="form-input password">
        <label class="label-text">Password</label> <br>
        <input type="password" name="password"><br><br>
      </div>
      
      <div class="user_type">
        <label>
          <input type="radio" name="user" value="C" checked>Customer
        </label>
        <label>
          <input type="radio" name="user" value="M">Merchant
        </label>
      </div><br>
      <button class="myBtn" :class="{'disabled': disableBtn}" @click="login()">Sign In</button><br><br>
      Not a user?<a href="/signup">SignUp</a><br>
      <a href="/forgot">Forgot your Password?</a>
      <br><br>
      <div class="login_options">
        <a href="http://wwww.facebook.com" class="fb_icon"><img src="../assets/fb_icon.png" alt="fb_icon" height="50px" width="50px"></a>
        <a href="http://www.gmail.com"><img src="../assets/gmail_icon.png" alt="gmail_icon" height="50px" width="50px"></a>
      </div>
    </form>
    <div class="successful">{{ msg }}</div>
  </main>
</template>

<script>
export default {
    name: 'Login',
    data: function(){
      return {
        items: [],
        disableBtn: false,
        msg: ''
      }
    },
    methods: {
      login() {
        
      }
    }
  }
</script>

<style scoped>
  label{
    padding-right: 25px;
    padding-left: 0px;
    cursor: pointer;
  }
  h1{
    text-align: center;
  }
  input[type="email"], input[type="password"] {
   width: 100%; 
   height: 25px;
  }
  input[type="radio"]{
    margin-right: 10px;
  }
  .fb_icon{
    margin-right: 10%;
  }
  .login_options {
    display: flex;
    justify-content: center;
  }
  .heading{
    text-align: center;
    font-size: 2.5em;
  }
  form{
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
    padding-bottom: 40px;
    padding-top: 10px;
    margin-top: 0%;
    margin-bottom: .9%;
    margin-right: 33%;
    margin-left: 33%;
    background-color:palegoldenrod;
    background:rgba(255,255,255,0.5);
    position: relative;
  }
  .form-input {
    width: 70%;
    margin: 0 auto;
    text-align: left;
  }
  .label-text {
    font-weight: bold;
  }
  .successful {
    text-align: center;
    color: darkgreen;
  }
</style>
