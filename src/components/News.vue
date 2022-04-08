<template>
  <v-container class="grey lighten-5 mb-6" fluid>
    <v-row align="stretch" dense>
      <v-col
        offset-md2
        mx-auto
        cols="12"
        sm="6"
        md="6"
        lg="4"
        v-for="(news, index) in items"
        :key="index"
      >
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card
            class="my-3 transition-swing"
            :elevation="hover ? 24 : 6"
            :class="{ 'on-hover': hover }"
          >
            <v-img height="300px" :src="news.urlToImage"></v-img>
            <v-container fill-height fluid>
              <v-layout>
                <v-flex
                  xs12
                  justify-center
                  d-flex
                  style="overflow-y: auto; height: 150px"
                >
                  <span class="headline">{{ news.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-text style="overflow-y: auto; height: 100px">
              {{ news.description }}
            </v-card-text>
            <v-card-actions>
              <v-chip small color="secondary" class="white--text">
                {{ news.source.name }}
              </v-chip>

              <v-spacer></v-spacer>

              <v-btn small replace color="info"
                ><router-link style="text-decoration: none;"
                  :to="{
                    name: 'detail',
                    params: { title: toUrl(news.title) },
                  }"
                >
                  Read More</router-link
                ></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "App",
  props: {
    items: Array,
  },
  methods: {
    toUrl(value) {
      value = value
        .toLowerCase() // LowerCase
        .replace(/\s+/g, "-") // space to -
        .replace(/&/g, `-and-`) // & to and
        .replace(/--/g, `-`);
      return value;
    },
  },
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.6;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>