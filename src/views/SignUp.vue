<template>
  <main class="signup">
    <!-- <img src="../assets/signuplogo.jpeg" width="60px" height="60px" > -->
    <h1>Create Account</h1>
    <div class="form">
      First Name<br>
      <input type="text"><br><br>
      Last Name<br>
      <input type="text" ><br>
      <br>
      Email<br>
      <input type="Email" ><br><br>
      Password<br>
      <input type="password"><br>
      <br>
      Confirm Password<br>
      <input type=" password"><br>
      <br>
      <br>
      <button>Sign Up</button>
    </div>
    
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
  input{
    width: 250px;
    height:25px;
  }
  .form{
    text-align: center;
    position: relative;
    border: 2px solid black;
    border-radius: 15px 50px;
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