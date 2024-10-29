import{i as o,h as d,r as u,g as m,k as a,a as i,j as r}from"./index-C2PWchud.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const p=o`
    .card-header {
        box-shadow: none;    
    }
    ul, hr, h4 {
        margin:0 !important;
    }
    li {
        border-bottom: 1px solid rgb(183, 181, 181);
        list-style-type: none;
    }
    li:last-child {
        border: none !important;
    }
`;class c extends d{static get styles(){return[u(m),p]}constructor(){super(),this.searchText="",this.rows=[],this.cols=[],this.e=null}static get properties(){return{rows:{type:Array},e:{type:Object},cols:{type:Array}}}getIndexByColumnLabel(e){return this.cols.findIndex(s=>s.label===e)}formatPrice(e){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(e)}static get is(){return"list-element-4"}render(){return a`
        <div class="content">
            <div class="column content">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-header-title">${this.e.name}</h4>
                    </div> 
                    <ul class="card-content">
                        ${this.rows.map(e=>a`
                                <li class="content">
                                    <h5>${e[this.getIndexByColumnLabel("name")]}</h5>
                                    <div class="is-flex" style="justify-content: space-between">
                                        <h5>${e[this.getIndexByColumnLabel("label")]}</h5>
                                        <h5>${this.e.details.isValueCurrency?this.formatPrice(e[this.getIndexByColumnLabel("value")]):e[this.getIndexByColumnLabel("value")]}</h5>
                                    </div>
                                </li>
                            `)}
                    </ul>
                </div>
            </div>
        </div>
        `}}customElements.define(c.is,c);const y=l=>{const{element:e,rows:s,cols:n,paramsCallback:x}=l,t=i.useRef(null);return i.useEffect(()=>{t.current&&e&&(t.current.e=e,t.current.rows=s,t.current.cols=n)},[e,s,n]),r.jsx("div",{children:e?r.jsx("list-element-4",{id:"list-element-4",ref:t}):r.jsx("p",{children:"Loading data..."})})},g=h(y);export{g as default};
