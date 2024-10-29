import{S as v,i as g,r as b,g as f,k as a,a as p,j as d}from"./index-C2PWchud.js";import{u as x}from"./utils-mixin-D5aAiqNi.js";import{E as y}from"./ecommerce-mixin-BZ3_9d38.js";import"./cart-editor-BXlReNNz.js";import{w}from"./datasource-mixin-DMQBE4lo.js";import"./SectionTemplate-Drou2IoY.js";import"./date-D9zgt7Gf.js";import"./InputMixin-CGm-oGk-.js";class n extends y(x(v)){static get properties(){return{value:Object}}constructor(){super(),this.value=[]}getName(){return this.e.formName.split("=")[0]}getValue(){return this.value}validate(){return this.e.required&&!this.value||this.value===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(i){}invalid(i){}dscDataName(){return this.e.defaultValue}updated(i){i.has("e")&&console.log("Updated properties prod:",this.cols,this.rows,this.e)}init(i,t){super.init(i,t),this.required=this.e.required||i.min&&i.min>0,this.title=n.toTitleCase(i.name),this.icon=i.icon,this.params=this.pl.paramsCopy(),this.sectionSize=i.sectionSize,this.loader=this.loadData()}}const k=g`
  .content ul{
    margin-left:0 !important;
    margin-top:0 !important;
  }
  .content h6{
    margin-top: .5em !important;
    margin-bottom: .5em !important;
  }
  .tabs{
    flex-direction:column;
  }
  .card {
    cursor: pointer;
    background-color:var(--body-background-color) !important;
    box-shadow:none;
    border:1px solid var(--input-border-color);
    border-radius:10px;
  }
  hr {
    width: 90%;
    height: 2px;
    margin-left:auto;
    margin-right:auto;
  }
  .level {
    width: 100%;
  }
  .product-image {
    height: 200px;
    width: 100%;
    object-fit: contain;
    border-radius: 6px  6px 6px 6px;
    /* padding:1rem; */
  }
  .badge{
    width:45px;
    height:45px;
    position:absolute;
    background-color:var(--primary);
    color:white;
    font-size:12px;
    font-weight:600;
    text-align:center;
    font-family:var(--family-sans-serif);
    border-radius:0 6px 0 6px;
    right:0;
    justify-content:center;
    visibility:hidden;
  }

  .badge.has-discount{
    visibility:visible;
  }

  .no-discount{
    visibility:hidden;
  }
  
  .size{
    color:var(--grey-darker);
    opacity:0.35;
    font-size: 13px;
  }
  .was-price {
    color:var(--grey-darker);
    opacity: 0.35;
    font-size: 12px;
    margin-left:8px;
  }

  .tabs{
    border: 1px solid var(--input-border-color);
    /* padding-bottom:15px; */
    border-radius:none;
  }
  .tabs ul{
    flex-direction:column;
    display:flex;
  }
  
  .tab {
    padding: 10px;
    margin-right: 0px;
    /* border: 1px solid var(--grey-darker); */
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    cursor: pointer;
    width:100%;
    
  }
  .tab.active{
    background-color: var(--primary);
  }
  .tab:hover {
    background-color: var(--primary);
  }
  .tab:hover  .tab-item p {
    color: white !important;
  }
  .tab-item {
    width: fit-content;
    margin: auto;
    text-transform:capitalize;  
  }
  ul {
    justify-content: center;
  }
  .content > * {
    margin-bottom: 5px !important;
  }
  .active .tab-item h6 {
    color: white !important;
  }
  .is-price {
    color: var(--primary);
    font-size: 12px;
    margin-bottom:0 !important;
    margin-left:0 !important;
  }
  .product-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    width: 100%;
    padding: 10px;
    transition: max-height 0.3s ease-out;
  }
  .level {
    position: relative;
    justify-content: center;
    bottom:2rem;
    margin-left:.5rem !important;
    display:flex;
  }
  .prices {
    justify-content: start;
    margin-left:.5rem !important;
  }
  .tooltip {
    position: absolute;
    bottom: 60px;
    right: 50%;
    transform: translateX(50%);
    opacity: 0;
    transition: opacity 1s;
    background-color: black;
    color: #fff;
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
  .cart-buttons{
    border:2px solid rgb(74, 74, 74,.3);
    border-radius:5px 5px 5px 5px;
    width:90%;
    display:flex;
    background-color:var(--body-background-color);
    position:relative;
    bottom:2.5rem;
    visibility:hidden !important;
  
  }
  .decrease{
    justify-content:center;
    padding:.2rem .75rem .2rem .75rem;
  }
  .decrease .icon i{
      color:var(--primary);
  }
  .amount{
    justify-content:center;
    padding:.3rem .75rem .3rem .75rem;
    
  }
  .increase{
    justify-content:center;
    padding:.2rem .75rem .2rem .75rem;
  }
  .increase .icon i{
      color:var(--primary);
  }
  .icon{
    text-align:center;
    justify-content:center;
  }
  .unit{
    height:38px;
    width:38px;
    background-color:var(--primary);
    border-radius:5px 5px 5px 5px;
    text-align:center;
    justify-content:center;
    position:absolute;
    padding:.55rem .75rem .3rem .75rem;
    color:white;
    top:49%;
    right:5%;
    visibility:hidden;
    font-family:var(--family-sans-serif);
    font-size:14px;
  }
  .plus{
    height:38px;
    width:38px;
    background-color:var(--body-background-color);
    border:2px solid rgb(74, 74, 74,.3);
    border-radius:5px 5px 5px 5px;
    padding-left:.35rem;
    padding-top:.15rem;
    position:absolute;
    top:49%;
    right:5%;
    visibility:hidden !important;
  }
  .plus .icon i{
    color:var(--primary)
  }
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border-width: 3px;
    cursor: pointer;
    border-style: solid;
    border-color: var(--grey-darker);
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .circle:hover {
    border-color: var(--primary);
  }
  .circle:active {
    transform: scale(0.95);
    
  }
  .circle adaptive-ui-icon {
    fill: var(--grey-darker);
    justify-content:center;
    text-align:center;
    color:var(--grey-darker);
  }
 
  .in-cart{
    visibility:visible;
    z-index:4;
  }
  .far {
    color: black;
    transform: translateY(3px);
  }
  .fas {
    color: black;
    transform: translateY(1px);
  }
  .dot {
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin: 0 5px;
    border-radius: 3px 3px 3px 3px;;
    display: inline-block;
    transition: background-color 0.7s ease;
    justify-content:center;
    text-align:center;
    padding-top:6px;
    border: 2px solid var(--grey-darker);
    font-size:13px;
  }
  .active, .dot:hover {
    background-color: var(--primary);
    color:var(--primary--color-invert);
    border: 2px solid var(--primary);
  }
  .navigator {
    display: flex;
    margin: 12px;
    position: absolute;
    right: 0;
  }
  .field {
    justify-content:flex-end !important;
    display:flex;
    margin-right:1.5em;
    margin-bottom:1.5em !important;
  }
  .field input{
    font-family:var(--family-sans-serif) !important;
    border: 2px solid rgb(183, 181, 181);
  }
  .field input span{
    height:100%;
  }
  .field .control .icon i{
    fill: rgb(219, 219, 219);
  }
  ::placeholder{
    font-family:var(--family-sans-serif);
    font-size:13px;
  }
  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 7px;
    width: 1.6rem;
    height: 1.6rem;
  }
  .next adaptive-ui-icon{
    width:28px !important;
    height: 28px !important;
  }
  .products {
    max-height: calc(100vh - 325px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .dots-container {
    text-align: center;
    width: fit-content;
  }
  .overlay{
    display:flex;
    justify-content:center;
    z-index:1;
    position:absolute;
    background-color:rgba(0,0,0,.2);
    /* height:150px; */
    transition:.3s ease-in;
    opacity:0; 
    width:100%;
    /* height:19rem; */
    
  }
  .card:hover  .overlay{
    opacity:1;
  }
  .overlay .icon{
    top:50%;
    transform: translate(0, -50%);
    position:absolute;
    z-index:2;
  }
  .overlay .icon i{
    color:var(--primary);
  }
  #cartBtn{
    margin-left:-25%;
  }
  #viewBtn{
    /* margin-left:15%; */
  }
  .card-content p{
    color:var(--primary);
  }
  .sortCol{
    border-top:1px solid var(--input-border-color);
    border-bottom:1px solid var(--input-border-color);
    padding-left:.75em;
    padding-right:.75em;
    margin-left:.25em;
    margin-right:.25em;
  }
  .sortCol .column{
    cursor:pointer;
  }
  .sortCol .column:not(:first-child){
    text-align:center;
  }
  .selected{
    background-color:hsl(219, 70%, 96%);
    color:var(--primary);
  }
  .sortBtns{
    display:flex;
    justify-content:start;
  }

  #cart-panel{
    border-left:1px solid var(--input-border-color);
  }
  #filterPanel{
    border-right:1px solid var(--input-border-color);
  }
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: var(--primary);
  }
  .slide-in-left {
    animation: slide-in-left 0.3s ease-in-out;
  }
  .slide-out-left {
    animation: slide-out-left 0.3s ease-in-out;
  }

  .slide-in-right {
    animation: slide-in-right 0.3s ease-in-out;
  }
  .slide-out-right {
    animation: slide-out-right 0.3s ease-in-out;
  }

  @keyframes slide-in-left {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes slide-out-left {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%);
    }
  }

  @keyframes slide-out-right {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(50%);
    }
  }

  @keyframes slide-in-right {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .card:hover {
    box-shadow: 0px 1px 3px rgba(183,183,183,.5);
    transform:scaleY(1.03) scaleX(1.02);
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }
  #searchInput3{
    display:none;
  }
  .listView .column{
    display:flex;
    align-items:center;
  }

  .listView .column p{
    color:var(--primary);
  }

  .listView #cartBtn{
    background-color:var(--primary);
    padding:10px 15px 10px 15px;
    border-radius:20px 20px 20px 20px;
    cursor:pointer;
  }

  .listView #cartBtn i{
    color: var(--white) !important;
  }
  
  .listView #viewBtn{
    background-color:var(--primary);
    padding:10px 15px 10px 15px;
    border-radius:20px 20px 20px 20px;
    fill: var(--grey-darker);
    cursor:pointer;
  }

  .listView #viewBtn i{
    color: var(--white) !important;
  }

  .listView .image{
    border:1px solid var(--input-border-color);
    border-radius:10px 10px 10px 10px;
  }
  .image{
    object-fit:contain;
  }

  @media(max-width:768px){
    .tabs{
      border:none !important;
      position:sticky;
    }

    .tabs ul{
    flex-direction:row;
    display:flex;
    overflow-y:hidden;
    }

    .tab{
      padding: 10px;
      margin: 0 10px;
      border: 1px solid var(--grey-darker);
      transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
        0.3s box-shadow,
        0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
      cursor: pointer;
      width:33.33%;
      overflow-x:hidden;
    }
    .unit{
      top:47%;
    }
    .plus{
      top:47%;
    }
    .control{
      transform:translateY(50%) !important;
    }
    #searchInput3{
      display:block;
    }
    #searchInput2{
      display:none !important;
    }
    .overlay{
      opacity:1
    }
   
    #viewBtn{
      margin-left:15%;
    }

    .field{
      margin-bottom:2.5em !important;
    }
    .listView {
      border-bottom: 1px solid var(--input-border-color);
      padding-top: 2.5em;
      padding-bottom: 2.5em;
    }
    #cart-panel{
      border-left:none;
    }
    #filterPanel{
      border-right:none;
    }
  }

  @media (max-width: 550px) {
    .columns .is-multiline {
      max-height: 50vh;
      overflow-y: auto;
    }
    .navigator {
      margin: 0;
      top: -4px;
    }
    .dots-container {
      margin: auto;
    }
  }
  .active a {
    color: white;
  }

  @media(max-width:480px){
    .hero-body{
        max-width:410px;
        justify-content:center;
    }
  }
`;class m extends n{static get styles(){return[b(f),k]}static get properties(){return{products:Array,rows:Array,cols:Array,e:Object,filters:Array,activeFilters:Object,pages:Array,activePage:Number,isLoading:Boolean,view:String}}constructor(){super(),this.rows=[],this.cols=[],this.e=null,this.products=[],this.filters=[],this.activeFilters={},this.activePage=1,this.isLoading=!0,this.view="grid"}updated(i){(i.has("e")||i.has("rows"))&&(this.isLoading=this.isDscLoading,this.fetchCart(),this.onLoadData())}selectView(i){this.view=i}onLoadData(){this.products=[...this.rows.map(t=>Object.fromEntries(t.map((e,s)=>{if(this.cols[s].label==="id"){const o=this.cols.findIndex(c=>c.label==="product_item_variant_id");return o?[this.cols[s].label,e+"|"+t[o]]:[this.cols[s].label,e]}return[this.cols[s].label,e]})))],this.filters=this.cols.filter(t=>t.list_filters).map(t=>({label:t.label,items:["All",...t.list_filters]}));const i=[];for(let t=0;t<this.totalPages;t++)i.push(parseInt(t)+1);this.pages=i}movePage(i){const t=parseInt(i.target.getAttribute("move")),e=this.page+t;e>=this.totalPages?this.page=1:e<1?this.page=this.totalPages:this.page=e,this.activePage=this.page,this.updateParams("page",this.page)}showPage(i){this.page=i,this.updateParams("page",this.page)}onFilterItemClickHandler(i,t){this.activeFilters={...this.activeFilters,[i]:t},this.updateParams(this.cols.find(e=>e.label===i).value,t==="All"?"":t)}displayUnit(i){if(this.isItemInCart(i))return this.getCartItemQuantity(i)}_getPath(i){return JSON.parse(i["Product View"]).path}_getPathLink(i){return window.location.href+i}_getProductLink(i){let t=JSON.parse(i["Product View"]);t.path;let e="";for(const[s,o]of Object.entries(t.params))e="?"+s+"="+this._extractProductIdAnVariant(i[o])[0];return e}onSearchInputHandler(i){const t=i.target.value;this.deleteParamKeys("q",!1),this.updateParams("q",t)}onShoppingCartClickBtn(i){this.isItemInCart(i.id)?this.updateCart(i.id,0):this.addProductToCart(i)}static get is(){return"products-grid-2"}render(){return a`
      <div class="content">
        ${this.isLoading?a`
            <div class="icon is-large has-text-centered mt-6" style="width: 100%;">
             loading products data
            </div>
          `:a`
            <div class="field has-addons">
              <div class="control has-icons-left">
                <input class="input" type="search" placeholder="Search item by name" @input=${i=>this.onSearchInputHandler(i)}>
                <span class="icon is-small is-left " style="height:100% !important">
                <adaptive-ui-icon icon="MdOutlineSearch" title="Search"></adaptive-ui-icon>
                </span>
              </div>
            </div>
            <div class="sortCol columns is-mobile py-1">
              <div class="column is-10">
                <h6> Sort By:</h6>
              </div>
              <div class="column is-1 sortBtns">
                <span id="gridBtn" title="grid" class="icon is-medium ${this.view==="grid"?"selected":""}" @click=${()=>this.selectView("grid")}>
                <adaptive-ui-icon icon="MdGridOn" title="Search"></adaptive-ui-icon>

                </span>
                <span id="listBtn" title="list" class="icon is-medium ${this.view==="list"?"selected":""}" @click=${()=>this.selectView("list")}>
                <adaptive-ui-icon icon="MdFormatListBulleted" title="Search"></adaptive-ui-icon>

                </span>
              </div>
            </div>
            <div class="columns m-0">
              
              <div id="filterPanel" class="column is-2 is-${this.filters.length>0&&this.filters[0].items.length>1?"":"hidden"}">
                <h5 class="has-text-centered">Filters</h5>
                ${this.filters.map(i=>i.items.length>1?a`
                    <div class="block">
                      <h6>${n.toTitleCase(i.label)}</h6>
                      <div class="tabs is-toggle is-fullwidth">
                        <ul>
                          ${i.items.map((t,e)=>a`
                              <li class="tab ${t===this.activeFilters[i.label]||!this.activeFilters[i.label]&&t==="All"?"active":""}" @click=${()=>this.onFilterItemClickHandler(i.label,t)}>
                                <div class="tab-item">
                                  <p>${t}</p>
                                </div>
                              </li>
                            `)}
                        </ul>
                      </div>
                    </div>
                  `:"")}
             
              </div>
                
                ${this.products.length>0?a`
                    <div class="column slides-container is-${this.filters.length>0?(this.filters[0].items.length>1,"7"):"12"}">
                      <div class="columns is-multiline is-mobile slide m-0 products">
                        ${this.view==="grid"?this.products.map(i=>a`
                            <div class="column my-2 is-one-quarter-desktop is-5-mobile thisCol" title="${i.name}" id="thisCol${i.id}">
                             
                                <div class="card">
                                  <div class="card-image">
                                    <div class="overlay image is-4by3">
                                      <span class="icon" id="cartBtn" title="Add to Cart" @click=${()=>this.onShoppingCartClickBtn(i)}>											
                                        						<adaptive-ui-icon icon="MdShoppingCart" title="cart"></adaptive-ui-icon>
                                      </span>
                                     
                                      <a href="${window.location.origin+this._getPath(i)+this._getProductLink(i)}" target="_blank">		
                                        <span class="icon" id="viewBtn" title="View Product">					   
                                                                                                <adaptive-ui-icon icon="MdInfoOutline " title="Info"></adaptive-ui-icon>
 
                                        </span> 
                                      </a>    
                                    </div>
                                  
                                    <figure class="image">
                                      <img src="${i.image&&i.image!==null?"/media/"+i.image:"http://via.placeholder.com/360x360"}" alt="${i.name} Image"/>
                                    </figure>
                                  </div>
                                  <hr>
                                  <div class="card-content">
                                    <h6>${i.name}</h6>
                                    <p>${this.formatToKenyaShillings(i.price)}</p>
                                  </div>
                                </div>
                              
                            </div>
                          `):this.products.map(i=>a`
                              <div class="column my-2 is-full-desktop is-full-tablet is-full-mobile listView" id="thisCol${i.id}">
                                <div class="columns is-multiline is-mobile listCol">
                                  <div class="column is-2-desktop is-3-tablet is-5-mobile">
                                    <figure class="image p-1">
                                       <img src="${i.image&&i.image!==null?"/media/"+i.image:"http://via.placeholder.com/640x360"}" alt="${i.name} Image"/>
                                    </figure>
                                  </div>
                                  <div class="column is-3-desktop is-2-tablet is-5-mobile">
                                    <h6>${i.name}</h6>
                                  </div>
                                  <div class="column is-2-desktop is-2-tablet is-5-mobile">
                                    <p>${this.formatToKenyaShillings(i.price)}</p>
                                  </div>
                                  <!-- <div class="column is-2-desktop is-3-tablet is-5-mobile">
                                    <div id="quantityField-${this._extractProductIdAnVariant(i.id)[0]}" class="quantityField ${this.isItemInCart(i.id)?"":"is-hidden"} is-mobile columns">
                                      <div class="column is-4">
                                        <span class="icon is-small" id="minusBtn" title="reduce quantity" @click=${()=>this.decrementQuantity(this._extractProductIdAnVariant(i.id)[0])}>											
                                          <i class="fas fa-minus"></i>
                                        </span>
                                      </div>
                                      <div class="column is-4 quantity pt-5">
                                        <h6>${this.getCartItemQuantity(this._extractProductIdAnVariant(i.id)[0])}</h6>
                                      </div>
                                      <div class="column is-4">
                                        <span class="icon is-small" id="plusBtn"  title="increase quantity"  @click=${()=>this.incrementQuantity(this._extractProductIdAnVariant(i.id)[0])}>
                                          <i class="fas fa-plus"></i>
                                        </span>
                                      </div>
                                    </div>
                                  </div> -->
                                  <div class="column is-1-desktop is-1-tablet cartCol is-2-mobile">
                                    <span title="Add to Cart" class="icon is-small"  id="cartBtn" @click=${()=>this.onShoppingCartClickBtn(i)}>											
                                      						<adaptive-ui-icon icon="MdShoppingCart" title="cart"></adaptive-ui-icon>
                                    </span>
                                  </div>
                                   <div class="column is-1-desktop is-1-tablet cartCol is-2-mobile">
                                      <a href="${window.location.origin+this._getPath(i)+this._getProductLink(i)}" target="_blank">		
                                        <span class="icon is-small" id="viewBtn" title="View Product">					   
                                                                                                <adaptive-ui-icon icon="MdInfoOutline " title="Info"></adaptive-ui-icon>
 
                                        </span> 
                                      </a>   
                                  </div>
                                </div>
                              </div>
                            `)}
                      </div>
                      <div class="level mt-6">
                        ${this.pages.length>0?a`
                            <div class="dots-container">
                              ${this.pages.map(i=>a`
                                  <span class="dot ${i===this.activePage?"active":""}" @click=${()=>this.showPage(i)}>${i}</span>
                                `)}
                            </div>
                            <div class="navigator">
                              <div class="prev" title="Previous">
                                <span class="icon">
                                  <adaptive-ui-icon icon="icons:chevron-left" move="-1" @click=${i=>this.movePage(i)}></adaptive-ui-icon>
                                </span>
                              </div>
                              <div class="next" title="Next">
                                <span class="icon">
                                  <adaptive-ui-icon icon="icons:chevron-right" move="1" @click=${i=>this.movePage(i)}></adaptive-ui-icon>
                                </span>
                              </div>
                            </div>
                          `:""}
                      </div>
                    </div>
                  `:a`
                    <div class="column">
                        <h3 class="mt-4">No products to view</h3>
                    </div>
                  
                  `}
            </div>
          `}
      </div>
    `}}customElements.define(m.is,m);const P=l=>{const{element:i,rows:t,cols:e,totalPages:s,isDscLoading:o,deleteParamKeys:c,updateParams:h,paramsCallback:u}=l,r=p.useRef(null);return p.useEffect(()=>{r.current&&i&&(r.current.e=i,r.current.rows=t,r.current.cols=e,r.current.totalPages=s,r.current.updateParams=h,r.current.deleteParamKeys=c,r.current.isDscLoading=o)},[i,t,l,u]),d.jsx("div",{children:i?d.jsx("products-grid-2",{id:"products-grid-2",ref:r}):d.jsx("p",{children:"Loading data..."})})},_=w(P);export{_ as default};
