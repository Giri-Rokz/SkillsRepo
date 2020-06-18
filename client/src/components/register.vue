<template>
    <div id="registrationForm">  
        <div>
            <center><label for="username">Username : <input type="text" name="username" id="username"></label></center>
        </div>      
        <div>
            <center><label for="email">E-mail : <input type="email" name="email" id="email"></label></center>
        </div>
        <div>
            <center><label for="password">Password : <input type="password" name="password" id="password"></label></center>
        </div>
        <center><button type="button" id="signUp" @click="signUp">Sign Up</button></center>
        <div>
            <center>Already have an account? <router-link to="signIn">Sign In</router-link></center>
        </div>                
    </div>
</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex';

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
        ...mapActions(['showPopup','buildPopupMsg']),        
        signUp() {
            var postBody = {};
            Array.from(document.querySelectorAll('input')).forEach(node=>{
                postBody[node.name] = node.value;
            });
            axios.post('/signUp',postBody,{headers})
            .then(function(resp) {
                if(resp.data.status) {
                    this.showPopup(true);
                    this.buildPopupMsg("User registered successfully! Please proceed to sign in");
                }
            }.bind(this)).catch();
        }
    }
}
</script>

<style>

</style>