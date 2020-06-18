<template>
    <div id="signInForm">        
        <div>
            <center><label for="username">Username : <input type="text" name="username" id="username"></label></center>
        </div>
        <div>
            <center><label for="password">Password : <input type="password" name="password" id="password"></label></center>
        </div>
        <center><button type="button" id="signIn" @click="signIn">Sign In</button></center>
        <div>
            <center>New User? <router-link to="signUp">Sign Up</router-link> here</center>
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
        }
    }
}
</script>

<style>

</style>