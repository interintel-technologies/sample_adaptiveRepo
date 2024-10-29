import{i as r,h as c,r as h,g as p,k as l,a as o,j as a}from"./index-C2PWchud.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";const m=r`

    .columns{
        margin:0 !important;
        padding-right:10%;
        padding-left:10%;
        
    }
    .slides{
        flex-direction:row !important;
        display:flex;
        overflow-x:hidden;
        border-radius:16px;
        height:auto;
        max-height:300px;
        z-index: 10;
        position: relative;
    }
    .slide {
        width: 100%;
    }
    .parCol{
        display:flex;
        align-items: center;
    
    }
    .imgCol{
        padding-bottom:0px;
        align-items:baseline;
        display:flex;
    }
    .imgCol img{
        height:190px;
        width:100%;
        position:relative;
        object-fit:contain;
    }
    @media(max-width:768px){
        .columns{
            padding-left:0;
            padding-right:0;
        }
        .slides{
            flex-direction:column;
            max-height:320px;
            overflow-y:hidden;
        }
        .parCol{
            text-align:center;
        }
        
    }

    .carousel-wrapper {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }
    .carousel-item {
        flex: 0 0 100%;
        box-sizing: border-box;
    }
    .dots-container {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    }
    .dot {
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }
    .dot.active {
        background-color: #000;
    }
`;class d extends c{static get styles(){return[h(p),m,r`
                :host {
                    display: block;
                    overflow: hidden;
                    position: relative;
                }
                
            `]}static get properties(){return{ads:{type:Array},slideIndex:{type:Number},autoPlayInterval:{type:Number},e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.ads=[],this.slideIndex=0,this.autoPlayInterval=1e4,this.e=null,this.rows=[],this.cols=[]}firstUpdated(){this.e&&this.e.details.enabled&&(this.autoPlayInterval=this.e.details.autoPlayInterval||this.autoPlayInterval,this.ads=this.rows.map(t=>Object.fromEntries(t.map((e,i)=>[this.cols[i].label,e]))),this.showSlide(0))}updated(t){(t.has("rows")||t.has("cols"))&&(this.e&&this.e.details&&(this.autoPlayInterval=this.e.details.autoPlayInterval||this.autoPlayInterval),this.slides=[...this.renderSlides()],this.showSlide(0))}showSlide(t){t>=this.ads.length?this.slideIndex=0:t<0?this.slideIndex=this.ads.length-1:this.slideIndex=t,this.requestUpdate();const e=this.shadowRoot.querySelectorAll(".dot"),i=this.shadowRoot.querySelector("#dot"+this.slideIndex);i&&(e.forEach(n=>n.classList.remove("active")),i.classList.add("active")),clearTimeout(this.loopId),this.loopId=setTimeout(()=>this.showSlide(this.slideIndex+1),this.autoPlayInterval)}onNavBtnClickHandler(t){clearTimeout(this.loopId),this.showSlide(t)}static get is(){return"ads-element"}render(){return l`
            <div class="carousel-wrapper" style="transform: translateX(-${this.slideIndex*100}%);">
                ${this.ads.map((t,e)=>l`
                    <div class="carousel-item" id="slide-${t.id}">
                        <div class="columns">
                            <div class="column is-4-desktop is-full-mobile imgCol">
                                <img src="${t.image}" alt="${t.paragraph}">
                            </div>
                            <div class="column is-8-desktop is-full-mobile parCol">
                                <h4>${t.paragraph}</h4>
                            </div>
                        </div>
                    </div>
                `)}
            </div>
            <div class="dots-container">
                ${this.ads.map((t,e)=>l`
                    <span id="dot${e}" class="dot ${e===this.slideIndex?"active":""}" @click="${()=>this.onNavBtnClickHandler(e)}"></span>
                `)}
            </div>
            <div id="next" class="nav" @click=${()=>this.onNavBtnClickHandler(this.slideIndex+1)}>
                <adaptive-ui-icon icon="chevron-right"></adaptive-ui-icon>
            </div>
            <div id="prev" class="nav" @click=${()=>this.onNavBtnClickHandler(this.slideIndex-1)}>
                <adaptive-ui-icon icon="chevron-left"></adaptive-ui-icon>
            </div>
        `}}customElements.define(d.is,d);const v=({element:s,rows:t,cols:e})=>{const i=o.useRef(null);return o.useEffect(()=>{i.current&&s&&(i.current.e=s,i.current.rows=t,i.current.cols=e)},[s,t,e]),a.jsx(a.Fragment,{children:s&&t&&e?a.jsx("ads-element",{id:"ads-element",ref:i}):a.jsx("p",{children:"Loading data..."})})},g=u(v);export{g as default};
