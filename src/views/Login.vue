<template>
  <main class="login">
    <br>
    <div class="heading">
      Login
    </div>
    <br>
    <div class="box">
      <!-- <img src="signuplogo.jpeg" width="60px" height="60px" > -->
      <label>Email</label> <br>
      <input type="email" name="email"> <br><br>
      <label>Password</label> <br>
      <input type="password" name="password"> <br><br>
      <input type="radio" name="user" value="M">Merchant
      <input type="radio" name="user" value="C">Customer
      <br> <br>
      <button>Sign In</button><br><br>
      Not a user?<a href="#">SignUp</a><br>
      <a href="#">Forgot your Password</a>
      <br><br>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-google"></a>
    </div>
    <br><br>
  </main>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped>
  body{
    margin: 0%;
    padding: 0%;
    /* background-image: url(mainimg.jpeg); */
    background-repeat: no-repeat;
    background-size: 100%;
  }
  h1{
    text-decoration: underline;
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
    padding-right: 10px;
  }
  .heading{
    text-align: center;
    font-size: 2.5em;
  }
  .box{
    text-align: center;
    border: 2px solid black;
    border-radius: 15px 50px;
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
