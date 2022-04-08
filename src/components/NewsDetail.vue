<template>
  <v-app light>
    <v-main>
      <v-container fluid>
        <v-card
          class="my-3 transition-swing"
          :elevation="hover ? 24 : 6"
          :class="{ 'on-hover': hover }"
        >
          <v-img height="500px" :src="news.urlToImage"></v-img>
          <v-container fill-height fluid>
            <v-layout>
              <v-flex
                xs12
                justify-center
                d-flex
                style="overflow-y: auto; height: 100px"
              >
                <span class="headline">{{ news.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-chip small color="secondary" class="white--text">
              {{ Date(news.date) }}
            </v-chip>
          <v-card-actions>
            <v-chip small color="secondary" class="white--text">
              {{ news.source.name }}
            </v-chip>

            <v-spacer></v-spacer>

            <v-chip small color="secondary" class="white--text">
              {{ news.author }}
            </v-chip>
          </v-card-actions>
          <v-card-text style="overflow-y: auto; height: 100px">
            {{ news.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn small replace color="info" @click="redirectTo"
              >Kembali</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn small replace color="info" :href="news.url" target="_blank"
              >Read More</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "DetailNews",
  computed: {
    news() {
      return this.$store.state.newsItems.news.find(
        (news) =>
          news.title
            .toLowerCase() // LowerCase
            .replace(/\s+/g, "-") // space to -
            .replace(/&/g, `-and-`) // & to and
            .replace(/--/g, `-`) === this.$route.params.title
      );
    },
  },
  methods: {
    redirectTo() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
/* .container {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info {
  padding: 1%;
  display: flex;
  justify-content: space-between;
} */
</style>