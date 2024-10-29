import{i as o,h as u,r as d,g as p,k as n,a as c,j as a}from"./index-C2PWchud.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const h=o`
    .columns {
        margin: 0!important;
    }
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }
    .card > * {
        margin-bottom: 0.8em;
        pointer-events: none;
    }
    adaptive-ui-icon {
        fill: var(--primary);
        width: 30px;
        height: 30px;
    }
    .card:hover > adaptive-ui-icon {
        fill: var(--link);
    }
`;class l extends u{static get styles(){return[d(p),h,o``]}static get properties(){return{stats:Number,cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.stats=[],this.rows=[],this.cols=[],this.e=null}updated(t){super.updated(t),(t.has("cols")||t.has("rows")||t.has("e"))&&(this.stats=[...this.rows.map(r=>Object.fromEntries(r.map((i,s)=>[this.cols[s].label,i])))])}static get is(){return"stats-element-2"}render(){return n`
            <div class="content">
                <div class="column content">
                    <div class="columns">
                        ${this.stats.map(t=>n`
                                <div class="column">
                                    <div class="card">
                                        <adaptive-ui-icon icon=${t.icon}></adaptive-ui-icon>
                                        <h4>${t.label}</h4>
                                        <h4><strong>${t.value}</strong></h4>
                                    </div>
                                </div>
                            `)}
                    </div>
                </div>
            </div>
        `}}customElements.define(l.is,l);const v=({element:e,data:t,rows:r,cols:i})=>{const s=c.useRef(null);return c.useEffect(()=>{s.current&&e&&(s.current.e=e,s.current.data=t,s.current.rows=r,s.current.cols=i)},[e,t,r,i]),a.jsx("div",{children:e&&t&&r&&i?a.jsx("stats-element-2",{id:"stats-element-2",ref:s}):a.jsx("p",{children:"Loading data..."})})},y=m(v);export{y as default};
