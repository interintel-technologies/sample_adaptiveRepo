
import {css,html,unsafeCSS} from 'lit-element';
import { TagInputBase } from '../../base/elements/tag-input';
import { InputMixin } from '../../base/mixins/InputMixin';
import { TagInputStyles } from './tag-input-css';
import globalStyles from '../../App.css?raw'

class TagInput extends InputMixin(TagInputBase){
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            TagInputStyles,
            css`
                :host{
                    display:block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            summaryTabs: Array,
            cols: { type: Array },
            rows: { type: Array },
            e: { type: Object },  
        };
    }


    updated(changedProperties) {
        if (
            changedProperties.has('cols') ||
            changedProperties.has('rows') ||
            changedProperties.has('e')
        ) {

            const options = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
      this.allOptions = options;
      this.rows = this.rows
        }
    }

    get type(){
        return 'tag';
    }

    static get properties() {
        return {
            isVisible: Boolean,
            options: Array,
            allOptions:Array,
            searchArrays:Array
        }
    }

    constructor() {
        super();
        this.isVisible = true;
        this.selected = [];
        this.allOptions=[];
        this.searchArrays=[];
        this.rows = [];
        this.cols = [];
        this.e = null;

    }

  

    openContent(){
        const cardContent=this.shadowRoot.querySelector('#optionsBox');
        const expandIcon=this.shadowRoot.querySelector('.expandIcon adaptive-ui-icon');
           
        cardContent.classList.toggle('is-hidden');
        // expandIcon.classList.toggle('rotate');
        const icon=expandIcon.getAttribute('icon');
       
        if(icon=='icons:add'){
            expandIcon.setAttribute('icon','icons:close');
        }else{
            expandIcon.setAttribute('icon','icons:add')
        }
        
    }

    selectOptions() {
        const options = [];
    
        for (var i = 0; i < this.rows.length; i++) {
          const item = this.rows[i];
          const option = {};
          // first item is the pk
          // second item is the label
          option['value'] = item[0];
          option['label'] = item[1];
          option['selected'] = this.selected.includes(option.value);
    
          options.push(option);
        }
        return options;
    }

    onOptionClick(e){
        const selected = e.currentTarget.dataset['value'];
        
        this.selected = Array.from(new Set([...this.selected, selected]));   

        const cont=this.shadowRoot.querySelector('.card-header-title');

        cont.classList.add('has-values');
    }
    
    onDeselectValueClick(e) {
        e.stopPropagation();
        const item = e.currentTarget.dataset['value'];
    
        // remove item from selections
        var filteredAry = this.selected.filter(e => e != item);
        this.selected = filteredAry;

        const cont=this.shadowRoot.querySelector('.card-header-title');
        if(filteredAry.length==0){
            cont.classList.remove('has-values');
        }
    }

    getOption(value) {
        const o = this.rows.find(function(element) {
          return element[0] == value;
        });
          if (o) {
              return {
                'label': o[1],
                  'value': o[0],
              };
          }
    }

    // used for multi select
    getSelections() {
        const ss = this.selected.map(s=>this.getOption(s));
        return ss;
    }

    onSearchKeyUp(e){
        const searchValue = e.target.value;

        //search through allarrays and return the ones which have the searched value
        const searchArrays=this.allOptions.filter(arrs=>(arrs.name).toLowerCase().indexOf(searchValue)>-1);
        this.searchArrays=searchArrays;
        
        //display search results in list
        const ssOptions=this.shadowRoot.querySelectorAll('.ss-option');
  
        for(let i=0;i<ssOptions.length;i++){
            const singleArray=ssOptions[i];
           
            if(singleArray.innerHTML.toLowerCase().indexOf(searchValue)>-1){
                singleArray.style.display='';
            }else{
                singleArray.style.display="none"; 
            }
        }
    }

    getValue() {
        return this.selected.join(',');
      }

    static get is(){
        return 'tag-input';
    }

    render() {
        return html`
            <div class="content" id="content">
                <div class="card">
                    <header class="card-header" @click=${()=>this.openContent()}>
                        <button class="card-header-icon mainBtn" aria-label="more options">
                            <span class="icon is-small expandIcon"><adaptive-ui-icon icon="icons:add"></adaptive-ui-icon></span>
                        </button>
                        <div class="card-header-title">
                            <div class="ss-values">
                                <label for="name" class="label-name lblActive"><span id="label" class="content-name">Select ${this.e?.name}</span></label>
                                ${this.getSelections(this.selected).map(sel=>html`
                                <button class="button is-small ssBtn">
                                    <span class="ssLabel">${sel.label}</span>
                                    <span class="icon deleteIcon" data-value="${sel.value}" @click=${this.onDeselectValueClick}>
                                        <adaptive-ui-icon icon="icons:delete" dataColor="#fff" style="position:relative;top:-7px" class="fas fa-x"></adaptive-ui-icon>
                                    </span>
                                </button>
                                `)}        
                            </div>
                        </div>   
                    </header>
           
                    <div class="card-content ${this.isVisible ? "is-hidden" : ""}" id="optionsBox">
                        <div class="content">
                            <ul class="searchBar">
                                <li class="p-0">
                                        <div class="field">
                                            <div class="control">
                                                <input class="input" type="search" placeholder="Enter Search" @keyup=${this.onSearchKeyUp}>    
                                            </div>    
                                        </div>
                                </li>
                            </ul>
                            <ul class="optionsList">
                                ${this.selectOptions(this.rows).map(option=>html`
                                    <li class="py-1 ss-option ${option.selected?'ss-option-selected':''}" data-value=${option.value} @click=${this.onOptionClick}>${option.label}</li>
                                `)}      
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

}

customElements.define(TagInput.is, TagInput);