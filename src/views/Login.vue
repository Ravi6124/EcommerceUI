<template>
  <main class="login">
    <br>
    <div class="heading">
      Login
    </div>
    <br>
    <div class="box">
      <table>

      </table>
      <label>Email</label>
      <input v-model="Email" type="text" placeholder="Enter name" ><br><br>
      <label>Password</label>
      <input v-model="password" type="password" placeholder="Enter password"><br><br>
      <div class="user_radios">
        <input @change="updateType" type="radio" name="user" value="M" >Merchant
        <input @change="updateType1" type="radio" name="user" value="C">Customer
      </div>
      <button @click="submit">Sign In</button><br><br>
      Not a user?<a href="#">SignUp</a><br>
      <button @click="$router.push('/forgotpassword')">forgotpassword ?</button>
      <br><br>
      <facebook></facebook>
      (OR)<br>
      <gmail></gmail>
    </div>
    <br><br>
  </main>
</template>

<script>
import Facebook from '@/views/facebook'
import gmail from '@/views/gmail'
export default {
    name: 'login',
    data: function () {
        return {
            Email: '',
            password: '',
            loginType: 'customer',
            loginType1:'merchant'
        }
    },
    components: {
    Facebook, gmail
    },
methods:
    {
        onSignIn:  function(googleUser) {
            var profile = googleUser.getBasicProfile();
            window.console.log('ID: ' + profile.getId()); 
            window.console.log('Name: ' + profile.getName());
            window.console.log('Image URL: ' + profile.getImageUrl());
            window.console.log('Email: ' + profile.getEmail()); 
        },
        submit() {
            let data = {
                email: this.username,
                password: this.password,
                loginType: this.loginType
            }
            this.$store.dispatch('loginUser', {
                data: data,
                success: function () {
                    window.console.log('successful...');
                },
                fail: function () {
                    window.console.log('failed o.');
                }
            })
        },
updateType () {
          localStorage.setItem('loginType',this.loginType1)
          
        },
        updateType1() {
          localStorage.setItem('loginType',this.loginType)
          
        }
      }

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
  input[type="text"]{
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
    margin-right: 33%;
    margin-left: 33%;
    background-color:palegoldenrod;
    background:rgba(255,255,255,0.5);
    position: relative;
  }
</style>
