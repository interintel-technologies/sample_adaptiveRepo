import{i as u,S as c,r as p,g as m,k as l,a as d,j as a}from"./index-C2PWchud.js";import"./date-D9zgt7Gf.js";import{u as h}from"./utils-mixin-D5aAiqNi.js";import{w as x}from"./datasource-mixin-DMQBE4lo.js";import"./InputMixin-CGm-oGk-.js";const g=u`
    .image {
        border: 1px solid var(--primary);
    }
    li {
        border-bottom: 1px solid var(--grey-light);
        list-style: none;
    }
    .cont {
        border: 1px solid var(--grey-light);
    }
    .head {
        border-bottom: 1px solid var(--grey-light);
    }
    @media screen and (max-width: 770px) {
        .head {
            display: none;
        }
    }
`,n=class extends h(c){static get properties(){return{value:Array,loader:Promise}}constructor(){super(),this.value=[]}dscDataName(){return this.e.defaultValue}getName(){return this.e.formName}getValue(){return this.products.map(t=>{const e=this.shadowRoot.querySelector(`#dateInput${t.id}`).value;return{id:t.id,expiryDate:e}})}validate(){if(this.e.required){let t;if(this.getValue().forEach(e=>{e.expiryDate?new Date().getTime()>new Date(e.expiryDate+"T00:00").getTime()&&(t=!0):t=!0}),t)return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}init(t,e){super.init(t,e),this.title=n.toTitleCase(t.name),this.required=t.min&&t.min>0,this.name=t.name,this.loader=this.loadData()}};class o extends n{static get styles(){return[p(m),g]}static get properties(){return{products:Array}}constructor(){super(),this.products=[]}firstUpdated(){this.loader.then(()=>{this.products=[...this.rows.map(e=>Object.fromEntries(e.map((i,s)=>[this.cols[s].label,i])))]})}valid(){return this.getValue().forEach(e=>{this.shadowRoot.querySelector(`#dateInput${e.id}`).setAttribute("validation",JSON.stringify({isValid:!0,validationMessage:""}))})}invalid(){return this.getValue().forEach(e=>{const i=()=>e.expiryDate?new Date().getTime()>new Date(e.expiryDate+"T00:00").getTime():!0;this.shadowRoot.querySelector(`#dateInput${e.id}`).setAttribute("validation",JSON.stringify({isValid:!(!e.expiryDate||i()),validationMessage:e.expiryDate?i()?"Product Expired":"":"Field is empty"}))})}static get is(){return"products-expiry"}render(){return l`
            <div class="content">
                <h3>${this.e.name}</h3>
                <div class="column cont p-0">
                    <div class="columns head mb-2 m-0">
                        <div class="column">
                            <h4 class="m-0">Product</h4>
                        </div>
                        <div class="column">
                            <h4 class="m-0">Expiry Date</h4>
                        </div>
                    </div>
                    <ul class="m-0">
                        ${this.products.map(e=>l`
                                <li class="columns m-0">
                                    <div class="column is-flex is-align-items-center">
                                        <figure class="image is-96x96">
                                            <img src="${e.image?"/media/"+e.image:"http://via.placeholder.com/640x360"}" alt="${e.name}Image">
                                        </figure>
                                        <h6 class="m-0">${e.name}</h6>
                                    </div>
                                    <div class="column is-flex is-align-items-center">
                                        <date-input id="dateInput${e.id}" style="width: 100%;" .name=${"Pick a date"}></date-input>
                                    </div>
                                </li>
                            `)}
                    </ul>
                </div>
            </div>
        `}}customElements.define(o.is,o);const y=t=>{const{element:e,rows:i,paramsCallback:s}=t,r=d.useRef(null);return d.useEffect(()=>{r.current&&e&&(r.current.e=e,r.current.rows=i)},[e,i,t,s]),a.jsx("div",{children:e?a.jsx("products-expiry",{id:"products-expiry",ref:r}):a.jsx("p",{children:"Loading data..."})})},E=x(y);export{E as default};
