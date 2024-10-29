import{i as l,h as a,r as u,g as d,k as r,a as n,j as e}from"./index-C2PWchud.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const g=l`
    #discountHero {
        background-color: var(--md-sys-color-surfaceContainerLowest);
    }
    .hero-body {
        width: 100%;
        height: 85vh;
    }
    strong {
        color: var(--link);
    }
    .column.is-5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1 {
        text-align: center;
        line-height: 2.5 !important;
    }

`;let c=class extends a{static get styles(){return[u(d),g,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{discount:{type:Object},e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.slides=[],this.slideIndex=0,this.autoPlayInterval=1e4,this.e=null,this.rows=[],this.cols=[]}updated(o){(o.has("rows")||o.has("cols"))&&(console.log("Updated: rows or cols changed"),console.log("this.rows:",this.rows),console.log("this.cols:",this.cols),this.discount=Object.fromEntries(this.rows[0].map((t,s)=>[this.cols[s].label,t])),console.log("this.discount",this.discount),requestAnimationFrame(()=>{const t=this.shadowRoot.querySelector("h1");t&&(t.innerHTML=this.discount.text)}))}static get is(){return"discount-hero"}render(){return r`
            <div id="discountHero" class="content">
                ${this.discount?r`
                        <div class="hero-body columns" style="margin: 0;">
                            <div class="column is-7">
                                <img src="${this.discount.image}" alt="discountImage">
                            </div>
                            <div class="column is-5">
                                <h1>${this.discount.text||""}</h1>
                                <a href="${this.discount.buttonLink}" title="${this.discount.buttonLabel}" class="button is-primary">
                                    ${this.discount.buttonLabel}
                                </a>
                            </div>
                        </div>
                    `:r``}
            </div>
        `}};customElements.define(c.is,c);const m=({element:i,rows:o,cols:t})=>{const s=n.useRef(null);return n.useEffect(()=>{s.current&&i&&(s.current.e=i,s.current.rows=o,s.current.cols=t)},[i,o,t]),e.jsx(e.Fragment,{children:i&&o&&t?e.jsx("discount-hero",{id:"discount-hero",ref:s}):e.jsx("p",{children:"Loading data..."})})},b=h(m);export{b as default};
