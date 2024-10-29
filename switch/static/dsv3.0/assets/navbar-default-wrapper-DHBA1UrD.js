import{i as v,k as p,a as m,j as u}from"./index-C2PWchud.js";import{B as h}from"./base-element-5lxvCIHt.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";const g=class extends f(h){static get is(){return"navbar-default"}constructor(){super(),this.menuGroups=[]}static get properties(){return{menuGroups:Array}}shopping(s){s.preventDefault();var e=this;const a=s.currentTarget.dataset.href;window.history.replaceState("Dialog","Dialog",a),window.preloads[a]&&window.preloads[a].res?e.pl._dialog.apply(e.pl,[window.preloads[a].res,{service:window.preloads[a].service,params:this.serviceCallParams()}]):e.pl._dialog(window.preloads[a].service,this.serviceCallParams())}parseMenus(){const s=[],e=JSON.parse(this.e.defaultValue);for(const a in e)if(e.hasOwnProperty(a)){const c=e[a],i=Object.keys(c)[0],n={title:i,items:[]},r=c[i],o=Object.keys(r);for(let t=0;t<o.length;t++){const d=o[t],l=r[d];n.items.push({title:l[0],icon:l[1],service:l[3],route:l[2]})}s.push(n)}this.menuGroups=s}firstUpdated(s){super.firstUpdated(s)}serviceCallParams(){return this.params}loadService(s,e){window.preloads[e]&&window.preloads[e].res?window.location.pathname===e&&this.pl._dialog.apply(this.pl,[window.preloads[e].res,{service:s,params:this.serviceCallParams()}]):this.callService(s).then(a=>{window.preloads[e]={res:a.serviceCommands.get_section,service:s},window.location.pathname===e&&this.pl._dialog.apply(this.pl,[window.preloads[e].res,{service:s,params:this.serviceCallParams()}])}).catch(a=>console.log(a))}init(s,e){super.init(s,e);var a=this;this.parseMenus(),a.params=e.pl.paramsCopy();const i=document.querySelector("adaptive-ui").getAttribute("path");this.basePath=i,window.paths||(window.paths={}),window.preloads||(window.preloads={});for(const n in this.menuGroups){const r=this.menuGroups[n];for(const o in r.items){const t=r.items[o],d=`/${i}/${t.route}/`;a.loadService(t.service,d)}}}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const w=v`
nav {
    font-size: 16px;
}

a figure img#user-pic{
    border: solid 3px #157cf8;
}

.bind-box {
    margin-bottom: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem 4.5rem;

}
.menu-link-image{
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: 300;
}
.menu-link-image-label {
    position: absolute;
    top: 10px;
    left: -4px;
    background-color:#3273dc;
    padding: 3px 5px;
}

#site-name {
    font-size: 25px;
}    

#section2 .navbar .navbar-menu .navbar-start a, #section11 .navbar .navbar-menu a, #section12 .block .level a {
    color: #d4d3d3;
}
#section2 .navbar .navbar-menu .navbar-start a:hover, #section11 .navbar .navbar-menu a:hover, #section12 .block .level a:hover {
    color: #4a4a4a;
}
#section2 .navbar .navbar-menu .navbar-start a.is-active, #section11 .navbar .navbar-menu a.is-active, #section12 .block .level a.is-active {
    color: #4a4a4a;
}
#section2 div.block nav.level div.level-left p {
    padding:0 10px;
}
#section2 .tabs a {
    align-items: center;
    border-bottom-color: #fff;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    color: #4a4a4a;
    font-weight: 500;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
}
#section2 .tabs li.is-active a {
    border-bottom-color: #3273dc;
}
`;class b extends g{constructor(){super(),this.activeMenuGroup=0}static get styles(){return[unsafeCSS(globalStyles),w,v`
      :host{
        display: block;
      }
      `]}render(){return p`

      <div id="section2" class="bind-box">
        <nav class="navbar">
          <div class="navbar-menu">
            <div class="navbar-start">
            ${this.menuGroups.map((e,a)=>p`
              <a class="navbar-item ${a==this.activeMenuGroup?"is-active":""}"  
                    @click=${this._setActiveMenuGroup} 
                    data-group=${a} >${e.title}</a>

            `)}
            </div>
          </div>
          <div id="site-name" class="navbar-brand has-text-weight-semibold">
            <a class="navbar-item" href="#">
              <img src="${this.gateway.logo}" width="112" height="28">
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-active">
                <a class="navbar-item">
                  Patrick Lawrence
                </a>
                <a class="navbar-link">
                  <figure class="image is-32x32">
                    <img id="user-pic" class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                  </figure>
                </a>
                <!-- <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Settings
                  </a>
                  <a class="navbar-item is-active">
                    More...
                  </a>
                  <hr class="navbar-divider">
                  <div class="navbar-item">
                    Logout
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </nav>
        <hr class="navbar-divider" clear="all">

        <div class="block">
          <nav class="level">
          <!-- left side -->
            <div class="level-left">
              <div class="tabs">
                <ul>
                ${this.menuGroupItems(this.activeMenuGroup).map(e=>p`
                  <li> 
                    <a 
                      class="New-products"
                      data-href="/${this.basePath}/${e.route}/" 
                      @click=${this.shopping}>${e.title}</a></li>
                  `)}

                </ul>
              </div>
            </div>
            <!-- right side -->
            <div class="level-right">
              <div class="level-item">
                <div class="field">
                  <p class="control">
                    <span class="icon">
                      <i class="fas fa-search"></i>
                    </span>
                    <span class="icon">
                      <i class="fas fa-heart"></i>
                    </span>
                    <span class="icon">
                      <i class="fas fa-shopping-cart"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>`}static get styles(){return v`
    :host {
 
    }
    
    `}_setActiveMenuGroup(e){this.activeMenuGroup=e.currentTarget.dataset.group}menuGroupItems(e){return this.menuGroups[e].items}static get properties(){return{activeMenuGroup:Number}}}customElements.define(b.is,b);const G=s=>{const{element:e}=s,a=m.useRef(null);return m.useEffect(()=>{a.current&&e&&(a.current.e=e)},[e]),u.jsx("div",{children:e?u.jsx("navbar-default",{id:"navbar-default",ref:a}):u.jsx("p",{children:"Loading data..."})})};export{G as default};
