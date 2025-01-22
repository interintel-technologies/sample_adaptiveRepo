import {html,css, LitElement} from 'lit-element';
import '@google-web-components/google-apis/google-maps-api';
import { MapMarkerStyles } from "./map-marker-css";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/


class MapMarker extends LitElement {

  static get styles() {
    return [
      MapMarkerStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }


  render() {
    return html`

         <google-maps-api api-key="${this.key}" 
                          @api-load=${this.loaded} version="3.exp"></google-maps-api>
                
             <label class="form-label" for="search" >Search</label>
  <div class="control  has-icons-left has-icons-right">

    <input class="input is-medium" id="search" onfocus="this.select();" onmouseup="return false;"  >

  </div>             
                          
        <!-- Map View -->
        <div id="map" style="width: 100%; height: 440px"></div>
        <!--<div class="centerMarker"></div>-->
        
        
        <!-- Hide controls until they are moved into the map. -->
    <div style="display:none">
      <div class="controls zoom-control">
        <button class="zoom-control-in" title="Zoom In">+</button>
        <button class="zoom-control-out" title="Zoom Out">−</button>
      </div>
      <div class="controls maptype-control maptype-control-is-map">
        <button class="maptype-control-map"
                title="Show road map">Map</button>
        <button class="maptype-control-satellite"
                title="Show satellite imagery">Satellite</button>
      </div>
      <div class="controls fullscreen-control">
        <button title="Toggle Fullscreen">
          <div class="fullscreen-control-icon fullscreen-control-top-left"></div>
          <div class="fullscreen-control-icon fullscreen-control-top-right"></div>
          <div class="fullscreen-control-icon fullscreen-control-bottom-left"></div>
          <div class="fullscreen-control-icon fullscreen-control-bottom-right"></div>
        </button>
      </div>
    </div>
        
        

`;
  }

  constructor() {
    super();
    this.API = Object;
  }

  static get is() {return 'map-marker';}
  static get properties() {
    return {
      map: Object,
      lat: Object,
      lng: Object,
      pickedLocation: Object,
      results: Array,
      key: String,

    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    // this.getLocation();
  }

  nearbyPlacesCallback(results, status) {
    console.log(results, status);

    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }

  requestNearbyPlaces() {
    var service = new this.API.places.PlacesService(this.map);
    var request = {
      bounds: this.map.getBounds(),
    };

    service.nearbySearch(request, this.nearbyPlacesCallback);
  }

  loaded(e) {
    const self = this;
    const API = e.target.api;
    this.API = e.target.api;

    // The map,
    var map = new API.Map(
      this.shadowRoot.querySelector('#map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        disableDefaultUI: true,
        // setCurrentPosition: true
      });

    this.map = map;
    this.initZoomControl(map);

    // this.setCurrentPosition();

    this.autoComplete();


    API.event.addListener(map, 'idle', function() {
      var location = self.getMarkerPosition();
      if (location) {
        self.dispatchEvent(new CustomEvent('center-change', {
          detail: {
            location: location,
          },

        }));
      }

      //  self.requestNearbyPlaces();
    });
  }

  autoComplete() {
    const self = this;

    const input = this.shadowRoot.querySelector('#search');

    var autocomplete = new this.API.places.Autocomplete(input);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);


    autocomplete.addListener('place_changed', function() {
      // todo infowindow.close();
      // todo marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert('No details available for input: \'' + place.name + '\'');
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        self. map.fitBounds(place.geometry.viewport);
      } else {
        self.map.setCenter(place.geometry.location);
        self. map.setZoom(17); // Why 17? Because it looks good.
      }
      // todo marker.setPosition(place.geometry.location);
      // todo marker.setVisible(true);

      /* // todo

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }

            infowindowContent.children['place-icon'].src = place.icon;
            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-address'].textContent = address;
            infowindow.open(map, marker);
            */
    });
  }


  initZoomControl(map) {
    this.shadowRoot.querySelector('.zoom-control-in').onclick = function() {
      map.setZoom(map.getZoom() + 1);
    };
    this.shadowRoot.querySelector('.zoom-control-out').onclick = function() {
      map.setZoom(map.getZoom() - 1);
    };
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
      this.shadowRoot.querySelector('.zoom-control'));
  }

  getMarkerPosition() {
    const latLng = this.map.getCenter();

    if (latLng)
    {return {lat: latLng.lat(), lng: latLng.lng()};}
  }


  setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.map.setCenter(pos);
        },
        () => {
          console.log('Could not determine your location...');
        }
      );
    } else {
      console.log('Your browser does not support Geolocation.');
    }
  }
}

customElements.define(MapMarker.is, MapMarker);
