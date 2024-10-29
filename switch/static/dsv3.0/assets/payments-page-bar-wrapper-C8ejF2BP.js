import{i as r,h as o,r as m,g as c,k as p,a,j as s}from"./index-C2PWchud.js";import{t as l,a as d}from"./telkom-C_i13dMP.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const g=r`
    :host {
        display: block;
        position: relative;
    }
    .payments-banner-container{
        width: 65%;
        background-image: linear-gradient(to right bottom,#ff9a4f, #ff9d51, #ff9449, #ff9f52,#ff9d51);
        border-radius: 20px;
        margin-right:auto;
        margin-left:auto;
    }
    .columns{
        height: 270px;
    }
    .imgCol{
        display:inline-flex;
        vertical-align:bottom;
    }
    .img{
        max-width: 100%;
        position:relative;
        bottom:-12px;
    }
    .hero-content{
        flex-direction: column;
    }
    .content h2{
        color:var(--info--color-invert) !important;
        font-family:var(--family-sans-serif) !important;
        font-size: 1.25em;
    }
    .content{
        font-weight: bold;
        color: #fff;
    }
    .services img{
        width: 50px;
        border-radius:15px 15px 15px 15px;
        
    }
    .content .numberSpan{
        font-size:48px;
    }
    .support{
        font-size:20px;
    }
    @media(max-width:1100px){
        .columns{
        height: 280px;
        }
       .img{
        max-width: 100%;
       }
       .payments-banner-container{
        width: 80%;
       }
    }
    @media(max-width:768px){
        .payments-banner-container{
            overflow:clip !important;
            overflow-wrap:break-word !important;
            margin-right:auto;
            margin-left:auto;
            width: 90%;
        }
        .content{
            font-weight: bold;
        }
        .columns{
        height: 330px;
        }
        .is-5 {
            display: none;
        }
        .services{
            text-align:center;
        }
        .content .numberSpan{
        font-size:82px !important;
        }
        .hero-content{
            padding:.75em .75em .75em .75em;
        }
    }
    @media(max-width:480px){
        .columns{  
            height: 350px;
        }
        .content .numberSpan{
            font-size:42px !important;
        }
    }
`,f="/assets/safaricom-yXH4GYcg.svg";class n extends o{static get styles(){return[m(c),g]}firstUpdated(){const e=JSON.parse(`{"title":"Conveniently buy Airtel-Telkom-Safaricom Airtime using Paybill<br> <span class='numberSpan' style='color: #1065B3'> 339 339</span><br> and your Phone Number as the <span style='color: #1065B3'>Account Number</span><br><br><span class='support'>Support: <span style='color: #1065B3'>0769-339-399/0789-399-399</span></span>","services":"<img src=${l}> &ensp; <img src=${f}> &ensp; <img src=${d}>","heroImage":"https://i.postimg.cc/q7Q76BRk/woman-holds-modern-mobile-phone-surfs-net-checks-newsfeed-social-networks-wears-headband-white-shirt.png"}`);this.image=e.heroImage,this.title=e.title,this.services=e.services,this.shadowRoot.querySelector("img").src=this.image,this.shadowRoot.querySelector("h2").innerHTML=this.title,this.shadowRoot.querySelector(".services").innerHTML=this.services}static get is(){return"payments-page-bar"}render(){return p`
           <div class="columns is-mobile payments-banner-container">
            <div class="column is-5 imgCol">
                <img class="img" src="/media/${this.image}" alt=""/>
            </div>
            <div class="column content hero-content is-flex is-justify-content-center">
                <h2></h2>
                <div class="services"></div>
            </div>
           </div>
        `}}customElements.define(n.is,n);const u=({element:t})=>{const e=a.useRef(null);return a.useEffect(()=>{const i=e.current;i&&t&&(i.e=t)},[t]),s.jsx("div",{children:t?s.jsx("payments-page-bar",{id:"payments-page-bar",ref:e}):s.jsx("p",{children:"Loading data..."})})},v=h(u);export{v as default};
