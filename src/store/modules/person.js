// initial state
const state = {
  persons: [
    { id: 1, name: "Grace" },
    { id: 2, name: "Raul" }
  ]
};

// getters
const getters = {
  getPersons: state => {
    return state.persons;
  }
};

export default {
  state,
  getters
};
