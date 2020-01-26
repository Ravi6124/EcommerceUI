<template>
  <form>
      <h1> Password Reset</h1>
<input type="email" placeholder="enter your email" ><br><br>
<input type="password" placeholder="enter new password" id="password"><br><br>
<input type="password" placeholder="confirm password" id="confirmpassword"><span id="cperror"></span><br><br>
             <button @click="forgot()"> submit</button>

  </form>
</template>

<script>
export default {
    methods:{
        forgot: function () {
            var b =document.getElementById('password').value;
            var c =document.getElementById('confirmpassword').value;
            if( b != c ){
                 document.getElementById('cperror').innerHTML='enter correct password'

            }
           
            else{
                alert('hie')
            }

        }
    }

}
</script>

<style>
input{
    width: 300px;
    text-align: center
}
form{
    border: 1px solid black;
    flex-direction: column;
    padding-left: 400px;
    
    background-color: blanchedalmond    
}
#cperror{
    color: red;
    font-size: 3px;
}


</style>