<template>
  <v-flex sm8 xs10 offset-sm2 offset-xs1>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Message </v-toolbar-title>
      </v-toolbar>
      <v-card-text>{{ message.text }}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  async created() {
    this.message = (await this.$store.dispatch(
      "getMessage", 
      this.$route.params.id
      )).data;
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
