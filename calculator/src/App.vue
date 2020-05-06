<script>
export default {
  name: "App",

  data: () => ({
    height: 1,
    width: 1,
    length: 1,
    weight: 1,
    fragility: 1,
    zone: 1,
    freightCost: 0,
  }),

  methods: {
    getZoneCost() {
      if (this.zone == 1) return 0;
      else if (this.zone == 2) return 5;
      else if (this.zone == 3) return 10;
      else if (this.zone == 4) return 20;
    },
    getFragilityCost() {
      if (this.fragility == 1) return 0;
      else if (this.fragility == 2) return 10;
      else if (this.fragility == 3) return 50;
      else if (this.fragility == 4) return 100;
      else if (this.fragility == 5) return 500;
      else return 0;
    },
    getWeightCost() {
      if (this.weight < 5) return 5;
      else if (this.weight < 10) return 10;
      else if (this.weight < 15) return 15;
      else if (this.weight < 20) return 20;
      else if (this.weight < 25) return 25;
      else return 150;
    },
    isOversize() {
      if (this.height > 2000 || this.width > 2000 || this.length > 2000)
        return true;
      else return false;
    },
    calculateFreight() {
      let freightCost = 0;

      if (this.isOversize() == true) {
        freightCost += 20; // $
      }
      freightCost += this.getWeightCost();
      freightCost += this.getFragilityCost();
      freightCost += this.getZoneCost();
      this.freightCost = freightCost;
      console.log(freightCost);
    },
  },
};
</script>

<template>
  <v-app>
    <v-content>
      <div>
        <form>
          <v-text-field
            class="mx-3 mt-5"
            type="number"
            label="Height (cm)"
            outlined
            v-model="height"
          ></v-text-field>

          <v-text-field
            class="mx-3"
            type="number"
            label="Width (cm)"
            outlined
            v-model="width"
          ></v-text-field>

          <v-text-field
            class="mx-3"
            type="number"
            label="Length (cm)"
            outlined
            v-model="length"
          ></v-text-field>

          <v-text-field
            class="mx-3"
            type="number"
            label="Weight (kg)"
            outlined
            v-model="weight"
          ></v-text-field>

          <v-text-field
            class="mx-3"
            type="number"
            label="Fragility (1 - 5)"
            outlined
            v-model="fragility"
          ></v-text-field>

          <v-text-field
            class="mx-3"
            type="number"
            label="Zones (1 - 4)"
            outlined
            v-model="zone"
          ></v-text-field>
        </form>
      </div>

      <div class="ma-5">
        ${{ this.freightCost }}
        <v-btn class="ml-8" @click="calculateFreight">Calculate Freight</v-btn>
      </div>
    </v-content>
  </v-app>
</template>
