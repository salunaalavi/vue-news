import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import newsItems from "./newsItems";

Vue.use(Vuex);

const persistedState = createPersistedState({
  paths: ["newsItems"],
});

export default new Vuex.Store({
  plugins: [persistedState],
  modules: {
      newsItems: {
        namespaced: true,
        ...newsItems,
      },
    },
});