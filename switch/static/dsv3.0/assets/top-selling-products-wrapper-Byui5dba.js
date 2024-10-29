import{i as c,h as d,r as u,g as m,k as e,a as l,j as s}from"./index-C2PWchud.js";import{w as g}from"./datasource-mixin-DMQBE4lo.js";const h=c`
.card{
    background:var(--paper)
}
    h4, h5 {
        margin-bottom: 0 !important;
    }
    .columns {
        margin: 0 !important;
    }
    .card-header {
        box-shadow: none;
    }
    .card-header-title {
        color: var(--primary) !important;
    }
    .hdr {
        background-color: var(--primary) !important;
    }
    .hdr .column > h4 {
        color: white !important;
    }
    .item {
        margin: 0 !important;
        border-bottom: 1.5px solid #ccc;
    }
    .item > .column, .hdr > .column {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product, .is-6 {
        justify-content: flex-start !important;
    }
    .image {
        margin: 0 !important;
        margin-right: 30px !important;
    }
    .availability-background {
        padding: 3px 20px;
        border-radius: 50px;
    }
    .availability-background > h5 {
        text-align: center;
    }
    .okay-background {
        background: rgba(0, 255, 0, 0.36);
    }
    .warning-background {
        background: rgba(255, 255, 0, 0.36);
    }
    .danger-background {
        background: rgba(255, 0, 0, 0.36);
    }
    @media screen and (max-width: 500px) {
        .hdr {
            display: none !important;
        }
        .image {
            margin: 0 !important;
            margin-right: 15px !important;
        }
        .select:last-child {
            margin-left: 0px;
            margin-top: 7px;
        }
    }
`;class o extends d{static get styles(){return[u(m),h,c`
                :host {
                    display: block;
                }
            `]}static get properties(){return{products:Array,filters:Object,warningLevel:Number,columns:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.products=[],this.filters=[],this.warningLevel=10,this.columns=[],this.rows=[],this.e=null}updated(t){(t.has("columns")||t.has("rows")||t.has("e"))&&(console.log("this e is ",this.e),this.filters=this.e.details.filters,this.warningLevel=this.e.details.warningLevel?this.e.details.warningLevel:this.warningLevel,this.products=[...this.rows.map(r=>Object.fromEntries(r.map((i,a)=>[this.columns[a].label,i])))])}onSelectChangeHandler(t,r){this.updateParams(r,t)}formatPrice(t){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(t)}getAvailabilityBackgroundColor(t){return t>this.warningLevel?"okay-background":t<=this.warningLevel&&t!==0?"warning-background":"danger-background"}static get is(){return"top-selling-products"}render(){return e`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-header-title">${this.e.name}</h4>
                            <span class="card-header-icon">
                                <div class="filters">
                                    ${Object.entries(this.filters).map(([t,r])=>e`
                                            <div class="select">
                                                <select @change=${i=>this.onSelectChangeHandler(i.target.value,t)}>
                                                    ${r.map(i=>e`
                                                            <option>${i}</option>
                                                        `)}
                                                </select>
                                            </div>
                                        `)}
                                </div>
                            </span>
                        </div>
                        <div class="card-content">
                            <div class="columns hdr">
                                <div class="column is-6">
                                    <h4>Product</h4>
                                </div>
                                <div class="column is-3">
                                    <h4>Availability</h4>
                                </div>
                                <div class="column is-3 total">
                                    <h4>Total</h4>
                                </div>
                            </div>
                            ${this.products.length>0?this.products.map(t=>e`
                                    <div class="columns item">
                                        <div class="column is-6 product">
                                            <figure class="image is-96x96 ">
                                                <img src=${t.image} alt="${t.name+"Image"}"/>
                                            </figure>
                                            <h5>${t.name}</h5>
                                        </div>
                                        <div class="column is-3 availability">
                                            <div class="availability-background ${this.getAvailabilityBackgroundColor(t.availability)}">
                                                <h5>${t.availability>0?t.availability+" In Stock":"Out of Stock"}</h5>
                                            </div>
                                        </div>
                                        <div class="column is-3 total">
                                            <h5 >${this.formatPrice(t.total)}</h5>
                                        </div>
                                    </div>
                                `):e``}
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(o.is,o);const p=({data:n,cols:t,rows:r,element:i})=>{const a=l.useRef();return l.useEffect(()=>{a.current?(a.current.data=n,a.current.e=i,a.current.cols=t,a.current.rows=r):console.log("topSellingProductsRef.current is not set")},[n,t,r,i]),s.jsx(s.Fragment,{children:i?s.jsx("top-selling-products",{ref:a}):s.jsx("p",{children:"Loading data..."})})},f=g(p);export{f as default};
