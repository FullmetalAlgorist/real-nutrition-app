<template>
  <div class="menu">
    <v-btn v-on:mouseover="outline1 = true" @mouseleave="outline1 = false" :outline="outline1" :class="{ lg : size }" class="warning" @click="showSummer">Summer</v-btn>
    <v-btn v-on:mouseover="outline2 = true" @mouseleave="outline2 = false" :outline="outline2" :class="{ lg : size }" class="error" @click="showFall">Fall</v-btn>
    <v-btn v-on:mouseover="outline3 = true" @mouseleave="outline3 = false" :outline="outline3" :class="{ lg : size }" class="info" @click="showWinter">Winter</v-btn>
    <v-btn v-on:mouseover="outline4 = true" @mouseleave="outline4 = false" :outline="outline4" :class="{ lg : size }" class="success" @click="showSpring">Spring</v-btn>
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
        outline4 : false
    }
  },
  methods: {
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

</style>


