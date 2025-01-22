import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { FaqElementStyles } from './faq-element-css';
import globalStyles from '../../App.css?raw';

class FaqElement extends LitElement {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            FaqElementStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            categories: { type: Array },
            activeCategory: { type: Number },
            e: { type: Object },
            rows: { type: Array },
            loader: { type: Object } // Define loader as a property
        };
    }

    constructor() {
        super();
        this.categories = [];
        this.activeCategory = 0;
        this.e = {};
        this.rows = [];
        this.loader = new Promise(resolve => resolve()); // Default to a resolved promise if not set
    }



    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('e') || changedProperties.has('rows')) {
            this.createCategories();
            if (this.categories && this.categories[this.activeCategory]) {    
            Object.values(this.categories[this.activeCategory] ).forEach(category => 
                    category.forEach(qa => this.appendAnswer(qa.id, qa.answer))
                );
            }
            
        }
    }

    createCategories() {
        const categoryLabels = [];
        
        this.rows.forEach(row => {
            if (!categoryLabels.includes(row[1])) {
                categoryLabels.push(row[1]);
            }
        });
        
        const newCategories = categoryLabels.map(categoryLabel => {
            const filteredArrays = this.rows.filter(row => row[1] === categoryLabel);
            return {
                [categoryLabel]: filteredArrays.map(filteredArray => ({
                    id: filteredArray[0],
                    question: filteredArray[2].split("|")[0],
                    answer: filteredArray[2].split("|")[1],
                }))
            };
        });

        this.categories = [...newCategories];
    }

    accordionContentVisibility(id) {
        const accordionContent = this.shadowRoot.querySelector("#card-content" + id);
        const arrowIcon = this.shadowRoot.querySelector("#arrow-icon" + id);
        
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            arrowIcon.classList.toggle("rotate-icon");
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            arrowIcon.classList.toggle("rotate-icon");
        }
    }

    hideAllAccordions() {
        const accordionContents = this.shadowRoot.querySelectorAll(".card-content");
        const arrowIcons = this.shadowRoot.querySelectorAll(".arrow-icon");
        
        accordionContents.forEach(accordionContent => accordionContent.style.maxHeight = null);
        arrowIcons.forEach(arrowIcon => arrowIcon.classList.remove("rotate-icon"));
    }

    onTabClickHandler(index) {
        this.hideAllAccordions();
        setTimeout(() => this.activeCategory = index, 300);
    }

    appendAnswer(id, answer) {
        const answerElement = this.shadowRoot.querySelector("#answer" + id);
        if(answerElement){
            answerElement.innerHTML = answer;
        }
    }

    static get is() {
        return "faq-element";
    }

    render() {
        return html`
            <section class="content">
                <h4>${this.e && this.e.name}</h4>
                ${
                    this.categories.length > 1 ? html`
                        <div class="tabs is-fullwidth">
                            <ul>
                                ${
                                    this.categories.map((category, index) => html`
                                        <li class="${this.activeCategory === index ? "is-active" : ""}">
                                            <a @click=${() => this.onTabClickHandler(index)}>${Object.keys(category)[0]}</a>
                                        </li>
                                    `)
                                }
                            </ul>
                        </div>
                    ` : html``
                }
                <ul>
                    ${
                        (this.categories.length > 0) ? Object.values(this.categories[this.activeCategory] || {})[0].map(categoryQA => html`
                            <li class="card">
                                <div class="card-header" @click=${() => this.accordionContentVisibility(categoryQA.id)}>
                                    <p class="card-header-title">${categoryQA.question}</p>
                                    <span class="card-header-icon" aria-label="more options">
                                        <iron-icon id=${"arrow-icon" + categoryQA.id} icon="arrow-drop-down" class="arrow-icon"></iron-icon>
                                    </span>
                                </div>
                                <div id=${"card-content" + categoryQA.id} class="card-content hide-accordion-content">
                                    <p id=${"answer" + categoryQA.id} class="answer"></p>
                                    <div class="level">
                                        <div class="level-left">
                                            <strong class="level-item">Did this help?</strong>
                                            <div class="level-item">
                                            <adaptive-ui-icon class="far" icon=${'icons:MdOutlineThumbUpAlt'}></adaptive-ui-icon>

                                             
                                                <p>Yes </p>
                                            <adaptive-ui-icon class="far" icon=${'icons:MdOutlineThumbDown'}></adaptive-ui-icon>

                                                 
                                                <p>No </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        `) : html``
                    }
                </ul>
            </section>
        `;
    }
}

customElements.define(FaqElement.is, FaqElement);
