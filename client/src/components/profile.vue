<template>
    <v-container fluid>
       <center><p>Welcome {{getProfileInfo.firstName}} {{getProfileInfo.lastName}}</p></center>
    </v-container>    
</template>

<script>
//import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
    name: 'profile',
    data() {
        return {
            knownSkills: [],
            wantToLearn: [],
        }
    },
    computed: {
        ...mapGetters(['getProfileInfo'])
    }
}
</script>

<style scoped>

</style>