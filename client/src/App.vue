<template>
  <v-app>
    <v-app-bar app>
      <v-container fluid>
        <center><h2>SkillsRepo</h2></center>
      </v-container>  
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <router-view></router-view>
            <Popup></Popup>
          </v-col>
        </v-row>
      </v-container>    
    </v-main>
  </v-app>
</template>

<script>
import Popup from './components/popup';

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {Popup},
  computed: {},
  methods: {
    
  }
}
</script>

<style lang="scss">
html,body {
  height: 100%;
  margin: 1%;
}
body {
  display: flex;  
  flex-direction: column;
}
* {
  box-sizing: border-box;
}
.hidden {
  display: none;
}
</style>
