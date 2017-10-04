<template>
    <div id="navi">
        <ul id="navi-main">
          <li v-for="(page, index) in listOfPages" v-on:click="selectPage(index)">{{index}}. {{page.title.rendered}}</li>
        </ul><!-- #navi-main -->
    </div><!-- #content -->
</template>

<script>
import axios from 'axios';
import {bus} from '../main';

export default {
  data () {
    return {
      listOfPages: []
    }
  },
  methods: {
    selectPage: function(p){
      bus.$emit('changePageTo', 2);
      console.log("Select Page " + p)
    }
  },
  created(){
    var app = this;
    axios.get("http://inhalte.mari-intern.de/wp-json/wp/v2/pages/")
        .then(function(response){
          app.listOfPages = response.data;
          //console.log("Seiten: " + app.listOfPages[0].id);
        })
        .catch(function(error){
          app.contentObject.content = "Keine Seiten verfügbar";
      })
    }
}


</script>

<style scoped>
#navi-main {
  color: lightgreen;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
#navi-main li {
  display: inline-block;
  margin-right: 6px;
}

</style>
