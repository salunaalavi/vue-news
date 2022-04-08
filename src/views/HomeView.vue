<template>
  <v-app light>
    <Navigation :drawer="drawer" @select-source="setResource"></Navigation>
    <v-app-bar
      app
      light
      clipped-left
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      src="@/assets/logo.png"
      scroll-threshold="500"
      color="primary"
      class="elevation-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="white--text"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="white--text">News App</v-app-bar-title>
      <v-text-field
        v-model="search"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
      ></v-text-field>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <News :items="items" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import News from "@/components/News.vue";

export default {
  name: "App",
  components: {
    Navigation,
    News,
  },
  created() {
    this.$store.dispatch("newsItems/fetchNews");
  },
  data() {
    return {
      drawer: true,
      search: "",
    };
  },
  computed: {
    items() {
      return this.$store.state.newsItems.news.filter(
        (item) => item.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    // getImgUrl(pic) {
    //   return require("../assets/images/" + pic + ".png");
    // },
    setResource(source) {
      this.$store.dispatch("newsItems/sortNewsBySource", source);
    },
  },
};
</script>