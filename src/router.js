import Vue from "vue";
import Router from "vue-router";
import Person from "./components/Person";
import Tarea from "./components/Tareas";
import About from "./views/About";
Vue.use(Router);

const routes = [
  { path: "/person", component: Person },
  { path: "/tarea", component: Tarea },
  { path: "/about", component: About }
];
export default new Router({
  mode: "history",
  routes
});
