<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
//import content from './components/content.vue';
//import navi from './components/navi.vue';
import home from './components/home.vue';
import literatur from './components/literatur.vue';

export default {
  name: 'app',
  components: {
      //'app-content': content,
      //'app-navi': navi
      'app-home': home,
      'app-literatur': literatur
  },
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
