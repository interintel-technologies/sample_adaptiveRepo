import{i as d,h as m,r as u,g,k as s,a as n,o as h,j as o}from"./index-C2PWchud.js";import{b as l}from"./nikobizz4-DYskRzIA.js";import{w as b}from"./datasource-mixin-DMQBE4lo.js";const v=d`
    .card {
        margin: 30px 30px !important;
        padding: 20px;
        border: 1px solid var(--input-border-color) !important;
        border-radius: 12px;
        transition:.2s ease-out;
        background:linear-gradient(45deg, var(--paper) 35%, var(--primary) 105%);
    }
    .card:hover{
       transform:scale(1.02);
    }
    img {
        width: 250px;
        object-fit: contain;
        margin: auto !important;
    }
    p {
        width: 90% !important;
        color:var(--grey-dark);
    }
    #textCol{
        padding-top:4rem;
    }
    #title{
        font-weight:600;
        font-size:24px;
    }
    .button {
        border-color: var(--primary) !important;
        color: var(--primary) !important;
        padding: 0 20px !important;
    }
    .button:hover {
        border-color: var(--link) !important;
        color: var(--link) !important;
    }
    .button:active {
        transform: scale(0.9);
    }
    @media(max-width:768px){
        #textCol{
            padding-top:1rem;
            padding-bottom:1.5rem;
        }
    }

    @media screen and (max-width: 430px) {
        p {
            width: 94% !important;
        }
        hr {
            width: 94% !important;
        }
    }
`,f="/assets/nikobizz1-Wn5W4rI_.png",x="/assets/nikobizz2-Dd_v5Jcb.png",k="/assets/nikobizz3-C3Gx8jdr.png";class p extends m{static get styles(){return[u(g),v,d`
                :host {
                    display:block;
                }
            `]}static get properties(){return{images:Array,data:Array,columns:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.images=[`${f}`,`${k}`,`${x}`,`${l}`,`${l}`],this.data=[]}updated(t){(t.has("columns")||t.has("rows")||t.has("e"))&&(this.data=this.notifications=[...this.rows.map(r=>Object.fromEntries(r.map((i,e)=>[this.cols[e].label,i])))])}getLink(t){let r=t;if(t.includes("|")){let[i,e]=t.split("|");r=e}return r}getTitle(t){let r=t;if(t.includes("|")){let[i,e]=t.split("|");r=i}return r}static get is(){return"tile-element-6"}render(){return s`
            <div class="content">
                <div class="hero-body">
                    ${this.rows&&this.rows.map((t,r)=>s`
                            <div class="card columns">
                                <div class="column is-3-desktop">
                                    ${this.data[r].image?s`
                                        <img class="image" src="/media/${this.data[r].image}" />
                                    `:s`
                                        <img class="image" src="${this.images[r]}" />
                                    `}   
                                </div>
                                <div id="textCol" class="column content is-9-desktop" >
                                    <h4 id="title">${this.getTitle(t[1])}</h4>
                                    <p style="margin-top: 0px;">${t[2]}</p>
                                </div>
                            </div>
                        `)}
                </div>
            </div>
        `}}customElements.define(p.is,p);const y=({element:a,data:t,rows:r,cols:i})=>{const e=n.useRef(null),c=h();return n.useEffect(()=>{e.current&&a&&(e.current.e=a,e.current.data=t,e.current.rows=r,e.current.cols=i)},[a,t,i,r]),o.jsx("div",{children:a&&t&&r&&i?o.jsx("tile-element-6",{"theme-background-color":c.palette.background.paper,id:"tile-element-6",ref:e}):o.jsx("p",{children:"Loading data..."})})},E=b(y);export{E as default};
