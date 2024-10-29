import{i as o,h,r as c,g as p,k as n,a as r,j as a}from"./index-C2PWchud.js";import{w as d}from"./datasource-mixin-DMQBE4lo.js";const g=o`
.insight{
    width: 50%;
}
`;class l extends h{static get styles(){return[c(p),g,o`
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
                .has-text-succ {
                    color: green;
                }
            `]}static get properties(){return{insights:{type:Array},e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.insights=[],this.e=null,this.rows=[],this.cols=[]}static get is(){return"insight-panel-3"}firstUpdated(){this._updateInsights()}updated(s){(s.has("rows")||s.has("cols"))&&this._updateInsights(),console.log("this insights",this.insights)}_updateInsights(){this.insights=this.rows.map(s=>Object.fromEntries(s.map((i,t)=>[this.cols[t].label,i])))}render(){return n`
            <div class="insight-panel-2 card">
                <div class="card-content is-flex">
                    ${this.insights.map((s,i)=>n`
                        <div class="insight" key=${i}>
                            <p class="is-size-7">${s.insightTitle||"Title not available"}</p>
                            <h5 class="is-size-4 has-text-weight-bold">${s.insightValue||"Value not available"}</h5>
                            <p class="is-size-7 has-text-succ">${s.insightTrend||"Trend not available"} <span class="icon"><i class="fa-solid fa-arrow-trend-up"></i></span></p>
                        </div>
                    `)}
                </div>
            </div>
        `}}customElements.define(l.is,l);const u=({element:e,rows:s,cols:i})=>{const t=r.useRef(null);return r.useEffect(()=>{t.current&&(t.current.e=e,t.current.rows=s||[],t.current.cols=i||[])},[e,s,i]),a.jsx("div",{children:a.jsx("insight-panel-3",{id:"insight-panel-3",ref:t})})},b=d(u);export{b as default};
