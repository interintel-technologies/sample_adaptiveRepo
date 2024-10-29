import{i as n,r as l,g as r,k as t,a as s,j as e}from"./index-C2PWchud.js";import{S as d}from"./section-pelement-dsc-WXP1kFbN.js";import"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const p=n`
    .content.is-flex {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: var(--primary);
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .circle:hover {
        background-color: var(--link);
    }
    .circle:active {
        transform: scale(1.05);
    }
    .link-icon {
        fill: white;
        width: 30px;
        height: 30px;
    }
    .modal-background {
        background-color: transparent !important;
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        border: 2.5px solid #ccc;
        border-radius: 7px;
    }
    .link {
        border: 2px solid black;
        border-radius: 7px;
        padding: 7px;
        justify-content: space-between;
        align-items: center;
    }
    .close-icon {
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
    .close-icon:hover {
        fill: var(--link);
    }
    .close-icon:active {
        transform: scale(1.05);
    }
    img {
        width: 60%;
        object-fit: contain;
    }
    .mail-icon {
        width: 60%;
        height: 83%;
    }
    .copy {
        padding: 7px 14px;
        cursor: pointer;
        position: relative;
    }
    .copy > * {
        pointer-events: none;
    }
    .copy-icon {
        color: var(--primary);
    }
    .copy-text {
        color: var(--primary);
    }
    .copy:hover > .copy-text {
        color: var(--link);
    }
    .copy:hover > .copy-icon {
        fill: var(--link);
    }
    .copy:active {
        transform: scale(1.05);
    }
    .tooltip {
        position: absolute;
        top: -10px;
        right: 0;
        opacity: 0;
        transition: opacity 1s;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 12px;
        z-index: 1;
    }
    .show-tooltip {
        opacity: 1;
    }
    a:active {
        transform: scale(1.05);
    }
    .link-text {
        margin: 0;
        overflow: hidden;
    }
`;class c extends d{static get styles(){return[l(r),p]}showModal(){this.shadowRoot.querySelector(".modal").classList.add("is-active")}hideModal(){this.shadowRoot.querySelector(".modal").classList.remove("is-active")}onShareBtnClickHandler(){this.showModal()}createSocialMediaButtons(){return[{label:"Facebook",icon:t`
                    <img alt="Facebook" src="src/themes/dsv1.0/img/isometic/facebook.svg" />
                `,link:"https://www.facebook.com/sharer/sharer.php?u="},{label:"Twitter",icon:t`
                    <img alt="Twitter" src="src/themes/dsv1.0/img/isometic/twitter.svg" />
                `,link:"https://twitter.com/intent/tweet?text="},{label:"Mail",icon:t`
                    <adaptive-ui-icon class="mail-icon" icon="icons:mail"></adaptive-ui-icon>
                `,link:"mailto:?body="}]}copyToClipBoard(){navigator.clipboard.writeText(this.e.details.link);const i=this.shadowRoot.querySelector(".tooltip");i.classList.add("show-tooltip"),setTimeout(()=>i.classList.remove("show-tooltip"),1500)}static get is(){return"share-link"}render(){return t`
            <div class="content">
                <div class="column">
                    <div class="content is-flex">
                        <h4>${this.e.name}</h4>
                        <span class="circle is-flex" @click=${()=>this.onShareBtnClickHandler()}>
                            <adaptive-ui-icon class="link-icon" icon="link"></adaptive-ui-icon>
                        </span>
                        <h5>Share Link</h5>
                    </div>
                </div>
                <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content content">
                        <div class="is-flex" style="justify-content: flex-end;">
                            <adaptive-ui-icon icon="close" title="Close" class="close-icon" @click=${()=>this.hideModal()}></adaptive-ui-icon>
                        </div>
                        <div class="columns is-mobile">
                            ${this.createSocialMediaButtons().map(i=>t`
                                    <div class="column">
                                        <a target="_blank" class="is-flex" href="${i.link}${this.e.details.link}">
                                            ${i.icon}
                                        </a>
                                        <h5>${i.label}</h5>
                                    </div>
                                `)}
                        </div>
                        <div class="is-flex link">
                            <h5 class="link-text">${this.e.details.link}</h5>
                            <span title="Copy Link" class="is-flex copy" @click=${()=>this.copyToClipBoard()}>
                                <adaptive-ui-icon class="copy-icon" icon="content-copy"></adaptive-ui-icon>
                                <h5 class="copy-text" title="Save">Copy</h5>
                                <span class="tooltip">Copied !</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(c.is,c);const x=({element:o})=>{const i=s.useRef(null);return s.useEffect(()=>{const a=i.current;a&&o&&(a.e=o)},[o]),e.jsx("div",{children:o?e.jsx("share-link",{id:"share-link",ref:i}):e.jsx("p",{children:"Loading data..."})})};export{x as default};
