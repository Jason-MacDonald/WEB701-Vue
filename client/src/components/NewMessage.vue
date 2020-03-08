<template>
  <v-flex sm8 xs10 offset-sm2 offset-xs1>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>New Message </v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                label="Message"
                v-model="messageBody"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "newmessage",
  data() {
    return {
      messageBody: ""
    };
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch("newMessage", this.messageBody);
      } catch (error) {
        console.error(error);
      }
      this.messageBody="";
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
