<template>
<div class="app">
  <v-app>
    <v-content>
 <overlay></overlay>
<router-view></router-view>
</v-content>
  </v-app>
</div>
</template>
<script>
import { TweenMax } from "gsap"
import Vue from 'vue'

export default {
  mounted() {
    // console.log(this.$vuetify.breakpoint);
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
    },
     imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '220px'
        case 'sm': return '400px'
        case 'md': return '500px'
        case 'lg': return '600px'
        case 'xl': return '800px'
      }
    }
  }
  }

</script>

<style lang="scss">

//global styles
.app{

}

div{
  // font-weight: bold;
}

html, body {

  //height: 100%;
}

body {
  font-family: 'Ubuntu', sans-serif;
  //font-size: 200%;
  font-size: 5vh;
  font-weight: bold;

}
</style>
