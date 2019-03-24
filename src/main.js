import Vue from 'vue'
// import 'bootstrap-css-only/css/bootstrap.min.css'
// import 'mdbvue/build/css/mdb.css'

import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Ingredient from './components/ingredient.vue'
import Summer from './components/seasons/summer.vue'
import Fall from './components/seasons/fall.vue'
import Winter from './components/seasons/winter.vue'
import Spring from './components/seasons/spring.vue'
import overlayMenu from './components/overlay-menu'
import Menu from './components/menu.vue'
import store from './store/store'
import Grid from 'vue-js-grid'

Vue.use(Grid);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueRouter);



Vue.component('ingredient', Ingredient);
Vue.component('app-menu', Menu);
Vue.component('overlay', overlayMenu);

Vue.http.options.root = 'https://produce-6c2b0.firebaseio.com/'

const routes = [
  //hack home defaults to winter:
   { path: '', component: Winter },
  { path: '/summer', component: Summer },
  { path: '/fall', component: Fall },
  { path: '/winter', component: Winter },
  { path: '/spring', component: Spring }
]

const router = new VueRouter({
  routes,
   mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
