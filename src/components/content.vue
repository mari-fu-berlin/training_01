<template>
    <div id="content">
        <h1>{{contentObjects[currentPage].title.rendered}}</h1>
        <div class="page-content" v-html="contentObjects[currentPage].content.rendered"></div><!-- .pa
          ge-content -->
    </div><!-- #content -->
</template>

<script>
import axios from 'axios';
import {bus} from '../main';
export default {
  data () {
    return {
        currentPage: 0,
        contentObjects: []
    }
  },
  methods: {
    pageSelection: function (page){
      console.log("Neue Seite: " + page);
    }
  },
  created(){
    var app = this;
    bus.$on('changePageTo', (data) => {
      this.currentPage = data;
      console.log('Created: wähle Seite: ' + this.currentPage);
    }),
    axios.get("http://inhalte.mari-intern.de/wp-json/wp/v2/pages/")
      .then(function(response){
        app.contentObjects = response.data;
      })
      .catch(function(error){
        app.contentObject.content = "Keine Inhalte verfügbar";
      })
  }
}


</script>

<style scoped>
#content {
  color: #aaa;
}
</style>
