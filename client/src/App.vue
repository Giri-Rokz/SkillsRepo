<template>
  <div id="app">
    <center><h2>PeopleRepo</h2></center>
    <router-view></router-view>
    <Popup></Popup>    
  </div>
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
