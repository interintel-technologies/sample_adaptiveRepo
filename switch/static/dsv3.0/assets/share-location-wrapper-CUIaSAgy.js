import{i as l,S as c,r as u,g as d,a as r,j as s}from"./index-C2PWchud.js";import{h as a}from"./lit-html-dRijB2IX.js";import{E as h}from"./ecommerce-mixin-BZ3_9d38.js";import{u as p}from"./utils-mixin-D5aAiqNi.js";import"./SectionTemplate-Drou2IoY.js";const g=l`
.location-icon{
    width: 80px;
    height: 80px;
    padding: 30px;
    color: #fff;
    border-radius: 50%;
    background-color: var(--primary);
}
.logger-center{
    flex-direction: column;
}
`;class o extends h(p(c)){static get properties(){return{required:Boolean,title:String,icon:String,params:Object,sectionSize:String,loader:Function,value:Object}}constructor(){super(),this.value=void 0}getName(){return this.e.formName.split("=")[0]}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}valid(t){}invalid(t){}dscDataName(){return this.e.defaultValue}init(t,e){super.init(t,e),this.required=this.e.required||t.min&&t.min>0,this.title=o.toTitleCase(t.name),this.icon=t.icon,this.params=this.pl.paramsCopy(),this.sectionSize=t.sectionSize,this.loader=this.loadData()}}class n extends o{static get styles(){return[u(d),g]}static get properties(){return{latitude:String,longitude:String,status:String}}constructor(){super(),this.latitude="",this.longitude="",this.status=""}static get is(){return"share-location"}captureLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{this.longitude=t.coords.longitude,this.latitude=t.coords.latitude,this.value={long:this.longitude,lat:this.latitude}}):this.status="Geolocation is not supported."}render(){return a`
        <div class="is-flex is-justify-content-left text-wrap: ellipsis; max-width: 200; white-space: nowrap;">
            <div>
                <div class="logger-center is-flex is-justify-content-center is-align-items-center">
                    <div class="location-icon is-flex is-justify-content-center is-align-items-center mb-6">
                        <span class="icon">
                            <i class="fa-solid fas fa-lg fa-location-dot"></i>
                        </span>
                    </div>
                    ${this.longitude&&this.latitude?a`<p>Location captured</p>
                    `:a`
                    <button @click = ${this.captureLocation} class="button is-link is-fullwidth">Share your location</button>
                    `}
                </div>
                <p>${this.status}</p>
            </div>
        </div>
        `}}customElements.define(n.is,n);const b=({element:i})=>{const t=r.useRef(null);return r.useEffect(()=>{const e=t.current;e&&i&&(e.e=i)},[i]),s.jsx("div",{children:i?s.jsx("share-location",{id:"share-location",ref:t}):s.jsx("p",{children:"Loading data..."})})};export{b as default};
