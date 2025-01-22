
import {css, html, unsafeCSS} from 'lit-element';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icon/iron-icon';
import './components/datasource-list/datasource-list';
import {DataListElementBase} from '../../base/elements/datalist-element';
import './components/loader-element/loader-element';
import { DatalistElementStyles } from './datalist-element-css';
import globalStyles from '../../App.css?raw';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
class DataListElement extends DataListElementBase {
    
    static get properties() {
        return {
            table: {type: Boolean, value: true},
            loading: {type: Boolean},
            grid: {type: Boolean, value: false},
            list: {type: Boolean, value: false},
            sortProperty: {type: String},
            selectedRows: {type: Array,alue: []},
            showActions: {type: Boolean, value: false, notify: true},
            searchText: String,
            selected: {type: Array},
            selectType: {type:String, value:"multi"},
            selectedRadio: {type:String, value:""},
            message: String,
            gateway: String,
            originalData:Array,
            data: {type: Array},
            cols: {type: Array},
            rows: {type: Array},
            columns: {type: Array},
            limit: {type: Number},
            e:{type:Object},
            sortAscending:{type:Boolean},
            title:{type:String}
            
        };
    }

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            DatalistElementStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    constructor() {
        super();
        this.searchText = '';
        this.data = []
        this.rows = []
        this.cols = []
        this.columns = []
        this.limit = 0
        this.selectable = false;
        this.e={};
        this.sortAscending = true;
        this.setLimit=null;
        this.loading = true
        this.title = ""
        this.message = ""


    }
    
    updated(changedProperties) {
        if (changedProperties.has('e') || changedProperties.has('columns') || changedProperties.has('limit') || changedProperties.has('page')) {
            this.setLimit = this.setLimitFunc;
            this.loading = this.isDscLoading;
            
            const self = this;
            self.required = this.e.required || (this.e.min && this.e.min > 0);
            self.title = this.e.name;
            
            // Ensure `details` exists before trying to access its properties
            if (this.e.details && 'selectable' in this.e.details) {
                self.selectable = this.e.details['selectable'];
                self.selectType = this.e.details['select_type'] || 'multi';
            }
    
            // Ensure `details` exists before accessing `empty_message` or `gateway`
            self.message = this.e.details?.empty_message || 'There is no data to preview at this time';
            self.gateway = this.e.details?.gateway;
    
            // Additional safety checks for `selectable` and `reload`
            if (this.e.details &&  this.e.details?.selectable) {
                this.selectable = this.e.details.selectable;
            }
            
            if (this.e.details &&  this.e.details?.reload) {
                const reloadTime = this.e.details.reload_time || 10000; // Default to 10 seconds if reload_time is undefined
                
                // Use arrow function to ensure 'this' refers to the current class instance
                setInterval(() => {
                    this.hardRefresh();
                }, reloadTime);
            }
        }
    }
    
   


    _switchView(event) {
        const sel = event.currentTarget.selected;
        if (sel === 0) {
            this.table = true;
            this.list = false;
            this.grid = false;
        } else if (sel === 1) {
            this.table = false;
            this.list = true;
            this.grid = false;
        } else if (sel === 2) {
            this.table = false;
            this.list = false;
            this.grid = true;
        }
    }


    /**
     * General and per column search event handler
     *
     *
     * @param event
     * @private
     */
    _handleSearch(event) {
        const filter = (event.detail.value).toLowerCase();
        const column = event.detail.column;
        const columns = event.detail.searchFields;
        this.searchText = filter;
       
        // delete any previous column and general search query
        this.deleteParamKeys(columns.concat(['q']), false);
        // update new search query param
        // this.updateParams(column, filter)

        if(column!=='q' && column!==null){
               // update new search query param
                 this.updateParams(column, filter)
            // if(Array.isArray(this.data[0])){
            //     this.data=this.data[0];
               
            //     const newData=this.data.filter(row=>(typeof row[column] === 'string' ? (row[column]).toLowerCase() : String(row[column]).toLowerCase()).includes(filter));
            //     console.log(newData)
            //     this.data=[this.data,...newData];
            // }else{
               
            //     const newData=this.data.filter(row=>(typeof row[column] === 'string' ? (row[column]).toLowerCase() : String(row[column]).toLowerCase()).includes(filter));
              
            //     if(newData.length!==0){
            //         this.data=[this.data,...newData];
            //         console.log(this.data)
            //     }else{
            //         //shows empty message for a few seconds then reloads the table
            //         const ogData=[...this.data];
            //         this.data.length=0;
                    
            //         setTimeout(() => { 
            //             this.data=[...ogData];
            //             // this._refresh(event)
            //         }, 3000);    
            //     }   
            // }
        }else{
            // if(Array.isArray(this.data[0])){
            //     this.data.splice(1);
            //     this.data=this.data[0];
            // }
            this.empty=true;
        }
     
    }

    _handleClearSearch(event){
        this.searchText = "";
        const columns = event.detail.searchFields;
        // delete any previous column and general search query
        this.deleteParamKeys(columns.concat(['q']), true);
    }

    _handleDateRangeChange(event) {
        const start_date =new Date(event.detail.start_date);
        const end_date = new Date(event.detail.end_date);
        const column = event.detail.column;
        const columnValue = event.detail.columnValue;
        const dateRange = start_date +","+ end_date;
        const range  = {};
      
        range[columnValue] = dateRange;
        
        this.deleteParamKeys(column.concat(['q']), false);
        
        this.mergeParams(range);
    //    if(start_date!=null && end_date!=null){
    //         const newData=this.data.filter(row=>new Date(row[column])>=start_date && new Date(row[column])<=end_date);
          
    //         if(Array.isArray(this.data[0])){
    //             this.data=this.data[0];
    //             const newData=this.data.filter(row=>new Date(row[column])>=start_date && new Date(row[column])<=end_date);
    //             this.data=[this.data,...newData];
    //         }else{
    //             this.data=[this.data,...newData];
    //         }
    //    }else{
    //         if(Array.isArray(this.data[0])){
    //             this.data.splice(1);
    //             this.data=this.data[0];
    //         }
    //    }
        
        
    }

    _handleSelectionChanged(event) {
        if (event.detail.selected) {
            this.actionRow = event.detail.selected;
            this.showActions = true;
        } else {
            this.showActions = false;
        }
    }

    _handleDelete(e) {
        this.mergeParams(e.detail);
    }

    _handleAlert (e) {
        this.mergeParams(e.detail)
    }

    _handleExport(event){
        event.detail.type == 'pdf'? this.generatePDF() : this.generateCSV();
    }

    _refresh(evt){
        const self = this;
        if(evt.detail.type == true){

        self.refresh();
        }
    }
    
    //Called from page-view-element to refresh dsc when dialog is closed
    hardRefresh(){
        this.refresh();
    }

    _handleDFilter(event) {
        // var divLocal = document.createElement('div');
        var filter = event.detail.value;
        var column = event.detail.path;
        var header=event.detail.header;
        // if (filter) {
        //   // todo this shouldn't happen
        //   // called when data changes and a re-render happens
        //   this.updateParams(column, filter);
        // }
       
        if(filter!==''){
           
            // const newData=this.data.filter(row=>row[header]===filter);
           
            // if(Array.isArray(this.data[0])){
            //     this.data=this.data[0];
            //     const newData=this.data.filter(row=>row[header]===filter);
            //     this.data=[this.data,...newData];
            // }else{
            //     this.data=[this.data,...newData];
            // }
            // console.log( "column",column,"filter",filter)  
            this.updateParams(column, filter); 
          
          
        }else{
            this.updateParams(column, filter);
       
            // if(Array.isArray( this.data[0])){
            //     this.data.splice(1);
            //     this.data=this.data[0];
               
            // }
        }
       
      }

    render() {
        return html`
            <div class="card">
            ${this.loading ? html`<loader-element></loader-element>` 
                : html`
                  ${this.data && this.data.length > 0 
                    ? html`
                        <datasource-list
                          id="dt"
                          paginate
                          .selectable="${this.selectable}"
                          filters
                          .details="${this.e.details}"
                          .e=${this.e}
                          .pl="${this.pl}"
                          .data="${this.data}"
                          .page="${this.page}"
                          .q="${this.q}"
                          .columns="${this.columns}"
                          .cols="${this.cols}"
                          .size="${this.limit}"
                          .title="${this.title}"
                          toggle-columns="${this.toggleColumns}"
                          .searchText = "${this.searchText}"
                          @alert=${this._handleAlert}
                          @sort="${this._handleSort}"
                          @filter="${this._handleFilter}"
                          @search="${this._handleSearch}"
                          @clear-search="${this._handleClearSearch}"
                          @dropdown-filter="${this._handleDFilter}"
                          @filter-th-content="${this._handleFilterTh}"
                          @filter-date-range="${this._handleDateRangeChange}"
                          @delete="${this._handleDelete}"
                          @selection-changed="${this._handleSelectionChanged}"
                          @page-change="${this._handlePageChanged}"
                          @size-change="${this._handleLimitChanged}"
                          @export="${this._handleExport}"
                          @refresh="${this._refresh}"
                          .selected=${this.selected}
                          .selectedRadio=${this.selectedRadio}
                          .selectType=${this.selectType}
                          .message=${this.message}
                          .gateway=${this.gateway}
                          .selected-rows=${this.selectedRows}
                          .totalElements="${this.totalElements}"
                          .type="${this._validateType(this.e.details)}"
                          .alert=${this._validateAlert(this.e.details)}
                          .totalPages="${this.totalPages}"
                          .state="${this._validateState(this.e.details)}"
                          .sortAscending=${this.sortAscending}
                          .setLimit=${this.setLimit}
                          .loadData=${this.loadData}
                        >
                        </datasource-list>
                      `
                    : html`
                        
                      `
                  }
                `}
                
                            
            </div>
        `;
    }
}

customElements.define(DataListElement.is, DataListElement);
