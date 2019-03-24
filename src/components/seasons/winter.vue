<template >
  <div class="winter">
    <app-menu></app-menu>
    <grid
    :items="ingredients"
    :cellWidth="cellWidth"
    :cellHeight="cellHeight"
    center=true>
      <template slot="cell" scope="props" >
        <ingredient :specific="props.item"></ingredient>
      </template>
    </grid>
  </div>
</template>
<script>
export default {
  created() {
   // window.addEventListener('mousewheel', this.handleScroll);
  },
    destroyed: function () {
     //  window.removeEventListener('mousewheel', this.handleScroll);
    },
 data () {
  return {
    items: [
      'a',
      'b',
      'c'
    ],
    cellWidth: 170,
    cellHeight: 180,
    selected: ''

    }
},
  computed: {
    ingredients(){
      return this.$store.getters.getWinter
    },
    current(){

      return '';
    }
  },
  methods: {
    update(){
     // this.selected = item;
      console.log('hi');
    }
    ,
    handleScroll(e){
      this.delta = Math.max(-1,Math.min(1,(e.wheelDelta)));
this.$refs["scrollDiv"].scrollLeft -= (this.delta*50);
      //window.scrollX -= e.wheelDelta*30;
      e.preventDefault();
      console.log('e:');
       console.log(e);
    }
  }
}
</script>
<style lang="scss" scoped>

.winter{
  //background-color: #17a2b882;
 // background: #136a8a; /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #136a8a, #267871); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #136a8a, #267871); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: #E6DADA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top right, #274046, #E6DADA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top right, #274046, #E6DADA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 100%;
}

</style>
