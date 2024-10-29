import{S as k,i as b,r as v,g,k as o,a as h,j as p}from"./index-C2PWchud.js";import{u as P}from"./utils-mixin-D5aAiqNi.js";import{w as O}from"./datasource-mixin-DMQBE4lo.js";class A extends P(k){static get properties(){return{value:String,loader:Promise}}constructor(){super(),this.value=[]}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}getName(){return this.e.formName}getValue(){return this.finalProductOptions}validate(){return new this.Validation(!0,"valid")}init(t,e){super.init(t,e),this.required=t.min&&t.min>0,this.name=t.name,this.loader=this.loadData()}}const y=b`
    li {
        border-top: 0.5px solid var(--grey-dark);
    }
    li:last-child {
        border-bottom: 0.5px solid var(--grey-dark);
    }
`;class m extends A{static get styles(){return[v(g),y,b`
                :host {
                    display: block;
                }
            `]}static get properties(){return{attributes:Array,packs:Array,defaultAttributes:Array,defaultPacks:Array,editAttribute:String,editAttributeValue:String,editPack:String,editPackValue:String,productOptions:Array,finalProductOptions:Array,selectedPackName:String,data:Object,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.attributes=[],this.packs=[],this.defaultAttributes=[],this.defaultPacks=[],this.editAttribute="",this.editAttributeValue="",this.editPack="",this.editPackValue="",this.productOptions=[],this.data={},this.rows=[],this.cols=[],JSON.stringify()&&(this.selectedPackName=""),this.finalProductOptions=[]}updated(t){(t.has("e")||t.has("cols"))&&(this.attributes=this.e.details.attributes.map(e=>({...e,value:[]})),this.productOptions=this.data.map(e=>Object.fromEntries(Object.entries(e).map(([s,i])=>[s,i]))),this.finalProductOptions=[...this.productOptions],console.log(this.productOptions[0]),this.productOptions.length>0&&this.shadowRoot.querySelector("#createOptions").classList.add("is-hidden"))}onAddAttributeValueClickHandler(t){this.editAttribute=t,this.updateComplete.then(()=>{const e=this.shadowRoot.querySelector("#attributeInput");e.value="",this.editAttributeValue=""})}onAddPackValueClickHandler(t){this.editPack=t,this.updateComplete.then(()=>{const e=this.shadowRoot.querySelector("#packQuantityInput");this.shadowRoot.querySelector("#packContainSelect"),e.value="",this.editPackValue=void 0})}onToggleAttributeClickHandler(t){const e=this.attributes.filter(s=>s.name===t)[0];this.attributes=[...this.attributes.map(s=>s.name===t?{...s,value:[]}:s)],e.value.length===0&&this.onAddAttributeValueClickHandler(t)}onTogglePackClickHandler(t){const e=this.packs.filter(s=>s.name===t)[0];this.packs=[...this.packs.map(s=>s.name===t?{...s,value:[]}:s)],e.value.length===0&&this.onAddPackValueClickHandler(t)}onDeleteAttributeValuesClickHandler(t){this.attributes=[...this.attributes.map(e=>e.name===t?{...e,value:[]}:e)],this.defaultAttributes=[...this.attributes]}onDeletePackValueClickHandler(t){this.packs=[...this.packs.map(e=>e.name===t?{...e,value:[]}:e)]}onDeleteDefaultProductOptionClickHandler(t){const e=[...this.productOptions];e.splice(t,1),this.productOptions=[...e],this.finalProductOptions=[...this.productOptions]}onDeleteProductOptionClickHandler(t){const e=[...this.productOptions],s=e[t],i=[...this.finalProductOptions.filter(n=>JSON.stringify({attributes:n.attributes})!==JSON.stringify({attributes:s.attributes}))];this.finalProductOptions=[...i],e.splice(t,1),this.productOptions=[...e]}onDeleteAttributeItemClickHandler(t,e){const s=this.attributes.findIndex(a=>a.name===t),i=this.attributes[s],n=[...this.attributes];i.value=i.value.filter(a=>a!==e),n.splice(s,1,i),this.attributes=[...n],this.defaultAttributes=[...this.attributes]}onDeletePackItemClickHandler(t,e){const s=this.packs.findIndex(a=>a.name===t),i=this.packs[s],n=[...this.packs];i.value=i.value.filter(a=>a!==e),n.splice(s,1,i),this.packs=[...n],this.defaultPacks=[...this.packs]}onEditAttributeValueClickHandler(t,e){this.editAttribute=t,this.editAttributeValue=e,this.updateComplete.then(()=>{const s=this.shadowRoot.querySelector("#attributeInput");if(this.getEditAttributeUnits()){const i=this.shadowRoot.querySelector("select");s.value=this.splitAttributeValueUnit(e)[0],i.value=this.splitAttributeValueUnit(e)[1]}else s.value=e})}onEditPackValueClickHandler(t,e){this.editPack=t,this.editPackValue=e,this.updateComplete.then(()=>{const s=this.shadowRoot.querySelector("#packQuantityInput"),i=this.shadowRoot.querySelector("#packContainSelect");s.value=this.editPackValue.quantity,i.value=this.editPackValue.contains})}getEditAttributeUnits(){return this.attributes.filter(t=>t.name===this.editAttribute)[0].units}splitAttributeValueUnit(t){let e,s;return this.getEditAttributeUnits().forEach(i=>{const n=t.split(i);if(n.length===2){e=n[0],s=i;return}}),[e,s]}getAttributeValueUnit(t,e){let s,i;return i=this.attributes.filter(n=>n.name===t)[0].units,i&&i.forEach(n=>{if(e.split(n).length===2){s=n;return}}),s}onSaveAttributeClickHandler(){const t=this.shadowRoot.querySelector("#attributeInput");let e=t.value;if(e){const s=this.attributes.findIndex(a=>a.name===this.editAttribute),i=this.attributes[s],n=[...this.attributes];if(this.getEditAttributeUnits()){const a=this.shadowRoot.querySelector("select").value;e=e+""+a}if(this.editAttributeValue){const a=[...i.value],c=a.findIndex(l=>l===this.editAttributeValue);a.splice(c,1,e),i.value=[...a]}else i.value.includes(e)||(i.value=[...i.value,e]);n.splice(s,1,i),this.attributes=[...n],this.defaultAttributes=[...this.attributes],this.editAttribute=""}else t.classList.add("is-danger")}onCloseEditAttributeClickHandler(){this.editAttribute="",this.editAttributeValue=""}onCloseEditPackClickHandler(){this.editPack="",this.editPackValue=void 0}onSavePackClickHandler(){const t=this.shadowRoot.querySelector("#packQuantityInput"),e=this.shadowRoot.querySelector("#packContainSelect");let s=t.value,i=e.value;if(s&&i){const n=this.packs.findIndex(r=>r.name===this.editPack),a=this.packs[n],c=[...this.packs],l={name:this.editPack,quantity:s,contains:i,level:this.packs.findIndex(r=>r.name===this.editPack)+1};if(this.editPackValue){const r=[...a.value],u=r.findIndex(f=>JSON.stringify(f)===JSON.stringify(this.editPackValue));r.splice(u,1,l),a.value=[...r]}else a.value.find(r=>JSON.stringify(r)===JSON.stringify(l))||(a.value=[...a.value,l]);c.splice(n,1,a),this.packs=[...c],this.defaultPacks=[...this.packs],this.editPack="",this.editPackValue=void 0}else t.classList.add("is-danger"),e.classList.add("is-danger")}onPackChangeHandler(t,e){const s=t.target.value,i=[...this.packs],n=i.findIndex(a=>a.name===e);i.splice(n,1,{...this.packs[n],value:s}),this.packs=[...i]}onDefaultProductOptionPriceChangeHandler(t,e){const s=t.target.value,i=this.productOptions;i.splice(e,1,{...this.productOptions[e],variant_cost:s}),this.productOptions=[...i],this.finalProductOptions=[...this.productOptions]}onProductOptionPriceChangeHandler(t,e,s,i){const n=this.productOptions[e],a={attributes:n.attributes,variant_cost:t.target.value},c=this.finalProductOptions.findIndex(l=>JSON.stringify({attributes:l.attributes,pack:l.pack})===JSON.stringify({attributes:n.attributes,pack:packValue}));if(c>=0){const l=[...this.finalProductOptions];l.splice(c,1,{...a,id:c+1}),this.finalProductOptions=[...l]}else this.finalProductOptions=[...this.finalProductOptions,{...a,id:this.finalProductOptions.length+1}]}onRemoveProductOptionPackValueClickHandler(t,e,s){this.shadowRoot.querySelector("#option"+t+"-"+e+"-"+s).setAttribute("style","display: none");const a=[...this.productOptions][t],l=a.packs[e][s],r=this.finalProductOptions.findIndex(u=>JSON.stringify({attributes:u.attributes,pack:u.pack})===JSON.stringify({attributes:a.attributes,pack:l}));if(r>=0){const u=[...this.finalProductOptions];u.splice(r,1),this.finalProductOptions=[...u]}}onPackNameSelectChangeHandler(t){this.selectedPackName=t.target.value}generateProductOptions(){const t=[...this.attributes.filter(i=>i.value.length>0)];let e=[],s=[];for(let i=0;i<t[0].value.length;i++)e.push({attributes:[{name:t[0].name,level:this.attributes.findIndex(n=>n.name===t[0].name)+1,value:t[0].value[i]}],variant_cost:0});for(let i=1;i<t.length;i++)e.forEach(n=>{for(let a=0;a<t[i].value.length;a++)s.push({attributes:[...n.attributes,{name:t[i].name,level:this.attributes.findIndex(c=>c.name===t[i].name)+1,value:t[i].value[a]}],variant_cost:0})}),e=[...s];this.productOptions=[...e.map(i=>({...i,attributes:i.attributes.map(n=>{const a=this.getAttributeValueUnit(n.name,n.value);return a?{...n,measurement_unit:a}:n})}))]}presentGenerateOptionsBtn(){return this.attributes.filter(t=>t.value.length>0)}static get is(){return"product-options"}render(){return o`
            <div class="content">
                <div id="createOptions">
                    <h5>${this.e.name}</h5>
                    <div class="field is-grouped is-grouped-multiline">
                        ${this.attributes.map(t=>o`
                                <p class="control">
                                    <button class="button ${t.value.length>0&&"is-primary"}" @click=${()=>this.onToggleAttributeClickHandler(t.name)}>${t.name}</button>
                                </p>
                            `)}
                    </div>
                    <ul class="attributes mx-0 my-5">
                        ${this.attributes.map(t=>t.value.length>0?o`
                                <li class="columns m-0">
                                    <div class="column is-2 is-flex is-align-items-center">
                                        <h5 class="mb-0">${t.name}: </h5>
                                    </div>
                                    <div class="column is-9">
                                        <div class="field is-grouped is-grouped-multiline">
                                            ${t.value.map(e=>o`
                                                    <div class="control">
                                                        <div class="tags has-addons">
                                                            <a class="tag is-primary is-clickable" @click=${()=>this.onEditAttributeValueClickHandler(t.name,e)}>${e}</a>
                                                            <a class="tag is-delete" @click=${()=>this.onDeleteAttributeItemClickHandler(t.name,e)}></a>
                                                        </div>
                                                    </div>
                                                `)}
                                        </div>
                                    </div>
                                    <div class="column is-1 is-flex is-justify-content-space-between is-align-items-center">
                                        <span class="icon has-text-primary is-clickable" title="Edit" @click=${()=>this.onAddAttributeValueClickHandler(t.name)}>
                                            <i class="fa-solid fa-plus"></i>
                                        </span>
                                        <span class="icon has-text-primary is-clickable" title="Delete" @click=${()=>this.onDeleteAttributeValuesClickHandler(t.name)}>
                                            <i class="fa-solid fa-trash"></i>
                                        </span>
                                    </div>
                                </li>
                            `:"")}
                    </ul>
                    ${this.editAttribute?o`
                            <div class="attribute-editor field is-grouped is-justify-content-center">
                                <div class="field mr-3">
                                    <label class="label">Value</label>
                                    <p class="control">
                                        <input id="attributeInput" class="input" type="${this.getEditAttributeUnits()?"number":"text"}" value=${!this.editAttributeValue&&""} placeholder="Add ${this.editAttribute}">
                                    </p>
                                </div>
                                ${this.getEditAttributeUnits()?o`
                                        <div class="field mr-3">
                                            <label class="label">Units</label>
                                            <p class="control ${!this.getEditAttributeUnits()&&"is-hidden"}">
                                                <span class="select">
                                                    <select>
                                                        ${this.getEditAttributeUnits().map(t=>o`
                                                                <option>${t}</option>
                                                            `)}
                                                    </select>
                                                </span>
                                            </p>
                                        </div>
                                    `:""}
                                <div class="field mr-3">
                                    <p class="control">
                                        <button class="button is-primary" style="margin-top: 1.9rem;" title="Save" @click=${()=>this.onSaveAttributeClickHandler()}>Save</button>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control">
                                        <span class="icon has-text-primary is-clickable" title="close" style="margin-top: 2.4rem;" @click=${()=>this.onCloseEditAttributeClickHandler()}>
                                            <i class="fa-solid fa-xmark fa-xl"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        `:""}
                   
                    ${this.presentGenerateOptionsBtn()?o`
                            <button class="button is-primary" @click=${()=>this.generateProductOptions()}>
                                Generate Options
                            </button>
                        `:""}
                </div>
                ${this.productOptions.length>0?o`
                        <h5 class="mt-5">${this.data.length>0?this.e.name:"Product options:"}</h5>
                        <ul class="product-options mx-0 my-5">
                            ${this.data.length===0?this.productOptions.map((t,e)=>o`
                                    <li class="column">
                                        <div class="columns m-0">
                                            <div class="column is-9 is-flex is-align-items-center">
                                                <h6 class="mb-0">${t.attributes.map(s=>s.value).join(", ")}</h6>
                                            </div>
                                            <div class="column is-2">
                                                <div class="field">
                                                    <label class="label">Price</label>
                                                    <p class="control">
                                                        <input class="input" type="number" value=${t.price} @change=${s=>this.onProductOptionPriceChangeHandler(s,e,null,null)}>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="column is-1 is-flex is-justify-content-flex-end is-align-items-center">
                                                <span class="icon has-text-primary is-clickable" title="Delete" @click=${()=>this.onDeleteProductOptionClickHandler(e)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </span>
                                            </div>
                                        </div>
                                       
                                    </li>
                                `):Object.entries(this.productOptions[0]).map((t,e)=>o`
                                    <li class="column">
                                        <div class="columns m-0">
                                            <div class="column is-9 is-flex is-align-items-center">
                                                <h6 class="mb-0">${t[1].attributes.map(s=>s.value+(s.measurementUnit?" "+s.measurementUnit:""))}</h6>
                                            </div>
                                            <div class="column is-2">
                                                <div class="field">
                                                    <label class="label">Price</label>
                                                    <p class="control">
                                                        <input class="input" type="number" value=${t.variant_cost} @change=${s=>this.onDefaultProductOptionPriceChangeHandler(s,e)}>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="column is-1 is-flex is-justify-content-flex-end is-align-items-center">
                                                <span class="icon has-text-primary is-clickable" title="Delete" @click=${()=>this.onDeleteDefaultProductOptionClickHandler(e)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                `)}
                        </ul>
                    `:""}
            </div>
        `}}customElements.define(m.is,m);const C=d=>{const{element:t,rows:e,paramsCallback:s}=d,i=h.useRef(null);return h.useEffect(()=>{i.current&&t&&(i.current.e=t,i.current.rows=e)},[t,e,d,s]),p.jsx("div",{children:t?p.jsx("product-options",{id:"product-options",ref:i}):p.jsx("p",{children:"Loading data..."})})},$=O(C);export{$ as default};
