import{i as n,h as u,r as l,g as d,k as h,a as o,j as e}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const g=n`
    .hero {
        background-size:     contain;
        background-repeat:   no-repeat;
        background-position: center center; 
    }
    .hero-body {
        position: relative;
    }
`;let a=class extends u{static get styles(){return[l(d),g,n`
                :host {
                    display: block;
                }
            `]}static get properties(){return{image:String,link:String,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.image="",this.link="",this.e=null,this.rows=[],this.cols=[]}updated(s){if(s.has("rows")||s.has("cols")){const i=Object.fromEntries(this.rows[0].map((t,c)=>[this.cols[c].label,t]));this.image=i.image,this.link=i.link}}static get is(){return"discount-hero-2"}render(){return h`
            <div class="hero is-halfheight" style="background-image: url('${this.image}')">
                <div class="hero-body">
                    <a class="button is-info is-rounded" href="${this.link}">
                        <h6>Visit us</h6>
                        <span class="icon is-small">
                            <adaptive-ui-icon icon="arrow-forward"></adaptive-ui-icon>
                        </span>
                    </a>
                </div>
            </div>
        `}};customElements.define(a.is,a);const f=({element:r,rows:s,cols:i})=>{const t=o.useRef(null);return o.useEffect(()=>{t.current&&r&&(t.current.e=r,t.current.rows=s,t.current.cols=i)},[r,s,i]),e.jsx(e.Fragment,{children:r&&s&&i?e.jsx("discount-hero-2",{id:"discount-hero-2",ref:t}):e.jsx("p",{children:"Loading data..."})})},y=p(f);export{y as default};
