import {html,css,unsafeCSS, LitElement} from 'lit-element';
import { ListElement3Styles } from './list-element-3-css';
import globalStyles from '../../App.css?raw'

export class ListElement3 extends LitElement {
    static get styles() {
        return [unsafeCSS(globalStyles),
			ListElement3Styles
		];
    }

    constructor() {
        super();
        this.searchText = '';
        this.rows = [],
		this.e = null
    }

    static get properties() {
        return {
          
            rows: {type: Array},
            e: {type: Object},


        };
    }

    static get is() {
        return 'list-element-3';
    }

    render() {
        const nameParts = this.e && this.e.name ? this.e.name.split(' ') : [];
        return html`
           <div class="content">
                <!-- <div class="card content ribbon">
                    <div class="hdr">
                        <h4 class="title">${this.e && this.e.name}</h4>
                        <hr>
                    </div>
                    <ul>
                        ${
                            this.rows && this.rows.map((row,index)=>html`
                                <li class="is-flex">
                                    <p>${index+1}. ${row}</p>
                                    
                                </li>
                            `)
                        }
                    </ul>
                </div> -->
                <div class="columns">
                    <div class="column is-half" id="descDiv">
                        <div class="">
                            <div class="heading">
                                <h4>
                                    ${nameParts.map((part, index) => html`
                                        <span class="${index === 1 ? 'color-primary' : ''}">
                                            ${part}
                                        </span>
                                    `)}
                                </h4>
                            </div>
                            <ul class="pointsList">
                                ${
                                    this.rows.map(row => html`
                                        <li class="">
                                            <p class="pl-5">${row}</p>
                                        </li>
                                    `)
                                }
                            </ul>
                        </div>
                    </div>
                    <div class="column is-half responsive-image-holder">
                        <img class="responsive-image" src="https://i.postimg.cc/28RZFRbx/service-image.png" alt="Choose Image" />
                    </div>
                </div>

           </div>
           
        `;
    }
}

customElements.define(ListElement3.is, ListElement3);