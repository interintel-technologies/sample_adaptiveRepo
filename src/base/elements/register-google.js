import {SerializableElement} from '../../core/serializable-element';


export const RegisterGoogleBase = class extends SerializableElement {
  
  static get is() {return 'register-google';}
  
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

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.name = pElement.name;
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
        this.submitGoogleProfile(profile);
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

  submitGoogleProfile(profile) {
    this.value = profile;

    this.pl.submitForm();
  }

  _submit() {
    this.googleLogin();
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