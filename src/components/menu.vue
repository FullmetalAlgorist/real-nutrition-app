<template>
  <div class="menu">
    <v-btn class="warning" @click="showSummer">Summer</v-btn>
    <v-btn class="error" @click="showFall">Fall</v-btn>
    <v-btn class="info" @click="showWinter">Winter</v-btn>
    <v-btn class="success" @click="showSpring">Spring</v-btn>
  </div>
</template>

<script>
export default {
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
  }
}
</script>
<style scoped>
.menu{
  background-color: transparent;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
}
</style>


