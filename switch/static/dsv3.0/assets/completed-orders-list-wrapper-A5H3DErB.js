import{i as c,S as p,r as h,g as b,k as o,a as u,j as a}from"./index-C2PWchud.js";import{u as v}from"./utils-mixin-D5aAiqNi.js";import"./text-area-DVnsF1h0.js";import{w as f}from"./datasource-mixin-DMQBE4lo.js";import"./InputMixin-CGm-oGk-.js";const y=c`
    .columns {
        margin: 0 !important;
    }
    ul {
        margin: 0 !important;
        list-style: none !important;
    }
    li {
        border-bottom: 1px solid #ccc;
    }
    .image {
        border: 1px solid var(--link);
    }
    img {
        height: 100% !important;
        object-fit: contain;
    }
    .button {
        background-color: var(--primary);
        padding: 20px 35px;
        border: none;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    #cancel {
        background-color: red !important;
        margin-right: 1em;
    }
    .is-flex {
        flex-wrap: wrap;
    }
    #status {
        color: var(--link) !important;
    }
    #warning-text {
        display:none;
    }
    @media screen and (max-width: 770px) {
        #cancel {
            margin-bottom: 1em;
        } 
    }
    @media (max-width: 1023px) {
        .has-text-centered-mobile {
            text-align: center;
        }
        .column{
            padding:0 !important
        }
    }

    @media (max-width: 1023px) {
        .is-fullwidth-mobile {
            width: 100%;
        }
        .column{
            padding:0 !important
        }
    }
`;class n extends v(p){static get properties(){return{value:Array}}constructor(){super(),this.value=[]}dscDataName(){return this.e.defaultValue}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(t,i){super.init(t,i),this.title=n.toTitleCase(t.name),this.required=t.min&&t.min>0,this.name=t.name}}class d extends n{static get styles(){return[h(b),y,c`
                :host {
                    display: block;
                }
            `]}static get properties(){return{orders:Array,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.orders=[],this.e=null,this.rows=[],this.cols=[]}firstUpdated(){this.loadData().then(()=>{this.orders=[...this.rows.map(t=>Object.fromEntries(t.map((i,e)=>[this.cols[e].label,i])))]})}updated(t){(t.has("rows")||t.has("cols"))&&(console.log("Updated: rows or cols changed"),console.log("this.rows:",this.rows),console.log("this.cols:",this.cols),this.orders=[...this.rows.map(i=>Object.fromEntries(i.map((e,s)=>[this.cols[s].label,e])))])}formatPrice(t){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(t)}formatDate(t){return new Date(t).toLocaleDateString()}onInputHandler(t,i,e){const s=this.value.findIndex(m=>m.id===e);let l={};s>-1?l={...this.value[s],[i]:t}:l={id:e,[i]:t},this.value=[...this.value.slice(0,s),l,...this.value.slice(s+1)]}valid(t){const i=this.shadowRoot.querySelector("#warning-text");i.style.display="none"}invalid(t){const i=this.shadowRoot.querySelector("#warning-text");i.style.display="block"}toTitleCase(t){if(!t)return"";t=t.toString(),t=t.toLowerCase().split(" ");let i=[];for(let e=0;e<t.length;e++)i[e]=t[e].substr(0,1).toUpperCase()+t[e].substr(1);return i.join(" ")}onReturnItemsBtnClickHandler(t){const i=this.shadowRoot.querySelector(`#returnBtn${t}`),e=this.shadowRoot.querySelector(`#returnColumn${t}`);i.style.display="none",e.style.display="block"}onCompleteRequestBtnClickHandler(t){const i=this.shadowRoot.querySelector(`#returnBtn${t}`),e=this.shadowRoot.querySelector(`#returnColumn${t}`);i.style.display="flex",e.style.display="none"}static get is(){return"completed-orders-list"}render(){return o`
            <div class="content">
                <ul>
                    ${this.orders.map((t,i)=>o`
                        <li>
                        <div class="columns is-multiline">
                            <div class="column is-12-mobile is-12-tablet is-3-desktop">
                                <figure class="image">
                                    <img src="/media/${t.product.image}" alt="${t.product.name} Image">
                                </figure>
                            </div>
                            <div class="column is-12-mobile is-12-tablet is-4-desktop has-text-centered-mobile">
                                <h5>${t.product.name}</h5>
                                ${Object.entries(t.product).filter(([e,s])=>e!=="image"&&e!=="name").map(([e,s])=>o`
                                        <p>${this.toTitleCase(e)}: ${e==="price"?this.formatPrice(s):s}</p>
                                    `)}
                                <h6>Total: ${this.formatPrice(t.product.quantity*t.product.price)}</h6>
                                <button id="returnBtn${i}" class="button is-fullwidth-mobile" @click=${()=>this.onReturnItemsBtnClickHandler(i)}>
                                    Return Item(s)
                                </button>
                            </div>
                            <div class="column is-12-mobile is-12-tablet is-3-desktop has-text-centered-mobile">
                                <h5>Ordered: ${this.formatDate(t.date)}</h5>
                                <h5 id="status">Delivered ${this.formatDate(t.deliveryDate)}</h5>
                            </div>
                        </div>
                        <div id="returnColumn${i}" class="column" style="display: none;">
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                                    <h6>Return Quantity:</h6>
                                </div>
                                <div class="column is-11-mobile is-11-tablet is-11-desktop">
                                    <input id="quantityInput" class="input" type="number" name="quantity"
                                        @input=${e=>this.onInputHandler(e.target.value,"quantity",t.id)}
                                    >
                                </div>
                            </div>
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                                    <h6>Reason:</h6>
                                </div>
                                <div class="column is-11-mobile is-11-tablet is-11-desktop">
                                    <input id="reasonInput" class="input" type="text" name="reason"
                                        @input=${e=>this.onInputHandler(e.target.value,"reason",t.id)}
                                    >
                                </div>
                            </div>
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                                    <h6>Comments:</h6>
                                </div>
                                <div class="column is-11-mobile is-11-tablet is-11-desktop">
                                    <textarea .propName=${""} .propDefaultValue=${""}
                                        .propMax=${200} @getTextAreaValue=${e=>this.onInputHandler(e.detail.textAreaValue,"comments",t.id)}
                                    ></textarea>
                                </div>
                            </div>
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                                    <button class="button is-fullwidth" @click=${e=>this.onCompleteRequestBtnClickHandler(i)}>
                                        Complete Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                        `)}
                </ul>
                <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `}}customElements.define(d.is,d);const g=({element:r,rows:t,cols:i})=>{const e=u.useRef(null);return u.useEffect(()=>{e.current&&r&&(e.current.e=r,e.current.rows=t,e.current.cols=i)},[r,t,i]),a.jsx(a.Fragment,{children:r&&t&&i?a.jsx("completed-orders-list",{id:"completed-orders-list",ref:e}):a.jsx("p",{children:"Loading data..."})})},R=f(g);export{R as default};
