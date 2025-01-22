import { html, css } from 'lit-element';
import { Navbar7Styles } from './navbar-7-css';
import { Navbar7Base } from '../../base/elements/navbar-7';
import "../shopping-cart-btn/shopping-cart-btn";
import "../wishlist-button/wishlist-button";

class Navbar7 extends Navbar7Base {

	static get styles() {
		return [
			Navbar7Styles,
			css`
				:host{
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			categories: Array,
			categoriesToShow: Array,
			pages: Array
		};
	}
	
	constructor() {
		super();

		this.categories = [];
		this.pages = [];
	}

	firstUpdated() {
		//close profile dropdown when clicked outside
		document.addEventListener("click",e => this.closeProfileDropdownOnOutsideClick(e));

		this.pages = this.interface.pageGroups.map(pageGroup => pageGroup.pages.map(page => page.title));
		this.loader.then(() => {
			this.categories = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
		});
	}

	redirectPage(){
		window.location.href = "/";
	}

	onSearchInputHandler(searchText) {
		const category = this.qs("select").value;
		this.updateParams(category, searchText);
	};

	onAuthTextClickHandler(title) {
		const pageGroup = this.interface.pageGroups.find(pageGroup => pageGroup.pages.find(page => page.title === title));
		const pageGroupIndex = this.interface.pageGroups.findIndex(pgeGroup => pgeGroup.toString() === pageGroup.toString());
		
		let pageIndex = pageGroup.pages.findIndex(page => page.title === title);

		window.location.hash=`#/${pageGroupIndex}/${pageIndex}`;
		location.reload();
	}

	isAuthPageAvailable(authTitle) {
		if(this.interface.pageGroups.find(pageGroup => pageGroup.pages.find(page => page.title === authTitle))) {
			return true;
		}

		return false;
	}

	closeProfileDropdownOnOutsideClick(e) {
		if(this.e.details.login) {
			const dropdown = this.shadowRoot.querySelector("#profile-dropdown");
			const foundObject=e.composedPath().find(o=>o.id === "profile-dropdown");
			const foundClass=Object.values(dropdown.classList).find(c=>c === "is-active");

			if(foundObject === undefined && foundClass ==="is-active"){
				dropdown.classList.remove('is-active');
			}
		}
	}

	onProfileIconClickHandler() {
		const dropdown = this.shadowRoot.querySelector("#profile-dropdown");

		dropdown.classList.toggle("is-active");
	}

	logout(evt) { 
		evt.preventDefault();
		window.location = '/logout/';
	}

	static get is() {
		return "navbar-7"
	}

	render() {
		return html`
	    	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
			<div class="navbar">
				<div class="content">
					<div class="top-bar">
						<div class="auth-container">
							<p id="signIn" style="display: ${this.isAuthPageAvailable("Register or Login") ? "block" : "none"}" @click=${()=>this.onAuthTextClickHandler("Register or Login")}>Register or Login</p>
							<!-- <span id="vr" style="display: ${this.isAuthPageAvailable("Sign Up") && this.isAuthPageAvailable("Register") ? "block" : "none"}"></span>
							<p id="register" style="display: ${this.isAuthPageAvailable("Register") ? "block" : "none"}" @click=${()=>this.onAuthTextClickHandler("Register")}>Register</p> -->
						</div>
					</div>
					<div class="mid-bar">
						<a class="navbar-logo" @click=${()=>this.redirectPage()} href="/" style="width: 200px;">
							${
								this.e.details['logo']!== undefined ? html`
									<img class="logo-img" src="${this.e.details['logo']}" alt="${this.gateway.name}">
								` : html`
									<img class="logo-img" src="/media/${this.gateway.logo}" alt="${this.gateway.name}">
								`
							}
						</a>
						<div class="search-container">
							<div class="select is-primary">
								<select>
									<option>Select Category</option>
										${
											this.categories.map(category => html`
												<option>${category.label}</option>
											`)
										}
								</select>
							</div>
							<input id="searchInput" @input=${e => this.onSearchInputHandler(e.target.value)} />
						</div>
						<div class="avatars">
							<div class="avatar-btn">
								<wishlist-button></wishlist-button>
							</div>
							${
								this.e.details.login ? html`
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
													<div class="dropdown-item is-flex" title="Log in" @click=${e=>this.logout(e)}>
														<adaptive-ui-icon icon="exit-to-app"></adaptive-ui-icon>
														<h6>Log in</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								` : ""
							}
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
									${
										this.interface.pageGroups.map((pageGroup, pageGroupIndex) =>html`
											<a class="dropdown-item" href="${window.location.pathname+ window.location.search}#/${pageGroupIndex}/0/"
												pageGroup="${pageGroupIndex}" title=${pageGroup.title}
											>
												<adaptive-ui-icon icon="${pageGroup.icon}"></adaptive-ui-icon>
												<h6>${pageGroup.title}</h6>
											</a>
											<hr>
										`)
									}
								</div>
							</div>
						</div>
						<div class="display-categories">
							${
								this.interface.pageGroups.filter(pageGroup => this.e.details.displayCategories.includes(pageGroup.title)).map((pageGroup, pageGroupIndex) =>html`
									<a class="navbar-item button" href="${window.location.pathname+ window.location.search}#/${pageGroupIndex}/0/"
										pageGroup="${pageGroupIndex}"
									>
										<h6>${pageGroup.title}</h6>
									</a>
								`)
							}
						</div>
						<div class="display-categories-menu dropdown is-hoverable">
							<div class="dropdown-trigger">
								<button class="button" style="padding: 0">
									<adaptive-ui-icon class="burger" icon="menu" title="Cart"></adaptive-ui-icon>
								</button>
							</div>
							<div class="dropdown-menu" id="dropdown-menu4" role="menu">
								<div class="dropdown-content">
									${
										this.interface.pageGroups.filter(pageGroup => this.e.details.displayCategories.includes(pageGroup.title)).map((pageGroup, pageGroupIndex) =>html`
											<a class="dropdown-item" href="${window.location.pathname+ window.location.search}#/${pageGroupIndex}/0/"
												pageGroup="${pageGroupIndex}" title=${pageGroup.title}
											>
												<adaptive-ui-icon icon="${pageGroup.icon}"></adaptive-ui-icon>
												<h6>${pageGroup.title}</h6>
											</a>
											<hr>
										`)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		`;
	}
}

customElements.define(Navbar7.is, Navbar7);
