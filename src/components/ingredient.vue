<template>
<div class="ingredient" :class="{xs: xs}" >

<v-img  class="icon" :src="currentIcon" @click="modalMe" @mouseover="color" @mouseleave="color"></v-img>
<h6 :class="{fS: xs}">{{ name }}</h6>
 <v-dialog
      v-model="dialog"
      width= "28vw"
      
    >
      <v-card class="modalMe" v-bind:style="{ backgroundImage: 'url(' + linedIcon + ')' }">
        <v-card-title class="headline headliner">Facts about {{ name }}!</v-card-title>
        <v-card-text>
          1.  They are so yummy!
          <br>
          2. Food Grade: A+
          <br>
          3. Calories: 100
          <br>
          4. Last line of  facts
        </v-card-text>

        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>

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
     linedIcon: 'src/assets/graphics/produce/generic.png',
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
        console.log('dialog');
          this.dialog = true;
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
