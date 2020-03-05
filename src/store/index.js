import Vue from "vue";
import Vuex from "vuex";
import person from "./modules/person";
import tarea from "./modules/tareas";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    person,
    tarea
  }
});
