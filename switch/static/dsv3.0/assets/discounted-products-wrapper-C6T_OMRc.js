import{i as a,h as u,r as l,g as p,k as o,a as i,j as c}from"./index-C2PWchud.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const m=a`
    .columns{
        padding:16px;
    }
    .card {
        border: 2px solid var(--primary);
    }
    .card:hover {
        border-color: var(--link);
    }
`;class d extends u{static get styles(){return[l(p),m,a`
                :host {
                    display: block;
                }
            `]}static get properties(){return{discountedProducts:Array,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.discountedProducts=[],this.e=null,this.rows=[],this.cols=[]}updated(s){(s.has("rows")||s.has("cols"))&&(this.discountedProducts=[...this.rows.map(e=>Object.fromEntries(e.map((t,n)=>[this.cols[n].label,t])))])}onItemClickHandler(s){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.service,params:{id:s}},bubbles:!0,composed:!0}))}static get is(){return"discounted-products"}render(){return o`
            <div class="columns content" style="margin:0;">
                ${this.discountedProducts.map(s=>o`
                        <div class="column">
                            <div class="card" @click=${()=>this.onItemClickHandler(s.id)}>
                                <div class="card-content">
                                    <h5 class="title is-5">Sales Upto ${s.percentage} Discount on ${s.name}</h5>
                                    <button class="button is-primary">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    `)}
            </div>
        `}}customElements.define(d.is,d);const v=({element:r,rows:s,cols:e})=>{const t=i.useRef(null);return i.useEffect(()=>{t.current&&r&&(t.current.e=r,t.current.rows=s,t.current.cols=e)},[r,s,e]),c.jsx(c.Fragment,{children:r&&s&&e?c.jsx("discounted-products",{id:"discounted-products",ref:t}):c.jsx("p",{children:"Loading data..."})})},f=h(v);export{f as default};
