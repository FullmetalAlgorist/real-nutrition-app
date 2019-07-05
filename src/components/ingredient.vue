<template>
<div class="ingredient" :class="{xs: xs}" >

<v-img  class="icon" :src="currentIcon" @click="modalMe" @mouseover="color" @mouseleave="color"></v-img>
<h6 :class="{fS: xs}">{{ name }}</h6>
 <v-dialog
      v-model="dialog"
      width= "60vh"
      
    >
      <v-card class="modalMe" >
         <v-img
          class="white--text"
         
          :src="nutrition"
        >
         </v-img>
        
      </v-card>
    </v-dialog>

</div>
</template>
<script>
export default {
  props: ['specific'],
  data(){
    return {
      images : ['Apples','Apricots','Avocados','Asparagus','Bananas','Beets','Bell Peppers','Blackberries','Blueberries','Broccoli',
      'Brussels Sprouts','Cabbage','Cantaloupe','Carrots','Cauliflower','Celery','Cherries','Cranberries',
      'Collard Greens','Corn','Cucumbers','Eggplant','Garlic','Ginger','Grapefruit','Grapes','Green Beans','Honeydew Melon','Kale',
      'Kiwifruit','Leeks','Lemons','Lettuce','Lima Beans','Limes','Mangos','Mushrooms','Onions',
      'Oranges','Okra','Parsnips','Peaches','Pears','Peas','Pineapples',
      'Plums','Potatoes', 'Pumpkins','Radishes','Raspberries','Rhubarb','Rutabaga','Strawberries',
      'Spinach','Summer Squash','Sweet Potatoes & Yams','Swiss Chard','Turnips','Tomatoes','Watermelon','Winter Squash','Zucchini'],
      currentIcon: 'src/assets/graphics/produce/genericColor.png',
     icon: 'src/assets/graphics/produce/genericColor.png',
     linedIcon: 'src/assets/graphics/produce/generic.png',
     //currentNutrition: 'src/assets/graphics/nutrition/apple.png',
     nutrition: 'src/assets/graphics/nutrition/apple.png',
     //simpleName: '',
    dialog: false
    }
  },
  methods : {
    color(){
      if (this.currentIcon == this.icon){
          this.currentIcon = this.linedIcon;
      }else{
          this.currentIcon = this.icon;
      }
    },
    modalMe(){
          this.dialog = true;
    }
  },
  computed: {
    xs(){
        return this.$vuetify.breakpoint.xsOnly ;
    },
    name(){
        this.images.forEach(element => {if (this.specific == element){
          element = element.toLowerCase();
          if(element.lastIndexOf('s') == element.length-1){
            //get rid of s
             element = element.slice(0, element.length-1)
          }
          this.linedIcon = 'src/assets/graphics/produce/'+element+'.png';
          this.icon = 'src/assets/graphics/produce/'+element+'Color.png';
            this.nutrition = 'src/assets/graphics/nutrition/'+element+'.png';
        //console.log('icons set');
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
 margin-bottom: 10px;
width: 100%;
}
.xs{
width: 70px !important;

}
h6{
   font-weight: bold;
   font-family: 'Ubuntu', sans-serif;
   text-align: center;
   margin: 0;
}
.fS{
  font-size: 30%;
}
.modalMe{
  font-size: 14px !important;
  font-weight: bold;
  text-align: center;
  border: 3px solid black;
 background-color: rgba(201, 201, 201, 0.8);
 background-size: cover;
 background-blend-mode: screen; //screen //lighten //overlay //
}
.headliner{
  text-align: center;
  display:inline-flex;
  padding-bottom: 0;
  font-weight: bold;
}
.dial{
 font-weight: bold;
}
</style>
