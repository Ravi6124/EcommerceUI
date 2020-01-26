    <template>
    <div>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes', 
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      window.FB.api('/me', dude => {
        window.console.log(`HELLOO, ${dude.name}.`)
      })
      window.console.log('hello...!',response.authResponse)
      const payload = {
          accessToken: response.authResponse.accessToken,
          loginType: localStorage.getItem('loginType')
      }
      window.console.log(payload)
      this.$store.dispatch('fb login',payload)
    },
    onSignInError (error) {
      window.console.log('wrong details', error)
    }
  }
}

</script>
<style>
.fb-signin-button  {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background-color:dodgerblue;
  color:black;
}
</style>