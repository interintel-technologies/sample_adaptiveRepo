import{i as r,h as a,r as i,g as l,k as d,a as s,j as n}from"./index-C2PWchud.js";const c=r`
    .button {
        width: 100%;
    }
    .icon {
        margin-left: 0.5em !important;
    }
`;class u extends a{static get styles(){return[i(l),c,r`
                :host {
                    display: block;
                }
            `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}onDownloadBtnClickHandler(){if(!this.e||!this.e.details){console.error("Download URL is missing.");return}const t=document.createElement("a"),e=this.e.details.downloadUrl;t.href=e,t.download=e.split("/").pop(),document.body.appendChild(t),t.click(),document.body.removeChild(t)}render(){return d`
            <div class="content">
                <button class="button is-primary" @click=${this.onDownloadBtnClickHandler}>
                ${this.e.name}
                    <adaptive-ui-icon icon="icon:mdDownload" />
                </button>
            </div>
        `}}customElements.define("download-button",u);const m=({element:o})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&o&&(t.current.e=o)},[o]),n.jsx(n.Fragment,{children:o?n.jsx("download-button",{ref:t}):n.jsx("p",{children:"Loading data..."})})};export{m as default};
