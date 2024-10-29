import{i as o,h as p,r as d,g,k as e,a as n,j as r}from"./index-C2PWchud.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";const f=o`
.insight{
    width: 50%;
    border-right: 2px solid #ddd;
}
.insight:last-of-type{
    border-right: 0px solid transparent
}
`;class a extends p{static get styles(){return[d(g),f,o`
                .insight-panel-2 {
                    padding: 16px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }
                .insight {
                    margin-bottom: 16px;
                }
                .is-size-7 {
                    font-size: 0.875rem;
                }
                .is-size-4 {
                    font-size: 1.5rem;
                }
                .has-text-weight-bold {
                    font-weight: bold;
                }
            `]}static get is(){return"insight-panel-2"}static get properties(){return{insights:{type:Array},e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.insights=[],this.e=null,this.rows=[],this.cols=[]}updated(s){(s.has("rows")||s.has("cols"))&&this._updateInsights()}_updateInsights(){this.insights=this.rows.map(s=>{const i={};return s.forEach((t,l)=>{const c=this.cols[l].label;i[c]=t}),i})}render(){return e`
            <div class="insight-panel-2 card">
                <div class="card-content is-flex is-justify-content-space-between">
                    ${this.insights.map(s=>e`
                        <div class="insight is-align-items-center px-6 is-flex is-justify-content-space-between">
                        <p class="is-size-7 has-text-weight-bold">${s.insightTitle}</p>
                        <h5 class="is-size-4 has-text-weight-bold">${s.insightValue}</h5>
                    </div>
                    `)}
                </div>
            </div>
        `}}customElements.define(a.is,a);const x=({element:h,rows:s,cols:i})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&(t.current.rows=s,t.current.cols=i)},[s,i]),r.jsx("div",{children:r.jsx("insight-panel-2",{ref:t})})},y=u(x);export{y as default};
