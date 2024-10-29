import{i as p,h,r as g,g as f,k as a,a as n,j as i}from"./index-C2PWchud.js";import{w as b}from"./datasource-mixin-DMQBE4lo.js";const x=p`
    .content > .columns {
        margin: 0 !important;
    }
    ul {
        margin: 0 !important;
        list-style: none !important;
    }
    li {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0.2px);
        -webkit-backdrop-filter: blur(0.2px);
        border-radius: 8px;
        margin: 0 0 0.8em 0!important;
    }
    .image {
        border: 1px solid var(--link);
        height: 200px;
        width: 200px;
        margin: auto;
    }
    .column > h5 {
        margin: 0.4em 0!important;
    }
    img {
        height: 100% !important;
        object-fit: contain;
    }
    @media screen and (max-width: 770px) {
        .image {
            height: 128px;
            width: 128px;
        }
    }
`;class l extends h{static get styles(){return[g(f),x]}static get properties(){return{order:Array,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.rows=[],this.cols=[],this.lines=[],this.e=null}updated(r){(r.has("rows")||r.has("rows"))&&(this.order=Object.fromEntries(this.rows[0].map((e,s)=>[this.cols[s].label,e])))}getRGBA(){const r=document.documentElement.style.getPropertyValue("--primary");return((s,t)=>{const[c,d,m]=s.match(/\w\w/g).map(u=>parseInt(u,16));return`rgba(${c},${d},${m},${t})`})(r,.16)}formatKey(r){return(s=>s.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,function(t){return t.toUpperCase()}))(r).toUpperCase()}static get is(){return"order-details"}render(){return a`
            <div class="content">
                <div class="column content">
                    <div class="columns">
                        ${this.order?a`
                                <div class="column">
                                    <figure class="image">
                                        <img src="/media/${this.order.productImage}" alt="${this.order.productName} Image">
                                    </figure>
                                </div>
                                <ul class="column">
                                    <h3>Product Details</h3>
                                    ${Object.entries(this.order).filter(([r,e])=>r!=="productImage").map(([r,e])=>a`
                                            <li class="columns" style="background: ${this.getRGBA()};">
                                                <div class="column">
                                                    <h5>${this.formatKey(r)}:</h5>
                                                </div>
                                                <div class="column">
                                                    <h5>${e||"-"}</h5>
                                                </div>
                                            </li>
                                        `)}
                                </ul>
                            `:""}
                    </div>
                </div>
            </div>
        `}}customElements.define(l.is,l);const $=o=>{const{element:r,cols:e,rows:s}=o,t=n.useRef(null);return n.useEffect(()=>{t.current&&r&&(t.current.e=r,t.current.rows=s,t.current.cols=e)},[r,s,e]),i.jsx("div",{children:r?i.jsx("order-details",{id:"order-details",ref:t}):i.jsx("p",{children:"Loading data..."})})},v=b($);export{v as default};
