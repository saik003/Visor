<style>
  #toolbarSearch{
    z-index: 1;
    top: 12px;
    left: 30px;
  }
</style>

<template>
    <v-toolbar
      floating
      dense
      id="toolbarSearch"
    >
      <v-text-field v-on:keyup.native='eventKeyUp'  prepend-icon="search" hide-details single-line></v-text-field>
      <v-btn icon v-on:click='myLocation'>
        <v-icon>my_location</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
  var GOOGLEKEY='AIzaSyCLxmXXoHdGPWx_5angcVX8vbqzl-MXuog'
  var URL='https://maps.googleapis.com/maps/api/geocode/json?address=[address]&key='+ GOOGLEKEY
  export default {
    data () {
      return {
        capaGeocoder:null
      }
    },
    props: ['map'],
    methods:{
      _checkLayer(clear){
        if(!this.map.hasLayer(this.capaGeocoder)){
              this.capaGeocoder.addTo(this.map)
        }
        if(clear===true){
          this.capaGeocoder.clearLayers()
        }
      },
      myLocation(){
        if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition(function(position){
                  let pos = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                  };
                  console.info("Posicion actual:" + pos)
                  this._checkLayer(true);
                  this.capaGeocoder.addLayer(L.marker({lon: pos.lng, lat: pos.lat}))
                  this.map.setView({lon: pos.lng, lat: pos.lat},18)
              }.bind(this));
          }
      },
      eventKeyUp(evt){
        //Si es enter buscamos la direccion y
        if(evt.keyCode==13){
          var direccion=evt.target.value;
          var url =URL.replace("[address]", direccion)
          this.$http.get(url).then(function(response){
             //Método que se dispara cuando vuelve la respuesta del servidor.
             if(response.body.status!= "OK" || response.body.results.length==0) return;
             //Nos quedamos con el primero
             let result= response.body.results[0]
             let location= response.body.results[0].geometry.location
             this._checkLayer(true);
             this.capaGeocoder.addLayer(L.marker(location))
             this.map.setView(location,18)
          }, function(){
             //Método que se dispara si hubo algún error.
          });
        }
      }
    },
    mounted(){
      this.capaGeocoder=L.layerGroup()
    }
}
</script>
