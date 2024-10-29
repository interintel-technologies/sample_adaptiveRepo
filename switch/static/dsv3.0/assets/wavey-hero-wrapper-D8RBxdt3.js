import{i as s,h as n,r as l,g as h,k as i,a as r,j as a}from"./index-C2PWchud.js";const d=s`
.wave-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--md-sys-color-primaryContainer);
  padding-top: 3.5rem;

}

.wave {
  display: block;
  position: relative;
  height: 40px;
  width: 100%;
  background: rgb(57, 27, 112);
  transform: scale(1, 1);
}

.wave:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 300px;
  background-color: white;
  right: -25%;
  top: 20px;
}

.wave:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 300px;
  background-color: rgb(57, 27, 112);
  left: -25%;
  top: -240px;
  clip-path: ellipse(100% 15% at -15% 100%);
}

.hero-titles{
    /* width: 567px; */
    padding: 70px;
}
.hero-title{
  font-family:var(--family-sans-serif) !important;
    font-size: 3rem!important;
    font-weight: 700!important;
    line-height: 58px!important;
    letter-spacing: 0em;
    text-align: left;
}
.hero-subtitle {
  font-family:var(--family-sans-serif) !important;
    font-size: 1.5rem!important;
    font-weight: 400!important;
    line-height: 29px!important;
    letter-spacing: 0em;
    text-align: left;
}
.hero-button{
    border-radius:40px;
    font-weight:700;
    background-color:var(--primary);
    color:var(--white);
    border:none;
}
.hero-button:hover{
  color:var(--white);
}
.is-vcentered{
  margin-top:auto;
  margin-bottom:auto;
  max-height: 55vh;
}
.image{
  width:50%;
  object-fit:contain;
}
@media(max-width:768px){
  .wave-container {
    padding-top:0;
  }
  .image{
    display:none;
  }
  .is-vcentered{
    max-height: 62vh;
  }
}
`;class o extends n{static get styles(){return[l(h),d,s`
                /* :host {
                display: block;
                } */
            `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}updated(e){e.has("e")}static get is(){return"wavey-hero"}render(){return i`
            <div class="wave-container">
                <div class="columns is-vcentered">
                    <div class="column is-half">
                        <div class="content hero-titles">
                            <h1 class="hero-title">${this.e&&this.e.name}</h1>
                            <h2 class="hero-subtitle">${this.e&&this.e.defaultValue}</h2>
                            ${this.e&&this.e.details.button?i`
                                <a class="button hero-button mt-2" href="${this.e&&this.e.details.path}"> ${this.e&&this.e.details.button} </a>
                            `:i`
                            `}
                            
                        </div>
                    </div>
                    <div class="column is-half" style="padding:9.5rem">
                        <img src="${this.e&&this.e.details.image}" alt="Your Image" class="image">
                    </div>
                </div>
            </div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
            <path fill="var(--primary--dark-color)" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,58.7C480,43,600,53,720,96C840,139,960,213,1080,208C1200,203,1320,117,1380,74.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg> -->
            <svg id="visual" viewBox="0 0 1280 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 89L35.5 119.8C71 150.7 142 212.3 213.2 246.7C284.3 281 355.7 288 426.8 282.8C498 277.7 569 260.3 640 224.8C711 189.3 782 135.7 853.2 114.5C924.3 93.3 995.7 104.7 1066.8 126C1138 147.3 1209 178.7 1244.5 194.3L1280 210L1280 0L1244.5 0C1209 0 1138 0 1066.8 0C995.7 0 924.3 0 853.2 0C782 0 711 0 640 0C569 0 498 0 426.8 0C355.7 0 284.3 0 213.2 0C142 0 71 0 35.5 0L0 0Z" fill="var(--md-sys-color-primaryContainer)" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
            <!-- <div class="wave"></div> -->
        `}}customElements.define(o.is,o);const c=({element:t})=>{const e=r.useRef(null);return r.useEffect(()=>{e.current&&t&&(e.current.e=t)},[t]),a.jsx("div",{children:t?a.jsx("wavey-hero",{id:"wavey-hero",ref:e}):a.jsx("p",{children:"Loading data..."})})};export{c as default};
