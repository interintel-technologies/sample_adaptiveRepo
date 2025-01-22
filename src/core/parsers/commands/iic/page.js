import {PageInputGroup} from './page-input-group';

export class Page {
  constructor(page, tabJson, tabKey, tabIndex,rp) {
    this._id = page.id +'-'+String(tabIndex);

    this._page = page;
    this._tabJson = tabJson;

    this._title = tabKey;// this.getPageVar()[0];
    this._icon = this.getPageVar()[1];
    this._feedList = this.initFeed();
    
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  getPageVar() {
    return this.tabJson['page_var'];
  }

  initFeed() {
    var keys = this.initKeys();
    var toReturn = [];

    var feedIndex = 0;
    for (var feedKIndex in keys) {
      var feedK = keys[feedKIndex];
      var toPass = this.tabJson[this.title][feedK];
      var feed = new PageInputGroup(this, toPass, feedIndex,this._page);
      toReturn.push(feed);
      feedIndex++;
    }

    return toReturn;
  }

  get url() {
    return '#!' + this.title;
  }


  initKeys() {
    var keys = Object.keys(this.tabJson[this.title]);
    return keys;
  }

  get tabJson() {
    return this._tabJson;
  }


  getTabContent() {
    var tab = this.tabJson[title.toString()];
    return tab[tab.keys()[0]];
  }


  get title() {
    return this._title;
  }

  // todo not DRY, delete one
  getTitle() {
    return this._title;
  }

  get titleC() {
    return this.getTitle();
  }


  getFeed() {
    return this.tabJson[this.title];
  }

  get icon() {
    return this._icon;
  }

  get pageInputGroups() {
    // todo init feed each time to include inserted sections
    return this._feedList;
  }
}
