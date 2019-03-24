 <template>
 <div class="overlay-menu">
    
    <div @click="openMenu" :class="{active: isActive}" class="button_container" id="toggle">
    <span class="top"></span>
    <span class="middle"></span>
    <span class="bottom"></span>
    </div>

    <div class="overlay" :class="{open: isOpen}" id="overlay">
      <nav class="overlay-menu">
        <!-- <ul>
          <li @click="openMenu"><nuxt-link  to="/landing">Home</nuxt-link></li>
          <li @click="openMenu"><nuxt-link to="/about">About</nuxt-link></li>
          <li><a href="#">Website Design</a></li>
           <li @click="openMenu"><nuxt-link to="/photography"> Nature Photography</nuxt-link></li>
          <li @click="openMenu"><nuxt-link to="/insta"> Instagram</nuxt-link></li>
        
        </ul> -->
        <h1>FAQs</h1>
        <ul>
          <li>1: wtf hi</li>
          <li>2: wtf hi</li>
          <li>3: wtf hi</li>
          <li>4: wtf hi</li>
          <li>5: wtf hi</li>
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
            isOpen: false       
        }
     },
     methods:{
         openMenu(){
                this.isActive = !this.isActive;
                this.isOpen = !this.isOpen;
             }
         }
 }
 </script>
 
 <style lang="scss" scoped>

$color-main: #1abc9c;
$color-active: #FFF;
$color-link: #FFF;

$button-height: 27px;
$button-width: 35px;

.overlay-menu{
  z-index: 20;
   position: absolute;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 40%;
  left: 0;
  margin:  0 auto;
  font-family: 'Varela Round', sans-serif;
  

  p {
    font-size: 20px;
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
  position: relative;
  text-align: center;
  font-family: 'Varela Round', serif;
}

.button_container {
  position: fixed;
  top: 2.4%;
  right: 2%;
  height: $button-height;
  width: $button-width;
  cursor: pointer;
  z-index: 2 ;
  transition: opacity .25s ease;
  
  &:hover {
    opacity: .7;
  }
  
  &.active {
    .top {
      transform: translateY(11px) translateX(0) rotate(45deg);
      background: $color-active;
    }
    .middle {
      opacity: 0;
      background: $color-active;
    }
    
    .bottom {
      transform: translateY(-11px) translateX(0) rotate(-45deg);
      background: $color-active;
    }
  }
  
  span {
  background: $color-main;
  border: none;
  height: 5px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  transition:  all .35s ease;
  cursor: pointer;
    
    &:nth-of-type(2) {
      top: 11px;
    }
    
    &:nth-of-type(3) {
      top: 22px;
    }
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
    height: 70%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    font-family: 'Varela Round', serif;
    font-weight: 400;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    height: 100%; 
    
    li {
      display: block;
      height: 25%;
      height: calc(100% / 4);
      min-height: 50px;
      position: relative;
      opacity: 0;
      
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
//    span {
//   background: $color-main;
//   border: none;
//   height: 5px;
//   width: 100%;
//   position: absolute;
//   top: -35px;
//   left: 0;
//   transition:  all .35s ease;
//   cursor: pointer;
    
//     &:nth-of-type(2) {
//       top: -24px;
//     }
    
//     &:nth-of-type(3) {
//       top: -13px;
//     }
//   }
// }
</style>

