/* eslint-disable no-trailing-spaces */

import {Redirect} from './commands/redirect';
import {GetSection} from './commands/get-section';
import {Command} from './commands/command';
import {GetGatewayDetails} from './commands/get-gateway-details';
import {GetInstitutionDetails} from './commands/get-institution-details';
import {GetInterface} from './commands/get-interface';
import {DataSource} from './commands/data-source';

// Response Status
export const STATUS_SUCCESS = '00';
export const STATUS_FAILED = '96';

// service command definations
export const COMMAND_REDIRECT = 'redirect';
export const COMMAND_GET_SECTION = 'get_section';
export const COMMAND_GET_INTERFACE = 'get_interface';
export const COMMAND_GET_GATEWAY_DETAILS = 'get_gateway_details';
export const COMMAND_GET_INSTITUTION_DETAILS = 'get_institution_details';
export const COMMAND_DATA_SOURCE = 'data_source';
export const COMMAND_VCS_MENU = 'vcs_menu';

// Action Commands
export const COMMAND_SESSION = 'session';
export const COMMAND_WINDOW_EVENT = 'window_event';
export const COMMAND_CHECK_PAYMENT_WINDOW_PAYLOAD = 'check_payment_window_payload';
export const COMMAND_CLEAR_CART = 'clear_cart';

// payload['response_status'] === '96' todo handle known response errors with appropriate messages

export class Response {
  /**
   * Expects an already parsed JSON into an object
   * @param {Object} response
   */
  constructor(response) {
    this.response = Response.loadJson(response);
    this.serviceCommands = {};
  }

  get responseStatus() {
    return this.response['response_status'];
  }

  isSuccessful() {
    return this.responseStatus === STATUS_SUCCESS;
  }

  get session() {
    return this.response['session_id'];
  }

  get host() {
    return this.response['gateway_host'];
  }

  static loadJson(payload) {
    
    return (typeof payload === 'object') ? payload : JSON.parse(payload);
  }

  /**
   * Convert current response to a JSON string
   * @return {string} Response json representation
   */
  stringify() {
    return JSON.stringify(this.response);
  }

  /**
   * Return true if the response includes the service command
   *
   * @param {String} serviceCommandName
   * @return {Boolean}
   */
  containsServiceCommand(serviceCommandName) {
    return Object.keys(this.response['response']).includes(serviceCommandName);
  }

  /**
   * Parse a service Command to provide a easier integration interface
   *
   * @param {String} serviceCommandName the name of the service command
   * @param {Object} config parsing configuration
   * @param {Boolean} cache whether to cache the parsing output
   * @return {Redirect|GetSection|GetInterface|GetGatewayDetails|GetInstitutionDetails|DataSource|Command}
   * parsed service command response
   */
  parse(serviceCommandName, config, cache) {
    // 1. retrieve command response
    const serviceCommandResponse = this.response['response'][serviceCommandName];

    // 2. pass into appropriate parser
    let command;
    switch (serviceCommandName) {
    case COMMAND_REDIRECT:
      command = new Redirect(serviceCommandResponse, config);
      break;
    case COMMAND_GET_SECTION:
      command = new GetSection(serviceCommandResponse, config);
      break;
    case COMMAND_GET_INTERFACE:
      command = new GetInterface(serviceCommandResponse, config);
      break;
    case COMMAND_GET_GATEWAY_DETAILS:
      command = new GetGatewayDetails(serviceCommandResponse, config);
      break;
    case COMMAND_GET_INSTITUTION_DETAILS:
      command = new GetInstitutionDetails(serviceCommandResponse, config);
      break;
    case COMMAND_DATA_SOURCE:
      command = new DataSource(serviceCommandResponse, config);
      break;
    default:
      command = new Command(serviceCommandResponse, config);

    }

    // 3. cache command if cache

    return command;
  }

  /**
   *
   * @param {object} config
   *
   */
  parseAll(config) {
    // 1. retrieve the list of service commands from the response
    // eslint-disable-next-line guard-for-in
    for (const serviceCommand in this.response['response']) {
      // 3. call parse with each of the commands
      const commandResponse = this.parse(serviceCommand, config, true);
      this.serviceCommands[serviceCommand] = commandResponse;

      // 4.  cache of the response for performance optimization
      // and also to have them in a single container to return
    }

    // Warn if get_interface and get_section responses exist from the same service
    if (this.containsServiceCommand(COMMAND_GET_SECTION) && this.containsServiceCommand(COMMAND_GET_SECTION)) {
      // Logger.i.switchConfiguration('get_interface and get_section usage on the same service');
    }
  }

  summary() {
    let message;
    // TODO test run
    // for (var k0 in payload.response) {
    //     if (k0 == "get_section" || k0 == "get_interface" || k0 == "session" || typeof payload.response[k0] == 'object') {
    //     } else {
    //         var t = document.createElement("b");
    //         t.setAttribute("style", "text-transform: capitalize;");
    //         t.style.color = 'inherit';
    //         var s = document.createElement("span");
    //         s.style.color = 'inherit';
    //         s.innerHTML = k0.replace(/_/g, " ");
    //         var i = document.createTextNode(': ' + payload.response[k0]);
    //         var j = document.createElement("br");
    //
    //         t.appendChild(s);
    //         t.appendChild(i);
    //         t.appendChild(j);
    //
    //         view_dom.appendChild(t);
    //
    //     }
    // }
    const lP = this.response['last_response'];
    message = typeof lP === 'object' ? JSON.stringify(lP) : lP;
    return message;
  }

  summaryTitle() {
    // return (!this.isSuccessful())? this.response['overall_status']:'';
    //Summary Title was sending the overall status that is a number on the snackbar. The snackbar only needs the message from the last response
    return (!this.isSuccessful())? '':'';  

  }
}
