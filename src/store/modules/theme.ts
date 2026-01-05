import { Module } from 'vuex';

interface ThemeState {
  isDarkMode: boolean;
}

const themeModule: Module<ThemeState, any> = {
  namespaced: true,
  state: {
    isDarkMode: localStorage.getItem('darkMode') === 'true' || false,
  },
  getters: {
    isDarkMode: (state) => state.isDarkMode,
  },
  mutations: {
    SET_DARK_MODE(state, value: boolean) {
      state.isDarkMode = value;
      localStorage.setItem('darkMode', String(value));
      
      // Apply dark mode class to HTML element
      if (value) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
    },
    TOGGLE_DARK_MODE(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('darkMode', String(state.isDarkMode));
      
      // Apply dark mode class to HTML element
      if (state.isDarkMode) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
    },
    INIT_DARK_MODE(state) {
      // Initialize dark mode on app load
      if (state.isDarkMode) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
    },
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit('TOGGLE_DARK_MODE');
    },
    setDarkMode({ commit }, value: boolean) {
      commit('SET_DARK_MODE', value);
    },
    initDarkMode({ commit }) {
      commit('INIT_DARK_MODE');
    },
  },
};

export default themeModule;

