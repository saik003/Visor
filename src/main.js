require('../node_modules/vuetify/src/stylus/app.styl')
//require('./js/cMap')
import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTextField,
  transitions
} from 'vuetify'
import App from './App.vue'

// Helpers
import colors from 'vuetify/es5/util/colors'

import VueResource from 'vue-resource'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    transitions,
    VueResource
  },
  theme: {
    primary: colors.cyan.darken3,
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  mounted() {
  },
  methods: {

  },
})
