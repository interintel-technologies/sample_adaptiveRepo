import '@polymer/iron-ajax/iron-request';
import { Response,COMMAND_REDIRECT } from '../../../core/parsers/response';

export const httpMixin = (BaseClass) => class extends BaseClass {
  constructor() {
    super();

    const location = window.location;

    this.protocol = location.protocol;
    this.hostname = location.hostname;
    this.port = location.port;
  
  }

  static get properties() {
    return {
      protocol: String,
      hostname: String,
      port: Number,
      // TODO should have params ?
    };
  }

  firstUpdated() {
    super.firstUpdated();
  
  }

  baseUrl() {
    const URL = 'http://switch.lxc:5000/';
    let fullHost = this.protocol + '//' + this.hostname + ':' + this.port;
    if (window.process['env']['NODE_ENV'] === 'development') {
      // use development server
      fullHost = URL.substr(0, URL.length - 1);
  
    }

    return fullHost;
  }

  /**
   * Make an ajax request and optionally parse the response
   * @param service
   * @param params
   * @param parseResponse whether to parse the response, default to true
   * @return {Promise<any>}
   */
  async call(service, params, parseResponse) {
    window.process = {env: {NODE_ENV: 'development'}};
    window.NO_NETWORKING = true;
    const self = this;
    if (parseResponse===undefined)parseResponse = true;

    const headers = {
      'X-CSRFToken': window.csrfToken,
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    };

    return new Promise(function(resolve, reject) {
      if (window.NO_NETWORKING) {
        console.warn('window.NO_NETWORKING=true');
      
        // TODO variable response per service
        const requestResponse = window.TEST_PAYLOAD;
        const response = new Response(requestResponse);
      
        resolve(response);
      } else {
        self.send({
          url: self.baseUrl() + '/GOTO/' + service + '/',
          body: params,
          method: 'POST',
          handleAs: 'json',
          headers: headers,
          withCredentials: true,
        }).then(function(req) {
          const requestResponse = req.response;
          if (parseResponse) {
            // this is the end of life of raw responses
            const response = new Response(requestResponse);
            if (response.containsServiceCommand(COMMAND_REDIRECT)) {
              const redirect = response.parse(COMMAND_REDIRECT, false);
              const redirectTo = redirect.url;

              var l = document.createElement('a');
              l.href = redirectTo;
              if (l.pathname === window.location.pathname && l.search === window.location.search) {
                // update hash
                window.location.hash = l.hash;
                window.location.reload();
              } else {
                window.location.href = redirectTo;
              }
              // TODO Should resolve ? the window is reloading
            }
            resolve(response);
          } else {
            resolve(requestResponse);
          }
        }).catch(function(rejected) {
          // TODO handle network errors
          reject(rejected);
        });
      }
    });
  }

  /**
    *
    * Makes an iron-request call based on the config
    *
    * @param {Object} config
    * @return {Promise}
    */
  send(config) {
    // <iron-request> has to be re-created so as to return a new promise
    return document.createElement('iron-request').send(config);
  }
};

