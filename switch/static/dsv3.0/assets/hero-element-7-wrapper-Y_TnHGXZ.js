import{i as h,h as d,r as p,g as c,k as l,a as n,j as r}from"./index-C2PWchud.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const m=h`
a {
    display: block;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    text-decoration: none;
    color: #333333;
}
.zua-c{
    background: var(--primary)!important;
    color: #fff!important;
}
.hero{
    width: 100%;
    height: 91vh;
    position: relative;
    overflow: hidden;
    margin-top: 83px;
    flex-direction: row !important;
    flex-wrap:wrap;
}

.hero-img-cont .overlay{
    width: 100%;
    height: 91vh;
    opacity: .4;
    background-color: var(--secondary);
    border-top-left-radius: 50px;
    position: absolute;
    top: 0;
    left: 0;
}
.hero-img-cont img{
    border-top-left-radius: 50px;
    object-fit: cover;
    width: 100%;
    height: 100%
}
.hero-text-container{
    width: 50%;
    height: 100vh;
    border-top-left-radius: 50px;
    position: relative;
    padding-left: 25px;
    margin: 155px 0 0 0;
    /* left: 0; */
   
}
.hero-text-container h1{
    text-transform: capitalize!important;
    /* position: absolute; */
    animation: loadIn 0.5s ease 1s forwards;

}
.hero-content{
    position: relative;
    overflow: hidden;
}
.hero-content h2{
    margin-top: 30px;

}
.hero-content p{
    margin-top: 30px;
    width: 600px;

}
.hero-cta a.btn{
    background-color: var(--secondary);
    color: var(--white);
    margin-top: 30px;
    height: 4em!important;
    width: 267px!important;
    border:none !important;

}
.parallax-cont {
    position:relative;
    width:50%;
}
.btn.button:hover{
    background-color: var(--secondary)!important;

}
// @keyframes loadIn {
// 0% {
//     transform: translateY(80px);
// }
// 100% {
//     transform: translateY(0px);
// }
// }


/*animations*/

.animate1{
    opacity:0;
    transform:translateX(-40px);
    transition:0.7s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateX(0px);

}




@media screen and (max-width: 550px){
    .wrapper{
        width: 100% !important;
        position: relative !important;
    }
    .hero-text-container{
        width: 100% !important;
        height: 80vh !important;
        padding-top: 80px !important;
    }
}
@media screen and (max-width: 1030px){
    .hero{
        margin-top: 62px ;
        overflow-y:auto ;
    }
    .hero-img-cont,
    .hero-img-cont img,
    .hero-img-cont .overlay,
    .parallax-cont{
        width: 100% ;
        border-radius: 0 ;
        height: 50vh ;
    }
    .hero-text-container{
        width: 100%;
        height: 50vh;
    }
    .hero-img-cont {
        background-size: contain;
        background-position-x: unset;
        background-attachment: inherit;
    }
    .hero-text-container {
        width: 100%;
        padding: 39px;
        margin: 0;
        padding-top: 160px;
    }
    .hero-text-container h1{
        font-size: 55px !important;
        width: 100%;
    }
    .hero-content p{
        margin-top: 30px;
        width: 95%;
    
    }
}
@media screen and (max-width: 290px){
    .hero-text-container h1 {
        font-size: 43px !important;
    }
    .hero-cta a.btn {
        width: 100% !important;
    }
    .hero-text-container{
        height: 85vh !important;
    }
}
`;class s extends d{static get styles(){return[p(c),m,h`
        :host {
          display: block;
        }
      `]}constructor(){super(),this.e=null}static get properties(){return{e:{type:Object}}}static get is(){return"hero-element-7"}updated(t){t.has("e")&&this.onLoadAppear()}setupObserver(){const t={root:null,threshold:.2};this.observer=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&this.animateColumns()})},t);const e=this.shadowRoot.querySelector("#mainColumn");e&&this.observer.observe(e)}animateColumns(){this.shadowRoot.querySelectorAll(".section").forEach(e=>{e.classList.add("animate1-appear")})}render(){const t=this.e&&this.e.details&&this.e.details.hero_image_src;return l`
      <style>
        .hero-img-cont {
          width: 100%;
          height: 91vh;
          border-top-left-radius: 50px;
          position: absolute;
          right: 0;
          z-index: 1;
          background-image: url("${t}");
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-position-x: 599px;
          background-position-y: center;
          background-size: 74%;
        }

        .hero .section {
          opacity: 0;
          transform: translateY(50px); /* Hidden by default */
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .animate1-appear {
          opacity: 1;
          transform: translateY(0); /* Visible state when animation triggers */
        }
      </style>
      <section class="hero section is-paddingless">
        <div class="hero-text-container">
          <div class="heading">
            <h1 id="title" class="title">${this.e&&this.e.name}</h1>
          </div>
          <div class="hero-content parallax" data-speed="30">
            <h2
              id="subtitle"
              class="hero-subtitle has-text-weight-bold"
              >${this.e&&this.e.details.subtitle}</h2
            >
            <p>${this.e&&this.e.defaultValue}</p>
          </div>
          <div id="button" class="hero-cta">
            <a href=${this.e&&this.e.details.path} class="btn button"
              >${this.e&&this.e.details.button_title}</a
            >
          </div>
        </div>
        <div class="parallax-cont">
          <div class="hero-img-cont" id="01">
            <div class="overlay"></div>
          </div>
        </div>
      </section>
    `}firstUpdated(t){super.firstUpdated(t),this.setupObserver(),this.onLoadAppear()}onLoadAppear(){const t=this,e=t.shadowRoot.querySelector("#title"),a=t.shadowRoot.querySelector("#subtitle"),i=t.shadowRoot.querySelector("#button");setTimeout(()=>{e.classList.add("animate1-appear"),a.classList.add("animate1-appear"),i.classList.add("animate1-appear")},700)}}customElements.define(s.is,s);const g=({element:o})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&o&&(t.current.e=o)},[o]),r.jsx("div",{children:o?r.jsx("hero-element-7",{id:"hero-element-7",ref:t}):r.jsx("p",{children:"Loading data..."})})};export{g as default};
