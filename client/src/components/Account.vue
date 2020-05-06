<template>
  <v-flex sm8 xs10 offset-sm2 offset-xs1>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Account</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                label="User Name"
                v-model="username"
                required
                v-bind:placeholder="this.$store.state.account.username"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn class="mr-4" @click="submit">Update Account Info</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "account",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch("updateAccount", this.username);
      } catch (error) {
        console.error(error);
      }
    }
  },
  async created() {
    this.$store.dispatch("getAccount");
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
