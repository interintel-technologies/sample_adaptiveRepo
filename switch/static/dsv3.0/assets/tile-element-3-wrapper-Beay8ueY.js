import{i as o,h as m,r as p,g as c,k as r,a as s,o as d,j as n}from"./index-C2PWchud.js";import{w as x}from"./datasource-mixin-DMQBE4lo.js";const u=o`
    .column {
        flex-direction:column;
        padding:20px;
        /* min-width:28%;
        max-width:30%; */
        margin:0 auto;
        min-height:280px;
       
    }
    .tile-container{
        display: flex;
        padding: 35px 40px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        flex-shrink: 0;
        margin: 0 16px;
        border-radius: 10px;
        border: 0.4px solid rgba(0, 0, 0, 0.25);
        background: var(--paper);
        box-shadow:var(--mui-shadows-3);
    }
     
    .tile-title{
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0.1px;
        text-align: left;
        margin-bottom: 5px!important;
    }
    .tile-subtitle{
        color: var(--second-text-color, #737373);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 162.5% */
        letter-spacing: 0.2px;
        text-align: left!important;
    }
    .columns{
        margin-top: .75rem !important;
        padding-left:.75rem;
        padding-right:.75rem;
    }
   
    .column:hover {
        box-shadow: 0 5px 10px 0 rgba(181,181,183,0.3) !important;
        transition: 0.3s all ease-in-out; 
    }
    .image {
        min-width:100px;
        height:90px;
        object-fit:contain;
    }
    .title {
        margin:10px 0;
    }
    p {
        text-align:center;
    }
    /* .column-appear-animation {
        opacity:1;
        transform: translateY(0px);
        transition: 0.7s all ease-in-out; 
    } */
    .animate-appear{animation:fadeIn 500ms}

    @media(min-width:1023px){
        .column.is-one-quarter-desktop {
            flex: 1 1 0% !important;
        }
    }
    @media(min-width:769px)and (max-width:1023px){
        .column.is-one-half-tablet {
            flex: 1 1 0% !important;
            width:50% !important;
        }
    }
   
    @keyframes fadeIn{
        0%{
            opacity:0;
            transform:translateY(50%)
        }
        100%{
            opacity:1;
            transform:translateY(0);
            transition: 0.5s all ease-in-out; 
        }
    }

    /* @media screen and (max-width: 600px) {
        .column {
            min-width:100%;
        }
    } */
`;class h extends m{static get styles(){return[o`
            `,p(c),u]}static get properties(){return{initialsArray:Array,rows:Array,themeBackgroundColor:{type:String}}}render(){return r`
            <div class="content">
                <div class="columns is-mobile is-multiline">
                    ${this.rows&&this.rows.map(t=>r`
                            <div class="tile-container column tile is-flex is-one-quarter-desktop is-half-mobile animate-appear my-2">
                                <img class="image" src="/media/${t[3]}" />
                                <h3 class="tile-title is-6">${t[1]}</h3>
                                <p class="tile-subtitle is-6">${t[2]}</p>
                            </div>
                        `)}
                </div>
            </div>
        `}}customElements.define("tile-element-3",h);const g=({element:e,data:t,rows:a})=>{const i=s.useRef(null),l=d();return s.useEffect(()=>{i.current&&e&&(i.current.e=e,i.current.data=t,i.current.rows=a)},[e,t,a]),n.jsx("div",{children:e&&t&&a?n.jsx("tile-element-3",{"theme-background-color":l.palette.background.paper,id:"tile-element-3",ref:i}):n.jsx("p",{children:"Loading data..."})})},b=x(g);export{b as default};
