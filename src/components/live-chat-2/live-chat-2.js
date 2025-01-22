import {html, css} from 'lit-element';
import {LiveChat2Base} from '../../base/elements/live-chat-2';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LiveChat2 extends LiveChat2Base {

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
    
    };
  }



  constructor() {
    super();

  }


  renderDefault() {
    
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.initLiveChatElement();
  }

  initLiveChatElement(){

    let script = document.createElement( 'script' );
    let srcLink = "//code.tidio.co/gyex9fya8hviylhatfvtca3ci7kphfco.js"

    if(srcLink == ""){
      console.warn("SRC link has not been sent on the element defaultValue. Set a SRC from Tidio to the defaultValue and refresh");
    }else{
      script.src = srcLink;
      script.async = true;
      // console.info("live chat src link >>",srcLink);

      const first_script_tag = document.getElementsByTagName("script")[0];
      if (!first_script_tag || !first_script_tag.parentNode) {throw new Error('DOM is unavailable')}

      first_script_tag.parentNode.insertBefore(script, first_script_tag);
      
    }

  }


  disconnectedCallback() {
    super.disconnectedCallback()
  
  }

  
}

customElements.define(LiveChat2.is, LiveChat2);
