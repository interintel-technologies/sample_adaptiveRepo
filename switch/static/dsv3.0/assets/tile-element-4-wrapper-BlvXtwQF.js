import{i as c,h as m,r as d,g as u,k as o,a as s,o as h,j as a}from"./index-C2PWchud.js";import{w as f}from"./datasource-mixin-DMQBE4lo.js";const x=c`
  .feature-box{
    margin:0px auto;
    width: 60%;
    display: flex;
    flex-direction: row;
  }
  .feature-thumb {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 3em;
    font-family: "Poppins";
   
  }
  .feature-thumb span {
    background: #ffffff;
    border-radius: 50px;
    color: #3f51b5;
    font-size: 25px;
    font-weight: bold;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-bottom: 25px;
    border: 1px solid #3f51b5;
  }
  .feature-thumb h3 {
    font-size: 13px;
    margin: 10px 0;
    position: relative;
  }
  .feature-thumb h3:after {
    content: '';
    display: block;
    height:2px;
    width: 60px;
    background-color:blue;
    position: absolute;
    top: 150%;
    left: 30%;
  }
  .feature-thumb p {
    width:100%;
    text-align: center;
    font-size: 11px;
    margin-top: 25px;
  }
  .content {
    flex-direction: column;
    align-items: center;
  }
  .image {
    width:100px;
    height: 100px;
    object-fit:contain;
  }
  .image-container{
    border-radius: 50%;
    width:150px;
    height: 150px; 
    justify-content:center;
    align-items: center;
    border:2px solid var(--primary);
  }
  .image-container:hover{
    border-color: var(--link);
  }
  hr {
    width: 20%;
    background-color: var(--primary) !important;
    margin: .8rem 0 !important;
  }
  h4 {
    margin-top:10px;
  }
  p{
    text-align: center;
    max-width: 80%;
  }
  .column{
    background:var(--paper)
  }
  .columns {
    margin: 0;
  }
  @media screen and (max-width: 450px) {
      p {
        max-width: 90%;
      }
  }
`;class l extends m{static get styles(){return[d(u),x,c`
               :host{
                    display:block;
               }`]}static get properties(){return{images:Array,data:Array,columns:{type:Array},rows:{type:Array},e:{type:Object}}}updated(e){e.has("columns")||e.has("rows")||e.has("e")}static get is(){return"tile-element-4"}render(){return o`
               <div class="content">
                    <section class="hero-body">
                         <div class="columns is-multiline">
                              ${this.rows.map(e=>o`
                                        <div class="column is-4">
                                             <div class="content is-flex">
                                                  <div class="image-container is-flex">
                                                       <img class="image" src="/media/${e[3]}"/>
                                                  </div>
                                                  <h4>${e[1]}</h4>
                                                  <hr >
                                                  <p >${e[2]}</p>
                                             </div>
                                        </div>
                                   `)}
                         </div>
                    </section>
               </div>
               
          `}}customElements.define(l.is,l);const g=({element:i,data:e,rows:r,cols:n})=>{const t=s.useRef(null),p=h();return s.useEffect(()=>{t.current&&i&&(t.current.e=i,t.current.data=e,t.current.rows=r,t.current.cols=n)},[i,e,n,r]),a.jsx("div",{children:i&&e&&r&&n?a.jsx("tile-element-4",{"theme-background-color":p.palette.background.paper,id:"tile-element-4",ref:t}):a.jsx("p",{children:"Loading data..."})})},v=f(g);export{v as default};
