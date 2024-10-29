import{i as h,S as m,r as f,g as b,k as v,a as c,j as n}from"./index-C2PWchud.js";import{u as y}from"./utils-mixins-2-CV_UYnIr.js";const w=h`
.dropdown {
    position: relative;
}

.dropdown-menu {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    display: none;
    z-index: 100;
    background: var(--input-background-color);
    box-shadow: rgba(0, 0, 0, .5)
}

.dropdown.active .dropdown-menu {
    display: block;
}
`,u=class extends y(m){static get properties(){return{required:Boolean,title:String,icon:String,params:Object,sectionSize:String,loader:Function,value:Object}}constructor(){super(),this.value=void 0}getName(){return this.e.formName.split("=")[0]}getValue(){return this.value}validate(){return this.e.required&&!this.value?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(e){}invalid(e){}dscDataName(){return this.e.defaultValue}init(e,t){super.init(e,t),this.required=this.e.required||e.min&&e.min>0,this.title=u.toTitleCase(e.name),this.icon=e.icon,this.params=this.pl.paramsCopy(),this.sectionSize=e.sectionSize,this.loader=this.loadData()}};class d extends u{static get is(){return"geo-search"}static get styles(){return[f(b),w,h`
        :host {
          display: block;
        }
      `]}static get properties(){return{lat:Number,lng:Number,name:String,address:String}}constructor(){super(),this.name="",this.address=""}async firstUpdated(){const t=this.e.details.APIKey;console.log(t),await this.loadGoogleMapsAPI(t),this.initMap(this.e.details.zones)}async loadGoogleMapsAPI(t){const s=document.createElement("script");s.src=`https://maps.googleapis.com/maps/api/js?key=${t}&libraries=places`,s.defer=!0,s.async=!0;const a=new Promise((o,i)=>{s.addEventListener("load",o),s.addEventListener("error",i)});document.head.appendChild(s),await a}initMap(t=[]){const s=this.shadowRoot.querySelector("#pac-input"),a=new google.maps.LatLngBounds(new google.maps.LatLng(-1.286389,36.817223),new google.maps.LatLng(-1.171389,36.835556));for(const i of t)new google.maps.Geocoder().geocode({address:i},(r,p)=>{if(p===google.maps.GeocoderStatus.OK){const g=r[0].geometry.location;a.extend(g)}});const o=new google.maps.places.Autocomplete(s,{types:["geocode","establishment"],strictBounds:!0,bounds:a});o.addListener("place_changed",()=>this.searchBox(o))}searchBox(t){const s=t.getPlace(),a=t.getBounds();if(!s||!a||!a.contains(s.geometry.location))console.log("Not in the right area");else{const{lat:o,lng:i}=s.geometry.location,l=s.name,r=s.formatted_address;this.name=l,this.address=r,this.lat=o(),this.lng=i(),this.dispatchEvent(new CustomEvent("location-selected",{detail:{lat:this.lat,lng:this.lng,name:this.name,address:this.address},bubbles:!0,composed:!0})),this.value={location:{lat:this.lat,lng:this.lng},name:this.name,address:this.address}}}render(){return v`
      <label class="label">${this.e.name}</label>
      <div class="control has-icons-left has-icons-right">
        <input id="pac-input" class="input" type="text" placeholder=${this.e.details.hint?this.e.details.hint:""} />
        <span class="icon is-small is-left">
          <i class="fa-solid fa-location-dot"></i>
        </span>
      </div>
    `}}customElements.define(d.is,d);const L=({element:e})=>{console.log("element is ",e);const t=c.useRef(null);return c.useEffect(()=>{t.current&&e&&(t.current.e=e,console.log("Element set in useEffect:",e))},[e]),n.jsx(n.Fragment,{children:e?n.jsx("geo-search",{id:"geo-search",ref:t}):n.jsx("p",{children:"Loading data..."})})};export{L as default};
