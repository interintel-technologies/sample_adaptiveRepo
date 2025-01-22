import { utilsMixin } from './../../core/mixins/utils-mixin';
import { BaseElement } from './../../core/base-element';

export const LoginGoogleBase = class extends utilsMixin(BaseElement) {

  static get is() {return 'login-google';}
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

  initializeGoogle(element) {
    const script = document.createElement( 'script' );
    script.src= "https://apis.google.com/js/api.js";
    script.async = true; 
    script.defer = true;
    document.head.appendChild(script);
    script.onload = ()=>this.setupGoogleAuthentication(element)
  }

  setupGoogleAuthentication(element) {
    const clientId = this.e.defaultValue;

    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: clientId,
        cookiepolicy: 'single_host_origin',
      }).attachClickHandler(element, {}, googleUser => {
        const profile = this.mapGoogleProfile(googleUser);
        this.pl._dialog(this.e.service, {google:profile});
        }, error => {
          console.error(JSON.stringify(error, undefined, 2));
        }
      );
    });
  }

  mapGoogleProfile(googleUser) {
    const profile = googleUser.getBasicProfile();
    return {
      id:profile.getId(),
      fullName:profile.getName(),
      firstName:profile.getGivenName(),
      lastName:profile.getFamilyName(),
      imageUrl:profile.getImageUrl(),
      email:profile.getEmail(),
      accessToken:googleUser.getAuthResponse().id_token
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.title = this.e.name === "" ? "Login Google" : this.e.name;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.name = pElement.name;
  }

  getName() {
    return this.e.formName;
  }
};
