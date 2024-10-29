import{i as c,r as p,g as u,k as l,j as a}from"./index-C2PWchud.js";import{S as m}from"./index-BfzV1shQ.js";import{w as x}from"./datasource-mixin-DMQBE4lo.js";import{B as g}from"./base-element-5lxvCIHt.js";import{u as v}from"./utils-mixin-D5aAiqNi.js";const h=class extends v(g){constructor(){super(),this.slideIndex=1}static get is(){return"manual-slideshow"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,q:{type:String,value:""},title:String,maxlength:Number,required:Boolean,rows:{type:Object,value:[]},params:{type:Object,value:""},slideIndex:Number}}dscDataName(){return this.dataName}updated(t){t.has("e")&&(self.cols=dsc.cols,self.rows=dsc.rows,self.q="",self.groups=dsc.groups,self.currentGroups=self.groups,self.data=dsc.data,self.currentData=self.data,Object.keys(self.rows).length>0&&(self.dropdownValue=self.rows[0][0]))}init(t,s){super.init(t,s);var e=this;e.required=t.min&&t.min>0,e.title=h.toTitleCase(t.name),e.icon=t.icon,e.service=t.service,e.params=e.pl.paramsCopy(),e.dataName=t.defaultValue,e.maxlength=t.max,e.loader=this.loadData()}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const f=c`
  .slideshow-container {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    margin: auto;
    position: relative;
  }
 
  .slick-slide  img{
    width: 100% !important;
  }
  .slide {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    justify-content: space-evenly;
  }
  .numbertext {
    color: black;
    font-size: 14px;
    padding: 8px 12px;
    position: absolute;
    top: -13px;
    right: 0;
    margin: 16px;
    border-radius: 4px;
    font-weight: 700;
  }
  .dots-container {
    text-align: center;
  }
  .dot {
    cursor: pointer;
    border-radius: 3px;
    width: 18px;
    height: 7px;
    margin: 0 2px;
    display: inline-block;
    transition: background-color 1.2s ease;
    background-color: #bbb;
  }

  .active,
  .dot:hover {
    background-color: var(--link);
  }
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  .captions {
    position: absolute;
    bottom: 30px;
    max-width: 60%;
    background-color: var(--paper);
    padding: 20px;
    margin-left: 30px;
  }
  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }

    to {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 300px) {
    .prev,
    .next,
    .text {
      font-size: 11px;
    }
  }
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    background-color: #fff;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover,
  .next:hover {
    background-color: var(--link);
  }
`;let d=class extends h{static get styles(){return[p(u),f,c`
        :host {
          display: block;
        }
      `]}constructor(){super(),this.slideIndex=1,this.data=[],this.rows=[],this.e=null}static get properties(){return{slideIndex:{type:Number},data:{type:Array},e:{type:Object},rows:{type:Array}}}static get is(){return"manual-slideshow"}render(){return l`
      <!-- Slideshow container -->
      <div class="slideshow-container">
        ${this.e?l`
          <h1 style="align-self:flex-start;">${this.e.name}</h1>
          <h4 style="align-self:flex-start;">${this.e.details.sub_title}</h4>
        `:l`<p>Loading...</p>`}
  
        <!-- Full-width images with number and caption text -->
        <div class="slides">
          ${this.rows.map((s,e)=>l` 
            <div class="slide fade">
              <div class="numbertext">${e+1}/${this.rows.length}</div>
              <h3 class="title">${s[1]}</h3>
              <img class="image" src="/media/${s[3]}" alt="${s[1]}"/> 
              <div class="captions text">
                ${this.getCaptions(s[2]).map(o=>l`
                  <div class="caption">
                    <h3 class="caption-title">${o.title}</h3>
                    <h3 class="caption-desc">${o.desc}</h3>
                  </div>
                `)}
              </div>
            </div>
          `)}
        </div>
  
        <!-- The dots/circles -->
        <div class="dots-container">
          ${this.rows.map((s,e)=>l`
            <span class="dot" @click="${this.currentSlide}" currentSlide="${e+1}"></span>
          `)}
        </div>
  
        <div class="navigator">
          <div class="prev">
            <iron-icon class="iron-icon" style="width:28px !important; height:28px !important;" icon="chevron-left" move="-1" @click=${this.moveSlide}></iron-icon>
          </div>
          <div class="next">
            <iron-icon class="iron-icon" style="width:28px !important; height:28px !important;" icon="chevron-right" move="1" @click=${this.moveSlide}></iron-icon>
          </div>
        </div>
      </div>       
    `}getCaptions(s){const e=i=>i.split("<br/>"),o=i=>{const r=i.match(/<b>(.*?)<\/b>/)?i.match(/<b>(.*?)<\/b>/)[1]:"";let n=i.match(/:(.*)/)?i.match(/:(.*)/)[1]:"";return n[0]===" "&&(n=n.substr(1)),{title:r,desc:n}};return s.includes("<br/>")||s.includes("<b>")?e(s).map(i=>o(i)):[{desc:s}]}moveSlide(s){const e=parseInt(s.target.getAttribute("move"));this.showSlides(this.slideIndex+=e)}currentSlide(s){const e=parseInt(s.target.getAttribute("currentSlide"));this.showSlides(this.slideIndex=e)}showSlides(s){const e=this.shadowRoot.querySelectorAll(".slide"),o=this.shadowRoot.querySelectorAll(".text"),i=this.shadowRoot.querySelectorAll(".dot");console.log("slideshow ",e),s>e.length&&(this.slideIndex=1),s<1&&(this.slideIndex=e.length),e.forEach(r=>r.style.display="none"),o.forEach(r=>r.style.display="none"),i.forEach(r=>r.classList.remove("active")),e[this.slideIndex-1].style.display="flex",o[this.slideIndex-1].style.display="flex",i[this.slideIndex-1].classList.add("active")}updated(s){(s.has("e")||s.has("rows"))&&(console.log("this rows ",this.rows),this.showSlides(this.slideIndex))}};customElements.define(d.is,d);const w=({rows:t})=>{const s={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return a.jsx("div",{className:"slider-container",children:a.jsx(m,{...s,children:t&&t.length>0?t.map((e,o)=>a.jsxs("div",{className:"slide",children:[a.jsx("h3",{children:e[1]}),a.jsx("img",{src:`${e[3]}`,alt:e[1],className:"slide-image"}),a.jsx("div",{className:"captions",children:e[2]&&a.jsx("div",{children:a.jsx("h4",{children:e[2]})})})]},o)):a.jsx("div",{children:a.jsx("h3",{children:"No slides available"})})})})},I=x(w);export{I as default};
