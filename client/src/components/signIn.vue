<template>
    <div id="signInForm">        
        <div>
            <center><label for="username">Username : <input type="text" name="username" id="username"></label></center>
        </div>
        <div>
            <center><label for="password">Password : <input type="text" name="password" id="password"></label></center>
        </div>
        <center><button type="button" id="signIn" @click="signIn">Sign In</button></center>
        <div>
            <center>New User? <a href="#" id="signUp" @click="signUp">Sign Up</a> here</center>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const headers = {
  'Content-Type': 'application/json'
}
export default {
    name: 'SignIn',
    data: function() {
        return {

        }
    },
    methods: {
        signIn: function() {
            var postBody = {};
            Array.from(document.querySelectorAll('input')).forEach(node=>{
                postBody[node.name] = node.value;
            });
            axios.post('/signIn',postBody,{headers})
            .then().catch();
        },
        signUp() {
           
        }
    }
}
</script>

<style>

</style>