<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
         <v-flex text-xs-center mx-auto miniVariantButton>
           <v-btn
             icon
             @click.stop="miniVariant = !miniVariant"
           >
           <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
           </v-btn>
         </v-flex>

    </v-navigation-drawer>
    <v-toolbar dark app color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
     <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height pa-0>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
              <map-leaflet/>
          <!--  <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote>
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          -->
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-btn

    class="btnAdd"
    fab
    bottom
    right
    color="black"
    dark
    fixed

  >
    <v-icon>add</v-icon>
  </v-btn>
    <v-navigation-drawer
      temporary
      fixed
      :right="right"
      v-model="rightDrawer"
      app
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  <!--
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  -->
  </v-app>
</template>
<style>
.btnAdd{
  z-index: 400 !important;
}
</style>
<script>
  import mapleaflet from './components/map-leaflet.vue'
  export default {
    components:{
        'map-leaflet':mapleaflet
    },
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Coordenadas' }
        ],
        miniVariant: true,
        right: true,
        rightDrawer: false,
        title: 'ExampleVisor'
      }
    }
  }
</script>
