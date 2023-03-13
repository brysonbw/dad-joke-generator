import JokeService from '@/services/JokeService';
import Vue from 'vue';
import Vuex from 'vuex';
import { Joke } from './types/joke';
Vue.use(Vuex);

export default new Vuex.Store({
  state(): Joke {
    return {
      joke: null,
      error: null,
    };
  },
  mutations: {
    SET_JOKE(state: Joke, payload) {
      state.joke = payload;
    },
    SET_ERROR_MSG(state: Joke, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchJoke({ commit }) {
      return JokeService.getJoke()
        .then((response) => {
          commit('SET_JOKE', response.data.joke);
        })
        .catch((error) => {
          commit('SET_ERROR_MSG', 'Error: something went wrong :/');
          console.log('Error: ' + error.message);
        });
    },
  },
});
