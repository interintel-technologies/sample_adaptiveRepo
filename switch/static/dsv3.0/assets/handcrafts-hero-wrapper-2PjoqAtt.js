import{i as n,h as d,r as l,g as h,k as u,a,j as i}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const f=n`
    .hero {
        background-size:     contain;
        background-repeat:   no-repeat;
        background-position: center center; 
    }
    .hero-body {
        position: relative;
    }
`;class o extends d{static get styles(){return[l(h),f,n`
                :host {
                    display: block;
                }
            `]}static get properties(){return{image:{type:String},link:{type:String},e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.image="",this.link="",this.rows=[],this.cols=[]}updated(t){if(super.updated(t),t.has("rows")||t.has("cols")){const e=Object.fromEntries(this.rows[0].map((r,c)=>[this.cols[c].label,r]));this.image=e.image,this.link=e.link}}static get is(){return"handcrafts-hero"}render(){return u`
            <div class="hero is-large" style="background-image: url('${this.image}')">
                <div class="hero-body">
                    <a class="button is-primary" href="${this.link}">
                        <h6>Shop Now</h6>
                        <adaptive-ui-icon icon="arrow-forward"></adaptive-ui-icon>
                    </a>
                </div>
            </div>
        `}}customElements.define(o.is,o);const g=({element:s,rows:t,cols:e})=>{const r=a.useRef(null);return a.useEffect(()=>{r.current&&(r.current.e=s,r.current.rows=t,r.current.cols=e)},[e,t]),i.jsx("div",{children:i.jsx("handcrafts-hero",{id:"handcrafts-hero",ref:r})})},b=p(g);export{b as default};
