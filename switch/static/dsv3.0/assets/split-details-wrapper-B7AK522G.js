import{i as m,h as f,r as b,g as y,k as o,a as u,j as n}from"./index-C2PWchud.js";import{w as g}from"./datasource-mixin-DMQBE4lo.js";const x=m`
    .content {
        width: 100%;
    }
    h4,p {
        text-align: center;
    }
    .card {
        margin-bottom: 20px;
    }
    .card-content {
        padding: 0.7rem !important;
    }
`;class h extends f{static get styles(){return[b(y),x,m`
                :host {
                    display: block;
                }
            `]}static get properties(){return{colors:Array,cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.colors=[]}updated(e){if(super.updated(e),(e.has("cols")||e.has("rows")||e.has("e"))&&(console.log("e oi ",this.rows),e.has("rows"))){const r=this.rows.map((s,t,i)=>this.randomColorGenerator(i.length,t));JSON.stringify(r)!==JSON.stringify(this.colors)&&(this.colors=r)}}randomColorGenerator(e,r){let s,t,i,d=r/e,p=~~(d*6),l=d*6-p,c=1-l;switch(p%6){case 0:s=1,t=l,i=0;break;case 1:s=c,t=1,i=0;break;case 2:s=0,t=1,i=l;break;case 3:s=0,t=c,i=1;break;case 4:s=l,t=0,i=1;break;case 5:s=1,t=0,i=c;break}return"#"+("00"+(~~(s*255)).toString(16)).slice(-2)+("00"+(~~(t*255)).toString(16)).slice(-2)+("00"+(~~(i*255)).toString(16)).slice(-2)}getIndexByColumnLabel(e){return this.cols.findIndex(r=>r.label===e)}formatPrice(e){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(e)}static get is(){return"split-details"}render(){return o`
            <div class="content">
                <div class="column content">
                
                    ${this.rows.map((e,r)=>o`
                            <div class="card">
                                <div class="card-header" style="background-color: ${this.colors[r]};">
                                    <h4 class="card-header-title" 
                                        style="color: ${parseInt(this.colors[r].replace("#",""),16)>16777215/2?"#000":"#fff"};"
                                    >${e[this.getIndexByColumnLabel("name")]}</h4>
                                </div>
                                <div class="card-content is-flex">
                                    <div class="column" style="border-right: 1px solid rgb(183, 181, 181)">
                                        ${Object.entries(e[this.getIndexByColumnLabel("left")]).map(([s,t])=>o`
                                                <h4>${s}</h4>
                                                <p>${this.formatPrice(t)}</p>
                                            `)}
                                    </div>
                                    <div class="column">
                                        ${Object.entries(e[this.getIndexByColumnLabel("right")]).map(([s,t])=>o`
                                                <h4>${s}</h4>
                                                <p>${this.formatPrice(t)}</p>
                                            `)}
                                    </div>
                                </div>
                            </div>
                        `)}
                </div>
            </div>
        `}}customElements.define(h.is,h);const v=({element:a,data:e,rows:r,cols:s})=>{const t=u.useRef(null);return u.useEffect(()=>{t.current&&a&&(t.current.e=a,t.current.data=e,t.current.rows=r,t.current.cols=s)},[a,e,r,s]),n.jsx("div",{children:a&&e&&r&&s?n.jsx("split-details",{id:"split-details",ref:t}):n.jsx("p",{children:"Loading data..."})})},$=g(v);export{$ as default};
