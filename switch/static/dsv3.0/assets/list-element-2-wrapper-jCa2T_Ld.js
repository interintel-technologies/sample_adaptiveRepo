import{i as o,h as p,r as c,g as d,k as n,a,j as i}from"./index-C2PWchud.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const g=o`
    .card {
        margin:16px;
        padding:16px;
        border-radius:3px;
        display:block;
        padding:2.5rem 1.5rem;

    }
    .heading{
        text-align:center;
        display:flex;
        justify-content:center;
        font-size:1.5rem;
    }
    .heading h1{
        background-image: linear-gradient(88.24deg, var(--primary-text) 67.01%, var(--primary) 96.64%);
        background-size:100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        margin-top:.75rem;
        font-size:2.4em !important;
    }
    .heading img{
        height:80px;
        object-fit:contain;
    }
    .pointsList{
        display:grid;
        padding-left:7rem;
        margin-top:3rem;
        text-align:left;
        padding-left:6%;
        justify-content: center;
    }
    .pointsList li{
        display:inline-flex;
    
    }
    .pointsList li p{
        font-size:16px;
    }
    .pointsList img{
        height:30px;
    }
    .title {
        color: var(--primary);
    }
    ul {
        padding-left:5px;
        margin-top:10px;
    }
    li {
        margin-bottom:10px;
        list-style:none;
    }

    h5 {
        margin:0 !important;
    }
    @media(max-width:768px){
        .pointsList{
            padding-left:2%;
        }
        .heading h1{
            font-size:2em !important;
        }
    }
`;class l extends p{static get styles(){return[c(d),g]}static get properties(){return{rows:{type:Array},e:{type:Object}}}static get is(){return"list-element-2"}constructor(){super(),this.searchText="",this.rows=[],this.e=null}render(){return n`
        <div class="content">
            <div class="">
                <div class="heading">
                    <h1>${this.e&&this.e.name}</h1>
                    <img class="ml-5" src='/static/dsv3.0/images/web/choose.png'  style=''/>
                </div>
                <ul class="pointsList">
                ${this.rows&&this.rows.map(t=>n`
                        <li class="">
                            <span> <img src='/static/dsv3.0/images/web/choose.png'  style=''/></span>
                            <p class="pl-5">${t}</p>
                        </li>
                    `)}
                </ul>
            </div>
        </div>
            
        `}}customElements.define(l.is,l);const x=s=>{const{element:t,rows:r}=s,e=a.useRef(null);return a.useEffect(()=>{e.current&&t&&(e.current.e=t,e.current.rows=r)},[t,r]),i.jsx("div",{children:t?i.jsx("list-element-2",{id:"list-element-2",ref:e}):i.jsx("p",{children:"Loading data..."})})},f=m(x);export{f as default};
