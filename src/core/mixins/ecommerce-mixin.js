
import { connect } from 'pwa-helpers/connect-mixin';

import { STATIC_POS_ADD_TO_CART_SERVICE, STATIC_POS_CART_ITEMS_SERVICE, STATIC_POS_DELETE_CART_ITEM_SERVICE, STATIC_POS_UPDATE_CART_SERVICE } from '../../static-pages/pos-page/POSPageMixin.js';
import { setCart, setIsCartLoading, setWishlist, setIsWishlistLoading, eCommerceStore } from '../../slices/eCommerceSlice.js';
import { PopUp } from '../popups/PopUp.js';
export const ECommerceMixin = BaseClass => class extends connect(eCommerceStore)(BaseClass) {
    static get properties() {
        return {
            cart: Array,
            wishlist: Array,
            isCartLoading: Boolean,
            isWishlistLoading: Boolean
        };
    }

    constructor() {
        super();

        this.cart = [];
        this.wishlist = [];
    }

    stateChanged(state) {
        console.log("state is ",state);
        
        if(state.eCommerce){
            this.cart = state.ecCommerce.cart;
            this.wishlist = state.ecCommerce.wishlist;
            this.isCartLoading = state.ecCommerce.isCartLoading;
            this.isWishlistLoading = state.ecCommerce.isWishlistLoading;
        }   
    }

    // Cart Methods

    /**
     * @description fetch cart data from backend and converts them to a list objects
     */
    fetchCart() {
        this._setLoadingState("cart", true);
        if(window.isPOS) {
            this.posAPIRequest(STATIC_POS_CART_ITEMS_SERVICE, null).then(response => {
                this.cart = response.cart_items.map(cartItem => ({
                    ...cartItem,
                    quantity: parseInt(cartItem.quantity),
                    price: parseFloat(cartItem.price)
                }));
                this._setLoadingState("cart", false);
            }).catch(() => {
                this._setLoadingState("cart", false);
            })
        }
        else {
            
     
                
                this._setLoadingState("cart", false);
                this.cart = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => {
                    if(this.cols[index].label === "quantity") {
                        return ["quantity", parseInt(rowValue)];
                    }
            
                    if(this.cols[index].label === "stockQuantity") {
                        return ["stockQuantity", parseInt(rowValue)];
                    }
    
                    if(this.cols[index].label === "price") {
                        return ["price", parseFloat(rowValue)];
                    }
                    
                    if(this.cols[index].label === "total") {
                        return ["total", parseFloat(rowValue)];
                    }
    
                    if(this.cols[index].label === "sub total") {
                        return ["subtotal", parseFloat(rowValue)];
                    }
            
                    if(this.cols[index].label === "discount") {
                        return ["discount", parseFloat(rowValue)];
                    }
    
                    if(this.cols[index].label === "product id") {
                        const variantColIndex = this.cols.findIndex(col => col.label === "product_item_variant_id");
                        return variantColIndex ? [this.cols[index].label, rowValue + "|" + row[variantColIndex]] : [this.cols[index].label, rowValue];
                    }
                    
                    return [this.cols[index].label, rowValue];
                })))];
                console.log("this cart is ",this.cart);
                
                this.loadCartToState(this.cart);
            // }).catch(() => {
            //     this._setLoadingState("cart", false);
            // });
        }
	}

    /**
     * @param {Array} cart - a list of cart items
     * @description Explicitly load a cart from DSC to the app's state
     */
    loadCartToState(cart) {
        console.log("eCommerceStore ",cart,eCommerceStore.dispatch(setCart(cart)));
        
        eCommerceStore.dispatch(setCart(cart));
    }

    /**
     * @param {*} product
     * @description adds a product to cart. If the item is already in cart, it updates quantity + 1
     */
    addProductToCart(product) {
        if (!this.isItemInCart(product.id)) {
            const parsedItem = this._parseCartItem(product);
            const productId = this._extractProductIdAnVariant(product.id)[0];
            const productVariantId = this._extractProductIdAnVariant(product.id)[1]; // will be undefined
            const payload = {["product_item_id"]: productId, "product_item_variant_id": productVariantId, quantity: 1}

            this.#callECommerceService("ADD TO CART", payload, "cart").then((data) => {
                
                eCommerceStore.dispatch(setCart([...this.cart, parsedItem]));
            });
        }
        else {
            this.updateCartItemQuantity(product.id, this.getCartItemQuantity(product.id) + 1, "product");
        }
    }

    /**
     * @param {String} itemId - cart_item_id or product_item_id
     * @param {Number} quantity - new quantity
     * @param {String} identifier - the context of where this method has been called. can be product or cart
     * @description updates quantity of a cart item
     */
    updateCartItemQuantity(itemId, quantity, identifier) {
        const cartItemIndex = this._findIndexOfItemInList(itemId, this.cart);
        const cartItem = this.cart[cartItemIndex];
        
        if (quantity > 0) {
            // Create a new object with the updated quantity
            const updatedCartItem = { ...cartItem, quantity: quantity };
            
            // Create a new array with the updated cart item
            const tempCart = [...this.cart];
            tempCart.splice(cartItemIndex, 1, updatedCartItem);
    
            let payload;
            if (identifier === "product") {
                const [productId, productVariantId] = this._extractProductIdAnVariant(itemId);
                
                payload = {
                    [identifier + "_item_id"]: productId,
                    "product_item_variant_id": productVariantId, // might be undefined
                    quantity: quantity
                };
            } else {
                payload = {
                    [identifier + "_item_id"]: itemId,
                    quantity: quantity
                };
            }
    
            this.#callECommerceService(window.isPOS ? "UPDATE CART" : "ADD TO CART", payload, "cart",tempCart).then(() => {
                eCommerceStore.dispatch(setCart(tempCart));
            });
        } else {
            this.removeItemFromCart(itemId, identifier);
        }
    }
    

    /**
     * @param {String} itemId - product_item_id or cart_item_id 
     * @param {String} identifier - the context of where this method has been called. can be product or cart
     * @description This method removes an item from cart.
     */
    removeItemFromCart(itemId, identifier) {
        const cartItemIndex = this._findIndexOfItemInList(itemId, this.cart);
        const tempCart = [...this.cart];
        tempCart.splice(cartItemIndex, 1);

        let payload;
        if(identifier === "product") {
            const productId = this._extractProductIdAnVariant(itemId)[0];
            const productVariantId = this._extractProductIdAnVariant(itemId)[1]; // will be undefined
            
            payload = {[identifier + "_item_id"]: productId, "product_item_variant_id": productVariantId}
        }
        else {
            payload = {[identifier + "_item_id"]: itemId}
        }
        
        this.#callECommerceService("DELETE CART ITEM", payload, "cart").then(() => {
            eCommerceStore.dispatch(setCart(tempCart));
        });
    }

    /**
     * @param {String} itemId - cart_item_id or product_item_id
     * @description returns the quantity of the item in cart
     * @returns {Number}
     */
    getCartItemQuantity(itemId) {
        if(this.isItemInCart(itemId)) {
            const cartItem = this.getCartItem(itemId);
            
            return cartItem.quantity;
        }

        return 0;
    }

    /**
     * @param {String} itemId - cart_item_id or product_item_id
     * @description Checks if an item is in cart
     * @returns {Boolean}
     */
    isItemInCart(itemId) {
        const cartItem = this.getCartItem(itemId);

        return cartItem ? true : false;
    }

    /**
     * @param {String} itemId - cart_item_id or product_item_id
     * @description get a cart item
     * @returns {cart_item}
     */
    getCartItem(itemId) {
        const cartItemIndex = this._findIndexOfItemInList(itemId, this.cart);

        return this.cart[cartItemIndex];
    }

    /**
     * @description calculates the number of items in cart
     * @returns {Number}
     */
    getCartCount() {
        return this.cart.reduce((total, cartItem) => total = total + cartItem.quantity, 0);
    }

    _onCartUpdatedEventListener(event) {
        const updatedCart = event.detail;

        this.cart = [...updatedCart];
    }

    _parseCartItem(item) {
        return {
            ...item,
            price: typeof item.price === 'object' ? item.price.current : item.price,
            image: item.image ? item.image : item.images ? item.images[0] : null,
            quantity: item.quantity ? item.quantity : 1,
            stockQuantity: item.stockQuantity,
            isNotSynced: true //this is to check a new product that has been added to cart
        };
    }

    isCartItemSynced(id) {
        //checks whether the item is newly added to cart because they don't have a cart_item_id
        return this.getCartItem(id).isNotSynced ? false : true;
    }

    // Wishlist Methods

    /**
     * @description fetch wishlist data from backend and converts them to a list objects
     */
    fetchWishlist() {
        this.isWishlistLoading = true;
		this.loader.then(()=>{
            this.isWishlistLoading = false;
			this.wishlist = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => {
				if(this.cols[index].label === "quantity") {
					return ["quantity", parseInt(rowValue)];
				}
		
				return [this.cols[index].label, rowValue];
			})))];
			this.loadWishlistToState(this.wishlist);
		}).catch(() => {
            this.isWishlistLoading = false;
        });
	}

    /**
     * @param {Array} wishlist - a list of wishlist items
     * @description Explicitly load a wishlist from DSC to the app's state
     */
    loadWishlistToState(wishlist) {
        eCommerceStore.dispatch(setWishlist(wishlist));
    }

    /**
     * @param {*} product
     * @description adds a product to wishlist.
     */
    addProductToWishlist(item) {
        const wishlistItemIndex = this._findIndexOfItemInList(item.id, this.wishlist);
        const parsedItem = this._parseWishlistItem(item);
        if (wishlistItemIndex >= 0) {
            // update item
            const tempWishlist = [...this.wishlist];

            tempWishlist.splice(wishlistItemIndex, 1, parsedItem);

            this.wishlist = [...tempWishlist];
        }
        else {
            Object.assign(parsedItem, {addedOn: new Date().getTime()});
            this.wishlist  = [...this.wishlist, parsedItem];
        }
        eCommerceStore.dispatch(setWishlist(this.wishlist));
    }

    /**
     * @param {String} itemId - wishlist_item_id or product_item_id
     * @description get a wishlist item
     * @returns {wishlist_item}
     */
    getWishlistItem(itemId) {
        const wishlistIndex = this._findIndexOfItemInList(itemId, this.wishlist);

        return this.cart[wishlistIndex];
    }

    /**
     * @param {String} itemId - product_item_id or wishlist_item_id 
     * @description This method removes an item from wishlist.
     */
    removeItemFromWishlist(itemId) {
        const wishlistItemIndex = this._findIndexOfItemInList(itemId, this.wishlist);
        const tempWishlist = [...this.wishlist];

        tempWishlist.splice(wishlistItemIndex, 1);

        this.wishlist = [...tempWishlist];
        eCommerceStore.dispatch(setWishlist(wishlist));
    }

    /**
     * @param {String} itemId - wishlist_item_id or product_item_id
     * @description Checks if an item is in wishlist
     * @returns {Boolean}
     */
    isItemInWishlist(itemId) {
        const wishlistItemIndex = this._findIndexOfItemInList(itemId, this.wishlist);

        return wishlistItemIndex >= 0 ? true : false;
    }

    _onWishlistUpdatedEventListener(event) {
        const retrievedWishlist = event.detail;
        this.wishlist = [...retrievedWishlist];
    }

    _parseWishlistItem(item) {
        return {
            id: item.id,
            name: item.name,
            price: typeof item.price === 'object' ? item.price.current : item.price,
            image: item.image ? item.image : item.images[0],
            stockQuantity: 10,
            addedOn: new Date().getTime(),
            quantity: 1,
        };
    }

    // general methods

    _findIndexOfItemInList(itemId, list) {
        const productId = this._extractProductIdAnVariant(itemId)[0];
        const productVariantId = this._extractProductIdAnVariant(itemId)[1]; // will be undefined 


        return list.findIndex(item => item.id === itemId || item["product id"] === itemId);
    }

    _getPropertyByType(type) {
        switch(type) {
            case "cart":
                return this.cart;
            case "wishlist":
                return this.wishlist;
            default:
                new Error("Unknown type "+ type).
            break;
        }
    }

    _extractProductIdAnVariant(id) {
        return id.toString().split("|");
    }

    formatToKenyaShillings(value) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(value);
    }

    triggerServiceCall() {
        
        const event = new CustomEvent('service-call', {
            detail: { 
                // Data to pass to the event
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    #callECommerceService(service, params, type,Cart) {
        this._setLoadingState(type, true);
        return new Promise((resolve, reject) => {
            if (window.isPOS) {
                this.#POSRequest(service, params, resolve, reject, type);
            } else {
                const event = new CustomEvent('submit-cart', {
                    detail: { 
                        service, 
                        params,Cart
                    },
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(event);
                resolve();  // Resolve the promise immediately since the event is dispatched
            }
        }); 
    }
    

    #POSRequest(service, body, resolve, reject, type) {
        let service1;
        switch(service) {
            case "ADD TO CART":
                service1 = STATIC_POS_ADD_TO_CART_SERVICE;
                body = {
                    ...body,
                    chid: 3,
                    cart_type: "POS"
                };
            break;
            case "UPDATE CART":
                service1 = STATIC;
            break;
            case "DELETE CART ITEM":
                service1 = STATIC_POS_DELETE_CART_ITEM_SERVICE
            case "CART_ITEMS":
                service1 = STATIC_POS_CART_ITEMS_SERVICE;
            break;
        }

        this.posAPIRequest(service1, body).then(response => {
            this._setLoadingState(type, false);
            if(response.isSuccessful) {
                resolve(response);
                PopUp.pushBanner({
                    message: response.response,
                    type: "success",
                    position: "top",
                    duration: 3000,
                    cancelable: false
                })
                // this.pushBanner(response.response, "success");
                // this.fetchCart();
            }
            else {
                reject(response);
                PopUp.pushBanner({
                    message: response.response,
                    type: "danger",
                    position: "top",
                    duration: 3000,
                    cancelable: false
                })
            }
        }).catch(err => {
            this._setLoadingState(type, false);
            reject(err);
            PopUp.pushBanner({
                message: err,
                type: "danger",
                position: "top",
                duration: 3000,
                cancelable: false
            })
        })
    }

    /**
     * @description Change the state of isWishlistLoading or isCartLoading with this
     * @param {String} type - either cart or wishlist
     * @param {Boolean} bool - is loading? 
     */
    _setLoadingState(type, bool) {
        switch(type) {
            case "cart":
                eCommerceStore.dispatch(setIsCartLoading(bool));
            break;
            case "wishlist":
                eCommerceStore.dispatch(setIsWishlistLoading(bool));
            break;
            default:
                console.error(type + " is not a valid type.");
            break;
        }
    } 

    /**
     * @description Saves cart to localstorage with a timestamp being the key and the current cart as value
    */
    saveOrder(){
		
		const currentTime=new Date();
		
		const options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true 
		};

		const Time = currentTime.toLocaleString('en-US', options);

		const existingOrder=JSON.parse(localStorage.getItem('savedOrders')) || {};
		existingOrder[Time]=this.cart;
		localStorage.setItem("savedOrders",JSON.stringify(existingOrder));
		this.cart=[];
        eCommerceStore.dispatch(setCart(this.cart));
	}

    /**
     * @description opens a modal that shows the saved orders from localstorage
    */
	viewSavedOrders(){

		const savedOrders=JSON.parse(localStorage.getItem("savedOrders"));
		this.savedOrders=savedOrders;

	}

    /**
     * @description deletes specific saved order based on timestamp parameter
     * @param {String} type - timestamp
     */
	removeFromSavedOrders(timeStamp){
		
		for(const key in this.savedOrders){
			if(key==timeStamp){
                delete this.savedOrders[key];
                localStorage.setItem("savedOrders",JSON.stringify(this.savedOrders));
                this.requestUpdate(); 	    
			}
		}		
		
	}

    /**
     * @description loads specific saved order when clicked based on timestamp parameter
     * @param {String} type - timestamp
     */
    loadSavedOrder(timeStamp){
        
        for(const key in this.savedOrders){
            if(key==timeStamp){
                eCommerceStore.dispatch(setCart(this.savedOrders[key]));
            }
        }
		
	}
};