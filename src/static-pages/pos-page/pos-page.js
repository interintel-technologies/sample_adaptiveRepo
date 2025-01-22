
import {LitElement, html,css} from 'lit-element';
import { POSPageStyles } from './pos-page-styles';
import { POSPageMixin } from './POSPageMixin';
import { PopUp } from '../../themes/dsv2.0/components/popups/PopUp.js';
import { ThemeMixin } from '../../themes/dsv2.0/components/mixins/ThemeMixin.js';

class POSPage extends POSPageMixin(ThemeMixin(LitElement)) {
    static get styles() {
        return [
            super.styles,
            POSPageStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    constructor() {
        super();

        import("./elements/navbar-5/navbar-5.js");
        import("./elements/products-grid/products-grid.js");
        window.isPOS = true;
        window.NO_NETWORKING = true;
    }

    firstUpdated() {
        this.viewSidePanel("cart-panel");
        const page = this.shadowRoot.querySelector(".page");
        new ResizeObserver(() => this.calculateBodyHeight()).observe(page);
        this.applyTheme({
            font: "Inter",
            theme: "light",
            colors: {
                primary: "#1f438b",
                link: "#1f438b",
                info: "#1f438b"
            }
        });
    }

    connectedCallback() {
        super.connectedCallback();
    
        PopUp.addEventListeners();    
        window.addEventListener("view-side-panel", e => this.showSidePanel(e));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    
        PopUp.removeEventListeners();
        window.removeEventListener("view-side-panel", e => this.showSidePanel(e));
    }

    showSidePanel(event) {
        const sidePanel = event.detail.sidePanel;
        const data = event.detail.data;
        const sidePanelDiv = this.shadowRoot.querySelector(".side-panel");
        sidePanelDiv.innerHTML = '';
        import(`../pos-page/side-panels/${sidePanel}/${sidePanel}.js`).then(() => {
            const sidePanelComponent = document.createElement(sidePanel);
            sidePanelComponent.setAttribute("data", JSON.stringify(data));
            sidePanelDiv.appendChild(sidePanelComponent);
        });
    }

    actionActive(){
        const mainPanel=this.qs('.main-panel');
        const sidePanel=this.qs('.side-panel');
        mainPanel.classList.toggle('is-hidden');
        sidePanel.classList.toggle('is-active');
    }

    calculateBodyHeight() {
        const navbarHeight = this.shadowRoot.querySelector("navbar-5").offsetHeight;
        this.shadowRoot.querySelector(".body").setAttribute("style", `height: calc(100vh - ${navbarHeight}px)`);
    }

    static get is() {
        return "pos-page"
    }

    render() {
        return html`
            <div class="page content">
                <navbar-5></navbar-5>
                <div class="body is-flex">
                    <div class="main-panel pb-6">
                        <products-grid></products-grid>
                    </div>
                    <div class="side-panel is-fixed pb-6">
                        <cart-panel ></cart-panel>
                    </div>
                </div>
                <div class="action-btn" @click="${this.actionActive}">
                    <span class="icon">                           
                        <i class="fa-solid fa-cart-shopping"></i>            
                    </span>
                </div>
            </div>
        `;
    }
}

customElements.define(POSPage.is, POSPage);