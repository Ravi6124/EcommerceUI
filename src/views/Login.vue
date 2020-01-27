<template>
  <main class="login">
    <h1>Login</h1>
    <form action="">
      <div class="form-input email"><br>
        <label class="label-text">Email</label> <br>
        <input type="email" name="email" v-model="email"><br><br>
      </div>
      
      <div class="form-input password">
        <label class="label-text">Password</label> <br>
        <input type="password" name="password" v-model="password"><br><br>
      </div>
      
      <div class="user_type">
        <label>
          <input type="radio" name="user" value="customer" v-model="role" checked>Customer
        </label>
        <label>
          <input type="radio" name="user" value="merchant" v-model="role">Merchant
        </label>
      </div><br>
      <button class="myBtn"  @click.prevent="login">Sign In</button><br><br>
      Not a user?<a href="/signup">SignUp</a><br>
      <a href="/forgot">Forgot your Password?</a>
      <br><br>
      <!-- <a href="#" @click="FacebookAuth" class="fa fa-facebook"></a>
      <a href="#" @click="googleauth" class="fa fa-google"></a> -->
      <div class="login_options">
        <a @click="FacebookAuth" class="fb_icon"><img src="../assets/fb_icon.png" alt="fb_icon" height="50px" width="50px"></a>
        <a @click="googleauth"><img src="../assets/gmail_icon.png" alt="gmail_icon" height="50px" width="50px"></a>
      </div>
    </form>
    <div class="successful">{{ msg }}</div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Login',
    data: function(){
      return {
        items: [],
        disableBtn: false,
        msg: '',
        loginSource: ''
      }
    },
    computed: {
      ...mapGetters(["loginResponseGetter"]),
      loginRes() {
        return this.loginResponseGetter;
      }
    },
    methods: {
      googleauth: function() {
      //window.console.log("IN");
      // this.loginSource= 'google';
      if(!(this.role)){
          this.msg = "Please select a role";
          return false;
        }
      this.$store.dispatch("googleAuth",{
        params: {
          role: this.role
        },
        success: this.loginSuccess
      });
      },
      FacebookAuth: function() {
        // this.loginSource = 'facebook';
        // window.console.log(this.$store)
        if(!(this.role)){
          this.msg = "Please select a role";
          return false;
        }
        this.$store.dispatch("fbAuth",{
          params: {
            role: this.role
          },
          success: this.loginSuccess
        });
      },
      loginSuccess() {
        if(this.loginRes.statusCode==800){
          this.msg = this.loginRes.message;
        }else if(this.loginRes.statusCode==1000){
          localStorage.setItem('userEmail', this.loginRes.emailAddress)
          localStorage.setItem('userRole', this.role)
          localStorage.setItem('userId', this.loginRes.userId)
          //store email in local storage
          //if customer is logged in redirect to customer portion
          //if merchant is logged in redirect to merchant home
          this.$store.state.loginStatus = localStorage.getItem('userRole');
          //this.$router.push({name : 'userhome'})
          if(this.role=='customer'){
          this.$router.go(-1);
          } else {
            this.$router.push({name: 'merchanthome'})
          }
        }
      },
      login() {
        this.loginSource = 'local'

        if (!(this.password && this.email && this.role)) {
          window.console.log('function call!!')
          this.msg = 'All above fields are required';
          return false;
        }

        let email = this.email;
        let password = this.password;
        let role = this.role;

        let data = {
        emailAddress: email,
        password: password,
        role: role,
        guestId: localStorage.getItem('userId'),
        loginSource: this.loginSource,
        type: 'web'
        };

          window.console.log(data)
        this.$store.dispatch('login', {
          params: {
            data: data
          },
          success: this.loginSuccess
        });

        

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
    color: red;
  }
</style>
