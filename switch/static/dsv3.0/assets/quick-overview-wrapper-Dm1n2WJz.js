import{i as l,r as d,g as p,k as s,a as n,j as c}from"./index-C2PWchud.js";import{S as m}from"./section-pelement-dsc-WXP1kFbN.js";import{w as v}from"./datasource-mixin-DMQBE4lo.js";import"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const h=l`
    .columns {
        margin: 0 !important;
    }
    .card-header {
        box-shadow: none;
    }
    h5, h4 {
        margin: 0 !important;
    }
    h4 {
        color: var(--primary) !important;
    }
    .filters {
        display: flex;
        flex-wrap: wrap;
    }
    .select:last-child {
        margin-left: 20px;
    }
    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary);
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    adaptive-ui-icon {
        fill: white;
        width: 30px;
        height: 30px;
    }
    .columns:hover > .column .icon-container {
        background-color: var(--link);
    }
    .column .is-5 {
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 500px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
        .columns .column > * {
            margin: auto !important;
        }
        .icon-container {
            width: 20px;
            height: 20px;
        }
        .select:last-child {
            margin-left: 0px;
            margin-top: 7px;
        }
        adaptive-ui-icon {
            width: 15px;
            height: 15px;
        }
    }
`;class o extends m{static get styles(){return[d(p),h,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{overviews:Array,filters:Object}}constructor(){super(),this.overviews=[],this.filters={}}firstUpdated(){this.filters=this.e.details.filters,this.loader.then(()=>{this.overviews=[...this.rows.map(e=>Object.fromEntries(e.map((i,t)=>[this.cols[t].label,i])))]})}onSelectChangeHandler(e,i){this.updateParams(i,e)}static get is(){return"quick-overview"}render(){return s`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-header-title">${this.e.name}</h4>
                            <span class="card-header-icon">
                                <div class="filters">
                                    ${Object.entries(this.filters).map(([e,i])=>s`
                                            <div class="select">
                                                <select @change=${t=>this.onSelectChangeHandler(t.target.value,e)}>
                                                    ${i.map(t=>s`
                                                            <option>${t}</option>
                                                        `)}
                                                </select>
                                            </div>
                                        `)}
                                </div>
                            </span>
                        </div>
                        <div class="card-content">
                            ${this.overviews.map(e=>s`
                                    <div class="columns">
                                        <div class="column">
                                            <div class="icon-container">
                                                <adaptive-ui-icon icon=${e.icon}></adaptive-ui-icon>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <h5>${e.label}</h5>
                                        </div>
                                        <div class="column">
                                            <h5>${e.description}</h5>
                                        </div>
                                    </div>
                                `)}
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(o.is,o);const u=a=>{const{element:e,rows:i,paramsCallback:t}=a,r=n.useRef(null);return n.useEffect(()=>{r.current&&e&&(r.current.e=e,r.current.rows=i)},[e,i,a,t]),c.jsx("div",{children:e?c.jsx("quick-overview",{id:"quick-overview",ref:r}):c.jsx("p",{children:"Loading data..."})})},y=v(u);export{y as default};
