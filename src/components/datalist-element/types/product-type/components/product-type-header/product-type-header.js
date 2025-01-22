
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/iron-image/iron-image';
import 'fa-icons';
import { ProductTypeHeaderStyles } from './product-type-header-css';
import { DatalistHeaderStyles } from '../../../../datalist-header-css';
import globalStyles from '../../../../../../App.css?raw';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class ProductTypeHeader extends LitElement {
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DatalistHeaderStyles,
            ProductTypeHeaderStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            title: String,
            columns: {
                type: Array,
            },
            checkedRows:Array,
            selectedParam:String,
            alert:Boolean
        };
    }
    
    updated(changedProperties) {
        if (changedProperties.has('actions')) {
			console.log("this.actions ",this.actions);
			
	}}

    uncheckRows() {
        this.dispatchEvent(new Event("uncheck-rows"));
    }

    updateSearchItem(e){
        const selectedItemText = e.target.innerText;
        const qIn = this.shadowRoot.querySelector('#qIn');
        qIn.innerText = selectedItemText;

        const allSearchItem = this.shadowRoot.querySelectorAll(".search_item");
        allSearchItem.forEach(item => {
            item.classList.remove("active_item");
        });
        const selectedItem = e.target;
        selectedItem.classList.add("active_item");
        this.selectedParam = e.target.getAttribute("param");
    }

    generateCSV(){
        const csv = 'csv';
        // console.log(evt);
        this.dispatchEvent(new CustomEvent('export-type', {
            detail: {
                type: csv,
            },
        }));
    }

    delete() {
        this.dispatchEvent(new CustomEvent('delete', {
            detail: {
                delete_ids: this.checkedRows
            },
        }));
    }

    onAlertChange() {
        this.alert = !this.alert;
        this.shadowRoot.querySelector("#alert").checked = this.alert;
        
        this.dispatchEvent(new CustomEvent('alert', {
            detail: {
                alert: this.alert
            },
        }));
    }

    generatePDF(){
        const pdf = 'pdf';
        console.log("pdf called");
        this.dispatchEvent(new CustomEvent('export-type', {
            detail: {
                type: pdf,
            },
        }));
    }

    dropdown(){
        const dropdown = this.shadowRoot.querySelector('ul');
        if(dropdown.classList.contains('is-block')){
            dropdown.classList.remove('is-block');
        }else{
            dropdown.classList.add('is-block');
        }
    }

    closeDropdown() {
        const dropdown = this.shadowRoot.querySelector('ul');
        if(dropdown.classList.contains('is-block')){
            dropdown.classList.remove('is-block');
        }
    }

    specificDropdown(e) {
        const dropdown = this.shadowRoot.querySelector('ul');
        if(dropdown.classList.contains('is-block')){
            dropdown.classList.remove('is-block');
        }else{
            dropdown.classList.add('is-block');
        }
        // console.log(e.target.id,"CALLED");
    }

    refresh(){
        this.dispatchEvent(new CustomEvent('refresh', {
            detail: {
                type: true,
            },
        }));
    }

    searchFields(columns) {
        return columns.filter(function(item) {
            return item.filter;
        });
    }
    
    _searchReset(evt) {
        const self = this;

        this.dispatchEvent(new CustomEvent('_clearSearch', {
            detail: {
                searchFields: self.searchFields(self.columns).map(function(field) {
                    return field.propertyPath;
                }),
            },
        }));
    }

    _searchFieldsExist(columns) {
        return columns.filter(function(item) {
            return item.filter;
        }).length > 0;
    }

    _search(evt) {
        const self = this;
        const q = self.shadowRoot.querySelector('#q').value;
        // const qIn = self.shadowRoot.querySelector('#qIn').innerText;
        // console.log(q);
        this.searchText = q;

        if(this.selectedParam == null || this.selectedParam == undefined){
            this.selectedParam = "q"
        }
        if (q) {
            this.dispatchEvent(new CustomEvent('_search', {
                detail: {
                    column: this.selectedParam,
                    searchFields: self.searchFields(self.columns).map(function(field) {
                        return field.propertyPath;
                }),
                value: q,
                },
            }));
        }
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const self = this;
        this.shadowRoot.querySelector("#alert").checked = this.alert;
         // console.log("does search file exist",self._searchFieldsExist(self.columns));
        if(self._searchFieldsExist(self.columns)){
            document.addEventListener('click', function (event) {
                // console.log("ID",event.path[0].tagName, "id",event.path[0].id,"class",event.path[0].className)
                if(event.path[0].className == 'dropdown'){
                    //do nothing
                }else if(event.path[0].id == 'qIn'){
                    self.dropdown()
                }else{
                    self.closeDropdown();
                }
            });
        }
    }

    static get is() {
        return 'product-type-header';
    }

    render() {
        return html`
            <div class="table-header-buttons" style="margin-bottom: 15px;">
                <div class="columns">
                    <div class="column is-flex-direction-column">
                        <div class="heading">
                            <h1 class="title is-size-6">${this.title}</h1>
                        </div>
                        <div class="block is-flex" style="justify-content:space-between;">
                            <div id="search_area" class="is-flex">
                                <div class="search_box is-flex">
                                    <div class="dropdown" @click=${this.dropdown}>
                                        <div id="qIn" @click="${this.specificDropdown}" class="default_option">All</div>
                                        <ul class="search_ul">
                                            <li class="search_item" @click="${this.updateSearchItem}">All</li>
                                            ${this.columns.map((item) => html`<li class="search_item" @click="${this.updateSearchItem}" param="${item.propertyPath}">${item.header}</li>`)}
                                        </ul>
                                    </div>
                                    <div class="search_field">
                                        <input id="q" type="text" name="search" title="Input" class="input" placeholder="Search..." value="${this.searchText}"/>
                                    </div>
                                </div>
                                <button class="button is-size-7 dl-buttons searchBtn" title="Search" type="submit" @click="${this._search}">Search</button>
                                <button class="button is-size-7 dl-buttons clearBtn" title="Clear" type="button" @click="${this._searchReset}">Clear</button>
                            </div> 
                            <label class="checkbox">
                                <input type="checkbox" title="Alert" ?checked=${this.alert} id="alert" @click=${this.onAlertChange}>
                                Alert on Low Stock
                            </label> 
                        </div>   
                    </div>  
                    <div class="column is-flex">
                        <div class="buttons" style="margin:0px;">
                            <span id="counter" title="Counter" class="button is-size-7">
                                <fa-icon class="fas fa-minus-square" title="Undo Checked" size="1.1em" @click=${this.uncheckRows}></fa-icon>
                                &emsp;${this.checkedRows.length} Product Selected
                            </span>
                            <span id="refresh-button" title="Refresh" class="button is-size-7" @click="${this.refresh}">
                                <fa-icon class="fas fa-redo" size="1.4em"></fa-icon>
                            </span>
                            <button title="Export PDF" id="pdf-btn"  @click="${this.generatePDF}" class="button is-size-7">Export PDF</button>
                            <button title="Export CSV" id="csv-btn" @click="${this.generateCSV}" class="button is-size-7">Export CSV</button>
                            <button title="Delete" id="delete-btn" @click=${this.delete}  class="button is-size-7">Delete</button>
                        </div>
                    </div>          
                </div>
            </div>
        `;
    }
}

customElements.define(ProductTypeHeader.is, ProductTypeHeader);
