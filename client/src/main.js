import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store.js";
import vueRouter from "vue-router";
import Messages from "./components/Messages";
import Message from "./components/Message";
import NewMessage from "./components/NewMessage";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";
import VueRouter from "vue-router";

Vue.use(vueRouter);

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/NewMessage",
    component: NewMessage,
  },
  {
    path: "/Message/:id",
    component: Message,
  },
  {
    path: "/Register",
    component: Register,
  },
  {
    path: "/Messages",
    component: Messages,
  },
  {
    path: "/Account",
    component: Account,
  },
];

const router = new VueRouter({ routes, mode: "history" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
