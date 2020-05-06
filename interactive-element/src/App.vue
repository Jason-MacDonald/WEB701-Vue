<template>
  <v-app>
    <v-content>
      <v-card class="mx-auto mt-5" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <v-card-title>
          Gallery Name
        </v-card-title>

        <v-card-subtitle>
          Suburb
        </v-card-subtitle>

        <v-card-actions>
          <v-btn text>Share</v-btn>

          <v-btn color="purple" text>
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Extra information you get when you click to expand.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    show: false,
  }),
};
</script>
