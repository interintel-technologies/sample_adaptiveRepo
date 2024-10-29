import{i as c,S as p,r as u,g as h,k as r,a as d,j as o}from"./index-C2PWchud.js";import{u as m}from"./utils-mixin-D5aAiqNi.js";import{E as g}from"./ecommerce-mixin-BZ3_9d38.js";import{w as v}from"./datasource-mixin-DMQBE4lo.js";import"./SectionTemplate-Drou2IoY.js";const b=c`
    img {
        width: 100%;
        object-fit: contain;
        /* padding: 10px; */
    }
    .image {
        border: 1.5px solid var(--input-border-color);
        border-radius:20px;
        margin-left:auto;
        margin-right:auto;
    }
    .button {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 20px 35px;
        width: 100%;
        color:var(--link);
    }
    .buttons {
        border-radius: 0 !important;
        flex-wrap: nowrap;
    }
    .icon {
        width: 40px;
        height: 40px;
        fill: black;
    }
    .heart {
        border-radius: 0 !important;
        border: 1px solid black !important;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        padding: 12px !important;
        width: fit-content !important;
        justify-content:center;
        
    }
    .heart:hover {
        border-radius: 0 !important;
        border: 1px solid var(--link) !important;
    }
    .heart:active {
        transform: scale(1.05);
    }
    .heart adaptive-ui-icon{
        fill:var(--link-color-invert);
        padding-top:5px;
        color:var(--link-color-invert);
    }
    .block {
        flex-direction: column;
        justify-content: space-between;
    }
    .hero-body {
        padding: 80px !important;
        margin: 0px;
    }
    #actions {
        margin-top: 30px;
        position: relative;
        margin: 0px !important;
        flex-wrap: wrap;
    }
    .content h4 {
        margin-top: 20px;
    }
    #previousPrice {
        text-decoration: line-through;
        opacity: 0.3;
    }
    #currentPrice {
        color: var(--grey-darker);
        margin-left: 5px;
        margin-top:.6em;
    }
    .small-image {
        cursor: pointer;
    }
    .small-image:hover{
        border-color: var(--link);
    }
    .selected {
        border-color: var(--grey-darker) !important;
        border-width: 2px !important;
    }
    .checked{
        font-weight:600 !important;
    }
    hr{
        margin: 1rem 0px !important;
    }
    .category{
        color:var(--grey);
        font-weight:500;
    }
    .tooltip {
        position: absolute;
        bottom: -35px;
        right: 0;
        opacity: 0;
        transition: opacity 1s;
        background-color: black;
        color: var(--grey-darker);
        text-align: center;
        border-radius: 6px;
        padding: 5px 7px;
        z-index: 1;
    }
    .show-tooltip {
        opacity: 1;
    }
    .tooltip p {
        color: white;
    }
    .subImgs{
        margin-top:0px;
    }
    #buttonsInput {
        display: flex;
    }
    #numberInput {
        display: none;
    }
    #quantitySelector.number-input > #numberInput {
        display: flex;
    }
    #quantitySelector.number-input > #buttonsInput {
        display: none;
    }
    
    #qtyBtn {
        border: 1px solid var(--link) !important;
        box-shadow: none !important;
        margin: 0 !important;
        border-radius: 0px;
        width: 100%;
        color: var(--link--invert-color);
        background-color:var(--card-background-color);
    }
    #removeBtn, #addBtn {
        cursor: pointer;
        width: 100%;
        background-color: var(--link);
        border: 1px solid var(--link) !important;
        box-shadow: none !important;
        margin: 0px !important;
        color:var(--link--color-invert);
    }
    #removeBtn{
        border-radius:30px 0 0 30px;
    }
    #addBtn{
        border-radius: 0 30px 30px 0;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    figure{
        overflow:hidden;
    }
    .small-image img{
        width:100%;
        height:96px;
    }
    #addToCartBtn{
        font-family:var(--family-sans-serif);
        color:var(--link--color-invert);
        background-color:var(--link);
        border-radius:30px;
        padding-top: .75em;
        padding-bottom: .75em;
    }
    #addToCartBtn:hover{
        background-color:var(--primary);
        color:var(--link--color-invert);   
    }
    .stockStatus{
        margin-left:.5em;
        white-space: nowrap; 
    }
    .stockStatusSpan{
        background-color:rgba(32,181,38,.2);
        color:rgba(44,116,47,1.0);
        border-radius:5px 5px 5px 5px;
        font-size:.8em !important;
        font-weight:600;
    }
    .description{
        margin-bottom:0 !important;
        color:var(--grey) !important;
    }
    label.radio{
        font-size:16px !important;
        margin-left:.5em;
    }
    radio .radio input[type="radio"]{
        font-size:16px !important;
    }
    radio .radio input[type="radio"]:checked + label{
        background-color:var(--link) !important;
        font-weight:600;
    }
    .radio + .radio {
            margin-left: .5em;
            margin-right:.5em;
    }
    .optionSelection{
        margin-top:1em;
    }
    .optionSelection label{
        font-weight:600;
    }
    .optionList{
        list-style:none !important;
        display:inline-flex;
        margin-left:0 !important;
        margin-top:.5em !important;
        width:100%;
        justify-content:flex-start;
    }
    .optionListItem{
        border:1px solid var(--input-border-color);
        margin-left:.3em;
        margin-right:.3em;
        max-height:37px;
        text-align:center;
        border-radius:5px 5px 5px 5px;
        vertical-align:middle;
        cursor:pointer;
    }
    .optionListItem.selected p{
        color:var(--grey-darker);
    }
    .optionListItem p{
        font-size:.9em;
        color:var(--grey);
    }
    .optionList > li:first-of-type{
        margin-top:0.25em !important;
    }
    .disabled{
        color:var(--grey-lighter);
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
        background: 
         linear-gradient(to top left,
             rgb(219, 219, 219) 0%,
             rgb(219, 219, 219) calc(50% - 0.8px),
             var(--grey) 50%,
             rgb(219, 219, 219) calc(50% + 0.8px),
             rgb(219, 219, 219) 100%);
    }
    .packSelection .control{
        /* display: flex; */
         /* flex-direction: row;  */
         vertical-align: middle
    }
    @media(max-width:768px){
        .radio + .radio {
            margin-left: 0 !important;
        }
        label.radio{
            margin-left: 0 !important;
        }
    }
    @media screen and (max-width: 550px) {
        .heart {
            margin: auto !important;
        }
        .hero-body {
            padding: 10px !important;
        }
      #addToCartBtn {
            width: 100%;
        }
    }
    @media(max-width:480px){
        .small-image{
            width:64px !important;
            height:64px !important;
        }
    }
`;class n extends g(m(p)){static get properties(){return{required:Boolean,title:String,icon:String,params:Object,sectionSize:String,loader:Function,value:Object}}constructor(){super(),this.value=void 0}getName(){return this.e.formName.split("=")[0]}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}valid(t){}invalid(t){}dscDataName(){return this.e.defaultValue}init(t,i){super.init(t,i),this.required=this.e.required||t.min&&t.min>0,this.title=n.toTitleCase(t.name),this.icon=t.icon,this.params=this.pl.paramsCopy(),this.sectionSize=t.sectionSize,this.loader=this.loadData()}}class l extends n{static get styles(){return[u(h),b]}static get properties(){return{product:Object,showCaseImagePos:Number,isInStock:Boolean,variants:Array,attributes:Array,selectedAttributes:Array,validVariants:Array,cols:{type:Array},rows:{type:Array}}}constructor(){super(),this.product={},this.showCaseImagePos=0,this.isInStock=!0,this.variants=[],this.attributes=[],this.validVariants=[],this.selectedAttributes=[],this.rows=[],this.cols=[]}updated(t){(t.has("e")||t.has("rows"))&&(console.log("changedProperties ",t),this.initializeProduct())}updated(t){super.updated(t),t.forEach((i,a)=>{if(a==="validVariants"&&this.validVariants.length===1){const e=this.validVariants[0];this.product={...this.product,id:this._extractProductIdAnVariant(this.product.id)[0]+"|"+e.product_item_variant_id,price:e.product_item_variant_cost}}if(a==="validVariants"&&i.length===1){const e=this.variants[0];this.product={...this.product,id:"",price:e.product_item_variant_cost}}})}initializeProduct(){this.product=Object.fromEntries(this.rows[0].map((t,i)=>this.cols[i].label==="image"?["images",[t&&t!==null?"/media/"+t:"http://via.placeholder.com/640x360"]]:this.cols[i].label==="stockQuantity"?["stockQuantity",parseInt(t)]:[this.cols[i].label,t])),this.rows.length>1&&(this.variants=[...this.rows.map(t=>{let i={};return t.forEach((a,e)=>{this.cols[e].label.startsWith("product_item_variant")&&(i={...i,[this.cols[e].label]:a})}),i})]),this.validVariants=this.variants,this.variants.forEach(t=>{t.product_item_variant_attributes.forEach(i=>{this.attributes[i.name]?this.attributes[i.name].includes(i.value)||(this.attributes={...this.attributes,[i.name]:[...this.attributes[i.name],i.value]}):this.attributes={...this.attributes,[i.name]:[i.value]}})}),this.product={...Object.fromEntries(Object.entries(this.product).filter(([t,i])=>!t.startsWith("product_item_variant")))},(this.product.stockQuantity!=null||this.product.stockQuantity>0)&&(this.isInStock=!0),this.product={...this.product,quantity:this.isItemInCart(this.product.id)?this.getCartItemQuantity(this.product.id):0}}onRemoveOneBtnClickHandler(){const t=this.getCartItemQuantity(this.product.id)-1;this.updateCartItemQuantity(this.product.id,t,"product")}onAddOneBtnClickHandler(){const t=this.getCartItemQuantity(this.product.id)+1;this.updateCartItemQuantity(this.product.id,t,"product")}onSetQuantityBtnClickHandler(){const t=parseInt(this.shadowRoot.querySelector("input").value);this.updateCartItemQuantity(this.product.id,t,"product")}onSmallImageClickHandler(t){this.showCaseImagePos=t;const i=this.shadowRoot.querySelector(`#image${t}`);this.shadowRoot.querySelectorAll(".small-image").forEach(e=>e.classList.remove("selected")),i.classList.add("selected")}onHeartBtnClickHandler(){this.addProductToWishlist(this.product)}onAddProductToCartBtnClickHandler(t){this.addProductToCart(this.product)}onChangeQuantitySelectorBtnCLickHandler(){this.shadowRoot.querySelector("#quantitySelector").classList.toggle("number-input"),this.shadowRoot.querySelector("input").value=this.isItemInCart(this.product.id)?this.getCartItemQuantity(this.product.id):0}isAttributeValid(t){return this.validVariants.filter(i=>i.product_item_variant_attributes.filter(a=>a.name===t.name&&a.value===t.value).length>0).length>0}onAttributeClickHandler(t){const i=this.selectedAttributes.findIndex(a=>a.name===t.name);if(i<0)this.selectedAttributes=[...this.selectedAttributes,t];else{const a=[...this.selectedAttributes];JSON.stringify(this.selectedAttributes[i])===JSON.stringify(t)?a.splice(i,1):a.splice(i,1,t),this.selectedAttributes=[...a]}this.computeValidVariants()}computeValidVariants(){this.selectedAttributes.length>0&&(this.validVariants=[...this.variants.filter(t=>this.selectedAttributes.map(i=>JSON.stringify(i)).every(i=>t.product_item_variant_attributes.map(a=>JSON.stringify({name:a.name,value:a.value})).includes(i)))])}onPackRadioChangeHandler(t){this.selectedAttributes=[],this.computeValidVariants()}isAttributeSelected(t){return this.selectedAttributes.map(i=>JSON.stringify(i)).includes(JSON.stringify(t))}static get is(){return"product-view"}render(){return r`
            <div class="content">
                <div id="product-view" class="column">
                    <div class="columns" style="margin: 0px;">
                        ${Object.entries(this.product).length>0?r`
                                <div class="column is-5">
                                    <div class="column" style="padding-top: 0;">
                                        <figure class="large-image image is-5by4">
                                            <img src="https://i.postimg.cc/FKFYKSJY/mipayscreenshot.png" alt="${this.product.name}-product-image-${this.showCaseImagePos}">
                                        </figure>
                                    </div>
                                    <div class="columns is-multiline is-flex is-mobile imgsCol" style="margin: 0px;">
                                        ${this.product.images.map((t,i)=>r`
                                                <div class="column is-one-third-mobile">
                                                    <figure id="image${i}" class="small-image image is-96x96 ${i===0?"selected":""}" @click=${()=>this.onSmallImageClickHandler(i)}>
                                                        <img src=${t} alt="${this.product.name}-product-image-${i}">
                                                    </figure>
                                                </div>
                                            `)}
                                    </div>
                                </div>
                                <div class="column is-7">
                                    <div class="content">
                                        <div class="block is-flex">
                                            <div class="is-inline-flex">
                                                <h2>${this.product.name}</h2>
                                                <p class="stockStatus ${this.isInStock?"active":""}"><span class="stockStatusSpan p-1">In Stock</span></p>
                                            </div>
                                            <div class="is-flex">
                                                <h3 id="currentPrice">${this.formatToKenyaShillings(this.product.price)}</h3>
                                            </div> 
                                            <hr>
                                            <p class="description">${this.product.description}</p>
                                            <hr>
                                            ${this.variants.length>0?r`
                                                    <div class="variations">
                                                        <div class="attributes">
                                                            <div class="optionSelection">
                                                                ${Object.entries(this.attributes).map(([t,i])=>r`
                                                                        <label id="label-${t}">${t}</label>
                                                                        <ul class="optionList" id="optionList-${t}">
                                                                            ${i.map(a=>{const e={name:t,value:a};return r`
                                                                                        <li class="optionListItem p-1 is-capitalized ${this.isAttributeSelected(e)?"selected":""}  ${this.isAttributeValid(e)?"":"disabled"}" id="option-${a}"  @click=${()=>this.onAttributeClickHandler(e)}><p>${a}</p></li>
                                                                                    `})}
                                                                        </ul>
                                                                    `)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                `:""}
                                            <div id="actions" class="columns">
                                                <div class="column ${this.isItemInCart(this.product.id)?"is-flex":"is-hidden"}">
                                                    <div id="quantitySelector">
                                                        <div id="buttonsInput" class="buttons has-addons">
                                                            <button id="removeBtn" class="button ${this.isCartLoading?"is-loading":""}" title="Remove" @click=${()=>this.onRemoveOneBtnClickHandler()}>
                                                                    <span class="icon">
                                                                        <i class="fa-solid fa-minus"></i>
                                                                    </span>
                                                            </button>
                                                            <button id="qtyBtn" class="button ${this.isCartLoading?"is-loading":""}">
                                                                ${this.isItemInCart(this.product.id)?this.getCartItemQuantity(this.product.id):0}
                                                            </button>
                                                            <button id="addBtn" class="button ${this.isCartLoading?"is-loading":""}" title="Add" 
                                                                ?disabled=${this.product.stockQuantity?this.getCartItemQuantity(this.product.id)>=this.product.stockQuantity:!1}
                                                                @click=${()=>this.onAddOneBtnClickHandler()}
                                                            >
                                                                <span class="icon">
                                                                    <i class="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div id="numberInput" class="field has-addons">
                                                            <div class="control">
                                                                <input class="input" type="number" placeholder="Quantity" value=${this.isItemInCart(this.product.id)?this.getCartItemQuantity(this.product.id):0}>
                                                            </div>
                                                            <div class="control">
                                                                <button class="button is-info ${this.isCartLoading?"is-loading":""}" @click=${()=>this.onSetQuantityBtnClickHandler()} title="Update Quantity">
                                                                    <span class="icon is-small">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="icon is-clickable ml-4" title="Change Input" @click=${()=>this.onChangeQuantitySelectorBtnCLickHandler()}>
                                                        <i class="fa-solid fa-arrow-right-arrow-left fa-beat"></i>
                                                    </div>
                                                </div>
                                                <div class="column ${this.isItemInCart(this.product.id)?"is-hidden":"is-flex"}">
                                                    <button id="addToCartBtn" class="button is-primary ${this.isCartLoading?"is-loading":""}" type="button" .productId ="${this.product.id}" 
                                                        @click=${()=>this.onAddProductToCartBtnClickHandler()} title="Add to Cart" ?disabled=${this.validVariants.length!==1&&this.variants.length>0}
                                                    >
                                                        ${this.product.stockQuantity?this.product.stockQuantity>0?"Add to Cart":"Out of Stock":"Add to Cart"}
                                                        
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div>
                                            <p><span class="has-text-weight-bold">Category</span>: <span class="category">${this.product.category}</span></p>
                                        </div>
                                    </div>
                                </div>
                            `:""}
                    </div>
                </div>
            </div>
        `}}customElements.define(l.is,l);const f=s=>{const{element:t,rows:i}=s,a=d.useRef(null);return d.useEffect(()=>{a.current&&t&&(a.current.e=t,a.current.rows=i)},[t,i,s]),o.jsx("div",{children:t?o.jsx("product-view",{id:"product-view",ref:a}):o.jsx("p",{children:"Loading data..."})})},S=v(f);export{S as default};
