import {Command} from './command.js';
import {PageGroup} from './iic/page-group';

export class GetSection extends Command {
  constructor(getSectionResponse, config) {
    super(getSectionResponse, config);
    
  }

  parse(config={}) {
    this._pageGroups = this.parsePageGroups();

  }

  get pageGroups() {
    return this._pageGroups;
  }

  get pageInputs() {
    return this.commandResponse['this_page_inputs'];
  }

  static get id() {
    return 'get_section';
  }

  parsePageGroups() {
    // TODO removed from constructor
    // this._pageGroups = [];

    var pageGroups = [];
        
    for (var key in this.pageInputs) {
      var pageGroup = new PageGroup(this, key, this.pageInputs[key]);
      pageGroups.push(pageGroup);
    }

    return pageGroups;
  }
}
