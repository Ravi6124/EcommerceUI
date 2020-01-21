<template>
  <main class="signup">
    <br>
    <h1>Create Account</h1>
    <br>
    <form action="" name="signup">
      <div class="form__email">
        <span>Email</span> <br>
        <input type="Email" name="email"> <br> <br>
      </div>

      <div class="password">
        Password<br>
        <input type="password" name="password"> <br> <br>
      </div>

      <div class="confirm_pass">
        <span>Confirm Password</span> <br>
        <input type="password" name="confirm_password"> <br><br>
      </div>

      <div class="user_type">
        <input type="radio" name="user" value="C">Customer
        <input type="radio" name="user" value="M">Merchant <br><br>
      </div>
      <button>Sign Up</button>
    </form>
    
  </main>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style scoped>
  body{
    margin: 0%;
    padding: 0%;
    /* background-image: url(../assets/mainimg.jpeg); */
    background-repeat: no-repeat;
    background-size: 100%;
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
  form{
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
</style>