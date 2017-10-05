<template>
    <div>
      <h1>Objekte</h1>
      <div class="items-list">
        <article>
          <h2>{{items[0].element_texts[2].text}}</h2>
          <div>{{items[0].element_texts[1].element_set.id}}</div>
        </article>
      </div><!-- .items-list -->
    </div>
</template>

<script>
import axios from 'axios';
import {bus} from '../main';
export default {
  data () {
    return {
      items: []

    }
  },
  methods: {

  },
  created(){
    var app = this;
    axios.get('http://grossstadtgeschichten-berlin.de/api/items')
      .then(function (response) {
      app.items = response.data;
      console.log(app.items);
        //app.items = response.data;

      })
      .catch(function (error) {
        console.log(error);
      });
  },
}


</script>

<style scoped>
  .items-list li {
    display: block;
  }
</style>
