import{i as m,h as p,r as h,g as u,k as n,a as c,o as g,j as l}from"./index-C2PWchud.js";import{w as _}from"./datasource-mixin-DMQBE4lo.js";const v=m`
/* Services Section */
.columns {
    padding:60px;
}
.column{
    position: relative;
}
.ii__tile-head{
    display: flex;
    width:32%;
    align-items: center;
    margin:5px;
}
.ii__tile-body {
    width:68%;
}
.ii__tile-head img{
    object-fit: contain;
}

img {
    object-fit: cover;  
}
.ii__section{
    padding-top: 80px;
    padding-bottom: 80px;
}
.ii__title-contaner{
    margin-bottom: 86px;
}
.ii__tile{
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    color: var(--grey-darker    );
    min-height:240px;
    padding: 20px 10px 20px 10px;
    background-color: var(--paper);
    height: auto;
}
.ii__tile:hover{
    width: 100%;
    transform: scale(1);
    box-shadow: var(--mui-shadows-3);
    transition:.3s ease-in-out;
}
.ii__title-small{
    margin-top: 10px;
    margin-bottom: 10px;
    color: var(--grey-darker);
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;
    font-weight: 600;
    letter-spacing: 0.15px;
}
.row-reverse {
    flex-direction:row-reverse;
}
.ii__s-imge{
    width: 100%;   
    height: 110px;
    margin-bottom: 30px;
    position: relative;
}
.ii__s-imge img{

    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    left: 30%;
    width: 100%;
    height: 100%;
}
.read_more{
    color:var(--info);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .show_less{
    color:var(--info);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .image-column {
      display:flex;
    align-items:center;
  } 
  #center-image {
    object-fit:contain;
  }
  /*animations*/

.animate1{
    opacity:0;
    transform:translateY(40px);
    transition:1s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateY(0px);

}
@media screen and (max-width: 415px){ 

    .columns {
        padding:40px;
    }
}
`;class d extends p{static get styles(){return[h(u),v,m`
        :host {
          display: block;
        }

        .ii__paragraph {
          position: relative;
        }

        .read_more, .show_less {
          cursor: pointer;
          color: blue;
          text-decoration: underline;
        }
      `]}static get is(){return"tile-element-2"}static get properties(){return{images:{type:Array},data:{type:Array},columns:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.rows=[],this.columns=[],this.e={details:{center_image:""}},this.observer=null}firstUpdated(e){super.firstUpdated(e),this.setupObserver(),this.updateReadMore()}setupObserver(){const e={root:null,threshold:.2};this.observer=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&this.animateTiles()})},e);const i=this.shadowRoot.querySelector("#service");i&&this.observer.observe(i)}updateReadMore(){this.shadowRoot.querySelectorAll(".ii__paragraph").forEach(i=>{let t=i.getAttribute("data-name");i.innerText.length>240&&this.addReadMore(i,t)})}animateTiles(){this.shadowRoot.querySelectorAll(".ii__tile").forEach(i=>{i.classList.add("animate1-appear")})}addReadMore(e,i){const t=e.innerText.substr(240),s=e.innerText.slice(0,240);e.innerText=s;const o=document.createElement("span");o.className="read_more",o.innerText="...Read more",e.appendChild(o);const a=document.createElement("span");a.className="show_less",a.innerText="...Show less",o.addEventListener("click",()=>{e.innerText=s+t,e.appendChild(a)}),a.addEventListener("click",()=>{e.innerText=s,e.appendChild(o)})}disconnectedCallback(){this.observer&&this.observer.disconnect(),super.disconnectedCallback()}render(){return n`
      <div class="content">
        <div class="columns" id="service">
          <div class="column">
            ${this.rows.map((e,i)=>i%2===0?n`
              <div class="ii__tile row-reverse">
                <div class="ii__tile-head">
                  <img src="/media/${e[3]}" alt="${e[1]} image"/> 
                </div>
                <div class="ii__tile-body">
                  <h3 class="ii_title ii__title-small is-size-6 has-text-weight-bold">
                    ${e[1]}
                  </h3>
                  <p class="ii__paragraph">${e[2]}</p>
                </div>
              </div>
            `:"")}
          </div>
          <div class="column image-column">
            <img id="center-image" src="${this.e.details.center_image}"/>
          </div>
          <div class="column">
            ${this.rows.map((e,i)=>i%2!==0?n`
              <div class="ii__tile">
                <div class="ii__tile-head">
                  <img src="/media/${e[3]}" alt="${e[1]} image"/> 
                </div>
                <div class="ii__tile-body">
                  <h3 class="ii_title ii__title-small is-size-6 has-text-weight-bold">
                    ${e[1]}
                  </h3>
                  <p class="ii__paragraph">${e[2]}</p>
                </div>
              </div>
            `:"")}
          </div>
        </div>
      </div>
    `}}customElements.define(d.is,d);const x=({element:r,data:e,rows:i})=>{const t=c.useRef(null),s=g();return c.useEffect(()=>{t.current&&r&&(t.current.e=r,t.current.data=e,t.current.rows=i)},[r,e,i]),l.jsx("div",{children:r&&e&&i?l.jsx("tile-element-2",{"theme-background-color":s.palette.background.paper,id:"tile-element-2",ref:t}):l.jsx("p",{children:"Loading data..."})})},w=_(x);export{w as default};
