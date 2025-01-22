
/**
 * @typedef POSService
 * @property {string} method
 * @property {string} url
 */

import { StaticHTTPMixin } from "../mixins/StaticHTTPMixin";

const STATIC_POS_AUTH_TOKEN = "UTmSrDNcW3rc5DMthRmFF3BSI5CLrS";

export const STATIC_POS_CREATE_PURCHASE_ORDER_SERVICE = {method: "POST", url: " https://nikobizz.staging.interintel.co/openapi/inventory/purchase-orders/create_purchase_order/"};
export const STATIC_POS_GET_PURCHASE_ORDER_SERVICE = {method: "GET", url: " https://nikobizz.staging.interintel.co/openapi/pos/purchase-orders/view-order/?reference="};
export const STATIC_POS_PRODUCT_VARIANTS_SERVICE = {method: "GET", url: " https://nikobizz.staging.interintel.co/openapi/inventory/product_option/list"};
export const STATIC_POS_PRODUCT_CATEGORIES_SERVICE = {method: "GET", url: " https://nikobizz.staging.interintel.co/openapi/inventory/categories"};
export const STATIC_POS_ADD_TO_CART_SERVICE = {method: "POST", url: "https://nikobizz.staging.interintel.co/openapi/pos/cart-items/add-to-cart/"};
export const STATIC_POS_UPDATE_CART_SERVICE = {method: "PUT", url: ""};
export const STATIC_POS_DELETE_CART_ITEM_SERVICE = {method: "DELETE", url: ""};
export const STATIC_POS_CART_ITEMS_SERVICE = {method: "GET", url: "https://nikobizz.staging.interintel.co/openapi/pos/cart-items/"};

export const POSPageMixin = BaseClass => class extends StaticHTTPMixin(BaseClass) {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    /**
     * View a side panel component
     * @param {String} sidePanel - the element name of the side panel. e.g cart-panel
     * @param {Object} data - pass data to the next panel 
     */
    viewSidePanel(sidePanel, data) {
        window.dispatchEvent(new CustomEvent("view-side-panel", {
            bubbles: true,
            composed: true,
            detail: {
                sidePanel: sidePanel,
                data: data
            }
        }));
    }

    /**
     * Fetch static POS APIs
     * @param {POSService} service 
     * @param {Object} body 
     * @param {*} resolve 
     * @param {*} reject 
     */
    posAPIRequest(service, body) {
        return this.httpRequest(service.url, service.method, body, STATIC_POS_AUTH_TOKEN);
    }
};