import{i as l,h as p,r as u,g as m,k as a,a as n,o as h,j as o}from"./index-C2PWchud.js";import{w as v}from"./datasource-mixin-DMQBE4lo.js";const x=l`
    .card {
        background: var(--paper);
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        cursor: pointer;
        margin: 20px;
        width: 90%;
    }
    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        border-color:var(--link);
    }
    .active{
        color: var(--primary) !important;
        padding-left:30px;
        transition: .3s ease-in;
    }
    .image-container {
        justify-content: center;
    }
    .is-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h5.active::before {
        content: '';
        display: block;
        height:2px;
        min-width: 25px;
        background-color: var(--primary);
        position: absolute;
        top: 50%;
        left: 0;
        transition: all .3s ease-in;
    }
    img {
        width: 280px;
        object-fit: contain;
        margin-top: 20px;
    }
    h5 {
        width: 70%;
    }

    @media screen and (max-width: 400px) {
        h5 {
            width: 90%;
        }
    }
`;class c extends p{static get styles(){return[u(m),x,l`
                :host {
                    display:block;
                }

                
            `]}static get properties(){return{images:Array,data:Array,columns:{type:Array},rows:{type:Array},e:{type:Object},contrast:{type:String}}}updated(t){(t.has("columns")||t.has("rows")||t.has("e"))&&console.log("this contrast is ",this.contrast)}onCardMouseOver(t){this.shadowRoot.querySelector("#title"+t).classList.add("active")}onCardMouseOut(t){this.shadowRoot.querySelector("#title"+t).classList.remove("active")}static get is(){return"tile-element-5"}render(){return a`
            <div class="content">
                <div class="hero-body">
                    <div class="columns content">
                        <div class="column is-2">
                            <div class="column nav">
                                <div class="column">
                                    ${this.rows.map((t,e)=>a`<h5 id="title${e}">${t[1]}</h5>`)}
                                </div>
                                <div class="image-container is-flex">
                                    <img src="${this.e.details.image}"/> 
                                </div>                     
                            </div>
                        </div>
                        <div class="column is-9">
                            ${this.rows.map((t,e)=>a`
                                    <div class="card" 
                                        @mouseover=${()=>this.onCardMouseOver(e)}
                                        @mouseout=${()=>this.onCardMouseOut(e)}
                                    >
                                        <div class="card-content">
                                            <h4>${t[1]}</h4>
                                            <p>${t[2]}</p>
                                        </div>
                                    </div>
                                `)}
                        </div>
                    </div>                
                </div>
            </div>
        `}}customElements.define(c.is,c);const b=({element:i,data:t,rows:e,cols:r})=>{const s=n.useRef(null),d=h();return n.useEffect(()=>{s.current&&i&&(s.current.e=i,s.current.data=t,s.current.rows=e,s.current.cols=r)},[i,t,r,e]),o.jsx("div",{children:i&&t&&e&&r?o.jsx("tile-element-5",{"theme-background-color":d.palette.background.paper,id:"tile-element-5",ref:s}):o.jsx("p",{children:"Loading data..."})})},y=v(b);export{y as default};
