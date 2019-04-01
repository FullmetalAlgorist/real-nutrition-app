<template>
 <div class="spring">
   <app-menu></app-menu>
<grid
  :items="ingredients"
:cellWidth="cellWidth"
:cellHeight="cellHeight"
  class="grid"
  :center="cent"
  >
  <template  slot="cell" slot-scope="props">
   <ingredient  :specific="props.item"></ingredient>

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
    cellWidth: 220,
    cellHeight: 275,
    selected: '',
    cent: true
    }
},
  computed: {
    ingredients(){
      return this.$store.getters.getSpring;
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

.spring{
  //background-color: #17a2b882;
 background: #56ab2f;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom right, #a8e063, #56ab2f);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom right, #d3fca2, #65bd3c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// background: #FDFC47;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #24FE41, #FDFC47);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #24FE41, #FDFC47); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// height: 100%;
}
.in{
  width: 150px;
}


</style>
