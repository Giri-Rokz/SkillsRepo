<template>
    <div id="registrationForm">  
        <div>
            <center><label for="username">Username : <input type="text" name="username" id="username"></label></center>
        </div>      
        <div>
            <center><label for="email">E-mail : <input type="text" name="email" id="email"></label></center>
        </div>
        <div>
            <center><label for="password">Password : <input type="text" name="password" id="password"></label></center>
        </div>
        <center><button type="button" id="signUp" @click="signUp">Sign Up</button></center>
        <div>
            <center>Already have an account? <a href="#" id="signIn" @click="signIn">Sign In</a></center>
        </div>                
    </div>
</template>

<script>
import axios from 'axios';
const headers = {
  'Content-Type': 'application/json'
}
export default {
    name: 'Register',
    data: function() {
        return {

        }
    },
    methods: {
        signIn: function() {
            
        },
        signUp() {
            var postBody = {};
            Array.from(document.querySelectorAll('input')).forEach(node=>{
                postBody[node.name] = node.value;
            });
            axios.post('/signUp',postBody,{headers})
            .then().catch();
        }
    }
}
</script>

<style>

</style>