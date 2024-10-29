import{i as s,h as g,k as c,S as y,r as b,g as v,a as p,j as a}from"./index-C2PWchud.js";import{P as u,B as x}from"./polymer-legacy-CVdXdTHq.js";/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const h={properties:{libraryLoaded:{type:Boolean,value:!1,notify:!0,readOnly:!0},libraryErrorMessage:{type:String,value:null,notify:!0,readOnly:!0}},observers:["_libraryUrlChanged(libraryUrl)"],_libraryUrlChanged:function(o){this._isReady&&this.libraryUrl&&this._loadLibrary()},_libraryLoadCallback:function(o,t){o?(x._warn("Library load failed:",o.message),this._setLibraryErrorMessage(o.message)):(this._setLibraryErrorMessage(null),this._setLibraryLoaded(!0),this.notifyEvent&&this.fire(this.notifyEvent,t,{composed:!0}))},_loadLibrary:function(){w.require(this.libraryUrl,this._libraryLoadCallback.bind(this),this.callbackName)},ready:function(){this._isReady=!0,this.libraryUrl&&this._loadLibrary()}};var w={apiMap:{},require:function(o,t,e){var r=this.nameFromUrl(o);this.apiMap[r]||(this.apiMap[r]=new m(r,o,e)),this.apiMap[r].requestNotify(t)},nameFromUrl:function(o){return o.replace(/[\:\/\%\?\&\.\=\-\,]/g,"_")+"_api"}},m=function(o,t,e){if(this.notifiers=[],!e)if(t.indexOf(this.callbackMacro)>=0)e=o+"_loaded",t=t.replace(this.callbackMacro,e);else{this.error=new Error("IronJsonpLibraryBehavior a %%callback%% parameter is required in libraryUrl");return}this.callbackName=e,window[this.callbackName]=this.success.bind(this),this.addScript(t)};m.prototype={callbackMacro:"%%callback%%",loaded:!1,addScript:function(o){var t=document.createElement("script");t.src=o,t.onerror=this.handleError.bind(this);var e=document.querySelector("script")||document.body;e.parentNode.insertBefore(t,e),this.script=t},removeScript:function(){this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.script=null},handleError:function(o){this.error=new Error("Library failed to load"),this.notifyAll(),this.cleanup()},success:function(){this.loaded=!0,this.result=Array.prototype.slice.call(arguments),this.notifyAll(),this.cleanup()},cleanup:function(){delete window[this.callbackName]},notifyAll:function(){this.notifiers.forEach((function(o){o(this.error,this.result)}).bind(this)),this.notifiers=[]},requestNotify:function(o){this.loaded||this.error?o(this.error,this.result):this.notifiers.push(o)}};u({is:"iron-jsonp-library",behaviors:[h],properties:{libraryUrl:String,callbackName:String,notifyEvent:String}});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at https://polymer.github.io/LICENSE.txt
The complete set of authors may be found at https://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at https://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at https://polymer.github.io/PATENTS.txt
*/u({is:"google-maps-api",_template:null,behaviors:[h],properties:{mapsUrl:{type:String,value:"https://maps.googleapis.com/maps/api/js?callback=%%callback%%"},apiKey:{type:String,value:""},clientId:{type:String,value:""},version:{type:String,value:"3.exp"},language:{type:String,value:""},signedIn:{type:Boolean,value:!1},notifyEvent:{type:String,value:"api-load"},libraryUrl:{type:String,computed:"_computeUrl(mapsUrl, version, apiKey, clientId, language, signedIn)"}},_computeUrl:function(o,t,e,r,i,n){var l=o+"&v="+t;if(l+="&libraries=drawing,geometry,places,visualization",e&&!r&&(l+="&key="+e),r&&(l+="&client="+r),!e&&!r){var f="No Google Maps API Key or Client ID specified. See https://developers.google.com/maps/documentation/javascript/get-api-key for instructions to get started with a key or client id.";console.warn(f)}return i&&(l+="&language="+i),n&&(l+="&signed_in="+n),l},get api(){return google.maps}});/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const k=s`

:host {
    display: block;
    width: 100%;
    height: 500px;
 }
/*
.centerMarker {
  position: relative;
  background: url('data:image/png;base64,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') no-repeat;
  background-size: 100%;
  top: -50%;
  left: 50%;
  z-index: 1;
  margin-left: -14px;
  margin-top: -43px;
  height: 44px;
  width: 28px;
  cursor: pointer;
}

*/


.gm-style .controls {
font-size: 28px;  /* this adjusts the size of all the controls */

background-color: white;
box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
box-sizing: border-box;
border-radius: 2px;
cursor: pointer;
font-weight: 300;
height: 1em;
margin: 6px;
text-align: center;
user-select: none;
padding: 2px;
width: 1em;
}
.gm-style .controls button {
border: 0;
background-color: white;
color: rgba(0, 0, 0, 0.6);
}
.gm-style .controls button:hover {
color: rgba(0, 0, 0, 0.9);
}

.gm-style .controls.zoom-control {
display: flex;
flex-direction: column;
height: auto;
}
.gm-style .controls.zoom-control button {
font: 0.85em Arial;
margin: 1px;
padding: 0;
}

.gm-style .controls.maptype-control {
display: flex;
flex-direction: row;
width: auto;
}
.gm-style .controls.maptype-control button {
display: inline-block;
font-size: 0.5em;
margin: 0 1px;
padding: 0 6px;
}
.gm-style .controls.maptype-control.maptype-control-is-map .maptype-control-map {
font-weight: 700;
}
.gm-style .controls.maptype-control.maptype-control-is-satellite .maptype-control-satellite {
font-weight: 700;
}

.gm-style .controls.fullscreen-control button {
display: block;
font-size: 1em;
height: 100%;
width: 100%
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon {
border-style: solid;
height: 0.25em;
position:absolute;
width: 0.25em;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-left {
border-width: 2px 0 0 2px;
left: 0.1em;
top: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-left {
border-width: 0 2px 2px 0;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-right {
border-width: 2px 2px 0 0;
right: 0.1em;
top: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-right {
border-width: 0 0 2px 2px;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-left {
border-width: 0 0 2px 2px;
left: 0.1em;
bottom: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-left {
border-width: 2px 2px 0 0;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-right {
border-width: 0 2px 2px 0;
right: 0.1em;
bottom: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-right {
border-width: 2px 0 0 2px;
}




`;class d extends g{static get styles(){return[k,s`
        :host {
          display: block;
        }
      `]}render(){return c`

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
        
        

`}constructor(){super(),this.API=Object}static get is(){return"map-marker"}static get properties(){return{map:Object,lat:Object,lng:Object,pickedLocation:Object,results:Array,key:String}}firstUpdated(t){super.firstUpdated(t)}nearbyPlacesCallback(t,e){if(console.log(t,e),e===google.maps.places.PlacesServiceStatus.OK)for(var r=0;r<t.length;r++)t[r],createMarker(t[r])}requestNearbyPlaces(){var t=new this.API.places.PlacesService(this.map),e={bounds:this.map.getBounds()};t.nearbySearch(e,this.nearbyPlacesCallback)}loaded(t){const e=this,r=t.target.api;this.API=t.target.api;var i=new r.Map(this.shadowRoot.querySelector("#map"),{center:{lat:-34.397,lng:150.644},zoom:8,disableDefaultUI:!0});this.map=i,this.initZoomControl(i),this.autoComplete(),r.event.addListener(i,"idle",function(){var n=e.getMarkerPosition();n&&e.dispatchEvent(new CustomEvent("center-change",{detail:{location:n}}))})}autoComplete(){const t=this,e=this.shadowRoot.querySelector("#search");var r=new this.API.places.Autocomplete(e);r.setFields(["address_components","geometry","icon","name"]),r.addListener("place_changed",function(){var i=r.getPlace();if(!i.geometry){window.alert("No details available for input: '"+i.name+"'");return}i.geometry.viewport?t.map.fitBounds(i.geometry.viewport):(t.map.setCenter(i.geometry.location),t.map.setZoom(17))})}initZoomControl(t){this.shadowRoot.querySelector(".zoom-control-in").onclick=function(){t.setZoom(t.getZoom()+1)},this.shadowRoot.querySelector(".zoom-control-out").onclick=function(){t.setZoom(t.getZoom()-1)},t.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(this.shadowRoot.querySelector(".zoom-control"))}getMarkerPosition(){const t=this.map.getCenter();if(t)return{lat:t.lat(),lng:t.lng()}}setCurrentPosition(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const e={lat:t.coords.latitude,lng:t.coords.longitude};this.map.setCenter(e)},()=>{console.log("Could not determine your location...")}):console.log("Your browser does not support Geolocation.")}}customElements.define(d.is,d);const S=class extends y{static get is(){return"location-picker"}static get properties(){return{location:Object}}firstUpdated(o){super.firstUpdated(o)}getValue(){return this.location.lng+","+this.location.lat}getName(){return this.e.formName}valid(o){}invalid(o){}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(o,t){super.init(o,t)}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const A=s`
:host {
    display: block;
}




`;class P extends S{static get styles(){return[b(v),A,s`
        :host {
          display: block;
        }
      `]}constructor(){super(),this.e=null}static get properties(){return{e:{type:Object},location:{type:Object}}}updated(t){t.has("e")&&console.log("Updated properties:",this.e)}render(){return this.e?c`
      <div class="column is-5 is-offset-4">
        <div class="field">
          <h4>${this.e.name}</h4>
          <div id="picked"></div>    
          <map-marker key="${this.e.kind}" @center-change=${this._centerChanged}></map-marker>
        </div>
      </div>
    `:c`<p>Loading data...</p>`}_centerChanged(t){const e=t.detail.location;this.location=e;const r=this.shadowRoot.querySelector("#picked");r&&(r.innerHTML="Chosen location: lat "+e.lat+", lng "+e.lng)}getValue(){return this.location?`${this.location.lng},${this.location.lat}`:""}valid(t){}invalid(t){}}customElements.define("location-picker",P);const M=o=>{const{element:t}=o,e=p.useRef(null);return p.useEffect(()=>{e.current&&t&&(e.current.e=t)},[t]),a.jsx("div",{children:t?a.jsx("location-picker",{id:"location-picker",ref:e}):a.jsx("p",{children:"Loading data..."})})};export{M as default};
