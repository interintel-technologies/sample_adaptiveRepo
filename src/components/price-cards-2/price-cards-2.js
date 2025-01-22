import {html,css,unsafeCSS} from 'lit-element';
import { PriceCards2Styles } from './price-cards-2-css';
import { PriceCards2Base } from '../../base/elements/price-cards-2';
import globalStyles from '../../App.css?raw';
class PriceCards2 extends PriceCards2Base {

    static get styles() {
        return [unsafeCSS(globalStyles),PriceCards2Styles]
    }

    static get properties() {
        return {
            categories: Array,
            priceCards: Array,
            currentTab:Number,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        };
    }
    
    constructor() {
        super();
        this.priceCards =  [];
        this.categories = [];
        this.rows = [];
		this.cols = [];
    }

    updated(changedProperties) {
		if (changedProperties.has('e') || changedProperties.has('cols')) {
            
            this.priceCards = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
            this.createCategories();
            this.currentTab = this.categories[0];

        }
    }


    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            if(propName === "currentTab") {
                this.shadowRoot.querySelectorAll(".card").forEach(card => card.classList.remove("selected"));
                if(this.value) {
                    const valueIndex = this.priceCards.findIndex(priceCard => priceCard.id === this.value);
                    if(valueIndex >= 0) {
                        this.selectCard(this.value);
                    }
                }
            }
        })
    }

    createCategories() {
        const categories = [];
        
        this.priceCards.forEach(price => {
            const category = price.category;
            if(!categories.includes(category)) {
                categories.push(category);
                this.categories = [...this.categories, category];
            }
        });
    }
    
    onCardHover(index,isHover) {
        this.shadowRoot.querySelectorAll(`.card-${index}-icon`).forEach(icon => {
            const defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--app-default-color');
            const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--app-secondary-color');
            icon.setAttribute("style",`fill: ${isHover ? secondaryColor: defaultColor};`);
        });
    }

    selectCard(id) {
        const card = this.shadowRoot.querySelector("#card"+id);

        card.classList.add("selected");
    }

    onCardClickHandler(id) {
        this.shadowRoot.querySelectorAll(".card").forEach(card => card.classList.remove("selected"));
        
        if(this.value === id) {
            this.value = undefined
        }
        else {
            this.value = id;
            this.selectCard(id);
        }
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(price);
    }

    valid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");
        warningText.style.display = 'none';
    }

    invalid(validation) {
        const warningText =this.shadowRoot.querySelector("#warning-text");

        warningText.style.display = 'block';
    }

    static get is() {
        return "price-cards-2";
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                    ${
                        this.priceCards.length > 1 ? html`
                            <div class="prices-header is-flex">
                                ${this.categories.map((category,index) => html`
                                    <li class="price-tab is-flex ${category === this.currentTab ? "active" : ""}" @click=${()=>this.currentTab = category}>
                                        <h5>${category}</h5>
                                    </li>
                                `)}
                            </div>
                        ` : html``
                    }
                    <div class="columns">
                        ${this.priceCards.filter(priceCard => priceCard.category === this.currentTab).map((priceCard,index) => html`
                            <div class="column">
                                <div id=${"card"+priceCard.id} class="card" @mouseover=${()=>this.onCardHover(index,true)} 
                                    @mouseleave=${()=>this.onCardHover(index,false)} @click=${()=>this.onCardClickHandler(priceCard.id)}
                                >
                                    <div class="card-content">
                                        <h5>${priceCard.label}</h5>
                                        <ul>
                                            ${
                                                priceCard.points.map(point => html`
                                                    <li class="is-flex is-align-items-center">
                                                        <span class="icon">
                                                            <fa-icon class="far fa-check-circle check-icon card-${index}-icon"></fa-icon>
                                                        </span>
                                                        <p>${point}</p>
                                                    </li>
                                                `)
                                            }
                                        </ul>
                                        <h5>${this.formatPrice(priceCard.price)}</h5>
                                    </div>    
                                </div>
                            </div>
                        `)}
                    </div>
                    <p id="warning-text">${this.e.name} required</p>
                </div>
            </div>
        `;
    }
}

customElements.define(PriceCards2.is, PriceCards2);