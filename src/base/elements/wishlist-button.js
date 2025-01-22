import {BaseElement} from '../../core/base-element';
//import {serviceCallMixin} from '../../core/mixins/servicecall-mixin';
import { ECommerceMixin } from '../../core/mixins/ecommerce-mixin';

export const WishlistButtonBase = class extends ECommerceMixin(BaseElement) {

    static get properties() {
        return {
            icon: String,
            title: String,
            service: String,
            defaultValue: String,
            navbar7Pl: Object,
            navbar7Service: String,
            navbar7DefaultValue: String
        };
    }

    constructor() {
        super();
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        // if(this.navbar7Pl){
        //     this.pl = this.navbar7Pl;
        //     this.params = this.pl.paramsCopy();
        // }

        // if(this.navbar7Service){
        //     this.service = this.navbar7Service;
        // }
        // else {
        //     this.service = this.e.service;
        // }

        // if(this.navbar7DefaultValue){
        //     this.defaultValue = this.navbar7DefaultValue;
        // }
        // else {
        //     this.defaultValue = this.e.defaultValue;
        // }
    }

    // /**
    //      * Handler for button click
    //      * @param {Event} evt
    //      */
    // shopping(evt) {
    //     var self = this;

    //     window.history.replaceState('shopping cart', 'shopping cart', self.navigateTo);

    //     // duplicate
    //     self.pl._dialog.apply(self.pl, [self.payload, {
    //         'service': this.service,
    //         'params': this.serviceCallParams(),
    //     }]);

    //     // p2 code
    //     // let sP = document.getElementsByTagName('service-page')[0];
    //     // // console.log(sP);
    //     //
    //     // sP.view = 'dialog';
    //     // sP.$.dialog._renderPayload(self.payload);


    //     // Reset all later step sections on each open
    //     // TODO should optimize to do this only if later step sections exist
    //     // if(self.$.pl) {
    //     //     self.$.pl._feedSet();
    //     // }
    //     //
    //     // self.$.dialog.open();
    // }

    // serviceCallParams() {
    //     // todo not required
    //     this.params['data_name'] = this.defaultValue;
    //     return this.params;
    // }

    // loadCartPage() {
    //     this.callService(this.service).then(response => {
    //         // const response = new Response(res);
    //         // response.parseAll({});
    //         this.payload = response.serviceCommands['get_section'];
    //         if (window.location.pathname === this.navigateTo) {
    //         // duplicate
    //             this.pl._dialog.apply(this.pl, [this.payload, {
    //                 'service': this.service,
    //                 'params': this.serviceCallParams(),
    //             }]);
    //         }
    //     })
    //     .catch(err=>console.log);
    // }

    // /**
    //      * @param {PElement} pElement
    //      * @param {Element} loader
    //      */

    // _computeQuantity() {
    //     var retrievedObject = localStorage.getItem('wishlist');
    //     const items = JSON.parse(retrievedObject);
    //     if (!items.length) {
    //         return 0;
    //     }

    //     return items.reduce(
    //         function(
    //             accumulator,
    //             currentValue,
    //             currentIndex,
    //             array
    //         ) {
    //             return accumulator + Number(currentValue.quantity);
    //         }, 0
    //     );
    // }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;

        self.service = pElement.service;

        self.params = loader.pl.paramsCopy();
        self.title = WishlistButtonBase.toTitleCase(pElement.name);

        const au = document.querySelector('adaptive-ui');
        const basePath = au.getAttribute('path');
        if (!window.paths) {
            window.paths = {};
        }
        const key = `/${basePath}/${pElement.details['path']}/`;
        self.navigateTo = key;
        self.loadCartPage();
        /*
            if(!window.paths[key]) {
                window.paths[key] = {
                    service: pElement.service
                };
                self.loadCartPage();
            }
            */
    }
};
