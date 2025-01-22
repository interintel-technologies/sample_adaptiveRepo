import {LitElement, css, html} from 'lit-element';
import { CartEditor2Styles } from './cart-editor-2-css';
import { POSPageMixin, STATIC_POS_CREATE_PURCHASE_ORDER_SERVICE } from '../../POSPageMixin';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin';
import { ECommerceMixin } from '../../../../core/mixins/ecommerce-mixin';
import { BANNER } from '../../../../themes/dsv2.0/components/popups/banner-element/banner-element';
import { PopUp } from '../../../../themes/dsv2.0/components/popups/PopUp';

class CartEditor2 extends POSPageMixin(ThemeMixin(ECommerceMixin(LitElement))){
    
    static get styles() {
        return [
            super.styles,
            CartEditor2Styles,
            css`
                :host{
                    display:block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            cart:Array,
			discount:Number,
			tax:Number,
			points:Number,
			savedOrders: Object
        }
    }

    constructor() {
        super();
        this.cart=[];
		this.discount=0;
		this.tax=0;
		this.points=1500;
		this.savedOrders={};
    }

    firstUpdated(){      
		this.fetchCart(); 
    }

    static get is(){
        return 'cart-editor-2';
    }

    _calcSubTotal(){
		let subtotal=0;
		this.cart.forEach(cartItem=>{
			const cartTotals=cartItem.total;
			subtotal += parseFloat(cartTotals);
		});
		return subtotal;
    }

	_calcTotal(){
		const tax=this.tax;
		const discount=this.discount;
		const deductions=tax+discount;
		
		const total=this._calcSubTotal()-deductions;
		return this.formatToKenyaShillings(total);
	}

	deleteCartItem(id){
		this.removeItemFromCart(id,"cart");
	}

	removeDiscount(){
		this.discount=0;
	}

	onInputHandler(id){
		const selectedInput=this.qs("#input-"+id);
		const currentValue=selectedInput.value;
		
		this.updateCartItemQuantity(id,currentValue, "cart");	
		
	}

	incrementQuantity(id){
		const quantity = this.getCartItemQuantity(id) + 1;
        this.updateCartItemQuantity(id, quantity, "cart");	

		const item=this.getCartItem(id);
		item.total=item.price*quantity;
		
	}

	decrementQuantity(id){
		const quantity = this.getCartItemQuantity(id) - 1;
        this.updateCartItemQuantity(id, quantity, "cart");

		const item=this.getCartItem(id);
		item.total=item.price*quantity;
	}

	clearCart(){
		this.cart=[];
	}

	openModal(){
		const modal=this.qs(".modal");
		modal.classList.add("is-active");
	}

	closeModal(){
		const modal=this.qs(".modal");
		modal.classList.remove('is-active');
	}

	onProceedToPaymentClickHandler() {
		const banner = BANNER;
		banner.duration = 2000;
		this.posAPIRequest(STATIC_POS_CREATE_PURCHASE_ORDER_SERVICE, {session_gateway_profile_id: 2777131}).then(response => {
			banner.message = response.response;
			if(response.isSuccessful) {
				banner.type = "success";
				this.viewSidePanel("payments-panel", {
					reference: response.reference,
					purchase_order_id: response.purchase_order_id
				});
			}
			else {
				banner.type = "danger";
			}
			PopUp.pushBanner(banner);
		}).catch(error => {
			console.error(error);
			banner.message = error;
			banner.type = "danger";
			PopUp.pushBanner(banner);
			this.viewSidePanel("payments-panel", {
				reference: "INTE-OFE52",
    			purchase_order_id: 13555
			});
		})
	}

    render() {
        return html`
            <div class="content">
				<div class="columns is-mobile pt-1 hdr">
					<div class="column is-4">
						<h5>description</h5>
					</div>
					<div class="column is-2">
						<h5>qty</h5>
					</div>
					<div class="column is-2">
						<h5>price</h5>	
					</div>
					<div class="column is-3">
						<h5>amount</h5>	
					</div>
					<div class="column is-1">
							
					</div>
				</div>
				<ul class="cart-list">
					
					${
						this.cart.length > 0 ? this.cart.map(cartItem => html`
							<li class="cart-item" id="cart-item${cartItem.id}">
								<div class="columns is-mobile">
									<div class="column descCol is-4" id="descCol-${cartItem.id}">
										<h6 class="has-text-weight-light is-uppercase">${cartItem.name}</h6>
									</div>
									<div class="column qtyCol is-2" id="qtyCol-${cartItem.id}">
										<div class="quantityField is-mobile columns">
											
											<div class="column is-4-desktop is-3-mobile">
												<span class="icon is-small" @click=${()=>this.decrementQuantity(cartItem.id)}>											
													<i class="fas fa-minus"></i>
												</span>
											</div>
											<div class="column is-4-desktop quantity is-3-mobile">
												<h6>${cartItem.quantity}</h6>
											</div>
											<div class="column is-4-desktop is-3-mobile">
												<span class="icon is-small" @click=${()=>this.incrementQuantity(cartItem.id)}>
													<i class="fas fa-plus"></i>
												</span>
											</div>
											
										</div>	
									</div>
									<div class="column priceCol is-2" id="priceCol-${cartItem.id}">
										<h6 class="has-text-weight-light">${this.formatToKenyaShillings(cartItem.price)}</h6>
									</div>
									<div class="column amountCol is-3" id="amountCol-${cartItem.id}">
										<h6 class="has-text-weight-light">${this.formatToKenyaShillings(cartItem.price * cartItem.quantity)}</h6>
									</div>
									<div class="column iconCol is-1" id="iconCol-${cartItem.id}">
										<span class="icon" id="delIcon${cartItem.id}" title="remove from cart"
										@click=${()=>this.deleteCartItem(cartItem.id)}
										>
											<i class="fas fa-trash"></i>
										</span>
									</div>
								</div>
							</li>
					`):
						html`<h3 class="mt-3">Cart is empty</h3>`
					}
				</ul>
				<div class="columns is-mobile is-multiline ftr">
					<!-- <div class="column couponCol py-4 is-12" title="Click to enter">
						<h6>Have a Coupon, Voucher or Discount Code? Click here to enter it
							<span class="icon">
								<i class="fas fa-chevron-right"></i>
							</span>
						</h6>	
					</div> -->
					<div class="column calcCol pt-5 is-12">
						<ul>
							<li>
								<div class="columns is-mobile">
									<div class="column labelCol is-6">
										<h6 class="label">Subtotal</h6>
									</div>
									<div class="column figureCol is-4">
										<h6 class="has-text-weight-light">${this.formatToKenyaShillings(this.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0))}</h6>
									</div>
									<div class="column is-2">
										
									</div>
								</div>
							</li>

							<!-- discount field -->
							<!-- <li>
								<div class="columns is-mobile discountCol">
									<div class="column labelCol is-6">
										<h6 class="label">Discount</h6>
									</div>
									<div class="column figureCol is-4">
										<h6 class="has-text-weight-light">${this.formatToKenyaShillings(this.discount)}</h6>
									</div>
									<div class="column iconCol is-2">
										<span class="icon delDiscount" title="remove"
										
										@click=${()=>this.removeDiscount()}>
											<i class="fas fa-x"></i>
										</span>
									</div>
								</div>
							</li> -->
							<li>
								<div class="columns is-mobile">
									<div class="column labelCol is-6">
										<h6 class="label">Tax</h6>
									</div>
									<div class="column figureCol is-4">
										<h6 class="has-text-weight-light">${this.formatToKenyaShillings(0)}</h6>
									</div>
									<div class="column is-2">
										
									</div>
								</div>
							</li>
							<li>
								<div class="columns is-mobile">
									<div class="column labelCol is-6">
										<h6 class="label">Total</h6>
									</div>
									<div class="column figureCol is-4">
										<h6 class="has-text-weight-light">${this.formatToKenyaShillings(this.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0))}</h6>
									</div>
									<div class="column is-2">
										
									</div>
								</div>
							</li>
						</ul>
					
					</div>
					<div class="column is-12 ttp mb-4">
						<div class="columns  is-mobile">
							<div class="column is-6">
								<h5 class="has-text-weight-bold">Total to pay</h5>
							</div>
							<div class="column is-6 has-text-right">
								<h5 class="has-text-weight-bold">${this.formatToKenyaShillings(this.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0))}</h5>
							</div>

						</div>
					</div>	
				
					<div class="column buttonsCol is-multiline is-12">
						<div class="columns is-mobile is-multiline col1">
							<div class="column is-6 pr-0">
								<div class="btn saveBtn" role="button" title="Save Order" @click=${()=>this.saveOrder()}>
									<h6>
										<span class="icon">
											<i class="fas fa-save"></i>
										</span>
										save order
									</h6>
								</div>	
							</div>
							<div class="column is-6">
								<div class="btn clearBtn" role="button" title="Clear All" @click=${()=>this.clearCart()}>
									<h6>
										<span class="icon">
											<i class="fas fa-x"></i>
										</span>
										clear all
									</h6>
								</div>
							</div>
							<div class="column is-12">
								<div class="btn proceedBtn" role="button" title="Proceed to payment" @click=${() =>this.onProceedToPaymentClickHandler()}>
									<h6>
										Proceed to payments
									</h6>
								</div>
							</div>
						</div>

						<!--view saved orders button that activates modal-->
						<!-- <div class="columns is-mobile col1">
							<div class="column is-6 pr-0">
								<div class="btn saveBtn" role="button" title="View Saved Orders" @click=${()=>this.viewSavedOrders()}>
									<h6>
										<span class="icon">
											<i class="fas fa-list"></i>
										</span>
										view saved orders
									</h6>
								</div>	
							</div>
							
						</div> -->

						<!-- <div class="column btn proceedBtn is-12 control">
							<div class="field">
								<p class="control">
									<a class="button" id="submitBtn">proceed to payment</a>
								</p>
							</div>
								
						</div> -->
					</div>
				</div>
				
				<!-- modal that shows list of saved orders -->
				<div class="modal">
					<div class="modal-background"></div>
						
					<div class="modal-card">
						<header class="modal-card-head">
						<h2 class="modal-card-title">Saved Orders</h2>
						<button class="delete" aria-label="close" @click=${()=>this.closeModal()}></button>
						</header>

						<section class="modal-card-body">
							
							${this.savedOrders==null ? html`
								<div class="columns is-mobile has-text-centered pl-2">
									<label class="has-text-weight-bold"><h4>No saved Orders Available</h4></label>
								</div>
							`
							:html`
								<div class="columns">
									<div class="column is-6"><label class="has-text-weight-bold">Time</label></div>
									<div class="column is-6"><label class="has-text-weight-bold">Cart Items</label></div>
								</div>

								${Object.entries(this.savedOrders).map(([key,value])=>html`
									<div class="columns is-mobile">
										<div class="column is-4">
											<p>${key}</p>
										</div>	
										<div class="column is-7">
											
										</div>
										<div class="column is-1" class="iconCol" id="iconCol-">
											<span class="icon" id="" title="remove from saved orders" @click=${()=>this.removeFromSavedOrders(key)}>
												<i class="fas fa-trash"></i>
											</span>
										</div>
									</div>
								`)}
							`
						}
							
								
						
						</section>
					</div>
				
				</div>
            </div>
        `;
    }

}

customElements.define(CartEditor2.is, CartEditor2);