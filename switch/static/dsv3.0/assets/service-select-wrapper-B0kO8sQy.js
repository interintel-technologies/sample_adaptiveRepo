import{i as d,h as u,r as h,g as m,k as o,a as n,j as i}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const v=d`

  .card {
    box-shadow:var(--mui-shadows-3) !important;
    background:var(--paper) !important;
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    height:100%;
    border-radius:var(--CornerSmall);
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card:active {
    transform: scale(0.95);
  }
`;class l extends u{static get styles(){return[h(m),v]}static get properties(){return{services:Array,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.services=[],this.rows=[],this.cols=[],this.e=null}updated(e){(e.has("e")||e.has("cols"))&&(console.log("service select is ",this.e),this.services=[...this.rows.map(t=>Object.fromEntries(t.map((c,a)=>[this.cols[a].label,c])))])}static get is(){return"service-select"}render(){return o`
            <div class='column content'>
                <h3 class="has-text-centered">${this.e.name}</h3>
                <div class="columns is-centered" style="margin: 0;">
                    ${this.services.map(e=>o`   
                            <a class="column is-3" href="${e.url}" target="_blank"> 
                                <div class="card">
                                    <div class="card-content">
                                        <span class="is-flex" style="justify-content: center;">
                                            <adaptive-ui-icon icon=${e.icon} style="fill: ${e.color};"></adaptive-ui-icon>    
                                        </span>
                                    </div>
                                    <footer class="card-footer" style="justify-content: center;">
                                        <h4 class="has-text-centered mt-1">${e.name}</h4>
                                    </footer>
                                </div>
                            </a>
                        `)}
                </div>
            </div>
        `}}customElements.define(l.is,l);const f=r=>{const{element:e,rows:t,cols:c,paramsCallback:a}=r,s=n.useRef(null);return n.useEffect(()=>{s.current&&e&&(s.current.e=e,s.current.rows=t,s.current.cols=c)},[e,t,r,a]),i.jsx("div",{children:e?i.jsx("service-select",{id:"service-select",ref:s}):i.jsx("p",{children:"Loading data..."})})},x=p(f);export{x as default};
