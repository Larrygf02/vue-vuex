// initial state
const state = {
  tareas: [
    { id: 1, name: "Aprender Go" },
    { id: 2, name: "Aprender graphql" }
  ]
};

// getters
const getters = {
  getTareas: state => {
    return state.tareas;
  }
};

export default {
  state,
  getters
};
