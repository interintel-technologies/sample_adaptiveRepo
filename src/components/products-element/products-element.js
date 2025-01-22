import {html,css,unsafeCSS} from 'lit-element';
import {ProductsElementStyles} from './products-element-css';
import { SectionPElementDsc } from '../../elements/base/section-pelement-dsc';
import globalStyles from '../../App.css?raw';
class ProductsElement extends SectionPElementDsc {
    static get styles() {
        return [unsafeCSS(globalStyles),ProductsElementStyles]
    }

    static get properties() {
        return {
            boxes:Array,
            name:Array,
            links:Array,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },
        }
    }

    constructor() {
        super();
        this.boxes=[];
        this.links=[];
        this.names=[];
        this.rows = []
        this.cols = [];

    }

    updated(changedProperties){     
        if (changedProperties.has('e') || changedProperties.has('rows') || changedProperties.has('cols') ){
                this.boxes=[...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))]; 
                
                this.boxes.forEach(box => {
                    const arr=box.name.split("|");
    
                    const link=arr[1];
                    this.links.push(link);
    
                    const name=arr[0];
                    this.names.push(name);
                });
               
          
        } 
       
    }
    
    static get is(){
        return 'products-element';
    }

    render() { 
        return html`
            <div class="content">
                ${
                    this.boxes.map((box,index)=>html`
                        <div class="column is-full products-element-container">
                            <div class="columns is-multiline is-mobile m-0 is-flex-direction-row${index % 2 === 1 ? "-reverse" : ""}">
                                <div class="column">
                                    <div class="cont" style="${index % 2 === 1 ? "margin-left: 67px;" : ""}">
                                            <h4>${this.names[index]}</h4>
                                            <p class="">${box.description}</p>
                                            <a href="${this.links[index]}" target="_blank" class="pr-5 is-flex is-justify-content-flex-end">
                                                <button class="button px-5 products-element-btn" style="">
                                                    Learn More
                                                </button>
                                            </a>    
                                    </div>
                                  
                                    <div class="pointer">
                                        <span class="icon">
                                            ${index % 2 === 1 ? html`<adaptive-ui-icon icon="icons:MdChevronLeft" dataColor='#fff'></adaptive-ui-icon>` : html`<adaptive-ui-icon icon="icons:MdChevronRight" dataColor='#fff'></adaptive-ui-icon>`}
                                        </span> 
                                    </div>
                                </div>
                                <div class="column is-flex is-justify-content-center is-align-items-center">
                                    <img src="/media/${box.image}">    
                                </div>
                            </div>
                        </div>
                `)}
            </div>
        `;
    }
}

customElements.define(ProductsElement.is, ProductsElement);