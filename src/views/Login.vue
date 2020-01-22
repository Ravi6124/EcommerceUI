<template>
  <main class="login">
    <h1>Login</h1>
    <form action="">
      <div>
        <br>
        <span>Email</span> <br>
        <input type="email" name="email"><br><br>
      </div>
      
      <div>
        <span>Password</span> <br>
        <input type="password" name="password"><br><br>
      </div>
      
      <div class="user_type">
        <label>
          <input type="radio" name="user" value="C" checked>Customer
        </label>
        <label>
          <input type="radio" name="user" value="M">Merchant
        </label>
      </div> <br>
      
      <button class="myBtn" :class="{'disabled': disableBtn}">Sign In</button><br><br>
      Not a user?<a href="/signup">SignUp</a><br>
      <a href="/forgot">Forgot your Password?</a>
      <br><br>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-google"></a>
    </form>
  </main>
</template>

<script>
export default {
    name: 'Login',
    data: function(){
    return {
      items: [],
      disableBtn: false
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
  input[type="email"]{
    width: 250px;
    height:25px;
  }
  input[type="password"]{
    width: 250px;
    height:25px;
  }
  input[type="radio"]{
    margin-right: 10px;
  }
  .heading{
    text-align: center;
    font-size: 2.5em;
  }
  form{
    text-align: center;
    border: 2px solid black;
    border-radius: 15px;
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
  .fa {
    padding: 20px;
    font-size: 30px;
    width:20px;
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
  }
  .fa:hover {
    opacity: 0.5;
  }
  .fa-facebook {
    background: #3B5998;
    color: white;
  }
  .fa-google {
    background: #dd4b39;
    color: white;
  }
</style>
