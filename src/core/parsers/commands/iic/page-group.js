import {Page} from "./page";

export class PageGroup {
  constructor(rp, key, pageJsonObject) {
    this._id = rp.id+'-'+String(key);
    this._rp = rp 
    this._key = key;
    this.pageJson = pageJsonObject['section_var'];
    this.title = this._pageJson[0];
    this.icon = this._pageJson[1];
    this.pageJson = pageJsonObject;
    this._tabs = this.initTabs();
    this.details = this._pageJson[14]


  }

  set title(title) {
    this._title = title;
  }

  set icon(icon) {
    this._icon = icon;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  set pageJson(pageJson) {
    this._pageJson = pageJson;
  }

  set details(details) {
    this._details = details;
  }

  geTab(tabTitle) {
    // console.log(this);
    // console.log(tabTitle);
    // console.log(this.tabs);

    // return new Tab(this, this.tabs[parseInt(tabTitle)]);
    return this.tabs[parseInt(tabTitle)];
  }

  initTabs() {
    var tabs = [];
    var tabIndex = 0;
    for (var key in this.pageJson) {
      if (key == ('section_var')) continue;

      var tabsJson = this.pageJson[key];

      for (var tabKey in tabsJson) {
        if (tabKey == 'page_var') continue;
      
        
        // if (!tabJson.keys().next().equals("Login") && Config.HIDE_LOGIN) {
        var toAdd = new Page(this, tabsJson, tabKey, tabIndex);

        tabs.push(toAdd);
        tabIndex ++;
        // }
      }
    }

    return tabs;
  }


  get title() {
    return this._title;
  }

  get key() {
    return Integer.parseInt(this._key);
  }

  get icon() {
    return this._icon;
  }


  get pageJson() {
    return this._pageJson;
  }

  get tabs() {
    return this._tabs;
  }

  get pages() {
    return this.tabs;
  }


  setTab(tabIndex, tab) {
    this.tabs[tabIndex] = tab;
  }


  getTab(position) {
    return this._tabs[position];
  }
}
