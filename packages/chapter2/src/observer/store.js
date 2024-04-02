export class Store {
  constructor({ state, mutations, actions }) {
    this.state = state;
    this.mutations = mutations;
    this.actions = actions;
  }

  commit(action, payload) {
    this.mutations[`${action}`](this.state, payload);
  }
}
