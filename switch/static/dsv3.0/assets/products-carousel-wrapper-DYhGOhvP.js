import{i as p,r as m,g as f,k as l,a as d,j as o}from"./index-C2PWchud.js";import{B as g}from"./base-element-5lxvCIHt.js";import{u as x}from"./utils-mixin-D5aAiqNi.js";import{w as y}from"./datasource-mixin-DMQBE4lo.js";const v=p`
  .img-cont {
    justify-content: center;
  }
  .section {
    position: relative;
  }
  .image {
    height: 300px;
    object-fit: contain;
    cursor: pointer;
  }
  .iron-icon {
    width: 28px !important;
    height: 28px !important;
  }
  .nav {
    cursor: pointer;
    height: 50px;
    width: 25px;
    background-color: var(--link);
    position: absolute;
    transform: translateY(50%);
  }
  .nav {
    background-color: var(--link);
    justify-content: center;
    align-items: center;
  }
  .prev {
    left: 0;
    border-radius: 0px 25px 25px 0;
  }
  .next {
    right: 0;
    border-radius: 25px 0 0 25px;
  }
  .dot {
    cursor: pointer;
    border-radius: 3px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    margin: 0 2px;
    display: inline-block;
    transition: background-color 1.2s ease;
    background-color: #bbb;
  }
  .active,
  .dot:hover {
    background-color: var(--link);
  }
  .navigation {
    justify-content: center;
    margin-top: 16px;
  }
  .dots-container {
    text-align: center;
    width: fit-content;
  }
  .slide-in-left {
    animation: slide-in-left 0.3s ease-in-out;
  }
  .slide-out-left {
    animation: slide-out-left 0.3s ease-in-out;
  }
  .slide-in-right {
    animation: slide-in-right 0.3s ease-in-out;
  }
  .slide-out-right {
    animation: slide-out-right 0.3s ease-in-out;
  }
  @keyframes slide-in-left {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes slide-out-left {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%);
    }
  }
  @keyframes slide-out-right {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(50%);
    }
  }
  @keyframes slide-in-right {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;class n extends x(g){constructor(){super()}static get properties(){return{value:String}}dscDataName(){return this.e.defaultValue}firstUpdated(t){super.firstUpdated(t)}_computeItemsCount(t){return t.length}_shouldFilter(t){var e=this._computeItemsCount(t);return e>10}_computeItems(t,e){const i=[];for(let r=0;r<t.length;r++){const a=t[r];if(e){var u=e.toLowerCase(),h=a[1].toLowerCase();h.indexOf(u)!==-1&&i.push(a)}else i.push(a)}return i}init(t,e){super.init(t,e);var i=this;i.required=this.e.required||t.min&&t.min>0,i.title=n.toTitleCase(t.name),i.icon=t.icon,i.params=i.pl.paramsCopy(),t.kind?this.selected=Number(t.kind):i.required&&i.rows.length>0&&(i.selected=i.rows[0][0]),i.loader=this.loadData()}}class c extends n{static get styles(){return[m(f),v]}static get properties(){return{slides:Array,slideIndex:Number,currentSlide:Array,autoplay:Boolean}}constructor(){super(),this.slides=[],this.slideIndex=0,this.currentSlide=[],this.autoplay=!0}firstUpdated(){this.loader.then(()=>{this.slides=this.rows,this.currentSlide=this.slides[this.slideIndex],this.autoplaySlides()})}animateDot(t){const e=this.shadowRoot.querySelectorAll(".dot");e.length>0&&(e.forEach(i=>i.classList.remove("active")),e[t].classList.add("active"))}animateImage(t){const e=this.shadowRoot.querySelector(".image");e.classList.add(t),setTimeout(()=>{e.classList.remove(t),this.currentSlide=this.slides[this.slideIndex]},300)}animateSlide(t){this.animateImage("slide-out-"+t),setTimeout(()=>{this.animateImage("slide-in-"+t)},300),this.animateDot(this.slideIndex)}moveSlide(t){this.slideIndex=this.slideIndex+t,this.slideIndex===this.slides.length&&(this.slideIndex=0),this.slideIndex<0&&(this.slideIndex=this.slides.length-1);const e=t>0?"right":"left";this.animateSlide(e)}showSlide(t){let e;t>this.slideIndex?e="right":t<this.slideIndex?e="left":t===this.slideIndex&&(e=null),this.slideIndex=t,this.autoplay=!1,e&&this.animateSlide(e)}autoplaySlides(){this.autoplay?setTimeout(()=>{this.moveSlide(1),this.autoplaySlides()},4e3):(this.autoplay=!0,this.autoplaySlides())}onClickImage(t){this.pl._dialog(this.e.service,{id:t})}static get is(){return"products-carousel"}render(){return l`
      <section class="section is-medium" style="padding:0 16px;">
        <div class="img-cont is-flex">
          <img
            src="/media/${this.currentSlide[1]}"
            class="image"
            @click=${()=>this.onClickImage(this.currentSlide[0])}
          />
        </div>
        <div class="navigation is-flex">
          <div class="dots-container is-flex">
            ${this.slides.map((t,e)=>l`
                <span
                  class="dot ${e===0?"active":""}"
                  @click=${()=>this.showSlide(e)}
                ></span>
              `)}
          </div>
        </div>
      </section>
    `}}customElements.define(c.is,c);const I=({element:s})=>{const t=d.useRef(null);return d.useEffect(()=>{const e=t.current;e&&s&&(e.e=s)},[s]),o.jsx("div",{children:s?o.jsx("products-carousel",{id:"products-carousel",ref:t}):o.jsx("p",{children:"Loading data..."})})},C=y(I);export{C as default};
