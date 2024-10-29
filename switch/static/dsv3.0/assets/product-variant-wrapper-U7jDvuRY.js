import{S as h,i as p,r as g,g as m,k as n,a as d,j as c}from"./index-C2PWchud.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";const b=class extends f(h){constructor(){super(),this.value={}}static get properties(){return{value:String}}getName(){return this.e.formName}getValue(){return this.value}validate(){if(!this.getValue()||this.getValue()===void 0)return new this.Validation(!1,"invalid");const e=Object.keys(this.e.details).length+1;return Object.keys(this.value).length<e?new this.Validation(!1,"Some values are missing! Please make sure to select a value for each variant."):new this.Validation(!0,"valid")}valid(e){const a=this.shadowRoot.querySelector(".title.is-6"),r=this.shadowRoot.querySelector("#warning-text"),l=this.shadowRoot.querySelectorAll(".variant-title"),s=this.shadowRoot.querySelectorAll(".selected");a.classList.remove("title-danger"),a.classList.add("title-success"),l.forEach(t=>{t.classList.remove("variant-title-danger"),t.classList.add("variant-title-success")}),s.forEach(t=>{t.classList.add("selected-variant-value-success")}),r.style.display="none",setTimeout(()=>{a.classList.remove("title-success"),l.forEach(t=>{t.classList.remove("variant-title-success")}),s.forEach(t=>{t.classList.remove("selected-variant-value-success")})},3e3)}invalid(e){const a=this.shadowRoot.querySelector(".title.is-6"),r=this.shadowRoot.querySelector("#warning-text");a.classList.add("title-danger"),r.innerText=e.validationMessage,r.style.display="block"}dscDataName(){return this.e.defaultValue}firstUpdated(e){super.firstUpdated(e)}init(e,a){super.init(e,a),this.name=e.name}},x=p`
  .columns {
    margin: 0;
  }
  #vv-columns-container,
  #vt-columns-container {
    flex-direction: column;
  }
  #variant-titles {
    justify-content: space-between;
    max-width: fit-content;
  }
  #variant-values {
    flex: 1;
  }
  .card {
    width: 100%;
    padding: 15px;
  }
  .button {
    width: 100%;
    padding: 20px;
    border-radius: 0;
    border: 2px black solid;
  }
  .title.is-5 {
    text-align: center;
  }
  .title.is-6 {
    margin-bottom: 20px;
  }
  .variant-container {
    margin: 15px 0;
  }
  .variant-title {
    cursor: auto;
    margin: 0;
  }
  .variant-value {
    margin: 0 10px;
  }
  .variant-title:hover {
    border: 4px black solid;
  }
  .block {
    width: 100%;
  }
  .vl {
    height: 100%;
    width: 5px;
    margin-left: 20px;
    background-color: var(--link);
  }
  .is-1 {
    justify-content: center;
  }
  .selected {
    border-color: var(--link);
  }
  .title-success {
    color: #23d160;
  }
  .title-danger {
    color: #ff2b56;
  }
  .variant-title-success {
    border-color: #23d160;
  }
  .variant-title-danger {
    border-color: #ff2b56;
  }
  .selected-variant-value-success {
    border-color: #23d160;
  }
  #warning-text {
    display: none;
  }

  @media screen and (max-width: 800px) {
    #variant-values {
      overflow: auto;
    }
    #vv-columns-container {
      overflow: auto;
    }
    .column {
      padding: 0;
    }
    #line {
      display: none;
    }
    .variant-title {
      padding: 20px 10px;
      margin-left: 0px;
    }
  }
`;class u extends b{static get styles(){return[g(m),x]}static get is(){return"product-variant"}static get properties(){return{variantsObject:Object,variantTitles:Array,variantValues:Array,e:{type:Object}}}constructor(){super(),this.variantsObject={},this.variantTitles=[],this.variantsValues=[],this.e=null}updated(a){a.has("e")&&(this.variantsObject={Color:["white","red","black","blue","yellow","green"],...this.e.details},this.variantTitles=Object.keys(this.variantsObject),this.variantsValues=Object.values(this.variantsObject))}createVariantTitles(){return n`
      <div id="vt-columns-container" class="columns is-flex">
        ${this.variantTitles.map(a=>n`
            <div class="column variant-container">
              <div class="button variant-title">
                <h3 class="is-5">${a}</h3>
              </div>
            </div>
          `)}
      </div>
    `}createVariantValues(){const a=(s,t)=>{const i=this.variantTitles[t];this.value=Object.assign(this.value,{[i]:s}),r(s,t)},r=(s,t)=>{const i=this.shadowRoot.querySelector(`#vc${t}`),v=this.shadowRoot.querySelector(`#${l(s,t)}`),o=i.querySelector(".selected");o&&o.classList.toggle("selected"),v.classList.toggle("selected")},l=(s,t)=>`vv${s.split(" ").join("")}${t}`;return n`
      <div id="vv-columns-container" class="columns is-flex">
        ${this.variantsValues.map((s,t)=>n`
            <div id="vc${t}" class="column is-flex variant-container">
              ${s.map(i=>n`
                                    <div
                                        id="${l(i,t)}"
                                        class="button variant-value"
                                        style="background-color: ${t===0?i:""};"
                                        @click=${()=>a(i,t)}
                                    >
                                        <h3 class="is-5"
                                            style="color: ${i==="black"?"white":""};"    
                                        >${i}</h3>
                                    </div>
                                `)}
            </div>
          `)}
      </div>
    `}render(){return n`
      <div class="hero-body" style="padding:16px">
        <h3 class="title is-6">${this.e.name}</h3>
        <div id="columns-container" class="columns is-flex">
          <div id="variant-titles" class="column is-flex">
            ${this.createVariantTitles()}
            <div class="vl"></div>
          </div>
          <div id="variant-values" class="column">
            ${this.createVariantValues()}
          </div>
        </div>
        <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </div>
    `}}customElements.define(u.is,u);const V=({element:e})=>{const a=d.useRef(null);return console.log("element product variant ",e),d.useEffect(()=>{const r=a.current;r&&e&&(r.e=e)},[e]),c.jsx("div",{children:e?c.jsx("product-variant",{id:"product-variant",ref:a}):c.jsx("p",{children:"Loading data..."})})};export{V as default};
