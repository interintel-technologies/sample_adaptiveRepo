import{i as l,h,r as u,g as m,k as o,a as c,j as r}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const v=l`
    .hdr {
        justify-content: space-between;
        align-items: center;
    } 
    input {
        width: 20px;
        height: 20px;
    }
    .see-more {
        text-align: center;
        text-decoration: underline;
        text-decoration-color: var(--primary);
        color: var(--primary) !important;
        cursor: pointer;
    }
    .see-more:hover{
        text-decoration-color: var(--link);
        color: var(--link) !important;
    }
    .columns {
        border-bottom: 1px solid #ccc;
    }
    .card-header {
        box-shadow: none !important;
        border-bottom: 1px solid #ccc;
    }
`;class d extends h{static get properties(){return{e:{type:Object},rows:{type:Array},cols:{type:Array},isLoaded:{type:Boolean}}}static get styles(){return[u(m),v,l`
                :host {
                    display: block;
                }
            `]}constructor(){super(),this.e={},this.rows=[],this.cols=[],this.isLoaded=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("get-selected-date",e=>this.updateParams("selected-date",e.detail.date))}firstUpdated(e){super.firstUpdated(e),this.isLoaded=!0}convertTimeTo12HourFormat(e){const t=this.convertTimeToDate(e),s=t.getHours(),n=t.getMinutes(),i=s<12?"AM":"PM";return`${s}:${n} ${i}`}getIndexByColumnLabel(e){return this.cols.findIndex(t=>t.label===e)}convertTimeToDate(e){return new Date(e)}getDayOfWeek(e){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=this.convertTimeToDate(e);return t[s.getDay()]}onSelectChangeHandler(e){e!=="Actions"&&this.getCheckedEvents().length>0&&this.updateParams("action",{events:this.getCheckedEvents(),action:e})}getCheckedEvents(){const e=[];return this.shadowRoot.querySelectorAll("input:checked").forEach(t=>e.push(t.value)),e}static get is(){return"events-list"}render(){var s;if(!this.isLoaded)return o`<p>Loading data...</p>`;const e=typeof this.e.name=="string"?this.e.name:"Unknown Name",t=Array.isArray((s=this.e.details)==null?void 0:s.actions)?this.e.details.actions:[];return o`
            <div class="column content">
                <div class="card-header">
                    <h4 class="card-header-title">${e}</h4>
                    <span class="card-header-icon" aria-label="more options">
                        <div class="select">
                            <select @change=${n=>this.onSelectChangeHandler(n.target.value)}>
                                <option>Actions</option>
                                ${t.map(n=>o`
                                        <option>${n}</option>
                                    `)}
                            </select>
                        </div>
                    </span>
                </div>
                <div class="column">
                    ${this.rows.filter((n,i)=>i<7).map(n=>o`
                            <div class="columns" style="margin: 0px;">
                                <div class="column is-1">
                                    <input type="checkbox" value=${n[this.getIndexByColumnLabel("id")]} />
                                </div>
                                <div class="column is-6">
                                    <h5><strong>${this.getDayOfWeek(n[this.getIndexByColumnLabel("time")].from)}</strong> - ${new Date(n[this.getIndexByColumnLabel("time")].from).toDateString()}</h5>
                                </div>
                                <div class="column is-5">
                                    <h5><strong>${n[this.getIndexByColumnLabel("label")]}</strong></h5>
                                    <h6>${this.convertTimeTo12HourFormat(n[this.getIndexByColumnLabel("time")].from)} - ${this.convertTimeTo12HourFormat(n[this.getIndexByColumnLabel("time")].to)}</h6>
                                </div>
                            </div>
                        `)}
                    <h4 class="see-more">See More Events</h4>
                </div>
            </div>
        `}}customElements.define(d.is,d);const g=({element:a,rows:e,cols:t})=>{const s=c.useRef(null);return c.useEffect(()=>{s.current&&a&&(s.current.e=a,s.current.rows=e,s.current.cols=t)},[a,e,t]),r.jsx(r.Fragment,{children:a&&e&&t?r.jsx("events-list",{id:"events-list",ref:s}):r.jsx("p",{children:"Loading data..."})})},f=p(g);export{f as default};
