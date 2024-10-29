import{h as n,r as c,g as d,i as p,k as o,a as l,j as t}from"./index-C2PWchud.js";class a extends n{static get styles(){return[c(d),p`
                :host {
                    display: block;
                }
                .modal-card-head p{
                    text-align: center;
                    margin-top: 0px;
                    font-weight: bold;
                }
            `]}static get properties(){return{isModalOpen:Boolean}}constructor(){super(),this.isModalOpen=!1}static get is(){return"new-customer"}handlePassModal(e){this.dispatchEvent(new CustomEvent("modal-open",{bubbles:!0,composed:!0,detail:{value:this.isModalOpen}}))}render(){return o`
            <header class="modal-card-head">
                <p class="modal-card-title is-size-6">Add New Client</p>
                <button class="delete modal-delete" aria-label="close" @click=${this.handlePassModal}></button>
            </header>
            <section class="modal-card-body">
                <!-- <NewClient></Newclient> -->
                <div class="columns">
                    <div class="column">
                        <div class="input-container">
                            <p>First Name</p>
                            <input class="input py-5" type="text" placeholder="First Name">
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-container">
                            <p>Last Name</p>
                            <input class="input py-5" type="text" placeholder="Last Name">
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="input-container">
                            <p>Sex</p>
                            <div class="select is-fullwidth">
                                <select>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-container">
                            <p>ID Number</p>
                            <input class="input py-5" type="text" placeholder="ID Number">
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="input-container">
                            <p>Email </p>
                            <input class="input py-5" type="text" placeholder="Email">
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-container">
                            <p>Phone Number</p>
                            <input class="input py-5" type="number" placeholder="Phone Number">
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="input-container">
                            <p>Date of Birth </p>
                            <input class="input py-5" type="date" placeholder="Date of Birth">
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-container">
                            <p>Delivery Address</p>
                            <input class="input py-5" type="text" placeholder="Delivery Address">
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="input-container">
                            <p>City </p>
                            <input class="input py-5" type="text" placeholder="City">
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-container">
                            <p>Postal Code</p>
                            <input class="input py-5" type="number" placeholder="postal code">
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="input-container">
                            <p>Country </p>
                            <input class="input py-5" type="text" placeholder="Country">
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-container">
                            <p>Location/Branch</p>
                            <div class="select is-fullwidth">
                                <select>
                                    <option value="Upperhill Branch">Nairobi - Upperhill Branch</option>
                                    <option value="Another place">Another place</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <a class="button py-5 is-link is-fullwidth is-flex" @click=${this.handleAdd}>
                    <span class="icon">
                        <i class="fas fa-plus"></i>
                    </span>
                    <span class="customer-select-btn-text">Add New Customer</span>
                </a>
            </section>
        `}}customElements.define(a.is,a);const u=i=>{const{element:e}=i,s=l.useRef(null);return l.useEffect(()=>{s.current&&e&&(s.current.e=e)},[e]),t.jsx("div",{children:e?t.jsx("new-customer",{id:"new-customer",ref:s}):t.jsx("p",{children:"Loading data..."})})};export{u as default};
