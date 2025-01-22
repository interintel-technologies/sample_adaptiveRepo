import {SerializableElement} from '../../core/serializable-element';


export const RegisterFacebookBase = class extends SerializableElement {
  static get is() {return 'register-facebook';}
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

  facebookRegister() {
    window.FB.login(response =>{
      if (response.status === 'connected'){
        this.value = response;
        this.pl.submitForm();
      }
    });
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.name = pElement.name;
  }

  getName() {
    return this.e.formName;
  }

  getValue() {
    return this.value;
  }

  validate() {
    return new this.Validation(true, 'valid');
  }


  invalid(validation) {
    // will never happen
  }


  valid(validation) {

  }
};