<template>
<div class="app">

<router-view></router-view>


  <!-- <img id="snail" ref="snaily" @click="click"  :src="currentImg"> -->

  <!-- <img id="globe" ref="globey" :src="globe"> -->

<!-- CREDIT ICONS -->
    <!-- <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->


</div>
</template>
<script>
import { TweenMax } from "gsap"
import Vue from 'vue'

export default {

  mounted() {
    //const { snaily, globey } = this.$refs
     //TweenLite.to(snaily, 10, {x: '-=300%', ease:Power1.easeInOut, repeat: -1});
   //TweenLite.to(globey, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeInOut, delay: 2});

 Vue.http.get('data.json').then(response => response.json()).then(data => {
      if (data){

        this.$store.dispatch('setSeasons', data);
      //   this.winter = data.winter;
      //  this.spring = data.spring;
      //   this.summer = data.summer;
      //   this.fall = data.fall;
      }
      })
// TweenLite.to(boxy, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
// TweenLite.to(boxy, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
// TweenLite.to(boxy, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
// TweenLite.to(boxy, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
//add a callback function on start of tween
//onUpdate(every frame) and onComplete(once at end) are also available
//TweenLite.to(boxy, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4, onStart: this.sayHi});

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
  font-family: 'Open Sans', sans-serif;
}
</style>
