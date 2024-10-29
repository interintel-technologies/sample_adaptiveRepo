import{i as l,h as c,k as a,a as n,j as o}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const u=l`
    .content {
        position: relative;
        padding-bottom: 50px;
    }
    .columns {
        margin: 0 !important;
    }
    .carousel {
        display: grid;
        column-gap: 30px;
        row-gap: 30px;
    }
    .dots-container{
        position: absolute;
        bottom: 20px;
        width: fit-content;
        transform: translateX(50%);
        right: 50%;
    }
    .dot {
        cursor:pointer;
        border-radius: 3px;
        width: 13px;
        height: 13px;
        margin: 0 5px;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.7s ease;
        background-color: #bbb;
    }
    .active, .dot:hover {
        background-color: var(--link);
    }
    h3, h5, p {
        text-align: center;
    }
    @media screen and (max-width: 800px){ 
        .carousel {
            grid-template-columns: auto !important;
        }
    }
`;class m extends c{static get styles(){return[u,l`
        :host {
          display: block;
        }
        .carousel {
          display: grid;
          gap: 10px;
          transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dots-container {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .dot {
          width: 10px;
          height: 10px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
        }
        .dot.active {
          background-color: #717171;
        }
        @media (min-width: 1024px) {
          .carousel {
            grid-template-columns: repeat(4, 1fr); /* Maximum 4 columns per slide on desktop */
          }
        }
        @media (max-width: 1023px) {
          .carousel {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive columns */
          }
        }
      `]}static get properties(){return{e:{type:Object},rows:{type:Array},cols:{type:Array},images:{type:Array},slides:{type:Array},currentSlideIndex:{type:Number},noOfImagesInSlide:{type:Number}}}constructor(){super(),this.images=[],this.slides=[],this.currentSlideIndex=0,this.noOfImagesInSlide=4}firstUpdated(){var s,e;this.noOfImagesInSlide=((e=(s=this.e)==null?void 0:s.details)==null?void 0:e.noOfImagesInSlide)||this.noOfImagesInSlide,this.prepareImagesAndSlides()}updated(s){if((s.has("rows")||s.has("cols")||s.has("e"))&&this.prepareImagesAndSlides(),s.has("currentSlideIndex")){const e=s.get("currentSlideIndex");this.showSlide(e)}}prepareImagesAndSlides(){this.rows&&this.cols&&(this.images=this.rows.map(s=>Object.fromEntries(s.map((e,i)=>[this.cols[i].label,e]))),this.slides=this.renderSlides())}renderSlides(){const s=[];let e=[];return this.images.forEach((i,t,d)=>{e.push(i),((t+1)%this.noOfImagesInSlide===0||t===d.length-1)&&(s.push([...e]),e=[])}),s.map(i=>a`
      <div class="carousel">
        ${i.map(t=>a`
          <div class="carousel-item">
            <figure class="image is-4by3">
              <img src="${t.url}" alt="${t.title}"/>
            </figure>
            <h3>${t.title}</h3>
            <h5>${t.subtitle}</h5>
            <p>${t.description}</p>
          </div>
        `)}
      </div>
    `)}showSlide(s){const e=this.shadowRoot.querySelector(".carousel");(s>this.currentSlideIndex?"left":"right")==="left"?e.style.transform="translateX(-100%)":e.style.transform="translateX(100%)",setTimeout(()=>{e.style.transition="none",e.style.transform="translateX(0)",e.style.transition="transform 0.5s ease-in-out"},500)}render(){return a`
    <div class="columns">

      <div class="column content">
        ${this.slides[this.currentSlideIndex]}
        ${this.slides.length>1?a`
          <div class="dots-container">
            ${this.slides.map((s,e)=>a`
              <span id="dot${e}" class="dot ${e===this.currentSlideIndex?"active":""}" @click="${()=>this.currentSlideIndex=e}"></span>
            `)}
          </div>
        `:""}
      </div>
      </div>

    `}}customElements.define("images-carousel",m);const h=({element:r,rows:s,cols:e})=>{const i=n.useRef(null);return n.useEffect(()=>{const t=i.current;t&&r&&(t.e=r,t.rows=s,t.cols=e)},[r,s,e]),o.jsx("div",{children:r?o.jsx("images-carousel",{id:"images-carousel",ref:i}):o.jsx("p",{children:"Loading data..."})})},x=p(h);export{x as default};
