<template>
  <div class="menu">
    <v-btn large v-on:mouseover="outline(1)" @mouseleave="outline1 = false" :outline="outline1" :class="{ lg : size, out : outline1 }" class="warning" @click="showSummer">Summer</v-btn>
    <v-btn large v-on:mouseover="outline(2)" @mouseleave="outline2 = false" :outline="outline2" :class="{ lg : size, out : outline2} " class="error" @click="showFall">Fall</v-btn>
    <br v-if="tiny">
    <v-btn large v-on:mouseover="outline(3)" @mouseleave="outline3 = false" :outline="outline3" :class="{ lg : size, out : outline3, tin: tiny }" class="info" @click="showWinter">Winter</v-btn>
    <v-btn large v-on:mouseover="outline(4)" @mouseleave="outline4 = false" :outline="outline4" :class="{ lg : size, out : outline4, tin: tiny}" class="success" @click="showSpring">Spring</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
        break : this.$vuetify.breakpoint.xsOnly,
        outline1 : false,
        outline2 : false,
        outline3 : false,
        outline4 : false,
        tiny : false
    }
  },
  methods: {
    outline(x){
      if (x==1){
        console.log("NO");
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
    },
    showFall(){
      this.$router.push('/fall');
    },
    showWinter(){
      this.$router.push('/winter');
    },
    showSpring(){
      //this.currentSeason = this.spring;
      this.$router.push('/spring');
    },
    hover(){
      this.outline = !this.outline;
    }
  },
  computed: {
    size(){
      
      if(this.$vuetify.breakpoint.width < 390){
        this.tiny = true;
      }
      else{
        this.tiny = false;
      }
      return this.$vuetify.breakpoint.xsOnly
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
}
.lg{
  height: 50px;
  width: 90px;
  margin: 0;
}
.out{
  border-color: black !important;
  background-color: red;
}
.tin{
   margin-top: 10px;
   left: -4px;
}
</style>
