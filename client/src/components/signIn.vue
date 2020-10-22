<template>
    <v-container class="" fluid>
        <v-form id="signInForm">
            <v-row>
                <v-col cols="12">
                    <center><h4>Welcome Back! Sign in to your profile</h4></center>
                </v-col>    
                <v-col cols="12">    
                    <center>
                        <v-text-field placeholder="E-mail" name="email" id="email"  outlined dense></v-text-field>
                    </center>
                    <center>
                        <v-text-field placeholder="Password" type="password" name="password" id="password" outlined dense></v-text-field>
                    </center>
                </v-col>
                <v-col cols="12">
                    <center><v-btn color="primary" small dark id="signIn" @click="getUserInfo">Sign In</v-btn></center>
                </v-col>
                <v-col cols="12">
                    <center>New User? <router-link to="signUp">Sign Up</router-link> here</center>
                </v-col>
            </v-row>
        </v-form>
    </v-container>  
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'SignIn',
    data: function() {
        return {}
    },
    methods: {
        ...mapActions(['signIn']),
        getUserInfo: function() {
            var postBody = {};
            Array.from(document.querySelectorAll('input')).forEach(node=>{
                postBody[node.name] = node.value;
            });
            this.signIn({postBody});
        }
    }
}
</script>

<style>

</style>