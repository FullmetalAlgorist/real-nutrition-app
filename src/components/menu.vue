<template>
  <div class="menu">
  <b-button class="summer btn btn-lg btn-warning" @click="showSummer" >Summer</b-button>
  <b-button class="fall btn btn-lg btn-danger" @click="showFall">Fall</b-button>
  <b-button class="winter btn btn-lg btn-info" @click="showWinter">Winter</b-button>
  <b-button class="spring btn btn-lg  btn-success" @click="showSpring">Spring</b-button>

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
}
</style>


