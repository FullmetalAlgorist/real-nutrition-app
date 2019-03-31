<template>
 <div class="spring">
   <app-menu></app-menu>
   <!-- <h1>{{ current }}</h1> -->
   <!-- <div class="scrolling-wrapper" ref="scrollDiv"> -->
  <!-- <div  class="card" :key="ingredient.id" v-for="ingredient in ingredients"> <ingredient  :specific="ingredient" >1</ingredient></div> -->

<!-- </div> -->
<grid
  :items="ingredients"
  @click="update"
:cellWidth="cellWidth"
:cellHeight="cellHeight"
  class="grid"
  :center="cent"
  >
  <!-- :height="100"
  :width="100" goes in grid element:
  :draggable="true"
  :sortable="true"
  -->
  <template  slot="cell" scope="props">
    <!-- <div>{{props.item}}</div> -->
   <ingredient  :specific="props.item"></ingredient>

  </template>
</grid>
 </div>
</template>
<script>
export default {
  created() {
    //window.addEventListener('mousewheel', this.handleScroll);
  },
    destroyed: function () {
       // window.removeEventListener('mousewheel', this.handleScroll);
    },
 data () {
  return {
    items: [
      'a',
      'b',
      'c'
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
    update(){
     // this.selected = item;
      console.log('hi');
    }
//     ,
//     handleScroll(e){
//       this.delta = Math.max(-1,Math.min(1,(e.wheelDelta)));
// this.$refs["scrollDiv"].scrollLeft -= (this.delta*50);
//       //window.scrollX -= e.wheelDelta*30;
//       e.preventDefault();
//       console.log('e:');
//        console.log(e);
//     }
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
