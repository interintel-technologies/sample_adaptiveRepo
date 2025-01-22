
import { html, css,unsafeCSS, LitElement } from 'lit-element';
import '../select-element/select-element.js';
import { SettingsElementStyles } from './settings-element-css';
import globalStyles from '../../App.css?raw'
class SettingsElement extends LitElement{
    static get styles () {
        return [unsafeCSS(globalStyles),SettingsElementStyles];
    }

    static get properties(){
        return{
            activeTab: Number,
            isNotificationsEnabled: Boolean,
            notificationMessage: String,
            settings: Object,
            isVisible: Boolean,
            backgrounds: Array,
            colors: Array,
            fonts: Array
        }
    }
    
    constructor(){
        super();

        this.settings = {
            appearance: {}
        };
        this.activeTab = 0;
        this.isNotificationsEnabled = false;
        this.isEmailEnabled = false;
        this.notificationMessage = '';
        this.isVisible = false;
        this.backgrounds = ["light", "dark", "black"];
        this.colors = ["#23d160", "#9747ff", "#Fd6B6B", "#FF7a00", "#FFD400", "#1D9BF0"];
        this.fonts = ["Montserrat", "Lato", "Roboto", "Inter", "Poppins"];
    }

    updated(changedProperties) {
        // all local storage logic is handled here
        super.updated(changedProperties);

        changedProperties.forEach((oldValue, propName) => {
            if(propName === "settings") {
                if(oldValue === undefined) {
                    const retrievedSettings = localStorage.getItem('settings')
                    if(retrievedSettings) {
                        this.settings = {...JSON.parse(retrievedSettings)};
                        this.applyTheme(this.settings.appearance);
                    }
                    else {
                        localStorage.setItem('settings', JSON.stringify({
                            appearance: {
                                background: "light",
                                color: null,
                                font: "Montserrat"
                            }
                        }));
                        this.applyDefaultAppearance();
                    }
                }
                else if(oldValue !== this.settings) {
                    localStorage.setItem('settings', JSON.stringify(this.settings));
                }
            }
        });
    };

    toggleNotifications(){
        if (!this.isNotificationsEnabled){
            Notification.requestPermission().then(permission => {
                if(permission === 'granted'){
                    this.isNotificationsEnabled = true;
                    const notification = new Notification('Notification enabled!')
                    this.notificationMessage = notification.title;
                } else {
                    this.isNotificationsEnabled = false;
                }
            });
        }else {
            this.isNotificationsEnabled = false;
            this.notificationMessage = 'Notifications Disabled!';
        }
    }

    toggleEmail(){
        if(!this.isEmailEnabled){
            this.isEmailEnabled = true;
            console.log('emails enabled')
        } else {
            this.isEmailEnabled = false;
            console.log('email disabled')
        }
    }

    closeModal() {
        this.isVisible = false;
        this.dispatchEvent(new CustomEvent('on-settings-closed', {
            bubbles: true,
            composed: true,
            detail: ""
        }));
    }
    
    closeNotification(){
        this.shadowRoot.querySelector('.notification').classList.add('is-hidden');

    }

    static get is(){
        return "settings-element"
    }

    render(){
        return html`
            <div class="modal content ${this.isVisible ? "is-active" : ""}" id="settings-modal">
                <div class="modal-background"></div>
                ${
                    this.notificationMessage ? html`
                        <div class="notification ${this.isNotificationsEnabled ? 'is-success': 'is-danger'}">
                            <button class="delete" @click=${() => this.closeNotification()}></button>
                            <div class="content">
                                <p>${this.notificationMessage}</p>
                            </div>
                        </div>
                    ` : ''
                }
                <div class="modal-card">
                    <header class="modal-card-header mt-3 pb-0">
                        <div class="is-flex mb-5">
                            <h1>Settings</h1>
                            <button class="delete" aria-label="close" @click=${() => this.closeModal()}></button>
                        </div>
                        <div class="tabs">
                            <ul class="ml-0">
                                <li class="${this.activeTab===0 ? 'is-active has-text-weight-bold' : 'has-text-weight-bold'}"><a @click=${() => this.activeTab = 0}>Appearance</a></li>
                                <li class="${this.activeTab===1 ? 'is-active has-text-weight-bold' : 'has-text-weight-bold'}"><a @click=${() => this.activeTab = 1}>Notification</a></li>
                            </ul>
                        </div>
                    </header>
                    <section class="modal-card-body prefference-modal">
                        ${
                            this.activeTab === 0 ? html`
                                <div class="appearance tab-item" id="appearance">
                                    <div class="theme-section mb-6">
                                        <h4>Background</h4>
                                        <div class="theme-container">
                                            <div class="columns is-mobile px-0">
                                                ${
                                                    this.backgrounds.map(background => html`
                                                        <div class="column">
                                                            <div class="box theme-tile has-text-centered ${background}" @click=${() => this.applyBackground(background)}>
                                                                <span class="icon is-small">
                                                                    <i class="fa-solid fa-sun"></i>
                                                                </span>
                                                                <p>${this.toTitleCase(background)}</p>
                                                                <span class="icon is-small ${this.settings.appearance.background === background ? "is-block" : "is-hidden"}">
                                                                    <i class="fa-solid fa-check"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    `)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pr-default-color mb-6">
                                        <h4>Color</h4>
                                        <div class="columns is-mobile">
                                            ${
                                                this.colors.map(color => html`
                                                    <div class="column">
                                                        <div class="pellet" style="background-color: ${color}" @click=${() => this.applyColor(color)}>
                                                            <span class="icon is-small ${this.settings.appearance.color === color ? "is-block" : "is-hidden"}">
                                                                <i class="fa-solid fa-check"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                `)
                                            }
                                        </div>
                                    </div>
                                    <div class="pr-font-family mb-5">
                                        <h4>Font</h4>
                                        <select-element .name=${""} .value=${this.settings.appearance.font} .options=${this.fonts.map(font => ({value: font, label: font}))} @on-change=${e => this.applyFont(e.detail.target.value)}></select-element>
                                    </div>
                                </div>
                            ` : ''
                        }
                        ${this.activeTab === 1 ? html`
                                <div class="notification-container content">
                                    <div class="notification-header">
                                        <h1 class="title">Preferences</h1>
                                        <p class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                                    </div>
                                    <div class="noti-content py-5">
                                        <div class="columns is-mobile is-centered content">
                                        <div class="column">
                                            <p class="notification-title">Push notification</p>
                                        </div>
                                        <div class="column">
                                            <div class="field switch-toggle">
                                                <input type="checkbox" class="switch" ?checked=${this.isNotificationsEnabled} @change=${() => this.toggleNotifications()} id="push-switch"/>
                                                <label for="push-switch">toggle</label>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="columns is-mobile is-vcentered">
                                        <div class="column" style="position: relative;">
                                            <p class="notification-title">Email Notification</p>
                                        </div>
                                        <div class="column is-flex">
                                            <div class="field switch-toggle">
                                                <input type="checkbox" class="switch" ?checked=${this.isEmailEnabled} @change=${() => this.toggleEmail()} id="email-switch"/>
                                                <label for="email-switch">toggle</label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''
                        }
                        <div class="extra-btn">
                            <button @click=${() => this.applyDefaultAppearance()} class="button">Reset Default</button>
                        </div>
                    </section>
                </div>
            </div>
        ` 
    }
}

customElements.define(SettingsElement.is, SettingsElement);