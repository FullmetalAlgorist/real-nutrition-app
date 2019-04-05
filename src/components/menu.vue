<template>
  <div class="menu">
    <v-btn large v-on:mouseover="hover1 = true" @mouseleave="falsee" :outline="!outline1" :class="{ lg : size, out : !outline1, widen: wide }" class="warning" @click="showSummer">Summer</v-btn>
    <v-btn large v-on:mouseover="hover2 = true" @mouseleave="falsee" :outline="!outline2" :class="{ lg : size, out : !outline2, widen: wide } " class="error" @click="showFall">Fall</v-btn>
    <br v-if="tiny">
    <v-btn large v-on:mouseover="hover3 = true" @mouseleave="falsee" :outline="!outline3" :class="{ lg : size, out : !outline3, tin: tiny, widen: wide }" class="info" @click="showWinter">Winter</v-btn>
    <v-btn large v-on:mouseover="hover4 = true" @mouseleave="falsee" :outline="!outline4" :class="{ lg : size, out : !outline4, tin: tiny, widen: wide }" class="success" @click="showSpring">Spring</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
        break : this.$vuetify.breakpoint.xsOnly,
        hover1 : false,
        hover2 : false,
        hover3 : false,
        hover4 : false,
        tiny : false,
        wide : false
    }
  },
  methods: {
    outline(x){
      if (x==1){
        this.outline1 = true;
      }if (x==2){
        this.outline2 = true;
      }if (x==3){
        this.outline3 = true;
      }if (x==4){
        this.outline4 = true;
      }
     },
     showSummer(){
      this.$router.push('/summer');
        this.outline1 = true;
    },
    showFall(){

      this.$router.push('/fall');
       this.outline2 = true;
    },
    showWinter(){
      this.outline3 = true;
      this.$router.push('/winter');
    },
    showSpring(){
      this.outline4 = true;
      //this.currentSeason = this.spring;
      this.$router.push('/spring');
    },
    hover(){
      this.outline = !this.outline;
    },
    falsee(){
 this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
    }
  },
  computed: {
    outline1(){
      return (this.$route.path === '/summer' || this.hover1)
      },
    outline2(){
    return (this.$route.path === '/fall' || this.hover2)
    },
    outline3(){
      return (this.$route.path === '/winter' || this.$route.path === '/' || this.hover3)
    },
    outline4(){
      return (this.$route.path === '/spring' || this.hover4)
    },
    size(){
        this.tiny = (this.$vuetify.breakpoint.width < 380);
        this.wide = (this.$vuetify.breakpoint.width > 500)
      return true
      //this.$vuetify.breakpoint.xsOnly
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
<style scoped>
.menu{
  background-color: transparent;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  padding-top: 10px;
}
.lg{
  height: 50px;
  width: 90px;
  margin: 0;
}
.out{
  border-color: black !important;
  border-width: 4px;
}
.tin{
   margin-top: 10px;
   left: -4px;
}
.widen{
  margin-left:  2vw;
  margin-right: 2vw;
  width: 17vw !important;
}
</style>
