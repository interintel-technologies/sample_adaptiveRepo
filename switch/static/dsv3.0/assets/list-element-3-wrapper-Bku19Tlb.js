import{i as l,h as d,r as c,g as m,k as o,a as n,j as s}from"./index-C2PWchud.js";import{w as x}from"./datasource-mixin-DMQBE4lo.js";const h=l`
    .card {
        margin:16px;
        padding:16px;
        border-radius:20px;
        border:1px solid var(--input-border-color);
        padding:4.5rem;
        justify-content:center;
        display:grid;
        box-shadow: 4px 0px 4px 0px rgba(217, 213, 236, 0.25) !important;
    }
  
    .ribbon {
        position: relative;
        overflow:hidden;
    }
    .ribbon:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 20px; 
        height: 100%;
        background-color: var(--secondary); 
        box-shadow: 4px 0px 4px 0px var(--scheme-invert--20--rgba);
    }
    .title {
        color: var(--grey-darker) !important;
        font-weight:700 !important;
        font-size:1.75em !important;
        margin-bottom: 0.25rem !important;
    }
    .hdr{
        display:grid;
        justify-content:center;
    }
    hr{
        width:100%;
        border-radius:10px;
        background-color: rgba(217, 213, 236, 1);
        box-shadow: 4px 0px 4px 0px rgba(217, 213, 236, 0.25);
        height:10px;
        margin-top:.25rem !important;
    }
    ul {
        padding-left:5px;
        margin-top:10px;

    }
    li {
        margin-bottom:10px;
        justify-content: space-between
    }
    p{
        font-weight:600 !important;
        font-size:1.35em !important; 
        color: var(--grey-darker) !important;
    }

    @media(max-width:480px){
        .content{
            padding-right: 2rem;
            padding-left: 2rem;
        }
}
`;class a extends d{static get styles(){return[c(m),h]}constructor(){super(),this.searchText="",this.rows=[],this.e=null}static get properties(){return{rows:{type:Array},e:{type:Object}}}static get is(){return"list-element-3"}render(){return o`
           <div class="content">
                <div class="card content ribbon">
                    <div class="hdr">
                        <h4 class="title">${this.e&&this.e.name}</h4>
                        <hr>
                    </div>
                    <ul>
                        ${this.rows&&this.rows.map((t,e)=>o`
                                <li class="is-flex">
                                    <p>${e+1}. ${t}</p>
                                    
                                </li>
                            `)}
                    </ul>
                </div>
           </div>
           
        `}}customElements.define(a.is,a);const g=i=>{const{element:t,rows:e,paramsCallback:p}=i,r=n.useRef(null);return n.useEffect(()=>{r.current&&t&&(r.current.e=t,r.current.rows=e)},[t,e,i,p]),s.jsx("div",{children:t?s.jsx("list-element-3",{id:"list-element-3",ref:r}):s.jsx("p",{children:"Loading data..."})})},f=x(g);export{f as default};
