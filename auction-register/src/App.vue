<template>
  <v-app>
    <v-content>
      <h3 class="mt-5 ml-5">Add New Auction Form</h3>

      <v-row class="px-5">
        <v-text-field
          class="mx-5"
          v-model="name"
          label="Item Name"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          class="mx-5"
          v-model="description"
          label="Item Description"
        ></v-text-field>
        <v-btn class="mx-5" @click="addAuction">Add Auction Item</v-btn>
      </v-row>
      <h3 class="mt-5 ml-5">Auction Items</h3>

      <div v-for="(item, index) in this.$store.state.auctions" :key="index">
        <v-row class="px-5">
          <v-text-field class="px-5" type="text" :value="item.name" />
          <v-text-field class="px-5" type="text" :value="item.description" />
        </v-row>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    name: "",
    description: "",
    auctions: [],
  }),
  methods: {
    addAuction() {
      let item = {
        name: this.name,
        description: this.description,
      };
      this.$store.dispatch("addAuction", item);
    },
  },
};
</script>
