import Vue from "vue";
import Vuetify from "vuetify"
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: {
          base: "#40b1d9",
          lighten1: "#44C3E0"
        },
        secondary: {
          base: "#414141",
          lighten1: "#D3D3D3",
          lighten2: "#A5A5A5"
        },
        accent: "#FFFFFF",
        error: colors.red.accent3,
      },
      dark: {
        primary: {
          base: "#40B1D9",
          lighten1: "#44C3E0"
        },
        secondary: {
          base: "#414141",
          lighten1: "#D3D3D3",
          lighten2: "#A5A5A5"
        },
        accent: "#FFFFFF",
        error: colors.red.accent3,
      },
    },
  },
})

export default vuetify;