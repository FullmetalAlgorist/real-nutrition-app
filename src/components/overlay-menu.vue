 <template>
 <div class="overlay-menu">
   <div class="button_container"
   :class="{ xs : size, mU : moveUp }">
    <v-btn
    id="toggle" @click="openMenu"
    fab
    small
    flat
    :class="{active: isActive}">
      <v-icon large >{{ icon }}</v-icon>
    </v-btn>
</div>
    <div class="overlay" :class="{open: isOpen}" id="overlay">
      <nav class="overlay-menu" :class="{small : size,  med : medium, short: height , justMe: justMe}">
        <h1>Welcome to the</h1>
        <h1 class="health">HealthyHarvest</h1>
        <h1>Nutrition App Information Page!</h1>
        <ul>
          <li >Built By:<a href="https://en.wikipedia.org/wiki/Vin_Diesel" title="Mariah"> <span class="name">Mariah Vicary</span></a></li>
          <!-- <li>Is this all? -where are my location options and such?</li>
          <li>YES this is all... it's just a stupid little app I made, get over it</li> -->
          <br v-if="!height">
          <li>Seasonal produce lists & nutrition facts, brought to you by: <a class="padTop" href="https://snaped.fns.usda.gov/seasonal-produce-guide" title="Freepik">SNAP-Ed Connection:
U.S. Department of Agriculture</a>
          </li>

          <li class="box"> <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> and are licensed by: <a class="pt-1" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"><img class="cc" src="https://i.creativecommons.org/l/by/3.0/us/88x31.png"></a></div></li>
        </ul>
      </nav>
      </div>
      </div>
 </template>
 <script>
 export default {
     data(){
        return {
            isActive: false,
            isOpen: false,
            icon: 'info',
            moveUp : false
        }
     },
     methods:{
         openMenu(){
                this.isActive = !this.isActive;
                this.isOpen = !this.isOpen;
                if(this.icon === 'close'){
                  this.icon = 'info';
                  this.moveUp = false;
                }
                else{
                  this.icon = 'close';
                  if(this.size){
                    this.moveUp = true;
                  }
                  }
          }
         },
          computed: {
    size(){
        return this.$vuetify.breakpoint.xsOnly
    },
    medium(){
      return this.$vuetify.breakpoint.smOnly
    },
    height(){
      return this.$vuetify.breakpoint.height < 820
    },
    justMe(){
      // console.log(this.$vuetify.breakpoint.height);
      return (this.$vuetify.breakpoint.height === 731)
    }
          }
 }
 </script>

 <style lang="scss" scoped>

$color-main: #1abc9c;
$color-active: #FFF;
$color-link: #FFF;

$button-height: 22px;
$button-width: 29px;

.overlay-menu{
  z-index: 20;
  position: absolute;
  font-family: 'Ubuntu', sans-serif;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 40%;
  left: 0;
  margin:  0 auto;

  p {
    font-size: 15px;
  }

  a {
    display: inline-block;
    position: relative;
    text-align: center;
    color: $color-main;
    text-decoration: none;
    font-size: 20px;
    overflow: hidden;
    top: 5px;

    &:after {
      content: '';
      position: absolute;
      background: $color-main;
      height: 2px;
      width: 0%;
      transform: translateX(-50%);
      left: 50%;
      bottom: 0;
      transition: .35s ease;
    }
    &:hover:after,
    &:focus:after,
    &:active:after {
      width: 100%;
    }
  }
}

h1 {
  padding-left: 5%;
      padding-right: 5%;
  position: relative;
  text-align: center;
  //font-family: 'Baloo Chettan', cursive;
}

.button_container {
  top: 3px;
   position: fixed;
  cursor: pointer;
  z-index: 2 ;

  &:hover {
    opacity: .7;
  }
}

.overlay {
  position: fixed;
  background: $color-main;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity .35s, visibility .35s, height .35s;
  overflow: hidden;

  &.open {
    opacity: .9;
    visibility: visible;
    height: 100%;
    z-index: 1;

    li {
      padding-left: 5%;
      padding-right: 5%;
      animation: fadeInRight .5s ease forwards;
      animation-delay: .35s;

      &:nth-of-type(2) {
        animation-delay: .4s;
      }
      &:nth-of-type(3) {
        animation-delay: .45s;
      }
      &:nth-of-type(4) {
        animation-delay: .50s;
      }
    }
  }
  nav {
    position: relative;
    height: 75%;
    top: 40%;
    transform: translateY(-50%);
    font-size: 40px;
    //font-family: 'Varela Round', serif;
    font-weight: 400;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    //height: 100%;

    li {
      display: block;
      height: 25%;
      height: calc(100% / 4);
      min-height: 50px;
      position: relative;
      opacity: 0;
      padding-left: 5%;
      padding-right: 5%;

      a {
        display: block;
        position: relative;
        color: $color-link;
        text-decoration: none;
        overflow: hidden;

        &:hover:after,
         &:focus:after,
         &:active:after {
           width: 100%;
         }

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          transform: translateX(-50%);
          height: 3px;
          background: $color-link;
          transition: .35s;
        }
      }
    }
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}

.xs{
  // top: 55px;
  left: -5px;
}

.small{
  font-size: 25px !important;
}
.med{
  font-size: 30px !important;
}
.cc{
  width: 150px;
}
.name{
  font-family: 'Caveat', cursive;
  font-size: 150%;
  font-weight: bold;
}
.box{
  border: solid black 2px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}
.padTop{
  padding-top: 5%;
  font-weight: bold;
}
.mU{
  top: 5px;
}
.short{
  font-size: 22px !important;
}
.justMe{
  margin-top: 30px;
}
.health{
  font-family: 'Barriecito', cursive;
 font-size: 200%;
}
</style>

