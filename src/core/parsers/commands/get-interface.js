import { GetSection } from "./get-section";


export class GetInterface extends GetSection {
  constructor(getInterfaceResponse, config) {
    super(getInterfaceResponse, config);
    // this._routes = [];
  }

  parse(config={}) {
    // console.log('gi parse');
    super.parse(config);
    // console.log('gi parse, called super');
    // todo this.parseRoutes();
  }

  get routes() {
    return this._routes;
  }

  static get id() {
    return 'get_interface';
  }

  parseRoutes() {
    for (var route in this.commandResponse['all_pages']) {
      this._routes.push(route);
    }
  }
}
