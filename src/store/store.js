import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
   state : {
    spring: [],
    fall: [],
    winter: [],
    summer: []
  },
  getters : {
    getSpring: state => {
      return state.spring;
    },
    getFall: state => {
      return state.fall;
    },
    getWinter: state => {
      return state.winter;
    },
    getSummer: state => {
      return state.summer;
    },
  },
  actions : {
    setSeasons: ({ commit }, seasons) => {
      commit('SET_SEASONS', seasons);
    },
  },
  mutations : {
    'SET_SEASONS' (state, seasons) {
      state.spring = seasons.spring;
      state.fall = seasons.fall;
      state.winter = seasons.winter;
      state.summer = seasons.summer;
    }
  }
})
