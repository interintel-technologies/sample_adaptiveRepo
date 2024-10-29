import{i as m,h as u,r as d,g as p,k as r,a as o,j as n}from"./index-C2PWchud.js";import"./select-element-GuC7mP6J.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";import"./InputMixin-CGm-oGk-.js";const f=m`
    .columns {
        width: 100%;
        margin: 0 !important;
    }
    .level-item {
        justify-content: left
    }
    h3 {
        margin-top: 0 !important;
    }
    .level:not(:last-child){
        margin-bottom: 0!important;
    }
    .summary_card{
        background-color: var(--paper)!important;
        border-radius: 10px;
   
        height: 100%;
        display: flex;
        align-items: center;
    }
    .icon_cont, adaptive-ui-icon{
        width: 59.63px;
        height: 53.01px;
    }
    .summary_card .icon_cont{
        margin-right: 10px;
    }
    .summary_card .summary-content{
        margin-left: 10px;
    }
    .summary_card .summary-content h4{
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    .summary_card .summary-content > p{
        font-family: Inter;
        font-size: 20px!important;
        font-weight: 700;
        line-height: 39px;
        letter-spacing: 0em;
        text-align: left;
    }
    .icon_cont > adaptive-ui-icon {
        fill: #fff!important;
    }
    .content h4 {
        margin-bottom: 5px;
    }
    .card-content{
        align-items: center;
    }
    .card-content p{
        font-size: 13px;
    }
    @media screen and (max-width: 768px){
        .card-cont {
            width: 47%!important;
            padding: 0.25rem;
        }
        .summary_card .summary-content {
            margin-left: 0px;
        }
        .summary_card {
            justify-content: center;
        }
        .icon_cont, adaptive-ui-icon {
            width: 29.63px;
            height: 53.01px;
        }
        .form-x-container {
            padding: 0;
            border-radius: 19.7px !important;
        }
        .card-content {
            flex-direction: column;
        }
        h4, p {
            text-align: center !important;
        }
    }
`;class c extends u{static get styles(){return[d(p),f,m`
                :host {
                    display:block;
                }
            `]}static get properties(){return{summaryTabs:Array,cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.summaryTabs=[1,2,3,4,5]}updated(t){super.updated(t),(t.has("columns")||t.has("rows")||t.has("e"))&&this.updateRows()}updateRows(){this.summaryTabs=[...this.rows.map(t=>Object.fromEntries(t.map((s,e)=>[this.cols[e].label,s])))],this.summaryTabs=[...this.summaryTabs.map((t,s,e)=>(t.color=this.randomColorGenerator(e.length,s),t))]}static get is(){return"summary-tabs"}randomColorGenerator(t,s){return`hsl(${Math.floor(s/t*360)}, 100%, 70%)`}updateParams(t,s){this.summaryTabs=this.summaryTabs.filter(e=>e[t]===s),this.requestUpdate()}hexToRGBA(t,s){if(!t||typeof t!="string"||t.length<7||t[0]!=="#")return"";let e=parseInt(t.slice(1,3),16),a=parseInt(t.slice(3,5),16),l=parseInt(t.slice(5,7),16);return isNaN(e)||isNaN(a)||isNaN(l)?"":`rgba(${e}, ${a}, ${l}, ${s})`}createSelectFilters(){const t=this.cols.filter(e=>e.filters),s=(e,a)=>{this.updateParams(e,a)};return r`
            <div class="select-filters columns is-mobile is-multiline">
                ${t.map(e=>r`
                <div class="column is-half-mobile">
                    <select-element  .options=${e.filters.map(a=>({value:a,label:a}))} 
                        @on-change=${a=>s(e.value,a.detail.target.value)} >
                    </select-element>
                </div>
                `)}
            </div>
        `}render(){return r`
            <div class="column content">
                <div class="level is-align-items-flex-start">
					<div class="level-left">
						<div class="level-item">
							<h4>${this.e.name}</h4>
						</div>
					</div>
                    <div class="level-right">
                        ${this.createSelectFilters()}
					</div>
				</div>
                <div class="columns is-mobile is-multiline">
                    ${this.summaryTabs.map(t=>r`
                        <div class="column card-cont is-half-mobile">
                            <div class="card summary_card">
                                <div class="card-content is-flex">
                                   <span class="icon icon_cont">
                                        <adaptive-ui-icon icon=${t.icon}></adaptive-ui-icon>
                                    </span>

                                    <div class="summary-content">
                                        <h4>${t.label}</h4>
                                        <p>${t.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        `}}customElements.define(c.is,c);const v=({element:i,data:t,rows:s,cols:e})=>{const a=o.useRef(null);return o.useEffect(()=>{a.current&&i&&(a.current.e=i,a.current.data=t,a.current.rows=s,a.current.cols=e)},[i,t,s,e]),n.jsx("div",{children:i&&t&&s?n.jsx("summary-tabs",{id:"summary-tabs",ref:a}):n.jsx("p",{children:"Loading data..."})})},$=h(v);export{$ as default};
