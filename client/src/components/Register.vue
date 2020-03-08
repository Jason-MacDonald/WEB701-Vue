<template>
  <v-flex sm8 xs10 offset-sm2 offset-xs1>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Register </v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                label="User Name"
                v-model="username"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn class="mr-4" @click="register">Register</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "newmessage",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async register() {
        this.$store.dispatch("register", {username: this.username, password: this.password});
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0;
  max-width: 100%;
}
.v-btn {
  margin: 0px 0px 10px 10px;
}
</style>
