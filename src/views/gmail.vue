<template>
<div>
<div class="g-signin2" data-onsuccess="onSignIn"></div>
</div>
</template>

<script>
export default {
    data (){
        return {
            name:''

        }
    }
},


    
 methods: {
        onSignIn:function(googleUser) {
            var profile = googleUser.getBasicProfile();
            window.console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            window.console.log('Name: ' + profile.getName());
            window.console.log('Image URL: ' + profile.getImageUrl());
            window.console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present
        },
        submitClicked () {
            let data = {
                email: this.username,
                password: this.password,
                loginType: this.loginType
            }
            this.$store.dispatch('loginUser', {
                data: data,
                success: function () {
                    window.console.log('login successful...');
                },
                fail: function () {
                    window.console.log('login failed ...');
                }
            })
        }
    }
}
</script>

<style>

</style>