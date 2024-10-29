import{i as v,h as L,r as j,g as M,k as P,a as C,j as c}from"./index-C2PWchud.js";const x=v`
    #map{
        width:100%;
        height:500px;
    }
`;var y=Object.freeze,W=Object.defineProperty,O=(o,t)=>y(W(o,"raw",{value:y(o.slice())})),E;class b extends L{static get properties(){return{map:Object,infoWindow:Object,mapCenter:Object,markers:Array}}static get styles(){return[j(M),x,v`
                :host {
                    display: block;
                }
            `]}constructor(){super(),this.mapCenter={position:{lat:-34.397,lng:150.644},zoom:8},this.markers=[]}firstUpdated(){super.firstUpdated(),this.e&&(this.mapCenter=this.e.details.mapCenter?this.e.details.mapCenter:this.mapCenter,this.markers=this.e.details.markers?this.e.details.markers:this.markers),this.initMap()}async initMap(){const{Map:t}=await google.maps.importLibrary("maps"),{Marker:a}=await google.maps.importLibrary("marker");this.map=new t(this.shadowRoot.querySelector("#map"),{center:this.mapCenter.position,zoom:this.mapCenter.zoom,mapId:"DEMO_MAP_ID"}),this.markers.forEach(e=>{new a({map:this.map,position:e.position,title:e.title})}),this.infoWindow=new google.maps.InfoWindow,this.renderCurrentLocationButton()}renderCurrentLocationButton(){const t=document.createElement("button");t.textContent="Pan to Current Location",t.classList.add("custom-map-control-button","button","is-primary","mt-2"),this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(t),t.addEventListener("click",()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(a=>{const e={lat:a.coords.latitude,lng:a.coords.longitude};this.infoWindow.setPosition(e),this.infoWindow.setContent("Location found."),this.infoWindow.open(this.map),this.map.setCenter(e)},()=>{handleLocationError(!0,this.infoWindow,this.map.getCenter())}):handleLocationError(!1,this.infoWindow,this.map.getCenter())})}static get is(){return"geo-map"}render(){return P(E||(E=O([`
            <div class="content">
                <div id="map"></div>
                <script>
                    `,`
                <\/script>
            </div>
        `])),(t=>{var a,e,l,u="The Google Maps JavaScript API",s="google",m="importLibrary",g="__ib__",d=document,r=window;r=r[s]||(r[s]={});var n=r.maps||(r.maps={}),f=new Set,i=new URLSearchParams,k=()=>a||(a=new Promise(async(p,h)=>{var w;await(e=d.createElement("script")),i.set("libraries",[...f]+"");for(l in t)i.set(l.replace(/[A-Z]/g,_=>"_"+_[0].toLowerCase()),t[l]);i.set("callback",s+".maps."+g),e.src=`https://maps.${s}apis.com/maps/api/js?`+i,n[g]=p,e.onerror=()=>a=h(Error(u+" could not load.")),e.nonce=((w=d.querySelector("script[nonce]"))==null?void 0:w.nonce)||"",d.head.append(e)}));n[m]?console.warn(u+" only loads once. Ignoring:",t):n[m]=(p,...h)=>f.add(p)&&k().then(()=>n[m](p,...h))})({key:this.e.details.apiKey,v:"weekly"}))}}customElements.define(b.is,b);const R=({element:o})=>{const t=C.useRef(null);return C.useEffect(()=>{t.current&&o&&(t.current.e=o,console.log("Element set in useEffect:",o))},[o]),c.jsx(c.Fragment,{children:o?c.jsx("geo-map",{id:"geo-map",ref:t}):c.jsx("p",{children:"Loading data..."})})};export{R as default};
