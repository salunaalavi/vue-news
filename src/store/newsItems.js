import axios from "axios";

const state = () => ({
  news: [],
  sources: [],
});

const mutations = {
  setNews(state, params) {
    state.news = [...params];
  },
  setSources(state, params) {
    state.sources = [...params];
  },
};

const actions = {
  fetchNews(store) {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=45967b6b9b97467b9359b3a495cb654c",
      )
      .then((response) => {
        store.commit("setNews", response.data.articles);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  fetchNewsBySource(store) {
    axios
      .get(
        "https://newsapi.org/v2/sources?language=en&apiKey=45967b6b9b97467b9359b3a495cb654c"
      )
      .then((response) => {
        store.commit("setSources", response.data.sources);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  sortNewsBySource(store, param) {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=" +
          param +
          "&apiKey=45967b6b9b97467b9359b3a495cb654c"
      )
      .then((response) => {
        store.commit("setNews", response.data.articles);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
