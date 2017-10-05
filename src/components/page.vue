<template>
    <div>
      <h1>{{page.title.rendered}}</h1>
      <article v-html="page.content.rendered"></article>
      <button v-on:click="getPage">Get Page</button>
    </div>
</template>

<script>
import axios from 'axios';
import {bus} from '../main';
export default {
  data () {
    return {
      id: '',
      page: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    getPage: function(){
      var app = this;
      app.id = app.$route.params.id;
      axios.get('http://inhalte.mari-intern.de/wp-json/wp/v2/pages/' + app.id)
        .then(function (response) {
          app.page = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      }
  },
  created(){
    //getPage();
    var app = this;
    app.id = app.$route.params.id;
    axios.get('http://inhalte.mari-intern.de/wp-json/wp/v2/pages/' + app.id)
      .then(function (response) {
        app.page = response.data;
        console.log("created");
      })
      .catch(function (error) {
        console.log(error);
      });
  },
}


</script>

<style scoped>

</style>
