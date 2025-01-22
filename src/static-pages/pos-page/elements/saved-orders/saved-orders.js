import {LitElement, html,css} from 'lit-element';
import { SavedOrdersStyles } from './saved-orders-css';
import { ECommerceMixin } from '../../../../core/mixins/ecommerce-mixin';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin';
import { PopUp } from '../../../../themes/dsv2.0/components/popups/PopUp';

class SavedOrders extends ThemeMixin(ECommerceMixin(LitElement)) {
    static get properties() {
        return {
            savedOrders: Object
        }
    }

    constructor() {
        super();
        this.savedOrders={};
		this.savedOrdersLength = 0
    }

    static get styles() {
        return [
            super.styles,
            SavedOrdersStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    openModal(){
		const modal=this.qs(".modal");
		modal.classList.add("is-active");
	}

	firstUpdated() {
		
		const savedOrders=JSON.parse(localStorage.getItem("savedOrders"));
		this.savedOrders=savedOrders;
		this.savedOrdersLength =Object.keys(savedOrders).length
	}

    closeModal(){
		const modal=this.qs(".modal");
		modal.classList.remove('is-active');
	}

	viewSavedOrders(){
		this.openModal();
		const savedOrders=JSON.parse(localStorage.getItem("savedOrders"));
		this.savedOrders=savedOrders;
	}

	removeFromSavedOrders(timeStamp){
		for(const key in this.savedOrders){
			
			if(key==timeStamp){
                const actions = [{id: 1, color: "has-background-success has-text-white", label: "Yes"}, 
                {id: 2, color: "has-background-warning", label: "No"}];

                PopUp.showConfirmBox("Delete this saved order", "This action cannot be reversed", actions , actionId => {
                    if(actionId==1){
                        delete this.savedOrders[key];
                        localStorage.setItem("savedOrders",JSON.stringify(this.savedOrders));
                        this.requestUpdate(); 	
                    }else{
                        this.closeModal();
                    }
                });
			}
		}
	}

	onOrderClickHandler(timeStamp){
		const actions = [{id: 1, color: "has-background-success has-text-white", label: "Yes"}, 
		{id: 2, color: "has-background-warning", label: "No"}];

		PopUp.showConfirmBox("Load this saved order", "load saved order to cart", actions , actionId => {
			if(actionId==1){
				this.loadSavedOrder(timeStamp);
			}else{
				
			}
		});
	}
	

    static get is(){
        return 'saved-orders';
    }

    render() {
        return html`

            <div class="cont mt-2 mb-3 mr-2">
            
                <div class="saveBtn" role="button" title="View Saved Orders"  @click=${()=>this.viewSavedOrders()}>
                    <p>
                        Saved Orders (${this.savedOrdersLength})
                    </p>
                </div>	
                
                <!-- modal that shows list of saved orders -->
				<div class="modal is-custom-width">
					<div class="modal-background content"></div>
						
					<div class="modal-card">
						<header class="modal-card-head">
						<h2 class="modal-card-title">Saved Orders (${this.savedOrdersLength})</h2>
						<button class="delete" aria-label="close" @click=${()=>this.closeModal()}></button>
						</header>

						<section class="modal-card-body">
						
						${this.savedOrders == null || Object.keys(this.savedOrders).length == 0 ? html`
						<div class="columns is-mobile has-text-centered pl-2">
						  <label class="has-text-weight-bold"><h4>No saved Orders Available</h4></label>
						</div>
					  ` : html`
						<section class="accordions">
						  ${Object.entries(this.savedOrders).map(([key, value]) => html`
							<article class="accordion is-active">
							  <div class="accordion-header toggle">
								<p>${key} -- (${value.length} Products)</p>
							  </div>
							  <div class="accordion-body">
							  <div class="accordion-content">
							  <div class="columns is-multiline is-mobile m-0">
							  ${value.map(order => html`
							  <div class="content column my-2 is-one-quarter-desktop is-half-mobile" title="Add to cart" id="thisCol${order['product id']}">
								<div class="card is-clickable">
								  <div class="card-image">
								  <div class="columns is-multiline is-mobile m-0">
									<div class="column is-half">
										<small class="order-qty tag is-hoverable">(${order.quantity})</small>
									</div>
									<div class="column is-half">
										<div class="tag is-rounded product-id">${order['product id']}</div>
									</div>
								  </div>
								  
								  
									<figure class="image p-1">
									  <img src="${order.image}" alt="${order.name} Image">
									</figure>
								  </div>
								  <div class="card-content">
									<div class="columns is-multiline">
									<div class="column is-full">
									<strong class="truncate-text">${order.name} </strong>
								  </div>
								  
									  <div class="column column is-four-fifths">
										<p>Ksh ${order.total} </p>
									  </div>
									  <div class="column is-one-fifth">
										<div class="btn">
										  <span class="icon tag is-danger is-light" id="" title="remove from saved orders" @click=${()=>this.removeFromSavedOrders(key)}>
											<i class="fas fa-trash"></i>
										  </span>
										</div>
									  </div>
									</div>
								  </div>
								</div>
							  </div>
							`)}
							
							  </div>
							</div>
							
							  </div>
							</article>
						  `)}
						</section>
					  `}
					  
							
						</section>
					</div>
				</div>
            </div>
        `;
    }
}

customElements.define(SavedOrders.is, SavedOrders);