<template>
<div class="app">
  <v-app>
 <overlay></overlay>
<router-view></router-view>


  <!-- <img id="snail" ref="snaily" @click="click"  :src="currentImg"> -->

  <!-- <img id="globe" ref="globey" :src="globe"> -->

<!-- CREDIT ICONS -->
    <!-- <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->

  </v-app>
</div>

</template>
<script>
import { TweenMax } from "gsap"
import Vue from 'vue'

export default {

  mounted() {
 Vue.http.get('data.json').then(response => response.json()).then(data => {
      if (data){

        this.$store.dispatch('setSeasons', data);
      }
      })
  },
  data(){
    return {
      snail: false,
      // currentImg: "src/assets/glitchy/one.png",
      currentImg:  "../src/assets/colorSnail.png",
      firstImg: "../src/assets/snail.png",
      secondImg: "../src/assets/colorSnail.png",
      globeBlack:"../src/assets/globe.png" ,
      globe: "../src/assets/colorGlobe.png"

    }
  },
  methods: {
    sayHi() {
      alert('hi');
    },
    click(){
      if (this.currentImg == this.secondImg){this.currentImg = this.firstImg;}
      else{ this.currentImg = this.secondImg;}
    }

  },
  computed: {
    show(){
      console.log(this.currentSeason);
      return this.currentSeason;
    }
  }
  }

</script>

<style lang="scss">

//global styles
.app{
height: 100%;
}

div{
  font-weight: bold;
}

html, body {
  
  height: 100%;
}

body {

  font-size: 300%;
}
</style>
