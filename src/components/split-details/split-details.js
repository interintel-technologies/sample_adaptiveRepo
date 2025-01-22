import {html, css, LitElement, unsafeCSS} from 'lit-element';
import { SplitDetailsStyles } from './spit-details-css';
import globalStyles from '../../App.css?raw';

class SplitDetails extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles), 
            SplitDetailsStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            colors: Array,
            cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },
        }
    }

    constructor() {
        super();
        this.colors = [];

    }

    updated(changedProperties) {
        super.updated(changedProperties);
        
        // Check if properties have changed before re-calculating colors
        if (changedProperties.has('cols') || changedProperties.has('rows') || changedProperties.has('e')) {
            console.log("e oi ", this.rows);
            
            // Calculate colors only if the number of rows has changed
            if (changedProperties.has('rows')) {
                const newColors = this.rows.map((row, index, array) => this.randomColorGenerator(array.length, index));
                
                // Check if the newly calculated colors are different from the existing ones
                if (JSON.stringify(newColors) !== JSON.stringify(this.colors)) {
                    this.colors = newColors;
                }
            }
        }
    }
    

    // firstUpdated() {
    //     this.loader.then(()=> {
    //         this.colors = this.rows.map((row,index,array) => this.randomColorGenerator(array.length,index));
    //     });
    // }

    randomColorGenerator (numberOfSteps,step) {
        let r, g, b;
        let h = step / numberOfSteps;
        let i = ~~(h * 6);
        let f = h * 6 - i;
        let q = 1 - f;
        switch(i % 6){
            case 0: r = 1; g = f; b = 0; break;
            case 1: r = q; g = 1; b = 0; break;
            case 2: r = 0; g = 1; b = f; break;
            case 3: r = 0; g = q; b = 1; break;
            case 4: r = f; g = 0; b = 1; break;
            case 5: r = 1; g = 0; b = q; break;
        }
        const color = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
        return color;
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label === columnLabel); 
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(price);
    }
    
    static get is() {
        return 'split-details';
    }

    render() {
        return html`
            <div class="content">
                <div class="column content">
                
                    ${
                        this.rows.map((row,index) => html`
                            <div class="card">
                                <div class="card-header" style="background-color: ${this.colors[index]};">
                                    <h4 class="card-header-title" 
                                        style="color: ${(parseInt(this.colors[index].replace('#', ''), 16) > 0xffffff / 2) ? '#000' : '#fff'};"
                                    >${row[this.getIndexByColumnLabel("name")]}</h4>
                                </div>
                                <div class="card-content is-flex">
                                    <div class="column" style="border-right: 1px solid rgb(183, 181, 181)">
                                        ${
                                            Object.entries(row[this.getIndexByColumnLabel("left")]).map(([key,value]) => html `
                                                <h4>${key}</h4>
                                                <p>${this.formatPrice(value)}</p>
                                            `)
                                        }
                                    </div>
                                    <div class="column">
                                        ${
                                            Object.entries(row[this.getIndexByColumnLabel("right")]).map(([key,value]) => html `
                                                <h4>${key}</h4>
                                                <p>${this.formatPrice(value)}</p>
                                            `)
                                        }
                                    </div>
                                </div>
                            </div>
                        `)
                    }
                </div>
            </div>
        `;
    }

}
customElements.define(SplitDetails.is, SplitDetails);
