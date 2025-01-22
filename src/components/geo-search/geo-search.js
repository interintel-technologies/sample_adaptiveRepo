import { html, css, unsafeCSS } from "lit-element";
import { GeoSearchStyle } from "./geo-search-css";
import { GeoSearchBase } from "../../base/elements/geo-search";
import globalStyles from '../../App.css?raw';

class GeoSearch extends GeoSearchBase {
  static get is() {
    return "geo-search";
  }

  static get styles() {
    return [
      unsafeCSS(globalStyles),
      GeoSearchStyle,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties(){
    return {
      lat: Number,
      lng: Number,
      name: String,
      address: String
    };
  }

  constructor(){
    super();
    this.name='';
    this.address='';
  }

  async firstUpdated() {
    const APIKey = this.e.details.APIKey;

    console.log(APIKey)

    await this.loadGoogleMapsAPI(APIKey);
    this.initMap(this.e.details.zones);
  }

  async loadGoogleMapsAPI(APIKey) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${APIKey}&libraries=places`;
    script.defer = true;
    script.async = true;

    const scriptLoaded = new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
    });

    document.head.appendChild(script);
    await scriptLoaded;
  }

  initMap(zoneNames = []) {
    const input = this.shadowRoot.querySelector("#pac-input");
    const bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-1.286389, 36.817223),
      new google.maps.LatLng(-1.171389, 36.835556) 
    );

    for (const zoneName of zoneNames) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: zoneName }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const location = results[0].geometry.location;
          bounds.extend(location);
        }
      });
    }

    const autoComplete = new google.maps.places.Autocomplete(
      input,
      {
        types: ["geocode","establishment"],
        strictBounds: true,
        bounds: bounds
      }
    );
    autoComplete.addListener("place_changed", () => this.searchBox(autoComplete));
  }

  searchBox(autoComplete) {
    const place = autoComplete.getPlace();
    const bounds = autoComplete.getBounds();

    if(!place || !bounds || !bounds.contains(place.geometry.location)) {

      console.log('Not in the right area');
      
    }else{

      const { lat, lng } = place.geometry.location;
      const name=place.name;
      const address=place.formatted_address;

      this.name=name;
      this.address=address;
      this.lat = lat();
      this.lng = lng();

      this.dispatchEvent(new CustomEvent("location-selected", {
        detail: { lat: this.lat, lng: this.lng , name:this.name, address:this.address},
        bubbles: true,
        composed: true
      }));
     
      this.value = {"location":{lat: this.lat, lng: this.lng }, "name":this.name, "address":this.address}
    }
   
  }

  render() {
    return html`
      <label class="label">${this.e.name}</label>
      <div class="control has-icons-left has-icons-right">
        <input id="pac-input" class="input" type="text" placeholder=${this.e.details.hint ? this.e.details.hint:""} />
        <span class="icon is-small is-left">
          <i class="fa-solid fa-location-dot"></i>
        </span>
      </div>
    `;
  }
}

customElements.define(GeoSearch.is, GeoSearch);