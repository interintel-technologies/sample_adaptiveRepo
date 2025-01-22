
import {html,css, LitElement, unsafeCSS} from 'lit-element';
import { AccountSummaryStyles } from './account-summary-css';
import globalStyles from '../../App.css?raw';

export class AccountSummary extends LitElement {
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            AccountSummaryStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            
            cols: { type: Array },
            rows: { type: Array },
        }
    }

    updated(changedProperties) {
        if (
          changedProperties.has('cols') ||
          changedProperties.has('rows') ||
          changedProperties.has('e')
        ) {
            // console.log("this.rows ",this.rows);
            // console.log("this.cols ",this.cols);
            
         
        }
      }

    textColor(backgroundColor) {
        return (parseInt(backgroundColor.replace('#', ''), 16) > 0xffffff / 2) ? '#000' : '#fff'
    }

    getIndexByColumnLabel(columnLabel) {
        return this.cols.findIndex(col=>col.label === columnLabel); 
    }

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

    static get is() {
        return 'account-summary';
    }

    render() {
        return html`
            <div class="content">
                <div class="columns">
                    ${
                        this.rows.map((row, index, array) => {
                            const backgroundColor = this.randomColorGenerator(array.length, index);
                            const textColor = this.textColor(backgroundColor);

                            return html`
                                <div class="column">
                                    <div class="card" style="background-color: ${backgroundColor};">
                                        <div class="card-content">
                                            <span class="icon is-medium">
                                                <adaptive-ui-icon class="stat-icon" style="fill: ${textColor};" icon="${row[this.getIndexByColumnLabel("icon")]}"></adaptive-ui-icon>
                                            </span>
                                            <h5 style="color: ${textColor};">${row[this.getIndexByColumnLabel("name")]}</h5>
                                            <h5 style="color: ${textColor};">${row[this.getIndexByColumnLabel("value")]}</h5>
                                            <button title="View" class="button is-fullwidth">View</button>
                                        </div>
                                    </div>
                                </div>
                            `
                        })
                    }
                </div>
            </div>
        `;
    }
}

customElements.define(AccountSummary.is, AccountSummary);
