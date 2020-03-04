import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cantidad: 0,
    frutas: [
      { id: "1", nombre: "Manzana", cantidad: 1 },
      { id: "2", nombre: "Pera", cantidad: 2 },
      { id: "3", nombre: "Naranja", cantidad: 3 }
    ]
  },
  getters: {
    cantidad: state => {
      return state.cantidad;
    },
    getFrutas: state => {
      return state.frutas;
    }
  },
  mutations: {
    aumentar: (state, cantidad) => (state.cantidad += cantidad),
    reducir: (state, cantidad) => (state.cantidad -= cantidad)
  },
  actions: {
    aumentarAsync: (context, cantidad) => {
      console.log(context, cantidad);
      setTimeout(() => context.commit("aumentar", cantidad), 1000);
    },
    reducirAsync: (context, valor) => {
      setTimeout(() => context.commit("reducir", valor.cantidad), 1000);
    }
  }
});
