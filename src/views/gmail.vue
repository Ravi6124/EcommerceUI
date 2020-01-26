<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>
 <script>
export default {
  data () {
    return {
    googleSignInParams: {
       client_id: '81022045716-f3lkljg67ekiltq7e4cf6352u3l3or7d.apps.googleusercontent.com'
      }
     }
  },
  methods:{
    onSignInSuccess (response)
    {
      window.console.log("welcome")
      window.console.log(response)
      const payload = {
          accessToken: response.uc.id_token,
          loginType: localStorage.getItem('loginType')
      }
       window.console.log(payload)
      this.$store.dispatch('gmaillogin',payload)
    },
   onSignInError (error) {
      window.console.log(' Try Again', error)
    }
}
}
 </script>
 <style>
.g-signin-button {
  display: inline-block;
   padding: 5px 10px;
  border-radius: 5px;
  background-color:dodgerblue;
  color:black;
 }
 </style>