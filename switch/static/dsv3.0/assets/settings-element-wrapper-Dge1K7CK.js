import{i as d,h as c,r as p,g as m,k as e,a as n,j as a}from"./index-C2PWchud.js";import"./select-element-GuC7mP6J.js";import"./InputMixin-CGm-oGk-.js";const b=d`
    .dark{
        background-color: #15202b;
        color: #ebebeb;
    }
    .black{
        background-color: #000000;
        color: #ebebeb;
    }
    .light{
        color: #000000;
    }
    .modal{
        font-family: var(--font-family), sans-serif;
    }
    .modal .modal-card-header .delete{
        position: absolute;
        right: 35px;
        top: 71px;
    }
    .modal .modal-top{
        position: fixed;
    }
    .tabs ul ,
    .tabs a{
        border-bottom: 1px solid var(--card-background-color);
    }
    .modal .navbar-item:hover{
        border-bottom: 3px solid var(--primary)
    }
    .modal .navbar-item:active{
        border-bottom: 3px solid var(--primary)
    }
    .modal-card-body, .modal-card-header{
        background-color: var(--body-background-color)
    }
    .modal .pr-default-color .column, 
    .modal .theme-section .column{
        flex-grow: 0;
    }

    .modal .theme-section .column .box{
        width: 130px;
        cursor: pointer;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;
    }
    .modal .theme-section .theme-tile{
        padding-top: 33px;
        padding-bottom: 33px;
    }
    .modal .theme-container{
        padding: 20px;
        border-radius: 6px;
        background-color: var(--card-background-color);
        overflow-x: auto;
    }
    .icon {
        margin-bottom: 9px;
    }
    .switch-toggle{
        display: flex;
    }
    .modal .pellet{
        border-radius: 50%;
        /* background-color: var(--primary); */
        width: 30px;
        height: 30px;
        cursor: pointer;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
    }   
    .extra-btn .button{
        background-color: var(--link);
    }
    .prefference-modal, .modal-card-header{
        padding: 60px;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        padding: 20px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--link);
        border-radius: 10px;
    }

    .slider {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
        width: 393px;
        max-width: 100%;
        margin: 1.25rem 0;
        }
    [data-slider="input"] {
        display: block;
        z-index: 1;
        box-sizing: inherit;
        width: 100%;
        height: 1rem;
        margin: 0px;
        padding: 0px;
        opacity: 0;
        appearance: none;
        cursor: pointer;
        }
    [data-slider="track"] {
        position: absolute;
        top: 0.375rem;
        bottom: 0.375rem;
        left: 0px;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 0.25rem;
        background-color: rgba(0, 0, 0, 0.06);
        border-radius: 0.125rem;
        overflow: hidden;
        pointer-events: none;
        }
    [data-slider="buffer"], [data-slider="runnable"] {
        position: absolute;
        display: inline-flex;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        transform-origin: left center;
        }
    [data-slider="buffer"] {
        background-color: rgba(41, 121, 255, 0.3);
        }
    [data-slider="runnable"] {
        background-color: #2979FF;
        }
    [data-slider="marker"] {
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 0.875rem;
        height: 100%;
        pointer-events: none;
        }
    [data-slider="thumb"] {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 0.875rem;
        height: 0.875rem;
        background-color: var(--link);
        border-radius: 50%;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        }
    [data-slider="thumb"]::before {
        position: absolute;
        z-index: -1;
        width: 1.96875rem;
        height: 1.96875rem;
        content: "";
        background-color: rgba(41, 121, 255, 0.2);
        border-radius: inherit;
        pointer-events: none;
        opacity: 0;
        transform-origin: center;
        transform: scale(0.25);
        transition: opacity 90ms linear 0ms, transform 0ms ease-in 90ms;
        }
    .slider:focus-within [data-slider="thumb"]::before {
        opacity: 1;
        transform: scale(1);
        transition-delay: 0ms, 0ms;
        transition-duration: 120ms, 180ms;
        }
    [data-slider="value"] {
        position: absolute;
        bottom: 100%;
        left: 50%;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        margin-bottom: 0.675rem;
        padding: 0 0.5rem;
        width: auto;
        min-width: 2.5rem;
        height: 1.5rem;
        color: rgba(255, 255, 255, 0.84);
        font-size: 0.625rem;
        font-weight: 400;
        letter-spacing: 0.0575em;
        background-color: rgba(101, 101, 101, 0.78);
        border-radius: 0.25rem;
        pointer-events: none;
        opacity: 0;
        transform-origin: left bottom;
        transform: scale(0.75) translateX(-50%);
        transition: opacity 60ms ease-in 0ms, transform 0ms ease-in 60ms;
        }
    .slider:hover [data-slider="value"] {
            opacity: 1;
            transition-delay: 0ms, 0ms;
            transition-duration: 120ms, 120ms;
            transform: scale(1) translateX(-50%);
        }
    
    .modal .dropdown .dropdown-trigger button,
    .modal .num-input{
        width: 393px;
        justify-content: start;
    }
    .modal .pr-down{
        position: absolute;
        right: 30px;
    }
    .modal .dropdown-menu{
        width: 393px;
    }
    /* .modal .box{
        color: #000000;
    } */
    .modal .notification-header h1{
        font-size: 20px;
    }

    .modal .notification-header p{
        font-size: 16px;
    }

    .modal input[type="checkbox"]{
        height: 0;
        width: 0;
        visibility: hidden;
    }
    .modal label{
        cursor: pointer;
        text-indent: -9999px;
        width: 64px;
        height: 34px;
        background-color: var(--card-background-color);
        display: block;
        border-radius: 100px;
        position: relative;
    }
    .modal label:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 25px;
        height: 25px;
        background-color: #d9d9d9;
        border-radius: 90px;
        transition: .3s;
    }
    .modal input:checked + label {
        background: var(--link);
    }
    .modal input:checked + label:after{
        left: calc(100% - 5px);
        transform: translateX(-100%)
    }
    .modal label:active:after {
        width: 64px;
    }
    .noti-content p{
        color: var(--grey-darker)
    }
`;class l extends c{static get styles(){return[p(m),b]}static get properties(){return{activeTab:Number,isNotificationsEnabled:Boolean,notificationMessage:String,settings:Object,isVisible:Boolean,backgrounds:Array,colors:Array,fonts:Array}}constructor(){super(),this.settings={appearance:{}},this.activeTab=0,this.isNotificationsEnabled=!1,this.isEmailEnabled=!1,this.notificationMessage="",this.isVisible=!1,this.backgrounds=["light","dark","black"],this.colors=["#23d160","#9747ff","#Fd6B6B","#FF7a00","#FFD400","#1D9BF0"],this.fonts=["Montserrat","Lato","Roboto","Inter","Poppins"]}updated(i){super.updated(i),i.forEach((t,r)=>{if(r==="settings")if(t===void 0){const o=localStorage.getItem("settings");o?(this.settings={...JSON.parse(o)},this.applyTheme(this.settings.appearance)):(localStorage.setItem("settings",JSON.stringify({appearance:{background:"light",color:null,font:"Montserrat"}})),this.applyDefaultAppearance())}else t!==this.settings&&localStorage.setItem("settings",JSON.stringify(this.settings))})}toggleNotifications(){this.isNotificationsEnabled?(this.isNotificationsEnabled=!1,this.notificationMessage="Notifications Disabled!"):Notification.requestPermission().then(i=>{if(i==="granted"){this.isNotificationsEnabled=!0;const t=new Notification("Notification enabled!");this.notificationMessage=t.title}else this.isNotificationsEnabled=!1})}toggleEmail(){this.isEmailEnabled?(this.isEmailEnabled=!1,console.log("email disabled")):(this.isEmailEnabled=!0,console.log("emails enabled"))}closeModal(){this.isVisible=!1,this.dispatchEvent(new CustomEvent("on-settings-closed",{bubbles:!0,composed:!0,detail:""}))}closeNotification(){this.shadowRoot.querySelector(".notification").classList.add("is-hidden")}static get is(){return"settings-element"}render(){return e`
            <div class="modal content ${this.isVisible?"is-active":""}" id="settings-modal">
                <div class="modal-background"></div>
                ${this.notificationMessage?e`
                        <div class="notification ${this.isNotificationsEnabled?"is-success":"is-danger"}">
                            <button class="delete" @click=${()=>this.closeNotification()}></button>
                            <div class="content">
                                <p>${this.notificationMessage}</p>
                            </div>
                        </div>
                    `:""}
                <div class="modal-card">
                    <header class="modal-card-header mt-3 pb-0">
                        <div class="is-flex mb-5">
                            <h1>Settings</h1>
                            <button class="delete" aria-label="close" @click=${()=>this.closeModal()}></button>
                        </div>
                        <div class="tabs">
                            <ul class="ml-0">
                                <li class="${this.activeTab===0?"is-active has-text-weight-bold":"has-text-weight-bold"}"><a @click=${()=>this.activeTab=0}>Appearance</a></li>
                                <li class="${this.activeTab===1?"is-active has-text-weight-bold":"has-text-weight-bold"}"><a @click=${()=>this.activeTab=1}>Notification</a></li>
                            </ul>
                        </div>
                    </header>
                    <section class="modal-card-body prefference-modal">
                        ${this.activeTab===0?e`
                                <div class="appearance tab-item" id="appearance">
                                    <div class="theme-section mb-6">
                                        <h4>Background</h4>
                                        <div class="theme-container">
                                            <div class="columns is-mobile px-0">
                                                ${this.backgrounds.map(i=>e`
                                                        <div class="column">
                                                            <div class="box theme-tile has-text-centered ${i}" @click=${()=>this.applyBackground(i)}>
                                                                <span class="icon is-small">
                                                                    <i class="fa-solid fa-sun"></i>
                                                                </span>
                                                                <p>${this.toTitleCase(i)}</p>
                                                                <span class="icon is-small ${this.settings.appearance.background===i?"is-block":"is-hidden"}">
                                                                    <i class="fa-solid fa-check"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    `)}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pr-default-color mb-6">
                                        <h4>Color</h4>
                                        <div class="columns is-mobile">
                                            ${this.colors.map(i=>e`
                                                    <div class="column">
                                                        <div class="pellet" style="background-color: ${i}" @click=${()=>this.applyColor(i)}>
                                                            <span class="icon is-small ${this.settings.appearance.color===i?"is-block":"is-hidden"}">
                                                                <i class="fa-solid fa-check"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                `)}
                                        </div>
                                    </div>
                                    <div class="pr-font-family mb-5">
                                        <h4>Font</h4>
                                        <select-element .name=${""} .value=${this.settings.appearance.font} .options=${this.fonts.map(i=>({value:i,label:i}))} @on-change=${i=>this.applyFont(i.detail.target.value)}></select-element>
                                    </div>
                                </div>
                            `:""}
                        ${this.activeTab===1?e`
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
                                                <input type="checkbox" class="switch" ?checked=${this.isNotificationsEnabled} @change=${()=>this.toggleNotifications()} id="push-switch"/>
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
                                                <input type="checkbox" class="switch" ?checked=${this.isEmailEnabled} @change=${()=>this.toggleEmail()} id="email-switch"/>
                                                <label for="email-switch">toggle</label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            `:""}
                        <div class="extra-btn">
                            <button @click=${()=>this.applyDefaultAppearance()} class="button">Reset Default</button>
                        </div>
                    </section>
                </div>
            </div>
        `}}customElements.define(l.is,l);const u=({element:s})=>{const i=n.useRef(null);return n.useEffect(()=>{const t=i.current;t&&s&&(t.e=s)},[s]),a.jsx("div",{children:s?a.jsx("settings-element",{id:"settings-element",ref:i}):a.jsx("p",{children:"Loading data..."})})};export{u as default};