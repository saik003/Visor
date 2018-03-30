<style>
  .map{
    width: 100%;
    height:100%;
  }
  .leaflet-pane {
    z-index: 0 !important;
  }
</style>

<template>
  <div id="map1" class="map">
    <search-in-map :map="map"/>
  </div>
</template>

<script>
import searchInMap from './search-in-map.vue';
export default {
  data () {
    return {
      map:'instanciaDelMapa'
    }
  },
  mounted(){
    //Guardamos la variable a nivel de contexto
    this.map = L.map('map1').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2FpazAwMyIsImEiOiJjaWV2ZG1jYm4wMGMwdGZtMDFyb2tzaGh4In0.3Sa7x7zlLlM8nSSJD1MCYQ', {
      attribution: '',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
    }).addTo(this.map);

  },
  components: {
    'search-in-map': searchInMap
  }
}
</script>
