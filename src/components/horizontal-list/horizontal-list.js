import {css, html, LitElement, unsafeCSS} from 'lit-element';
import { HorizontalListStyles } from './horizontal-list-css';
import globalStyles from '../../App.css?raw';

class HorizontalList extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            HorizontalListStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            items: Array,
            services:Array,
            firstLoad: Boolean,
            e: { type: Object }, // Assuming 'e' is passed as a property
            cols: { type: Array }, // Add 'cols' property
            rows: { type: Array },  // Add 'rows' property
            dataColor:{type:String}

        };
    }

    constructor() {
        super();

        this.items = [];
        this.services=[];
        this.rows = [];
        this.cols = [];
        this.e = null;
        this.dataColor= 'var(--primary)';
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('e') || changedProperties.has('rows')  || changedProperties.has('cols')) {
            this.items = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
            console.log("this.items ",this.items)
            // const dataColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-onPrimaryContainer');
            this.dataColor=dataColor;
        }
    }





    static get is() {
        return "horizontal-list";
    }

    getColumnClass() {
        switch (this.items.length) {
          case 1:
            return 'is-full';
          case 2:
            return 'is-half-desktop is-half-mobile is-half-tablet';
          default:
            return 'is-one-third-desktop is-one-third-mobile is-one-third-tablet';
        }
      }

    onBtnClickHandler(service,id){

        this._dialog(service,id)
    }

    render() {
        const columnClass = this.getColumnClass();
        return html`
		<div class="">

		<div class="card">
        <h6 class="card-header-title">${this.e.name}</h6>
        <div class="card-content scroll-container">
            <div class="columns is-mobile">
			${this.items.map((item,index) => html`
					<div class="column is-fullheight  ${columnClass}">
						<div class="columns is-multiline ">
							<div class="column is-full  has-text-centered image-icon-container">	
                                <a class="image-icon" @click=${()=>this.onBtnClickHandler(item.service,index)} title="Go to">
                                    <adaptive-ui-icon datacolor="${this.dataColor}"  icon="${item.icon}"></adaptive-ui-icon>  
                                </a>    
							</div>
							<div class="column is-full has-text-centered ">
								<p class="action_name">${item.action_name}</p>
							</div>
						</div>
					</div>
				`)}

            </div>
        </div>
    </div>
    </div>
        `;
    }

}

customElements.define(HorizontalList.is, HorizontalList);