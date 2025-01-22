import { LitElement, html } from 'lit-element';
import { ThemeMixin } from '../../../../themes/dsv2.0/components/mixins/ThemeMixin.js';
import { CustomerSelectStyles } from './customer-select-css.js';
import '../../../../themes/dsv2.0/components/elements/new-customer/new-customer.js'

class CustomerSelect extends ThemeMixin(LitElement){
    static get is(){
        return 'customer-select'
    }

    static get styles(){
        return[
            super.styles,
            CustomerSelectStyles
        ]
    }

    static get properties() {
        return {
            customers: Array,
            searchTerm: String,
            tableShow: Boolean,
            isModalOpen: Boolean,
            searchResults: Array,
            isInputHidden: Boolean,
            isDropdownOpen: Boolean, 
            selectedCustomer: Object, 
            isContentChange: Boolean,
            isTitle: String
        };
    }
    
    constructor() {
        super();
        this.istitle = '';
        this.customers = [];
        this.searchTerm = '';
        this.tableShow = false;
        this.searchResults = [];
        this.isModalOpen = false;
        this.isInputHidden = false;
        this.isDropdownOpen = false;
        this.selectedCustomer = null;
        this.isContentChange = false;
    }

    firstUpdated(){
        // this.loader.then(() => {
        //     this.customers = [
        //       ...this.rows.map((row) =>
        //         Object.fromEntries(
        //           row.map((rowValue, index) => [this.cols[index].label, rowValue])
        //         )
        //       ),
        //     ];
        // });
    }

    handleInput(event) {
        const searchTerm = event.target.value;
        if (searchTerm === '') {
          this.selectedCustomer = null;
          this.isDropdownOpen = false;
        } else {
          this.isDropdownOpen = true;
        }
        this.searchTerm = searchTerm;
    }

    handleModalSearch(event){
        const searchTerm = event.target.value;
        if(searchTerm === ''){
            this.tableShow = false;
        }else{
            this.tableShow = true;
        }
        this.searchTerm = searchTerm;
    }
    
    handleSelectCustomer(customer) {
        this.value = customer.id
        this.selectedCustomer = customer;
        this.searchTerm = '';
        this.isDropdownOpen = false;
        this.isModalOpen = false;
    }

    handleClose() {
        this.isInputHidden = false;
        this.value = undefined;
        this.selectedCustomer = null;
        this.requestUpdate();
    }

    handleAdd() {
        this.applyTheme({
            font: "Inter",
            theme: "light",
            colors: {
                primary: "#af438b",
                link: "#1f438b",
                info: "#1f438b"
            }
        });
        // this.isModalOpen = true;
        // this.requestUpdate();
    }

    handleCreate() {
        this.isContentChange = true;
        this.isContentChange ? this.isTitle = 'Add New Customer' : this.isTitle='Search or Add a New Customer';
        this.requestUpdate();
    }

    handleModalClose() {
        this.isModalOpen = false;
        this.isContentChange = false;
        this.requestUpdate();
    }

    modal(e){
        this.isModalOpen = e.detail.value;
        this.isContentChange = false;
    }

    render(){
        return html`
            <div class="customer-select-container">
                ${!this.selectedCustomer ? html`
                <div class="field is-grouped is-block">
                    <p class="control is-expanded has-icons-left" style="margin-right: 0;">
                        <span class="icon is-left" style="top:5px;">
                        <i class="fas fa-search"></i>
                        </span>
                        <input class="input py-5" type="search" placeholder="Search" @input="${this.handleInput}" value="${this.selectedCustomer ? this.selectedCustomer.name : ''}">
                    </p>
                    <p class="control" style="margin-top: 11px;">
                        <a class="button py-5 is-link is-fullwidth is-flex" @click=${this.handleAdd}>
                            <span class="icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="customer-select-btn-text">Add New Customer</span>
                        </a>
                    </p>
                </div>

                <div class="dropdown-menu" id="dropdown-menu" role="menu" ?hidden="${!this.isDropdownOpen}" style="display: ${!this.isDropdownOpen ? 'none' : 'block'}">
                    <div class="dropdown-content">
                        ${this.customers.filter(customer => customer.name.toLowerCase().includes(this.searchTerm.toLowerCase())).map(customer => html`
                            <a class="dropdown-item" data-customer-id="${customer.id}" @click="${() => this.handleSelectCustomer(customer)}">
                            ${customer.name}
                            </a>
                        `)}
                    </div>
                </div>
                ` : html``}

                <div class="card slide-in-bck-center" ?hidden="${!this.selectedCustomer}">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img class=" is-rounded is-circle" src="${this.selectedCustomer ? this.selectedCustomer.image : 'https://bulma.io/images/placeholders/96x96.png'}" alt="image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="is-size-5 customer-select-btn-text">${this.selectedCustomer ? html`${this.selectedCustomer.name}(${this.selectedCustomer.productId})` : ''}</p>
                                <p class="is-size-7 customer-sub-text" style="color: #878787">Phone: ${this.selectedCustomer ? this.selectedCustomer.number : ''}</p>
                            </div>
                        </div>
                        <button @click=${()=> this.handleClose()} class="delete" aria-label="close"></button>
                    </div>
                </div>

                ${this.isModalOpen ? html`
                <div class="modal add-modal">
                    <div class="modal-background"></div>
                    <div class="modal-card scale-up-center">
                        ${this.isContentChange ? html`
                            <new-customer @modal-open="${this.modal}"></new-customer>
                        ` : html`
                            <header class="modal-card-head">
                                <p class="modal-card-title is-size-6">Search or Add a New Customer</p>
                                <button class="delete modal-delete" aria-label="close" @click=${this.handleModalClose}></button>
                            </header>
                            <section class="modal-card-body">
                                <a class="is-link add-customer has-text-weight-bold" @click=${this.handleCreate}>
                                    <span class="icon add">
                                        <i class="is-link fas fa-plus"></i>
                                    </span>
                                    Add New Customer
                                </a>

                                <div class="field is-grouped mt-2">
                                    <p class="control is-expanded has-icons-left">
                                        <span class="icon is-left">
                                        <i class="fas fa-search"></i>
                                        </span>
                                        <input 
                                        class="input" 
                                        type="search" 
                                        placeholder="search" 
                                        @input="${this.handleModalSearch}" 
                                        value="${this.selectedCustomer ? this.selectedCustomer.name : ''}">
                                    </p>
                                    <p class="control">
                                        <a class="button modal-search-btn is-link pl-6 has-text-weight-bold pr-6">
                                        Search
                                        </a>
                                    </p>
                                </div>
                                ${this.customers.length > 1 ? html`
                                <div class="customer-list" ?hidden="${!this.tableShow}" style="display: ${!this.tableShow ? 'none' : 'block'}">
                                    <table class="table is-fullwidth">
                                        <tbody>
                                        ${this.customers.filter(customer => customer.name.toLowerCase().includes(this.searchTerm.toLowerCase())).map(customer => html`
                                        <tr>
                                            <td>${customer.name}</td>
                                            <td>${customer.number}</td>
                                            <td>${customer.email}</td>
                                            <td><button class="button is-link is-outlined is-fullwidth">View Info</button></td>
                                            <td><button class="button is-link is-outlined is-fullwidth" @click="${() => this.handleSelectCustomer(customer)}">Select</button></td>
                                        </tr>
                                        `)}
                                        </tbody>
                                    </table>
                                </div>
                                ` : html``}
                            </section>
                            <footer class="modal-card-foot is-flex py-6">
                                ${this.customers.length > 1 ? html`
                                <p>End of Results</p>
                                ` : html``}
                            </footer>
                            ` }
                        </div>
                    </div>
                ` : html``}
                
            </div>
        `
    }
};

customElements.define(CustomerSelect.is, CustomerSelect)