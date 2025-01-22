import {LitElement, html,css, unsafeCSS} from 'lit-element';
import globalStyles from '../../App.css?raw';
import { ifDefined } from 'lit/directives/if-defined.js';
class IframeElement extends LitElement {
    static get properties() {
        return {
            e: { type: Object }, 
            iframeData:Object,
            sandbox:Boolean
        }
    }

    constructor() {
        super();
        this.e = null;
        this.iframeData={};
        this.sandbox=true;
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),

            css`
                iframe {
                    width: 100%;
                    height: 100vh; 
                    border: none;
                }
            `,
        ];
    }

    static get is(){
        return 'iframe-element';
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('e')){
     
        }
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('message',(e)=> this.handleMessage(e));
    }

    disconnectedCallback() {
        window.removeEventListener('message',this.handleMessage());
    }

    handleMessage(e) {
        console.log("iframe has received message",e)
        const data=e?.data;
        if(data){
            if("message" in data){
                const message=data.message;
                const { status } = message;
                // // Check if the data status is "PAID"
                if (status === 'PAID') {
                    this.shadowRoot.querySelector('#iframe').style.display = 'none';   
                }
            }
        }
        
        
    }

    render() {
        return html`
            <iframe id="iframe" src="${this.e.defaultValue}" allowfullscreen  sandbox="${ifDefined(
          this.e.details.sandbox
            ? 'allow-forms allow-top-navigation allow-same-origin allow-scripts allow-popups'
            : undefined
        )}"></iframe>
        `;
    }

}

customElements.define(IframeElement.is, IframeElement);