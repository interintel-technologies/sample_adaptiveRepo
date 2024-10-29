import{i as y,k as d,a7 as S,bo as I,a as m,bp as P,j as o,bq as E,bf as R,al as _,bg as D,b3 as O}from"./index-C2PWchud.js";import{B as H}from"./base-element-5lxvCIHt.js";import"./shopping-cart-btn-CMHlGbhI.js";import"./wishlist-button-CJeKtjzw.js";import"./ecommerce-mixin-BZ3_9d38.js";import"./SectionTemplate-Drou2IoY.js";import"./utils-mixin-D5aAiqNi.js";const T=y`
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        width: 100vw;
    }
    .mid-bar, .bottom-bar {
        display: flex;
        justify-content: space-between;
        padding: 0px 40px;
    }
    .top-bar {
        display: flex;
        justify-content: flex-end;
        padding: 0px 40px;
    }
    .content {
        width: 100%;
    }
    #metaText {
        font-size: 12px;
    }
    .content p {
        margin-bottom: 0 !important;
    }
    #vr {
        height:80%;
        width: 2px;
        margin:0 7px;
        background-color: black;
    }
    .mid-bar {
        position: relative;
    }
    .bottom-bar {
        position: relative;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
        background-color: var(--app-secondary-color);
    }
    .bottom-bar > * {
        position: relative;
        top: 50%;
    }
    .all-categories{
        left: 0;
    }
    .search-container {
        display: flex;
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
        border-radius: 200px;
        padding: 2px 20px;
        border: 0.5px solid #ccc;
        background-color: white;
    }
    .navbar-item:hover {
        background-color: var(--app-default-color) !important;
    }
    .navbar-item h6 {
        color: white !important;
        margin:0;
    }
    img {
        max-height: 3rem;
    }
    #searchInput {
        border: none;
        box-shadow: none;
        outline:none !important;
        padding-left: 10px;
        min-width: 250px;
    }
    adaptive-ui-icon {
        cursor: pointer;
    }
    adaptive-ui-icon:hover {
        fill: var(--app-secondary-color);
    }
    select {
        border: none !important;
        box-shadow: none !important;
    }
    option {
        cursor: pointer;
    }
    option:first-child {
        color: 0.6;
        cursor: default;
    }
    .button {
        border: none;
        box-shadow: none;
    }
    .avatars {
        display: flex;
        align-items: center;
        padding: 7px 14px;
    }
    .avatar-btn {
        height: fit-content;
    }
    .avatar-btn:first-child {
        margin-right: 15px;
    }
    .avatar-btn:last-child {
        margin-left: 15px;
    }
    .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width:20px;
        height: 20px;
        border-radius: 100%;
        background-color: var(--app-secondary-color);
        right: 0;
        top: 0;
        transform: translateX(50%);
    }
    .badge p {
        margin: 0;
        font-size: 12px;
        color: white
    }
    .button {
        background-color: var(--app-secondary-color) !important;
    }
    .button h6, .navbar-item h6{
        color: white !important;
        margin: 0;
    }
    .dropdown-item > adaptive-ui-icon {
        margin-right: 10px;
    }
    #profile-dropdown-menu {
        left: -620% !important;
    }
    #profile-dropdown-content > .dropdown-item{
        cursor: pointer;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    #profile-dropdown-content > .dropdown-item:hover {
        transform: scale(1.05);
    }
    #profile-dropdown-content > .dropdown-item:active {
        transform: scale(0.95);
    }
    hr {
        margin: 0px !important;
    }
    .auth-container {
        display: flex;
        padding-top: 8px;
    }
    .auth-container p {
        cursor: pointer;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .display-categories-menu {
        display: none;
    }
    .burger {
        width: 30px;
        height: 30px;
    }
    .burger:hover {
        fill: black !important;
    }
    .auth-container p:hover {
        color: var(--app-secondary-color) !important;
    }
    .auth-container p:active {
        transform: scale(0.95);
    }
    .dropdown-item {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .dropdown-item h6{
        margin-left: 15px;
        margin-bottom: 0px;
    }
    .display-categories {
        right: 0;
        display: flex;
        margin-left: 10%;
        width: 100%;
        justify-content: space-evenly;
    }
    .navbar-item {
        display: flex;
        padding: 0 0.75rem;
    }
    @media screen and (max-width: 1023px){
        .top-bar, .display-categories {
            display: none;
        }
        .all-categories {
            left: 100%;
            transform: translateX(-100%);
        }
        .dropdown-menu {
            top: 150% !important;
        }
        .all-categories .dropdown-menu {
            right: 0 !important;
            left: initial;
        } 
        .mid-bar {
            margin-bottom: 4rem;
            margin-top: 5px; 
            padding: 0 20px;
        }
        .search-container {
            transform: translate(50%);
            bottom: -3.5rem;
            top: auto;
            height: fit-content;
        }
        .display-categories-menu {
            display: block;
            right: 100%;
            transform: translateX(100%);
        }
        #searchInput {
            min-width: 150px !important;
        }
    }
`,q=class extends H{static get properties(){return{loader:Object}}firstUpdated(n){super.firstUpdated(n)}dscDataName(){return this.e.defaultValue}init(n,t){super.init(n,t),this.loader=this.loadData()}};class x extends q{static get styles(){return[T,y`
				:host{
					display: block;
				}
			`]}static get properties(){return{categories:Array,categoriesToShow:Array,pages:Array}}constructor(){super(),this.categories=[],this.pages=[]}firstUpdated(){document.addEventListener("click",t=>this.closeProfileDropdownOnOutsideClick(t)),this.pages=this.interface.pageGroups.map(t=>t.pages.map(e=>e.title)),this.loader.then(()=>{this.categories=[...this.rows.map(t=>Object.fromEntries(t.map((e,r)=>[this.cols[r].label,e])))]})}redirectPage(){window.location.href="/"}onSearchInputHandler(t){const e=this.qs("select").value;this.updateParams(e,t)}onAuthTextClickHandler(t){const e=this.interface.pageGroups.find(a=>a.pages.find(i=>i.title===t)),r=this.interface.pageGroups.findIndex(a=>a.toString()===e.toString());let s=e.pages.findIndex(a=>a.title===t);window.location.hash=`#/${r}/${s}`,location.reload()}isAuthPageAvailable(t){return!!this.interface.pageGroups.find(e=>e.pages.find(r=>r.title===t))}closeProfileDropdownOnOutsideClick(t){if(this.e.details.login){const e=this.shadowRoot.querySelector("#profile-dropdown"),r=t.composedPath().find(a=>a.id==="profile-dropdown"),s=Object.values(e.classList).find(a=>a==="is-active");r===void 0&&s==="is-active"&&e.classList.remove("is-active")}}onProfileIconClickHandler(){this.shadowRoot.querySelector("#profile-dropdown").classList.toggle("is-active")}logout(t){t.preventDefault(),window.location="/logout/"}static get is(){return"navbar-7"}render(){return d`
	    	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
			<div class="navbar">
				<div class="content">
					<div class="top-bar">
						<div class="auth-container">
							<p id="signIn" style="display: ${this.isAuthPageAvailable("Register or Login")?"block":"none"}" @click=${()=>this.onAuthTextClickHandler("Register or Login")}>Register or Login</p>
							<!-- <span id="vr" style="display: ${this.isAuthPageAvailable("Sign Up")&&this.isAuthPageAvailable("Register")?"block":"none"}"></span>
							<p id="register" style="display: ${this.isAuthPageAvailable("Register")?"block":"none"}" @click=${()=>this.onAuthTextClickHandler("Register")}>Register</p> -->
						</div>
					</div>
					<div class="mid-bar">
						<a class="navbar-logo" @click=${()=>this.redirectPage()} href="/" style="width: 200px;">
							${this.e.details.logo!==void 0?d`
									<img class="logo-img" src="${this.e.details.logo}" alt="${this.gateway.name}">
								`:d`
									<img class="logo-img" src="/media/${this.gateway.logo}" alt="${this.gateway.name}">
								`}
						</a>
						<div class="search-container">
							<div class="select is-primary">
								<select>
									<option>Select Category</option>
										${this.categories.map(t=>d`
												<option>${t.label}</option>
											`)}
								</select>
							</div>
							<input id="searchInput" @input=${t=>this.onSearchInputHandler(t.target.value)} />
						</div>
						<div class="avatars">
							<div class="avatar-btn">
								<wishlist-button></wishlist-button>
							</div>
							${this.e.details.login?d`
									<div class="avatar-btn">
										<div id="profile-dropdown" class="dropdown">
											<div class="dropdown-trigger">
												<adaptive-ui-icon icon="social:person" title="Profile" @click=${()=>this.onProfileIconClickHandler()}></adaptive-ui-icon>
											</div>
											<div class="dropdown-menu" id="profile-dropdown-menu" role="menu">
												<div id="profile-dropdown-content" class="dropdown-content">
													<div class="dropdown-item is-flex" title="My Dashboard">
														<adaptive-ui-icon icon="dashboard"></adaptive-ui-icon>
														<h6>My Dashboard</h6>
													</div>
													<hr class="dropdown-divider">
													<div class="dropdown-item is-flex" title="Log in" @click=${t=>this.logout(t)}>
														<adaptive-ui-icon icon="exit-to-app"></adaptive-ui-icon>
														<h6>Log in</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								`:""}
							<div class="avatar-btn">
								<shopping-cart-btn .viewCartLink = ${this.e.details.view_cart_page} .checkoutPageLink=${this.e.details.checkout_page}></shopping-cart-btn>
							</div>
						</div>
					</div>
					<hr >
					<div class="bottom-bar">
						<div class="all-categories dropdown is-hoverable">
							<div class="dropdown-trigger">
								<button class="button" style="padding: 0">
									<h6>All Categories</h6>
									<span class="icon is-small">
										<adaptive-ui-icon icon="arrow-drop-down"></adaptive-ui-icon>
									</span>
								</button>
							</div>
							<div class="dropdown-menu" id="dropdown-menu4" role="menu">
								<div class="dropdown-content">
									${this.interface.pageGroups.map((t,e)=>d`
											<a class="dropdown-item" href="${window.location.pathname+window.location.search}#/${e}/0/"
												pageGroup="${e}" title=${t.title}
											>
												<adaptive-ui-icon icon="${t.icon}"></adaptive-ui-icon>
												<h6>${t.title}</h6>
											</a>
											<hr>
										`)}
								</div>
							</div>
						</div>
						<div class="display-categories">
							${this.interface.pageGroups.filter(t=>this.e.details.displayCategories.includes(t.title)).map((t,e)=>d`
									<a class="navbar-item button" href="${window.location.pathname+window.location.search}#/${e}/0/"
										pageGroup="${e}"
									>
										<h6>${t.title}</h6>
									</a>
								`)}
						</div>
						<div class="display-categories-menu dropdown is-hoverable">
							<div class="dropdown-trigger">
								<button class="button" style="padding: 0">
									<adaptive-ui-icon class="burger" icon="menu" title="Cart"></adaptive-ui-icon>
								</button>
							</div>
							<div class="dropdown-menu" id="dropdown-menu4" role="menu">
								<div class="dropdown-content">
									${this.interface.pageGroups.filter(t=>this.e.details.displayCategories.includes(t.title)).map((t,e)=>d`
											<a class="dropdown-item" href="${window.location.pathname+window.location.search}#/${e}/0/"
												pageGroup="${e}" title=${t.title}
											>
												<adaptive-ui-icon icon="${t.icon}"></adaptive-ui-icon>
												<h6>${t.title}</h6>
											</a>
											<hr>
										`)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		`}}customElements.define(x.is,x);const z=({element:n,pageGroups:t,currentPageGroupName:e,gatewayData:r})=>{var v;const s=JSON.parse(t),a=I(window.parsed_payload)._response,i=m.useRef(null),$=(v=r._response)==null?void 0:v.logo,[k,g]=m.useState(!1),j=P();m.useEffect(()=>{if(i.current&&n){i.current.e!==n&&(i.current.e=n),i.current&&r&&(i.current.logo=$),i.current.pageGroups!==s&&(i.current.pageGroups=s),i.current._pageGroup!==e&&(i.current._pageGroup=e),i.current.gateway!==a&&(i.current.gateway=a);const l=()=>{g(c=>!c)};return i.current.addEventListener("toggle-drawer",l),()=>{i.current&&i.current.removeEventListener("toggle-drawer",l)}}},[n,s,r,e]);const C=(l,c,p)=>{const u=l.target,h=c,L=p,b=u.getAttribute("data-name");if(e===h){const A=document.querySelector(".navbar").offsetHeight,f=document.querySelector(".main-content");if(f){const w=f.querySelector(`#${b}`);w?(w.scrollIntoView({behavior:"smooth",block:"start"}),window.scrollBy(0,-A)):console.error(`Element with ID ${b} not found.`)}else console.error("Main content element not found.")}else j(`/${h}/${L}`);g(!1)};return o.jsx(o.Fragment,{children:n?o.jsxs(o.Fragment,{children:[o.jsx("navbar-7",{id:"navbar-7",ref:i}),o.jsx(E,{anchor:"left",open:k,onClose:()=>g(!1),children:o.jsx("div",{style:{width:240},children:o.jsx(R,{children:s.map((l,c)=>o.jsx(_.Fragment,{children:l._tabs.map((p,u)=>o.jsx(D,{button:!0,"data-name":p._title.replace(/ /g,"-").toLowerCase(),onClick:h=>C(h,l._title.replace(/ /g,"-").toLowerCase(),p._title.replace(/ /g,"-").toLowerCase()),children:o.jsx(O,{primary:p._title})},u))},c))})})})]}):o.jsx("p",{children:"Loading data..."})})},V=S(z);export{V as default};
