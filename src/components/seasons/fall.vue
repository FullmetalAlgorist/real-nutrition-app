<template>
  <div class="fall">
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
    cent: true
    }
},
  computed: {
    cellWidth(){
      if(this.$vuetify.breakpoint.xsOnly){
        return 80;
      }
      else{
        return 220;
      }

    },
    cellHeight(){
      if(this.$vuetify.breakpoint.xsOnly){
        return (120);
      }
      else{
        return 275;
      }
    },
    ingredients(){
      return this.$store.getters.getFall;
    },
    current(){
      return '';
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.fall{
  background: #333333;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom
  right, #dd1818, #333333);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom right, #f3b3b3, #e96969); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;
}
  .grid{
   margin-top: 12px;
}
</style>
