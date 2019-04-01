<template>
  <div class="menu">
    <div v-if="size" class="no">hi</div>
    <v-btn :class="{ lg : size }" class="warning" @click="showSummer">Summer</v-btn>
    <v-btn :class="{ lg : size }" class="error" @click="showFall">Fall</v-btn>
    <v-btn :class="{ lg : size }" class="info" @click="showWinter">Winter</v-btn>
    <v-btn :class="{ lg : size }" class="success" @click="showSpring">Spring</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
        break : this.$vuetify.breakpoint.xsOnly
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
.no{
  background-color: red;
}
.menu{
  background-color: transparent;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
}
.lg{
  height: 100px;
  width: 100px;
}
</style>


