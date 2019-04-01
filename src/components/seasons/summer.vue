<template>
  <div class="summer">
    <app-menu></app-menu>
    <grid
      :items="ingredients"
      :cellWidth="cellWidth"
      :cellHeight="cellHeight"
      class="grid"
      :center = "cent"
      >
        <template slot="cell" slot-scope="props">
          <ingredient :specific="props.item"></ingredient>
        </template>
    </grid>
  </div>
</template>
<script>
export default {
 data () {
  return {
    items: [
    ],
    selected: '',
    cellWidth: 220,
    cellHeight: 275,
    cent: true
    }
},
  computed: {
    ingredients(){
      return this.$store.getters.getSummer;
    },
    current(){
      return '';
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.summer{
  //background-color: #17a2b882;
 // background: #136a8a; /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #136a8a, #267871); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #136a8a, #267871); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: #F09819;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom right, #EDDE5D, #F09819);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom right, #EDDE5D, #F09819); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// height: 100%;
}
</style>

