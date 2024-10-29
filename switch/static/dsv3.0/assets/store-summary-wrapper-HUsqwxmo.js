import{i as l,h as d,r as c,g as u,k as i,a as n,j as o}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const h=l`
    .card-header {
        box-shadow: none;
    } 
    .card-header-title {
        margin: 0 !important;
        color: var(--primary) !important;
    }
    .summaries {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
        grid-template-rows: 1fr 1fr;
    }
    h3 {
        font-weight: bold !important;
        margin-top: 0 !important;
    }
    .summary {
        display: flex;
        flex-direction: column;
        background:var(--paper);
        margin:2%;
    }
    .summary > * {
        margin:auto;
        text-align: center;
    }
    @media screen and (max-width: 600px) {
        .summaries {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
    }
`;class m extends d{static get styles(){return[c(u),h,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{summaries:Array,cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.summaries=[]}updated(r){super.updated(r),(r.has("cols")||r.has("rows")||r.has("e"))&&(this.summaries=[...this.rows.map(e=>Object.fromEntries(e.map((t,a)=>[this.cols[a].label,t])))])}getChangeTextColor(r){return r>0?"green":r<0?"red":"black"}renderChangeIcon(r){let e,t;return r>0?(e="arrow-upward",t="green"):r<0&&(e="arrow-downward",t="red"),r!==0?i`<adaptive-ui-icon icon=${e} style="fill: ${t}"></adaptive-ui-icon>`:i``}numberWithCommas(r){return r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}static get is(){return"store-summary"}render(){return i`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-header-title">${this.e.name}</h5>
                        </div>
                        <div class="summaries">
                                ${this.summaries.map(r=>i`
                                        <div class="summary column">
                                            <h5>${r.label}</h5>
                                            <h3>${this.numberWithCommas(r.value)}</h3>
                                            <div class="is-flex">
                                                ${this.renderChangeIcon(r.change)}
                                                <h5 style="color: ${this.getChangeTextColor(r.change)};">
                                                    ${r.change.toFixed(2)} %
                                                </h5>
                                            </div>
                                        </div>
                                    `)}
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(m.is,m);const f=({element:s,data:r,rows:e,cols:t})=>{const a=n.useRef(null);return n.useEffect(()=>{a.current&&s&&(a.current.e=s,a.current.data=r,a.current.rows=e,a.current.cols=t)},[s,r,e,t]),o.jsx("div",{children:s&&r&&e?o.jsx("store-summary",{id:"store-summary",ref:a}):o.jsx("p",{children:"Loading data..."})})},x=p(f);export{x as default};
