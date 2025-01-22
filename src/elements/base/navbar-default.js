import {BaseElement} from '../../core/base-element';
import {serviceCallMixin} from '../../core/mixins/servicecall-mixin';
// import {IicParser} from '../../core/payload-parser';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {adaptiveUiMixin} from '../../core/mixins/adaptiveui-mixin';

export const NavbarDefaultBase = class extends adaptiveUiMixin(utilsMixin(serviceCallMixin(BaseElement))) {
  static get is() {
    return 'navbar-default';
  }

  constructor() {
    super();
    this.menuGroups = [];
  }

  static get properties() {
    return {
      menuGroups: Array,
    };
  }

  shopping(evt) {
    evt.preventDefault();
    var self = this;
    const navigateTo = evt.currentTarget.dataset['href'];
    window.history.replaceState('Dialog', 'Dialog', navigateTo);

    if (window.preloads[navigateTo] && window.preloads[navigateTo]['res']) {
    // duplicate
      self.pl._dialog.apply(self.pl, [window.preloads[navigateTo]['res'], {
        'service': window.preloads[navigateTo]['service'],
        'params': this.serviceCallParams(),
      }]);
    } else {
      self.pl._dialog(window.preloads[navigateTo]['service'], this.serviceCallParams());
    }
  }

  parseMenus() {
    const menuGroups = [];

    // todo perfoming parsing of the response
    const menus = JSON.parse(this.e.defaultValue);

    for (const key in menus) {
      // todo sort groups order
      if (menus.hasOwnProperty(key)) {
        const menu = menus[key];
        const title = Object.keys(menu)[0];
        // TODO title length cannot be > 1
        const menuGroup = {'title': title, 'items': []};
        const menuItemsWrapper = menu[title];
        // menu items
        const itemsOrder = Object.keys(menuItemsWrapper);
        // todo sort order
        for (let index = 0; index < itemsOrder.length; index++) {
          const itemKey = itemsOrder[index];
          const item = menuItemsWrapper[itemKey];
          menuGroup['items'].push({
            'title': item[0],
            'icon': item[1],
            'service': item[3],
            'route': item[2],
          });
        }
        menuGroups.push(menuGroup);
      }
    }

    this.menuGroups = menuGroups;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  serviceCallParams() {
    // this.params['data_name'] = this.e.defaultValue;
    return this.params;
  }

  loadService(service, navigateTo) {
    if (window.preloads[navigateTo] && window.preloads[navigateTo]['res']) {
      // if already navigated, switch to section
      if (window.location.pathname === navigateTo) {
        // duplicate
        this.pl._dialog.apply(this.pl, [window.preloads[navigateTo]['res'], {
          'service': service,
          'params': this.serviceCallParams(),
        }]);
      }
    } else {
      // not yet preloade, load
      this.callService(service)
        .then(res => {
        // res.parseAll({});
          window.preloads[navigateTo] ={'res': res.serviceCommands['get_section'], 'service': service};

          // if already navigated, switch to section
          if (window.location.pathname === navigateTo) {
            // duplicate
            this.pl._dialog.apply(this.pl, [window.preloads[navigateTo]['res'], {
              'service': service,
              'params': this.serviceCallParams(),
            }]);
          }
        })
        .catch(err=>console.log(err));
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    // self.title = NavbarDefaultBase.toTitleCase(pElement.name);
    this.parseMenus();
    self.params = loader.pl.paramsCopy();
    const au = document.querySelector('adaptive-ui');
    const basePath = au.getAttribute('path');
    this.basePath = basePath;
    if (!window.paths) {
      window.paths = {};
    }

    if (!window.preloads) {
      window.preloads = {};
    }

    // eslint-disable-next-line guard-for-in
    for (const menuGroupIndex in this.menuGroups) {
      // if (this.menus.hasOwnProperty(menu)) {
      const menuGroup = this.menuGroups[menuGroupIndex];

for(const menuGroupItemIndex in menuGroup['items']){
const menuGroupItem = menuGroup['items'][menuGroupItemIndex];

      const key = `/${basePath}/${menuGroupItem['route']}/`;
      self.loadService(menuGroupItem['service'], key);
      }
    }
  }
};

