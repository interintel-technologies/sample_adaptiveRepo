import { css, html, LitElement, unsafeCSS } from "lit-element";
import { IconsDisplayStyles } from "./icons-display-css";
import { icons as communication } from "../../icons/communication";
import { icons as av } from "../../icons/av";
import { icons as editor } from "../../icons/editor";
import { icons as icons } from "../../icons/icons";
import { icons as hardware } from "../../icons/hardware";
import { icons as device } from "../../icons/device";
import { icons as image } from "../../icons/image";
import { icons as maps } from "../../icons/maps";
import { icons as notification } from "../../icons/notification";
import { icons as places } from "../../icons/places";
import { icons as products } from "../../icons/products";
import { icons as social } from "../../icons/social";
import globalStyles from '../../App.css?raw';

class iconsDisplay extends LitElement{
    constructor(){
        super();
        this.searchValue = '';
        this.filteredIcons = [];
        this.isSearching = false;
        this.cartegories = [
            {id: 'av', label: 'av', active: true, content: av},
            {id: 'communication', label: 'communication', active: false, content: communication},
            {id: 'editor', label: 'editor', active: false, content: editor},
            {id: 'icons', label: 'icons', active: false, content: icons},
            {id: 'hardware', label: 'hardware', active: false, content: hardware},
            {id: 'device', label: 'device', active: false, content: device},
            {id: 'image', label: 'image', active: false, content: image},
            {id: 'maps', label: 'maps', active: false, content: maps},
            {id: 'notification', label: 'notification', active: false, content: notification},
            {id: 'places', label: 'places', active: false, content: places},
            {id: 'products', label: 'products', active: false, content: products},
            {id: 'social', label: 'social', active: false, content: social},
        ]
        this.currentTab = "av";
        this.defaultIcons = av;
    }

    static get styles(){
        return[
            unsafeCSS(globalStyles),
            IconsDisplayStyles,
            css`
                :host {
                    display: block;
                }
            `
        ]
    }

    static get properties(){
        return {
            searchValue: String,
            filteredIcons: Array,
            isSearching: Boolean,
            cartegories: Array,
            defaultIcons: Object,
            currentTab: String 
        }
    }

    static get is() {
        return "icons-display";
    }

    handleSearch(){
        if (!this.searchValue.trim()) {
            return;
        }
        this.isSearching = true;
        const searchRegex = new RegExp(`^${this.searchValue}`, "i");
        this.filteredIcons = Object.entries(this.defaultIcons)
        .filter(([name, icon]) => name.match(searchRegex))
        .map(([name, icon]) => ({ name, icon }));
    }

    cartegoryClick(e){
        let currentTab = e.currentTarget.getAttribute('data-tab');

        this.cartegories = this.cartegories.map((cartegorie) => {
            if (cartegorie.id === currentTab) {
                return { ...cartegorie, active: true };
            } else {
                return { ...cartegorie, active: false };
            }
        });

        this.isSearching = false;
        this.currentTab = currentTab;
        this.defaultIcons = {...this.cartegories.find(tab => tab.id == currentTab).content};
    }

    handleCopy(iconName){
        navigator.clipboard.writeText(`<adaptive-ui-icon icon="${this.currentTab}:${iconName}"></adaptive-ui-icon>`).then(() => {
            console.log('icon html copied to clipboard');
        }, () => console.log('failed to copy HTML'))
    }

    render(){
        return html`
            <div class="content">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-header-title">Icon search</h4>
                    </div>
                    <div class="container">
                        <div class="columns" style="margin: 0">
                            <div class="column is-one-fifth">
                                <nav id="docsNav" class="bd-categories-filter">
                                    <nav id="cartegories" class="bd-cartegories">
                                    <div id="search" class="control has-icons-left has-icons-right mobile-search">
                                        <span class="icon is-small is-left">
                                            <i class="fa-solid fa-arrow-left"></i>
                                        </span>
                                        <input class="input" type="text" placeholder="Search icons" @input=${e => (this.searchValue = e.target.value)} @keyup=${this.handleSearch}>
                                        <span class="icon is-small is-right">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </span>
                                    </div>
                                    <!-- <p class="bd-cartegroy-group">Cartegories</p> -->
                                    <div class="bd-category">
                                        <ul class="bd-category-list">
                                            ${this.cartegories.map((cartegorie) => html`
                                            <li>
                                                <a href="/" data-name="Start" @click=${(e) => this.cartegoryClick(e)} data-tab=${cartegorie.id} class=${cartegorie.active ? 'active link-active' : ''}>
                                                    <span class="bd-name">${cartegorie.label}</span>                                                
                                                </a>
                                            </li>
                                            `)}
                                        </ul>
                                    </div>
                                    </nav>
                                </nav>
                            </div>
                                <div class="container pt-6 pb-6">
                                    ${this.cartegories.map(tab => html`
                                        <div id=${tab.id} class='${tab.active ? 'active' : ''} icon-tabs'>
                                            <div class="columns is-multiline is-desktop">
                                                ${this.isSearching 
                                                    ? this.filteredIcons.map(({name, icon}) => html`
                                                    <div class="column is-one-fifth">
                                                        <a href="#" @click=${() => this.handleCopy(name)}>
                                                            <div class="card pt-5 has-text-centered">
                                                                <div class="card-image">
                                                                    <span class="icon has-text-link">
                                                                        <adaptive-ui-icon icon=${`${this.currentTab}:${name}`} title=${name} @click=${() => this.handleCopy(name)}></adaptive-ui-icon>
                                                                    </span>
                                                                </div>
                                                                <div class="card-content">
                                                                    <div class="content">
                                                                        <p class="icon-cont">${name}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    `) : Object.entries(this.defaultIcons).map(([name, icon]) => html`
                                                    <div class="column is-one-fifth">
                                                        <a href="#" @click=${() => this.handleCopy(name)}>
                                                            <div class="card pt-5 has-text-centered">
                                                                <div class="card-image">
                                                                    <span class="icon has-text-link">
                                                                        <adaptive-ui-icon icon=${`${this.currentTab}:${name}`} title=${name} @click=${() => this.handleCopy(name)}></adaptive-ui-icon>
                                                                    </span>
                                                                </div>
                                                                <div class="card-content">
                                                                    <div class="content">
                                                                        <p class="icon-cont">${name}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                `)}
                                            </div>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        </div>
                        <!-- <div class="head">
                        </div> -->
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define(iconsDisplay.is, iconsDisplay);
