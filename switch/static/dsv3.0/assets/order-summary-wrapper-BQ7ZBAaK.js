import{i as d,S as u,r as m,g as p,k as a,a as l,j as n}from"./index-C2PWchud.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";import{E as v}from"./ecommerce-mixin-BZ3_9d38.js";import{w as y}from"./datasource-mixin-DMQBE4lo.js";import"./SectionTemplate-Drou2IoY.js";const g=d`
    #orderSummary {
        background-color: white;
    }
    p {
        margin: 0 10px;
        text-align: start;
    }
    ul {
        max-height: 60vh;
        overflow-y: auto;
        margin: 0 !important;
        padding: 0 !important;
    }
    .card {
        border-radius: 7px;
        box-shadow: none;
    }
    .order-title-center{
        text-align: center;
    }
    .order-content-center{
        position: relative;
        left: 37%;
    }
    .order-title-right, .order-content-right{
        text-align: right;
    }

    @media only screen and (max-width: 767px) {
        .order-title, .order-content{
            text-align: left!important;
            left: 0!important;
        }
    }
`,h=class extends v(f(u)){static get properties(){return{value:Object}}constructor(){super(),this.value=[]}getName(){return this.e.formName.split("=")[0]}getValue(){return this.value=[...this.cart.map(e=>({id:e.id,quantity:e.quantity}))],this.value}validate(){return this.e.required&&!this.value||this.value===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(e){}invalid(e){}dscDataName(){return this.e.defaultValue}init(e,t){super.init(e,t),this.required=this.e.required||e.min&&e.min>0,this.title=h.toTitleCase(e.name),this.icon=e.icon,this.params=this.pl.paramsCopy(),this.sectionSize=e.sectionSize,this.loader=this.loadData()}};class c extends h{static get styles(){return[m(p),g,d`
            :host {
                display: block;
            }
        `]}static get properties(){return{details:Array,total:Number,subtotal:Number,discount:Number,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.details=[],this.total=0,this.subtotal=0,this.discount=0,this.rows=[],this.cols=[],this.e=null}updated(t){(t.has("e")||t.has("rows"))&&(console.log('Property "e" or "rows" changed:',this.e,this.rows),this.fetchCart()),t.forEach((o,i)=>{i==="cart"&&(this.total=this.cart.reduce((s,r)=>s+r.total,0),this.subtotal=this.cart.reduce((s,r)=>s+r.subtotal,0),this.discount=this.cart.reduce((s,r)=>s+r.discount,0))})}static get is(){return"order-summary"}render(){return a`
            <div class="content">
                <div class="card">
                    <div class="card-content">
                        <h4>${this.e.name}</h4>
                        <div class="columns">
                            <div class="column">
                                <h5 class="order-title order-title-left">Product</h5>
                                ${this.cart.map(t=>a`
                                <span class="">
                                    <p class="order-content order-content-left">${t.name} &emsp; ${this.formatToKenyaShillings(t.price)} x ${t.quantity}</p>
                                </span>
                                `)}
                            </div>
                            <div class="column">
                                <h5 class="order-title order-title-center">Discount</h5>
                                <!-- Discounts -->
                                ${this.cart.map(t=>a`
                                <span class="">
                                    <p class="order-content order-content-center">${this.formatToKenyaShillings(t.discount)}</p>
                                </span> 
                                `)}
                            </div>
                            <div class="column">
                                <h5 class="order-title order-title-right" style="text-align: right">Total</h5>
                                ${this.cart.map(t=>a`
                                <span class="">
                                    <p class="order-content order-content-right" style="text-align: right">${this.formatToKenyaShillings(t.subtotal)}</p>
                                </span>
                                `)}
                            </div>
                        </div>
                        
                        <hr >
                        <div class="is-flex is-justify-content-space-between">
                            <h6>Subtotal</h6>
                            <h6>${this.formatToKenyaShillings(this.subtotal)}</h6>
                        </div>
                        <div class="is-flex is-justify-content-space-between">
                            <h6>Discount</h6>
                            <h6>${this.formatToKenyaShillings(this.discount)}</h6>
                        </div>
                        <div class="is-flex is-justify-content-space-between">
                            <h6>Total</h6>
                            <h6>${this.formatToKenyaShillings(this.total)}</h6>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(c.is,c);const x=e=>{const{element:t,rows:o,cols:i}=e,s=l.useRef(null);return l.useEffect(()=>{s.current&&t&&(s.current.e=t,s.current.rows=o,s.current.cols=i)},[t,o,i]),n.jsx("div",{children:t?n.jsx("order-summary",{id:"order-summary",ref:s}):n.jsx("p",{children:"Loading data..."})})},T=y(x);export{T as default};
