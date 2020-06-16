<template>
  <div id="app">
    <center><h2>PeopleRepo</h2></center>
    <!--<SignIn></SignIn>-->
    <Register></Register>
  </div>
</template>

<script>
//import SignIn from './components/signIn';
import Register from './components/register';
export default {
  name: 'App',
  components: {Register}
  
}
</script>

<style>
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
</style>
