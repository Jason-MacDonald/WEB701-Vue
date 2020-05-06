import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: {},
    messages: [],
    token: localStorage.getItem("token") || "",
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages;
    },
    newMessage(state, message) {
      state.messages.push(message);
    },
    addAccount(state, account) {
      state.account = account;
    },
    auth(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = "";
      localStorage.clear("token");
    },
  },
  actions: {
    async getMessages({ commit }) {
      let messages = (await axios.get("http://localhost:3000/messages")).data;
      commit("updateMessages", messages);
    },
    async getAccount({ commit }) {
      let account = (await axios.get("http://localhost:3000/account")).data;
      console.log(account);
      commit("addAccount", account);
    },
    async updateAccount(findouthowtoremoveme, username) {
      console.log(username);
      await axios.post("http://localhost:3000/account", { username: username });
    },
    async newMessage({ commit }, messageBody) {
      let msg = (
        await axios.post("http://localhost:3000/messages", {
          message: messageBody,
        })
      ).data;
      commit("newMessage", msg.message);
    },
    async getMessage(findouthowtoremoveme, id) {
      console.log(id);
      return axios.get(`http://localhost:3000/messages/${id}`);
    },
    async register({ commit }, registerData) {
      let token = (
        await axios.post("http://localhost:3000/register", registerData)
      ).data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth", token);
    },
    async login({ commit }, loginData) {
      let token = (await axios.post("http://localhost:3000/login", loginData))
        .data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth", token);
    },
  },
});
