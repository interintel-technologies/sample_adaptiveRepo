import{i as c,h as p,r as u,g as m,k as a,a as n,o as h,j as l}from"./index-C2PWchud.js";import{w as g}from"./datasource-mixin-DMQBE4lo.js";const f=c`
    #parentCol{
        padding: 4%;
    }
    .tile{
        display:flex;
        flex-direction:column;   
        text-align:left; 
        background:var(--paper)
    }
    .tile h4{
        font-weight:600;   
    }
    .tile p{
        color:var(--grey-darker--800--lighten);
        font-weight:400;
        padding-right:25%;
        word-wrap:normal;
        word-break:break-word;
    }
    .imgBox{
        object-fit: contain;
        width: 17%;
        height:auto;
        background-color:var(--card-background-color);
        border-radius:15% 15% 15% 15%;
    }
    @media(max-width:768px){
        .tile{
            display:flex;
            text-align:center;
            justify-content:center;
            align-items:center;
        }
        .tile p{
            padding-right:0;
        }
    }
`;class o extends p{static get styles(){return[u(m),f,c`
                :host {
                    display: block;
                }
            `]}static get properties(){return{tiles:Array,columns:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.tiles=[],this.columns=[],this.rows=[],this.e=null}updated(e){(e.has("columns")||e.has("rows")||e.has("e"))&&(this.tiles=[...this.rows.map(i=>Object.fromEntries(i.map((s,t)=>[this.cols[t].label,s])))])}static get is(){return"tile-element-8"}render(){return a`
           <div class="content">
                <div class="columns is-multiline" id="parentCol">
                    ${this.tiles.map(e=>a`
                        <div class="column is-6 px-2 py-3 my-2 tile">
                            <div class="imgBox p-3 mb-3">
                                <img src="${e.icon}"/>
                            </div>
                            <h4>${e.name}</h4>
                            <p>${e.description}</p>
                        </div>
                    `)}   
                </div>
           </div>
        `}}customElements.define(o.is,o);const x=({element:r,data:e,rows:i,cols:s})=>{const t=n.useRef(null),d=h();return n.useEffect(()=>{t.current&&r&&(t.current.e=r,t.current.data=e,t.current.rows=i,t.current.cols=s)},[r,e,s,i]),l.jsx("div",{children:r&&e&&i&&s?l.jsx("tile-element-8",{"theme-background-color":d.palette.background.paper,id:"tile-element-8",ref:t}):l.jsx("p",{children:"Loading data..."})})},w=g(x);export{w as default};
