import {Command} from './command.js';

export class GetGatewayDetails extends Command {
  constructor(getGatewayDetailsResponse, config) {
    super(getGatewayDetailsResponse, config);

  }

  get profile() {return this.getProfile();}

  get authenticated() {
    return 'profile' in this.commandResponse;
  }

  getProfile() {
    if (this.authenticated) {
      var profile = this.commandResponse['profile'];

      return {
        'firstName': profile['first_name'],
        'lastName': profile['last_name'],
        'accessLevel': profile['access_level'],
        'role': profile['role'],
        'photo': profile['profile_photo'],
      };
    }

    return null;
  }


  get name() {
    return this.commandResponse['name'];
  }

  get defaultColor() {
    return this.commandResponse['default_color'];
  }
  get primaryColor() {
    return this.commandResponse['primary_color'];
  }
  get secondaryColor() {
    return this.commandResponse['secondary_color'];
  }
  get accentColor() {
    return this.commandResponse['accent_color'];
  }
  get titleTextColor() {
    return this.commandResponse['title_text_color'];
  }
  get textColor() {
    return this.commandResponse['text_color'];
  }
  get backgroundColor() {
    return this.commandResponse['background_color'];
  }
  get fontFamily() {
    return this.commandResponse['font_family'];
  }

  get tagLine() {
    return this.commandResponse['tagline'];
  }

  get backgroundImage() {
    return this.commandResponse['background_image'];
  }

  /**
   * Get Gateway or Institution Icon Image
   * @return {*}
   */
  get iconImage() {
    return this.commandResponse['icon_image'];
  }

  get logo() {
    return this.commandResponse['logo'];
  }

  get googleAnalyticsCode(){
    return this.commandResponse['google_analytics_code'];

  }
  get mainFont(){
    return this.commandResponse['main_font'];

  }
  get backUpFont(){
    return this.commandResponse['back_up_font'];

  }
}
