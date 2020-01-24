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
        window.console.log(`Good to see you, ${dude.name}.`)
      })
      window.console.log(response)
    },
    onSignInError (error) {
      window.console.log('OH NOES', error)
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