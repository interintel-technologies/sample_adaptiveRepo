import{i as m,h as x,r as h,g as f,k as a,a as p,o as g,j as o}from"./index-C2PWchud.js";import{w as v}from"./datasource-mixin-DMQBE4lo.js";const k=m`
/* Services Section */
.mainCol{
        margin-left:auto;
        margin-right:auto;
        justify-content:center;
    }

.service-cards{
    width:70%;
    margin:0px auto;
}
.service--row .col-md-6:last-child{
    margin: 15px auto;
  }
  .card-service {
      padding: 40px 35px;
      border: 0;
      border-radius: 0;
      background: #fff;
      border: 1px solid #e8edf1;
      z-index: 22;
      position: relative;
      transition: all 300ms linear 0s;
  }
  .card-service__icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      margin-bottom: 12px;
      height: 40px;
      width: 40px;
    background: var(--primary);
      text-align: center;
      line-height: 72px;
      border-radius: 40px;
      margin-bottom: 32px;
  }
  .card-service__icon i {
      color: #ffffff;
    font-size: 35px;
  }
  
.card_title{
    font-weight:700;
    text-transform:capitalize;
    font-size:24px !important;
}
.paragraph{
    text-align:left;
    margin-top:2.5rem !important;
    font-weight:400;
}
.initials{
    text-transform:uppercase;
    font-weight:600;
    color:var(--black);
}

`;class b extends x{static get properties(){return{initialsArray:{type:Array},rows:{type:Array},themeBackgroundColor:{type:String},contrast:{type:String}}}constructor(){super(),this.initialsArray=[],this.rows=[],this.themeBackgroundColor="",this.contrast=""}static get styles(){return[m`.tileCont {
      display: flex;
      padding: 35px 40px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      flex-shrink: 0;
      margin: 0 16px;
      border-radius: 10px;
      border: 0.4px solid rgba(0, 0, 0, 0.25);
      background: var(--paper);
      box-shadow: var(--mui-shadows-3);
    }`,h(f),k]}updated(e){e.has("rows")&&this._processRows()}_processRows(){const e=this.rows.map(t=>{const[i,s]=t[1].split(" ");return(i[0]||"")+(s?s[0]:"")});this.initialsArray=e}firstUpdated(){this.shadowRoot.querySelectorAll(".paragraph").forEach(t=>{let i=t.getAttribute("data-name");t.innerText.length>240&&this.addReadMore(t,i)})}addReadMore(e,t){let i=e.innerText.substr(240),s=e.innerText.slice(0,240);e.innerText=s;const c=document.createTextNode("...Show less"),d=document.createElement("p"),n=document.createElement("span"),u=document.createTextNode("...Read more"),r=document.createElement("span");r.className="read_more",r.appendChild(u),e.appendChild(r),n.className="show_less",n.appendChild(c),d.appendChild(n),r.addEventListener("click",()=>{e.innerText=s+i,e.appendChild(d)}),n.addEventListener("click",()=>{e.innerText=s,e.appendChild(r)})}checkLink(e){return e.includes("|")}getLink(e){if(e){const[,t]=e.split("|");return t}return""}getText(e){if(e.includes("|")){const[t]=e.split("|");return t}return e}render(){return a`
      <div class="content py-3">
        <div class="columns is-multiline is-mobile mainCol py-4">
          ${this.rows.map((e,t)=>a`
            <div class="column tileCont m-2 is-3-desktop is-10-mobile is-6-tablet">
              <div class="columns is-mobile">
                <div class="column is-2">
                  <span class="card-service__icon">
                    <p class="initials" style="color:${this.contrast} !important">${this.initialsArray[t]}</p>
                  </span>
                </div>
                <div class="column is-9">
                  <h3 class="card_title">${this.getText(e[1])}</h3>
                  <p class="paragraph">${e[2]}</p>
                  ${this.checkLink(e[1])?a`
                    <span class="link-span">
                      <a class="card-service__link" href="${this.getLink(e[1])}" target="_blank">Learn More</a>
                    </span>
                  `:a``}
                </div>
              </div>
            </div>
          `)}
        </div>
      </div>
    `}}customElements.define("tile-element",b);const y=({element:l,data:e,rows:t})=>{const i=p.useRef(null),s=g();return p.useEffect(()=>{i.current&&t&&(i.current.rows=t,i.current.contrast=s.palette.getContrastText(s.palette.primary.main))},[t]),o.jsx("div",{children:l&&e&&t?o.jsx("tile-element",{"theme-background-color":s.palette.background.paper,ref:i}):o.jsx("p",{children:"Loading data..."})})},E=v(y);export{E as default};
