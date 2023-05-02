import Vue from "vue";
import Vuex from "vuex";
import todoSection from "./modules/todoSection";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}, 
  modules: {
    todoSection,
  },
});
