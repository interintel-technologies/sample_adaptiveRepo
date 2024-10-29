import{i as o,h as m,r as d,g as p,k as l,a as c,o as f,j as n}from"./index-C2PWchud.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const x=o`
    img {
        object-fit: contain;
        width: 25%;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .row-reverse {
        flex-direction: row-reverse;
    }
    .columns {
        flex-wrap: wrap !important;
    }
    .column.is-flex {
        padding: 20px;
    }
    .column.is-flex:hover > img {
        transform: scale(1.05);
    }
    .content {
        padding: 10px;
    }
`;class a extends m{static get styles(){return[d(p),x,o`
                :host {
                    display: block;
                }
            `]}static get properties(){return{columns:{type:Array},rows:{type:Array},e:{type:Object}}}updated(e){e.has("columns")||e.has("rows")||e.has("e")}constructor(){super(),this.columns=[],this.rows=[],this.e=null}static get is(){return"tile-element-7"}render(){return l`
           <div class="content">
            <div class="column">
                    <div class="columns">
                        ${this.rows.map((e,r)=>l`
                                <div class="column is-6 is-flex ${r%2===0?"row-reverse":""}">
                                    <img src="${e[3]}"  alt="${e[1]}Image"/> 
                                    <div class="content">
                                        <h3>${e[1]}</h3>
                                        <p>${e[2]}</p>
                                    </div>
                                </div>
                            `)}
                    </div>
                </div>
           </div>
        `}}customElements.define(a.is,a);const v=({element:s,data:e,rows:r,cols:i})=>{const t=c.useRef(null),u=f();return c.useEffect(()=>{t.current&&s&&(t.current.e=s,t.current.data=e,t.current.rows=r,t.current.cols=i)},[s,e,i,r]),n.jsx("div",{children:s&&e&&r&&i?n.jsx("tile-element-7",{"theme-background-color":u.palette.background.paper,id:"tile-element-7",ref:t}):n.jsx("p",{children:"Loading data..."})})},w=h(v);export{w as default};
