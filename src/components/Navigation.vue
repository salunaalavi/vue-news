<template>
  <v-navigation-drawer
    :value="drawer"
    fixed
    app
    clipped
    hide-overlay
    class="drawer-style"
    id="style-1"
  >
    <v-hover v-slot="{ hover }" close-delay="200">
      <v-list
        nav
        dense
        class="my-3"
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
      >
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="selectSource(item.id)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-hover>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "HomeApp",
  data() {
    return {
      items: this.$store.state.newsItems.sources,
    };
  },
  created() {
    this.items == this.$store.dispatch("newsItems/fetchNewsBySource");
  },
  props: {
    drawer: Boolean,
  },
  methods: {
    selectSource(source) {
      this.$emit("select-source", source);
    },
  },
};
</script>

<style scoped>
.drawer-style {
  background-color: #1b69a8 !important;
  border-color: #21282e !important;
}
.v-list {
  transition: opacity 0.4s ease-in-out;
}
.v-list:not(.on-hover) {
  opacity: 0.6;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
