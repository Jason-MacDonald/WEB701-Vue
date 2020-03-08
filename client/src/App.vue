<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn v-if="$store.state.token" text to="/Messages">Messages</v-btn>
      <v-btn v-if="$store.state.token" text to="/NewMessage">New Message</v-btn>
      <v-spacer />
      <v-btn v-if="!$store.state.token" text to="/Register">Register</v-btn>
      <v-btn v-if="!$store.state.token" text to="/">Login</v-btn>
      <v-btn v-if="$store.state.token" text @click="$store.commit('logout')"
        >Logout</v-btn
      >
    </v-app-bar>
    <br />
    <v-content>
      <br />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  })
};
</script>
