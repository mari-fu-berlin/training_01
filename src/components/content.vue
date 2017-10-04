<template>
    <div id="content">
        <p>{{contentBody}}</p>
    </div><!-- #content -->
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      contentBody: 'Content aus ContentBody',
    }
  },
  created(){
    axios.get("http://inhalte.mari-intern.de/wp-json/wp/v2/pages/53")
      .then(function(response){
        console.log(response);
      })
  }
}


</script>

<style scoped>
#content {
  color: #aaa;
}
</style>
