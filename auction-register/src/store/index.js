import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auctions: [{ name: "Test Item", description: "This is a test item." }],
  },
  mutations: {
    addAuction(state, newAuction) {
      state.auctions.push(newAuction);
    },
  },
  actions: {
    addAuction({ commit }, newAuction) {
      commit("addAuction", newAuction);
    },
  },
  modules: {},
});
