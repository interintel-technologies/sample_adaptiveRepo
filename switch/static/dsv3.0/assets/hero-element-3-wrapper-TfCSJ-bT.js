import{i as l,r as d,g as c,k as a,a as n,j as o}from"./index-C2PWchud.js";import{B as x}from"./base-element-5lxvCIHt.js";const h=l`
.hero-container {
    max-width: 100%;
    height: 100vh;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
    padding-top: 80px;
    margin-top: 10px;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    position: relative; /* Ensure hero container is relative to position children */
    overflow: hidden; /* Prevent overflow if necessary */
}

.container {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    position: relative; /* Allow container content to layer on top of parallax */
}

.parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: 0px 3px 6px #00000029;
    filter: blur(7px);
}

.c-title-xl {
    margin-top: 8px;
    margin-bottom: 18px;
    color: var(--primary) !important;
    font-weight: bold;
    letter-spacing: .22px;
    font-size: 60px;
    max-width: 300px;
    text-align: left;
    line-height: 55px;
}

.mid-text {
    font-size:19px;
    font-weight: bold;
    margin-bottom:18px;
    color: var(--primary)!important;
}
.c-paragraph {
    font-size: 19px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: .15px;
    max-width: 550px;
    text-align: left;
    color: #fff!important;
}
.str-btn {
    border-radius: 5px!important;
    color: #fff!important;
    margin-top: 30px;
    border: none!important;
    padding: 25px;
    font-size: 19px!important;
}

@media screen and (max-width: 414px) { 
    .c-title-xl {
        font-size: 65px;
    }
    .hero-column {
        margin-right: 66px !important;
    }
}

@media screen and (max-width: 375px) { 
    .c-title-xl {
        font-size: 55px;
    }
}

@media screen and (max-width: 360px) { 
    .c-title-xl {
        font-size: 50px;
    }
}

@media screen and (max-width: 320px) { 
    .c-title-xl {
        font-size: 45px;
    }
}
`;class s extends x{static get styles(){return[d(c),h,l`
            :host {
              display: block;
            }
          `]}render(){return a`
            <style>
                .parallax {
                    /* Create the parallax scrolling effect */
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                    /* Ensure the parallax effect is contained within its container */
                    position: relative;
                    width: 100%;
                    height: 100%; /* Adjust height based on the container */
                    opacity: 0.68;
                    filter: blur(7px);
                    box-shadow: 0px 3px 6px #00000029;
                }
            </style>

            ${this.e&&this.e.details.hide_filter?a``:a`
                <style>
                    .parallax {
                        opacity: 0.68;
                        filter: blur(7px);
                    }
                </style>
            `}

            <div class="hero-container" style="margin-top: ${this.e&&this.e.details.margin_top}">
                <div class="parallax"></div>
                <div class="container">
                    <div class="column">
                        <h1 class="c-title-xl">${this.topText(this.e&&this.e.name)}</h1>
                        <h1 class="mid-text">${this.midText(this.e&&this.e.name)}</h1>
                        <p class="c-paragraph">${this.e&&this.e.defaultValue}</p>
                        <a 
  href="${this.e&&this.e.details.path}" 
  class="button str-btn" 
  style="background-color: var(--app-secondary-color)"
>
  ${this.e&&this.e.details.button_title}
</a>
                    </div>
                </div>
            </div>
        `}static get is(){return"hero-element-3"}firstUpdated(t){super.firstUpdated(t);const i=this.shadowRoot.querySelector(".parallax");i.style.backgroundImage=`url(${this.e.details.bg_image})`}topText(t){return t.split(" ").filter((p,r)=>r<3).join(" ")}midText(t){return t.split(" ").filter((p,r)=>r>=3).join(" ")}}customElements.define(s.is,s);const g=({element:e})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),o.jsx("div",{children:e?o.jsx("hero-element-3",{id:"hero-element-3",ref:t}):o.jsx("p",{children:"Loading data..."})})};export{g as default};
