import{i as l,h as d,r as u,g as p,k as n,a as o,j as i}from"./index-C2PWchud.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const h=l`
    .stat-icon {
        height: 3rem;
        width: 3rem;
        margin-bottom: 20px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .card {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 16px;
        border-radius: 0px;
        width: 100%;
        height: 300px;
        background:var(--paper);
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        cursor: pointer;
    }
    .card *{
        margin: 0 !important;
        border-color:var(--paper);

    }
    .card:hover > .stat-icon {
        transform: scale(1.05);
        fill:var(--primary);
    }
`;class c extends d{static get styles(){return[u(p),h,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{specializations:Array,cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.specializations=[],this.rows=[],this.cols=[],this.e=null}updated(t){super.updated(t),t.has("cols")||t.has("rows")||t.has("e")}getIndexByColumnLabel(t){return this.cols.findIndex(r=>r.label===t)}static get is(){return"stats-element"}render(){return n`
            <div class="content">
                <div class="column content">
                    <h3>${this.e.name}</h3>
                    <div class="columns is-multiline">
                        ${this.rows.map(t=>n`
                                <div class="column">
                                    <div class="card is-flex">
                                        <adaptive-ui-icon class="stat-icon" icon="${t[this.getIndexByColumnLabel("icon")]}"></adaptive-ui-icon>
                                        <h4>${t[this.getIndexByColumnLabel("name")]}</h4>
                                        <h3>${t[this.getIndexByColumnLabel("value")]}</h3>
                                        <h5>${t[this.getIndexByColumnLabel("description")]}</h5>
                                    </div>
                                </div>
                            `)}
                    </div>
                </div>
            </div>
        `}}customElements.define(c.is,c);const x=({element:s,data:t,rows:r,cols:a})=>{const e=o.useRef(null);return o.useEffect(()=>{e.current&&s&&(e.current.e=s,e.current.data=t,e.current.rows=r,e.current.cols=a)},[s,t,r,a]),i.jsx("div",{children:s&&t&&r&&a?i.jsx("stats-element",{id:"stats-element",ref:e}):i.jsx("p",{children:"Loading data..."})})},v=m(x);export{v as default};
