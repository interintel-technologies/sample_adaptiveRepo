import{S as c,i as n,r as u,g as d,k as s,a as o,j as r}from"./index-C2PWchud.js";import"./iron-icons-CfX5YBfy.js";import"./iron-icon-Ci-yo7Ra.js";import{u as h}from"./utils-mixin-D5aAiqNi.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./polymer-legacy-CVdXdTHq.js";import"./iron-flex-layout-C17s8gyg.js";const l=class extends h(c){static get is(){return"barcode-scanner"}static get properties(){return{params:Object,type:String,pageType:Object,columnSize:Array,columnOffset:Array}}getName(){return this.e.formName}validate(){return this.required&&!this.getValue()?new this.Validation(!1,this.e.name+" is Required"):new this.Validation(!0,"valid")}firstUpdated(i){super.firstUpdated(i)}init(i,e){super.init(i,e);const t=this;t.title=l.toTitleCase(i.name),this.required=this.e.required||i.min&&i.min>0,this.value=i.defaultValue||""}},p=n`
.input-counter{
    text-align: right;
       font-size: 10px;
       color: #cecece;
    }
`;class a extends l{static get styles(){return[u(d),p,n`
        :host {
          display: block;
        }
      `]}constructor(){super(),this.e=null}static get properties(){return{e:Object}}invalid(e){let t=".control";this.pageType.template==="payments"&&(t=".control-material"),this.shadowRoot.querySelector(t).classList.add("required"),this.shadowRoot.querySelector(t).classList.add("has-error"),this.shadowRoot.querySelector(".validation-info").style.display="flex",e&&(this.shadowRoot.querySelector(".validation-info").textContent=e)}valid(e){let t=".control";this.pageType.template==="payments"&&(t=".control-material"),this.shadowRoot.querySelector(t).classList.remove("required"),this.shadowRoot.querySelector(t).classList.remove("has-error"),this.shadowRoot.querySelector(".validation-info").style.display="none",this.shadowRoot.querySelector(".validation-info").textContent="Required"}getInput(){return this.shadowRoot.querySelector("#input")}getValue(){return this.shadowRoot.querySelector("#input").value}updated(e){super.updated(e),this.type="text",this.e.max!=null&&this.shadowRoot.querySelector("#input").setAttribute("maxlength",this.e.max),this.e.min!=null&&this.shadowRoot.querySelector("#input").setAttribute("minlength",this.e.min),this.required===!0?this.shadowRoot.querySelector("#require").style.display="unset":this.shadowRoot.querySelector("#require").style.display="none"}count(){if(this.e.max!=null){var e=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=e+"/"+this.e.max,this.shadowRoot.querySelector("#input").value.length==this.e.max?this.shadowRoot.querySelector("#count").style.color="#FF7273":this.shadowRoot.querySelector("#count").style.color="#cecece"}}render(){return s`
        <div class="column">
        <div class="field" style="margin-top: 0px">
            ${window.template!=="payments"?s`
                                
                <label class="form-label"><span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name}<span id="require" class="icon is-small is-right">*</span></label>
                <div class="control  has-icons-left has-icons-right">

                    <input class="input is-medium"  
                            id="input" 
                            name=${this.e.name} 
                            type="text"
                            value=${this.value} 
                            placeholder=${this.e.name} 
                            ?required=${this.required}   
                            @keyup="${this.count}"  >
                    
                    <small class="validation-info error" style="display: none;">Required</small>
                    <p id ="count" class="input-counter">${this.e.max}</p>

                </div>            
                            `:s`
                <div class="control-material is-primary">    
                <input class="material-input"            
                        id="input" 
                        name=${this.e.name} 
                        type="text"
                        value=${this.value} 
                        ?required=${this.required}   
                        @keyup="${this.count}"  >
                <span class="material-highlight"></span>
                <span class="bar"></span>
                    <small class="validation-info error" style="display: none;">Required</small>
                <p id ="count" class="input-counter">${this.e.max}</p>
                <label><span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name} <span id="require" class="icon is-small is-right">*</span></label>
            </div>
                        `}     
        </div>
        </div>
 
        `}}window.customElements.define(a.is,a);const x=i=>{const{element:e}=i;console.log("element barcode scanner ",e);const t=o.useRef(null);return o.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),r.jsx("div",{children:e?r.jsx("barcode-scanner",{id:"barcode-scanner",ref:t}):r.jsx("p",{children:"Loading data..."})})};export{x as default};
