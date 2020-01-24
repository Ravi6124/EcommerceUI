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
    onSignInSuccess (googleUser)
    {
      //const data={acessToken:googleUser.uc.access_token}
      window.console.log(googleUser)
      //this.$store.dispatch('sendToken',{data})
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      window.console.log('OH NOES', error)
    }
}
//}
}
 </script>
 <style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
   padding: 5px 10px;
  border-radius: 5px;
  background-color:dodgerblue;
  color:black;
 }
 </style>