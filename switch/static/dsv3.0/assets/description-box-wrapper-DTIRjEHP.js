import{i as d,h as l,r as c,g as x,k as s,a as n,j as a}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const h=d`
    .box{
        box-shadow: var(--mui-shadows-3);
        background-color:var(--paper) !important;
        border: 0.5px solid var(--primary--light-color) !important;
    }
    .box-left h1{
        font-weight:600 !important;
    }
    .box-left p {
        font-weight:400 !important;
    }
    .box-left .box{
        border-radius: 10px;
        background-color: var(--primary);
        padding: 0;
        height: 100%;
    }

    .box-right{
        right: 153px;
        top: 30px;
    }
    .box-right .box{
        padding: 20px;   
    }
    .box-right .box img{
        object-fit:contain;
        height:5rem;
        border-radius:10px;
    }
    .box-right .box h4{
        font-size:1.5em !important;
    }
   
    .box-right-cols{
        justify-content:center;
    }
    .box-right-cols .boxCol .box{
        max-height:300px;
        height:auto;
        min-height:190px; 
    }
    .box-right .box:hover{
        padding: 30px;
        padding: 20px;
        transform:scale(1.05);
        transition:500ms ease-in-out;
        cursor:pointer;
    }
    .box-right .box:hover h4, 
    .box-right .box:hover icon,
 

    .fadeIn{animation:fadeIn 500ms}

    @keyframes fadeIn{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
            transition:3s all ease-in-out;
        }
    }

    .fadeUp{
        animation:fade2 500ms
    
    }

    @keyframes fade2{
        0%{
            opacity:0;
            transform:translateY(40px);
        }
        100%{
            opacity:1;
            transform:translateY(0);
            transition:1s all ease-in-out;
        }
    }

    .mainInfo{
        padding:1.7rem;
    }

    @media screen and (max-width: 768px){
        .box{
            overflow: hidden;
        }
        .box-right{
            right: 0;
        }
        .box-right-cols{
            margin:auto;
        }
        .box-right-cols .boxCol .box{
            max-height:500px !important;
            min-height:280px;
            height:auto;
        }
    }

    @media screen and (min-width: 770px) and (max-width: 1075px){
        .box-right{
            right: 0;
        }

        .box-right .box{
            height: 100%;
        }
    }
`;class m extends l{static get styles(){return[c(x),h]}static get properties(){return{rows:Array}}firstUpdated(i){super.firstUpdated(i),this.shadowRoot.querySelector(".box-right-cols")}_getSubTitle(i){let[t,o]=i.split("|");return o}_getTitle(i){let[t,o]=i.split("|");return t}constructor(){super(),this.rows=[]}render(){return s`
        ${this.e&&Object.keys(this.e).length>0?s`
            <div class="description-box-container content">
                <div class="columns" style="margin: 0;">
                    <div class="box-left column is-5 ">
                        <div class="box fadeIn">
                                <img src="${this.e.details.coverImage}">
                                <div class="mainInfo">
                                    <h1 class="mb-5">${this.e[0]}</h1>
                                    <p>${this.e.details.description}</p>
                                </div>
                        </div>
                    </div>
                    <div class="box-right column">
                        <div class="columns is-mobile is-multiline box-right-cols">
                            ${this.rows.map((i,t)=>s`
                            <div class="boxCol column px-0 is-6-desktop is-full-mobile is-half-tablet" id="box-${t}">
                                <div class="box m-2 fadeUp">
                                    <div class="columns is-multiline is-mobile">
                                        <div class="column is-6 mt-2 py-0">
                                            <img src="/media/${i[3]}">
                                        </div>
                                        <div class="column is-12">
                                            <h4>${this._getTitle(i[1])}</h4>
                                        </div>
                                        <div class="column is-11">
                                            <p>${this._getSubTitle(i[1])}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
            `:s`
            <p>Loading data...</p>
          `}
        `}}customElements.define("description-box",m);const b=r=>{const{element:i,rows:t,paramsCallback:o}=r,e=n.useRef(null);return n.useEffect(()=>{e.current&&i&&(e.current.e=i,e.current.rows=t)},[i,t,r,o]),a.jsx("div",{children:i?a.jsx("description-box",{id:"description-box",ref:e}):a.jsx("p",{children:"Loading data..."})})},f=p(b);export{f as default};
