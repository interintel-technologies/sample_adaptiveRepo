import{i as p,r as d,g as m,k as s,a as c,j as a}from"./index-C2PWchud.js";import{S as u}from"./section-pelement-dsc-IEIjnxOK.js";import{w as f}from"./datasource-mixin-DMQBE4lo.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const h=p`
    .products-element-container{
        border-bottom: 5px solid #808080;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;
    }
    .products-element-container::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 5px;
        background-color: var(--primary);
        transition: width 0.3s ease; /* Add transition property */
    }
    .products-element-container:hover::before {
        width: 100%;
    }
    .img-box {
        height: 100%;
        border-radius: 7px;
        border: 1px solid grey;
    }
    img {
        object-fit: contain;
        height: 100px;
    }
    .color-box {
        border-radius: 7px 0 0 7px;
    }
    .products-element-btn{
        border-color: var(--primary)!important;
        color: var(--primary)!important;
        background-color: var(--primary--light-color) !important;
        border-radius:20px!important;
    }
    /* .cont{
        width: 30.375rem;
    } */
    .pointer{
        position: relative;
        background-color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color: #fff;
        border-radius: 50%;
        top: -80px; 
    }
    .is-flex-direction-row .column .pointer{
        left:103%;
    }
    .pointer::before,
    .pointer::after {
        content: "";
        position: absolute;
        background-color: #D9D9D9; 
        width: 3px; 
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
    .pointer::before {
        top: 60px;
    }
    .pointer::after {
        bottom: 60px;
    }
    @media (max-width: 628px){
        .pointer{
            display: none;
        }
    }
`;class l extends u{static get styles(){return[d(m),h]}static get properties(){return{boxes:Array,name:Array,links:Array}}constructor(){super(),this.boxes=[],this.links=[],this.names=[]}updated(e){e.has("e")&&(this.boxes=[...this.rows.map(t=>Object.fromEntries(t.map((r,i)=>[this.cols[i].label,r])))],this.boxes.forEach(t=>{const r=t.name.split("|"),i=r[1];this.links.push(i);const o=r[0];this.names.push(o)}))}static get is(){return"products-element"}render(){return s`
            <div class="content">
                ${this.boxes.map((e,t)=>s`
                        <div class="column is-full products-element-container">
                            <div class="columns is-multiline is-mobile m-0 is-flex-direction-row${t%2===1?"-reverse":""}">
                                <div class="column">
                                    <div class="cont" style="${t%2===1?"margin-left: 67px;":""}">
                                            <h4>${this.names[t]}</h4>
                                            <p class="">${e.description}</p>
                                            <a href="${this.links[t]}" target="_blank" class="pr-5 is-flex is-justify-content-flex-end">
                                                <button class="button px-5 products-element-btn" style="">
                                                    Learn More
                                                </button>
                                            </a>    
                                    </div>
                                  
                                    <div class="pointer">
                                        <span class="icon">
                                            ${t%2===1?s`<adaptive-ui-icon icon="icons:MdChevronLeft" dataColor='#fff'></adaptive-ui-icon>`:s`<adaptive-ui-icon icon="icons:MdChevronRight" dataColor='#fff'></adaptive-ui-icon>`}
                                        </span> 
                                    </div>
                                </div>
                                <div class="column is-flex is-justify-content-center is-align-items-center">
                                    <img src="/media/${e.image}">    
                                </div>
                            </div>
                        </div>
                `)}
            </div>
        `}}customElements.define(l.is,l);const b=n=>{const{element:e,rows:t,cols:r,paramsCallback:i}=n,o=c.useRef(null);return c.useEffect(()=>{o.current&&e&&(o.current.e=e,o.current.rows=t,o.current.cols=r)},[e,t,r,n,i]),a.jsx("div",{children:e?a.jsx("products-element",{id:"products-element",ref:o}):a.jsx("p",{children:"Loading data..."})})},k=f(b);export{k as default};
