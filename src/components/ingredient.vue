<template>
<div class="ingredient" :class="{xs: xs}" >

<v-img  class="icon" :src="currentIcon" @mouseover="color" @mouseleave="color"></v-img>
<h6 :class="{fS: xs}">{{ name }}</h6>
</div>

</template>
<script>
export default {
  props: ['specific'],
  data(){
    return {
      images : [],
      currentIcon: 'src/assets/graphics/produce/genericColor.png',
     icon: 'src/assets/graphics/produce/genericColor.png',
     linedIcon: 'src/assets/graphics/produce/generic.png'
    }
  },
  methods : {
    color(){
      if (this.currentIcon == this.icon){
          this.currentIcon = this.linedIcon;


      }else{
          this.currentIcon = this.icon;
      }
    }
  },
  computed: {
    xs(){
        return this.$vuetify.breakpoint.xsOnly ;
    },
    hR(){

    },
    name(){
      this.images = ['Apples','Apricots','Avocados','Asparagus','Bananas','Beets','Bell Peppers','Blackberries','Blueberries','Broccoli',
      'Brussels Sprouts','Cabbage','Cantaloupe','Carrots','Cauliflower','Celery','Cherries','Cranberries',
      'Collard Greens','Corn','Cucumbers','Eggplant','Garlic','Ginger','Grapefruit','Grapes','Green Beans','Honeydew Melon','Kale',
      'Kiwifruit','Leeks','Lemons','Lettuce','Lima Beans','Limes','Mangos','Mushrooms','Onions',
      'Oranges','Okra','Parsnips','Peaches','Pears','Peas','Pineapples',
      'Plums','Potatoes', 'Pumpkins','Radishes','Raspberries','Rhubarb','Rutabaga','Strawberries',
      'Spinach','Summer Squash','Sweet Potatoes & Yams','Swiss Chard','Turnips','Tomatoes','Watermelon','Winter Squash','Zucchini'];
        this.images.forEach(element => {if (this.specific == element){
          element = element.toLowerCase();
          if(element.lastIndexOf('s') == element.length-1){
            //get rid of s
             element = element.slice(0, element.length-1)

          }
          this.linedIcon = 'src/assets/graphics/produce/'+element+'.png';
          this.icon = 'src/assets/graphics/produce/'+element+'Color.png';
        }
        });

      this.currentIcon = this.icon;
      return this.specific;
    }
  }
}
</script>
<style lang="scss" scoped>
.ingredient{
//height: 80px;
width: 15vh;
margin: 10px;
}
.icon {
  /* padding: 10px; */

  // height: 180px;
  /* border: solid black;
border-radius: 100%; */
/* background-color: white; */
 margin-bottom: 10px;
//padding: 10px;
  //width: 5em;
width: 100%;

}
.xs{
width: 70px !important;

}
h6{
  /* display: none; */
   font-weight: bold;
   font-family: 'Ubuntu', sans-serif;
   text-align: center;
   
   margin: 0;

}
.fS{
  font-size: 30%;
}
.heightResize{

}
</style>
