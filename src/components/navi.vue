<template>
  <nav>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/page/53" exact>Literatur</router-link>
    <router-link to="/page/51" exact>Archive</router-link>
    <router-link to="/items" exact>Objektliste</router-link>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created(){

    }
}


</script>

<style scoped>
nav {
  color: lightgreen;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
nav li {
  display: inline-block;
  margin-right: 6px;
}

</style>
