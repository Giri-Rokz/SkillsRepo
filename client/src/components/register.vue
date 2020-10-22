<template>
    <v-container fluid>
        <v-form id="registrationForm">
            <v-row>
                <v-col cols="12">
                    <v-text-field placeholder="First Name" name="firstName" id="firstName"  outlined dense></v-text-field>
                    <v-text-field placeholder="Last Name" name="lastName" id="lastName"  outlined dense></v-text-field>
                    <v-text-field placeholder="E-mail" type="email" name="email" id="email"  outlined dense></v-text-field>
                    <v-text-field placeholder="Password" type="password" name="password" id="password"  outlined dense></v-text-field>
                </v-col>
                <v-col cols="12">
                    <center><v-btn color="primary" small dark id="signUp" @click="signUp">Sign Up</v-btn></center>
                </v-col>
                <v-col cols="12">
                    <center>Already have an account? <router-link to="signIn">Sign In</router-link></center>
                </v-col>
            </v-row>
        </v-form>
    </v-container> 
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