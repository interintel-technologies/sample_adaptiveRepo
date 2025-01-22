import {SerializableElement} from '../../core/serializable-element';
import { utilsMixin } from '../mixins/utils-mixin';
import { BaseElement } from './../../core/base-element';

export const LoginFacebookBase = class extends utilsMixin(BaseElement) {
  static get is() {return 'login-facebook';}
  constructor() {
    super();
  }
  
  static get properties() {
    return {
      title: String,
      name: String,
      type: String,
      params: {type: Object, value: {}},
    };
  }

  facebookInit() {
    console.log("face book init");
    
    const appId = this.e.defaultValue;
    window.fbAsyncInit = function() {
      FB.init({
        appId      : appId,
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0'
      });
        
      FB.AppEvents.logPageView();   
        
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  facebookLogin() {
    window.FB.login(response =>{
      if (response.status === 'connected'){
        FB.api('/me', data=> {
          
			// 	this.dispatchEvent(new CustomEvent('service-call', { 
      //     detail: { service: this.e.service, facebook:{...data,...response}},
      //     bubbles: true,
      //     composed: false 
      // }));

          this._dialog(this.e.service, {facebook:{...data,...response}});
        })
      }
    });
  }

  getName() {
    return this.e.formName;
  }

  // firstUpdated(changedProperties) {
  //   super.firstUpdated(changedProperties);
  //   this.title = this.e.name === "" ? "Login Facebook" : this.e.name;
  // }

  updated(changedProperties) {
    if (changedProperties.has('e') ) {
      this.title = this.e.name === "" ? "Login Facebook" : this.e.name;
    }
}

  init(pElement, loader) {
    super.init(pElement, loader);
    this.name = pElement.name;
  }
};
