import{i as c,h as f,r as d,g as h,k as o,a as n,j as s}from"./index-C2PWchud.js";import"./fa-icon-COAiXmZs.js";import"./lit-html-dRijB2IX.js";const g=c`
.ii__footer {
    background-color: var(--md-sys-color-secondaryContainer);
    padding: 100px 53px 60px 27px!important;
    margin-bottom: -2.25rem;
    position:relative;
}
.footer-brand{
    padding: 10px;
    border-radius: 10px;
}
.ii__footer .address {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
}
.ii__footer-branding img{
    object-fit: contain;
    width: 150px;
}
.footer-flex {
    display: flex;
    margin-left: 10px;
}
.footer_list{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.copy-footer{
    margin-top: 37px;
}
.socials{
    display: flex;
    margin-top: 40px;
}
.socials .social{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F49D37;
;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    /* border: 1px solid #fff; */
    margin: 5px;
}

.socials .social:first-of-type{
    margin-left: 0px;
}

.socials .social:last-of-type{ 
    margin-right: 0px;
}

.list li, .footer-title{
    color:var(--secondary) !important;
    font-size: 18px;
}
.footer-title{
    font-weight: 600;
}

.list{
    line-height: 25px;
}
.list li{
    margin: 7px 0;
}
.list a{
    /* color: #fff; */
}
.copy-footer p {
    position: relative;
}
.copy-footer p::after{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5em;
    border-top: 1px solid #fff;
    z-index: -1;
}
.copy-footer p::before{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5em;
    border-top: 1px solid #fff;
    z-index: -1;
}
@media(max-width:480px){
    .ii__footer{
        padding:126px 70px 60px !important
    }
    .ii-footerfexrow{
        flex-direction:column;
    }
   
    #location-div{
        width:100% !important;
    }
}

.ii__container-main{
    margin: 0 auto;
    padding: 0 20px;
}
.ii__container.ii__container--home{
    padding-top: 30px;
}

.ii__container{
    max-width: 1068px;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
}
.wa__container{
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
}
a.navbar-item:hover {
    background-color: transparent;
    color: inherit;
}
.ii__title {
    margin-top: 0px;
    margin-bottom: 16px;
    color: #000;
    font-size: 42px;
    line-height: 52px;
    font-weight: 600;
    letter-spacing: 0.2px;
}
.ii__paragraph {
    font-size: 16px;
    /* line-height: 20px; */
    font-weight: 400;
    letter-spacing: 0.15px;
    color: var(--md-sys-color-secondary);
    line-height:36px;
}

.ii__footer {
    padding-top: 40px;
    padding-bottom: 40px;
    /* background-color: var(--app-default-color); */
}
.ii-footerfexrow{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 30px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.ii-footer-col {
    margin-left: 10px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
}
@media(min-width:480px){
    #location-div{
        width:55%;
    }
}

.ii-footer-col-sm{
    margin-left: 5px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
}
.ii__footer-col-title {
    color: var(--app-secondary-color);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
}
.ii__footer-col-link {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    color:var(--md-sys-color-onPrimaryContainer);
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.2px;
    text-decoration: none;
    text-transform:capitalize;
}
.ii__footer-col-contact{
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px !important;
    line-height:22px;
    text-decoration:underline !important;
    color:var(--md-sys-color-onPrimaryContainer);
}
.ii__footer-branding{
    width: 100px;
    margin-bottom: 20px;
}
.footer-bottom{
    /* border-top: 0.5px solid #a8a9b7; */
    /* padding-top: 20px; */
    height:50px;
}
.footer-rights{

  /* font-size:12px; */
  /* line-height:20px;
  font-weight:400; */
}
.footer-copyright{
    display:flex;
    justify-content:center
}
.footer-copyright p{
    font-size:12px;
    line-height:20px;
    font-weight:400px;
}
a:hover{
    color: var(--md-sys-color-onPrimaryContainer);
}
`;class l extends f{static get styles(){return[d(h),g,c`
        :host {
          display: block;
        }
      `]}static get properties(){return{e:{type:Object},rows:{type:Array},cols:{type:Array},isLoaded:{type:Boolean}}}constructor(){super(),this.e=null,this.rows=[],this.cols=[],this.isLoaded=!1}checkLink(t){t.target.getAttribute("href")||t.preventDefault()}_getCurrentYear(){return new Date().getFullYear()}_getHref(t){if(t.includes("|")){const[,i]=t.split("|");return i}return""}_getLinkTitle(t){if(t.includes("|")){const[i]=t.split("|");return i}return t}static get is(){return"footer-element-2"}firstUpdated(t){super.firstUpdated(t);const i=document.querySelector("body"),r=this.shadowRoot.querySelector(".ii__footer");window.innerWidth>768&&this.scrollAdjuster(),i.addEventListener("scroll",()=>this.scrollObserver()),r.addEventListener("scroll",()=>this.scrollObserver())}scrollAdjuster(){const t=document.querySelector(".page"),r=this.shadowRoot.querySelector(".ii__footer").clientHeight;this.footerLength=r,t.classList.remove("p-3"),t.style.padding=`.75em .75em ${r}px .75em`}scrollObserver(){const t=this.shadowRoot.querySelector(".ii__footer"),i=window.innerWidth;new IntersectionObserver(a=>{a.forEach(p=>{p.isIntersecting&&i>768&&(t.classList.add("fixed"),t.style.display="block")})}).observe(t)}render(){return o`
    <footer class="landing-footer ii__footer">
    <div class="ii__container wa__container">
        <div class="ii-footer-flexcontainer columns">
            <div class="column is-2-desktop is-2-tablet">
                <div class="ii__footer-branding">
                    <a href="#"><img src="${this.e&&this.e.details.logo_path}" alt="footer branding"/></a>
                </div>
               
            </div>
            <div class="column">
                <div class="ii-footerfexrow">
                  <div class="ii-footer-col">
                    <div id="location-div">
                    <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e&&this.e.details.location}</p>
                    <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e&&this.e.details.address}</p>
                    <div id="contacts-div" class="pt-5">
                      ${this.e&&this.e.details.links.map(t=>o`
                        ${t.title=="Contacts"?o`
                          
                                  ${t.links.map(i=>o`
                                  <a class="ii__footer-col-contact" rel="noopener" href="${this._getHref(i)}" @click="${this.checkLink}" target="_blank">
                                  
                                      <!-- <fa-icon class="fab fa-${this._getLinkTitle(i)}" color= "var(--app-secondary-color)" size="20px" style="" ></fa-icon>    -->
                                      ${this._getLinkTitle(i.toLowerCase())}
                                  </a>
                                  `)}   
                          `:o``}
                        `)}
                    </div> 
                  </div>
                    
                  </div>
                ${this.e&&this.e.details.links.map(t=>o`
                    <div class="ii-footer-col">
                            <!-- <h3 class="ii__footer-col-title is-capitalized">${t.title}</h3> -->
                            ${t.title=="Socials"?o`

                                ${t.links.map(i=>o`
                                <a class="ii__footer-col-link" rel="noopener" href="${this._getHref(i)}" @click="${this.checkLink}" target="_blank">
                                
                                    <!-- <fa-icon class="fab fa-${this._getLinkTitle(i)}" color= "var(--app-secondary-color)" size="20px" style="" ></fa-icon>    -->
                                     ${this._getLinkTitle(i.toLowerCase())}
                                </a>
                                `)}                                
                            `:t.title!="Contacts"?o`
                                ${t&&t.links&&t.links.map(i=>o`
                                <a id="link-${i}" href="${this._getHref(i)}" @click="${this.checkLink}" target="_blank" class="ii__footer-col-link">${this._getLinkTitle(i)}</a>
                                `)}
                            
                            `:o``}
                    </div>
                `)}
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="columns">
                <div class="column is-full footer-copyright">
                    <p class="ii__paragraph ">${this.e&&this.e.name} Copyright &copy; ${this._getCurrentYear()}. All rights reserved</p>
                </div>
                <div class="column">
                    <div class="ii-footerfexrow">
                        <div class="ii-footer-col-sm">
                            <a href="#" class="footer-icon">
                                <fa-icon class="fal fa-envelope" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>
                            </a>
                        </div>
                        <div class="ii-footer-col-sm"></div>
                        <div class="ii-footer-col-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    `}}customElements.define(l.is,l);const b=({element:e})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),s.jsx(s.Fragment,{children:e?s.jsx("footer-element-2",{id:"footer-element-2",ref:t}):s.jsx("p",{children:"Loading data..."})})};export{b as default};
