import {css, html, LitElement, unsafeCSS} from 'lit-element';
import { GeoMapStyles } from './geo-map-css';
import globalStyles from '../../App.css?raw';

class GeoMap extends LitElement {
    static get properties() {
        return {
            map: Object,
            infoWindow:Object,
            mapCenter: Object,
            markers: Array
        }
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            GeoMapStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    constructor() {
        super();

        this.mapCenter = {position: {lat: -34.397, lng: 150.644}, zoom: 8 };
        this.markers = [];
    }

    firstUpdated(){    
        super.firstUpdated();
        if(this.e) {
            this.mapCenter = this.e.details.mapCenter ? this.e.details.mapCenter : this.mapCenter;
            this.markers = this.e.details.markers ? this.e.details.markers : this.markers;
        }

        this.initMap();
    }

    async initMap(){
        const { Map } = await google.maps.importLibrary("maps");
        const {Marker} = await google.maps.importLibrary("marker")

        this.map = new Map(this.shadowRoot.querySelector("#map"), {
            center: this.mapCenter.position,
            zoom: this.mapCenter.zoom,
            mapId: "DEMO_MAP_ID"
        });
        
        this.markers.forEach(marker => {
            new Marker({
                map: this.map,
                position: marker.position,
                title: marker.title,
            });
        });

        this.infoWindow = new google.maps.InfoWindow();

        this.renderCurrentLocationButton();
    }

    renderCurrentLocationButton() {
        const locationButton = document.createElement("button");

        locationButton.textContent = "Pan to Current Location";
        locationButton.classList.add("custom-map-control-button", "button", "is-primary", "mt-2");
        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        locationButton.addEventListener("click", () => {
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    this.infoWindow.setPosition(pos);
                    this.infoWindow.setContent("Location found.");
                    this.infoWindow.open(this.map);
                    this.map.setCenter(pos);
                }, () => {
                    handleLocationError(true, this.infoWindow, this.map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, this.infoWindow, this.map.getCenter());
            }
        });
    }

    static get is(){
        return 'geo-map';
    }

    render() {
        return html`
            <div class="content">
                <div id="map"></div>
                <script>
                    ${
                        (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
                            key: this.e.details.apiKey,
                            v: "weekly",
                            // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
                            // Add other bootstrap parameters as needed, using camel case.
                        })
                    }
                </script>
            </div>
        `
    }

}

customElements.define(GeoMap.is, GeoMap);
