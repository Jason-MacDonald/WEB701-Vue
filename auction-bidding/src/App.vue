<template>
  <v-app>
    <v-content>
      <v-row class="mx-5 mt-5">
        <v-btn class="ma-2" @click="dec">-</v-btn>
        <v-text-field type="number" label="Bid" outlined v-model="currentBid"></v-text-field>
        <v-btn class="ma-2" @click="inc">+</v-btn>
      </v-row>
      <div class="px-5">
        <v-btn block @click="place">Place Bid</v-btn>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    currentBid: 0
  }),
  methods: {
    dec() {
      this.currentBid -= 1;
      console.log(this.currentBid);
    },
    inc() {
      this.currentBid += 1;
      console.log(this.currentBid);
    },
    place() {
      alert("Placing Bid");
    }
  }
};
</script>
