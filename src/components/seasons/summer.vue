<template>
 <div class="summer scrolling-wrapper">
    <app-menu></app-menu>

<b-container fluid class="grid ">
  <b-row>
    <b-col class="co" v-for="ingredient in ingredients" cols="4" xs="4" sm="2" md="1">
      <ingredient class="card" :specific="ingredient"></ingredient>
    </b-col>

  </b-row>
</b-container>


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
    selected: ''

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
.inline{
width:auto;
}

.summer{
  //background-color: #17a2b882;
 // background: #136a8a; /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #136a8a, #267871); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #136a8a, #267871); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: #F09819;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom right, #EDDE5D, #F09819);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom right, #EDDE5D, #F09819); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 100%;
}

.grid{
  // width: 50em;
}
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
     display: none;
  }

  .card {
    display: inline-block;
    background-color: transparent;
    border: none;

  }
 }
 .co{
   width: 10em;
 }

// .scrolling-wrapper-flexbox {
//   display: flex;
//   flex-wrap: nowrap;
//   overflow-x: auto;

//   .card {
//     flex: 0 0 auto;
//   }
// }

</style>
