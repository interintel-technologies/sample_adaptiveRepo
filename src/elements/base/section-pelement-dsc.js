import {SectionPElementBase} from './section-pelement';


export const SectionPElementDsc = class extends SectionPElementBase {
  dscDataName() {
    return this.e.defaultValue;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.params = self.pl.paramsCopy();
    this.loader = this.loadData();
  }

  //For cart functionality
  // _findProductItem(productId) {
  //   var results = this.productItems.filter(
  //     function(item) {
  //       console.log(item);
  //       return item['id'] === parseInt(productId);
  //     }
  //   );
  //   return results[0];
  // }

  

  // _validateProduct(product){
  //   let validationResult;
  //   for (const [key,value] of Object.entries(product)) {
  //     if(key == 'id'){
  //       validationResult = true;
  //     }else if(key == 'product-id'){
  //       validationResult = true;
  //     }else if(key == 'name'){
  //       validationResult = true;
  //     }else if(key == 'price'){
  //       validationResult = true;
  //     }else if(key == 'image'){
  //       validationResult = true;
  //     }else if(key == 'images'){
  //       validationResult = true;
  //     }else if(key == 'description'){
  //       validationResult = true;
  //     }else if(key == 'quantity'){
  //       validationResult = true;
  //     }else{
  //       validationResult = false;

  //       console.warn(`${key} is not a valid key in a product object.`);
  //       return;
  //     }

  //   }
  //     return validationResult;
  // }

 /**
   * Function is to confirm and possibly format the selected product and quantity if it matches the
   * requirements for it to be added to the cart
   *
   * @param selectedId {string}  containing id about the product 
   * @param selectedQuantity {string} Number of quantity selected by the user
   */
  _confirmProduct(selectedId,selectedQuantity) {

    // let productValidationResult = this._validateProduct(selectedProduct);
    // let productToAddToCart = {};

    // if(productValidationResult){
    //   //create new formated object to add to cart

    //   for(let key in selectedProduct){

    //     productToAddToCart[key] = selectedProduct[key];
    //     //TODO : process images here so that image key is not an array of images
    //   }

    //   // productToAddToCart.quantity = selectedQuantity;

    //   console.log("productToAddToCart>",productToAddToCart);

    //   this._addCartItem(productToAddToCart,selectedQuantity);
      
    // }else{
    //   console.warn(`product not valid check other statements to see why`);
    //   return;
    // }

    if ((selectedId && selectedQuantity !== null) && (selectedId && selectedQuantity !== undefined)){
      this._addCartItem(selectedId,selectedQuantity);
    }else{
      console.warn(`product Id or product quantity cannot be null or undefined`);
    }
    
  }
 /**
   * Function is to confirm and possibly format the selected product and quantity if it matches the
   * requirements for it to be added to the wishList
   *
   * @param selectedId {string}  containing id about the product 
   * @param selectedQuantity {string} Number of quantity selected by the user
   */
  _confirmWishListProduct(selectedId,selectedQuantity){
    if ((selectedId && selectedQuantity !== null) && (selectedId && selectedQuantity !== undefined)){
      this._addWishListItem(selectedId,selectedQuantity);
    }else{
      console.warn(`product Id or product quantity cannot be null or undefined`);
    }
  }
  _addCartItem(productId, quantity) {
    
    this.dispatchEvent(new CustomEvent('add-cart-item', {
      bubbles: true,
      composed: true,
      // todo detail: {item: self.currentProduct,quantity:Number(this.$.quantity.value)} // WP
      detail: {item: productId, quantity: quantity},
    }));
  }
  //TO DO: CREATE WISHLIST ELEMENT FOR IT TO PICK UP THE EVENT BELOW
  _addWishListItem(productId, quantity){
    this.dispatchEvent(new CustomEvent('add-wishList-item', {
      bubbles: true,
      composed: true,
      detail: {item: productId, quantity: quantity},
    }));
  }
};
