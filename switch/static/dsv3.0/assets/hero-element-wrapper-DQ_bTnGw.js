import{i as n,h as d,r as s,g as l,k as i,a as o,j as a}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const c=n`
    .hero::-webkit-scrollbar {
        display: none;
    }
    #content{
        overflow:hidden !important;
    }
    .card {
        width: 45%;
        position: absolute;
        right: 50px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 24px -1px;
        backdrop-filter: blur(20px);
        align-items: center;
        border-radius: 40px;
        border-width: 4px;
        border-style: double;
        border-color: transparent;
        border-image: initial;
        background: linear-gradient(127deg, rgba(255, 255, 255, 0.4) 12.11%, rgba(255, 255, 255, 0.1) 73.08%) border-box padding-box, border-box;
      }
    .hero{
        min-height: 800px !important;
        background-color: #f4f7fa;
        background-size: contain;
        display:flex;
        align-items: flex-end;
        width:100%;
        position: relative;
        z-index: 0;
        overflow-y:hidden;
    }
    .hero-body{
        width: 100%;
        margin:0px auto;
    }
    .hero-body::-webkit-scrollbar {
        display: none !important;
    }
    .hero::-webkit-scrollbar {
        display: none !important;
    }
    #content{
        overflow:hidden !important;
    }
    .columns {
        width: 100%;
        z-index: 10;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .button {
        width: fit-content;
        display: flex;

        border-radius: 0px;
        text-align: center;
        text-transform: capitalize;
        transition: all 300ms linear 0s;
        border-radius:6px;

    }
 
    .sub-heading{
        margin-bottom: 50px;
        width:70%

    }

    .image{
        height:80%;
        margin:auto
    }
    .card {
        width: 45%;
        border-radius: 40px;
        border-style:solid;
        border: double 4px transparent;
         /* border-image: linear-gradient(124.48deg, #FFFFFF 14.54%, #FCF5D5 38.19%, var(--primary--light-color) 54.86%, var(--primary) 88.98%) 20; */
        position: absolute;
        right: 50px;
        backdrop-filter: blur(20px);
        align-items: center;
        background-origin: border-box;
  background-clip: padding-box, border-box;
    }
    .card-content {
        max-width: 80%;
    }
    .parallax {
        /* The image used */
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 100%;
        min-height:100%;
        filter: blur(7px);
        opacity: 0.68;
        box-shadow: 0px 3px 6px #00000029;
        margin: -3rem;
    }
    @media screen and (max-width: 500px){
        .parallax {
            margin: -1.5rem;
        }
        .main-heading {
            font-size: 55px !important;

        }
        .sub-heading{
            font-size: 35px !important;
            margin-bottom: 20px;
            width:100%

        }
    }

    /* Adjust styles for .main-heading on screens with a maximum width of 768px (tablets) */
    @media (max-width: 768px) {
        .hero-body{
            width: 90%;
            margin:0px auto;
        }
      .main-heading {
        font-size: 36px !important;
        margin-bottom: 20px;
      }
      .sub-heading{
        margin-bottom: 20px;
        width:100%
    }
    }

    /* Adjust styles for .main-heading on screens with a maximum width of 480px (mobile) */
    @media (max-width: 480px) {
      .main-heading {
        font-size: 26px !important;
        margin-bottom: 10px;
      }
      .sub-heading{
        font-size: 16px !important;
        margin-top: 20px !important;
        margin-bottom: 30px !important;
        width:100%;
        line-height: 24px;

    }
      .hero-body{
        width: 100%;
        margin:0px auto;
    }
    }


`;class b extends d{static get properties(){return{image:String,e:{type:Object}}}static get styles(){return[s(l),c]}constructor(){super(),this.e={},this.image=""}firstUpdated(){this.updateCardBackground();const e=document.documentElement;new MutationObserver(()=>this.updateCardBackground()).observe(e,{attributes:!0,attributeFilter:["style"]})}updateCardBackground(){const e=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-surfaceContainerLowest").trim(),t=this.shadowRoot.querySelector(".card");t&&(e==="#ffffff"||e==="rgb(255, 255, 255)"?(t.style.background="linear-gradient(127deg, rgba(255, 255, 255, 0.4) 12.11%, rgba(255, 255, 255, 0.1) 73.08%) border-box padding-box, border-box",t.style.boxShadow="rgba(0, 0, 0, 0.2) 0px 4px 24px -1px"):(t.style.background=`linear-gradient(127deg, ${e} 12.11%, ${e} 73.08%) border-box padding-box, border-box`,t.style.boxShadow="rgba(255, 255, 255, 0.2) 0px 4px 24px -1px"))}render(){var e,t;return i`
      ${Object.keys(this.e).length>0?i`
        <div class="content">
        <section class="hero is-fullheight is-justify-content-center" style="background: url(${((e=this.e.details)==null?void 0:e.backgroundImage)||""}) lightgray 50% / cover no-repeat;">
          <div class="card content p-3">
            <div class="card-content">
              <h1 class="main-heading">${this.e.name}</h1>
              <p class="mt-0 mb-2">${this.e.defaultValue}</p>
              ${(t=this.e.details)!=null&&t.link?i`
                <a href="${this.e.details.link.path}" class="button is-link ">${this.e.details.link.label}</a>
              `:""}
            </div>
          </div>
        </section>
        </div>
      `:i`
        <p>Loading data...</p>
      `}
    `}}customElements.define("hero-element",b);const m=({element:r})=>{const e=o.useRef(null);return o.useEffect(()=>{e.current&&r&&(e.current.e=r)},[r]),a.jsx("div",{children:r?a.jsx("hero-element",{id:"hero-element",ref:e}):a.jsx("p",{children:"Loading data..."})})},x=p(m);export{x as default};
