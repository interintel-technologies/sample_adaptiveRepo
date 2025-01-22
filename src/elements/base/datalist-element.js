import {mqttMixin} from '../../core/mixins/mqtt-mixin';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import {utilsMixin} from '../../core/mixins/utils-mixin';
import {SerializableElement} from '../../core/serializable-element';
import {format, parseISO} from 'date-fns';

// import 'jspdf-autotable';
import {default as AutoTable} from '../../core/libs/autotable/main';
import {Logger} from '../../core/logger';
import jsPDF from 'jspdf';


// todo should extend SerializableElement is selectable
export const DataListElementBase = class extends utilsMixin(dataSourceMixin(mqttMixin(SerializableElement))) {
  static get is() {
    return 'datalist-element';
  }

  constructor() {
    super();
    this.limit = 50;
  }

  static get properties() {
    return {

      table: {type: Boolean, value: true},
      grid: {type: Boolean, value: false},
      list: {type: Boolean, value: false},

      sortProperty: {
        type: String,
      },

      selectedRows: {
        type: Array,
        value: [],
      },
      showActions: {type: Boolean, value: false, notify: true},
      selectType:{type:String, value:"multi"},
      message:String,
      gateway:String,

    };
  }


  dscDataName() {
    return this.e.defaultValue;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    if (self.e.kind) {
      try {
        self.register(self, self.e.kind);
      } catch (e) {
        console.error(e);
      }
    }

    this.loader.then(dsc => {
      // console.log(dsc);

    });
  }


  _handlePageChanged(event) {
    event.preventDefault();

    this.page = event.detail['page'];
    this.loadData().then(dsc => {
    });
  }

  _handleLimitChanged(event) {
    event.preventDefault();

    this.limit = event.detail['size'];
    this.loadData().then(dsc => {
    });
  }

  _handleSort(event) {
    event.preventDefault();

    this.sortProperty = event.detail.sort.property + ',' + event.detail.sort.direction;
  }

  _handleFilterTh(event) {
    var column = event.detail.column;

    console.log(column);
  }

  _handleFilter(event) {
    // var divLocal = document.createElement('div');
    var filter = event.detail.filter.value;
    var column = event.detail.column;


    this.updateParams(column.propertyPath, filter);

    // var eventRow = document.createTextNode(filter + ' is filtered on ' + column + ' column');
    // Polymer.dom(divLocal).appendChild(eventRow);
    // console.log(divLocal);
  }

  _handleDFilter(event) {
    // var divLocal = document.createElement('div');
    var filter = event.detail.value;
    var column = event.detail.path;
    // if (filter) {
    //   // todo this shouldn't happen
    //   // called when data changes and a re-render happens
    //   this.updateParams(column, filter);
    // }
    this.updateParams(column, filter);
  }

  /**
     * General and per column search event handler
     *
     *
     * @param event
     * @private
     */
  _handleSearch(event) {
    var filter = event.detail.value;
    var column = event.detail.column;
    var columns = event.detail.searchFields;

    // console.log(columns);
    // delete any previous column and general search query
    this.deleteParamKeys(columns.concat(['q']), false);

    // update new search query param
    this.updateParams(column, filter);
  }

  _handleDateRangeChange(event) { // todo COMPLETE
    var filter = event.detail.range;
    this.$.datasource.mergeParams(filter);
  }

  _handleSelectionChanged(event) {
    if (event.detail.selected) {
      // event.detail.selected
      // event.detail.data

      this.actionRow = event.detail.data;

      this.showActions = true;
    } else {
      // event.detail.deselected
      this.showActions = false;
    }
  }


  /**
   * Processes a custom export filename template with dynamic data from DSC
   * This includes date formatting
   *
   * @param literal
   * @return {string}
   * @private
   */
  _processTemplateLiteral(literal) {
    const content = literal.substring(1, literal.length - 1);
    const columns = content.split('(');
    const column = columns[0];
    const columns2 = columns[1].split(')');
    const extreme = columns2[0];
    const tokens = columns2[1].substring(1);

    // console.log(column,extreme,tokens);
    for (let i = 0; i < this.cols.length; i++) {
      const col = this.cols[i];
      if (col['label'] === column) {
        let dateString;

        if (extreme.toUpperCase() === 'MIN') {
          dateString = this.rows[0][i];
        } else if (extreme.toUpperCase() === 'MAX') {
          dateString = this.rows[this.rows.length - 1][i];
        }

        let date;
        // TODO below conditional block is duplicate from data-source-parser
        // requires a global solution

        if (col['type'] === 'datetime' || col['type'] === 'date') {
          date = dateString ? format(parseISO(dateString), tokens) : '';
        }

        return date;
      }
    }
    Logger.i.switchConfiguration(`${column} is not a valid column for the export file name, 
      Valid options are ${this.cols.map(c => c.label).join(',')}`);
    return '';
  }

  /*

    {“filename”: “i-INVEST_938_[Date Created(Min)=dd-Mmm-yyyy]_To_[Date Created(Max)=dd-Mmm-yyyy].csv”}

    *
    * */
  _processExportFileNameTemplate(tpl) {
    const re = /\[([^\]]+)?]/g; let match;

    const matches = tpl.match(re);
    for (let i = 0; i < matches.length; i++) {
      match = matches[i];
      tpl = tpl.replace(match, this._processTemplateLiteral(match));
    }
    return tpl;
  }


  generateCSV() {
    const self = this;
    const SEPARATOR = ',';

    let csvContent = 'data:text/csv;charset=utf-8,';
    const headers = this.cols.filter(col=>col['type']!='href').map(function(i) {
      return i['label'];
    });
    const row = headers.join(SEPARATOR);
    csvContent += row + '\r\n'; // add carriage return

    this.rows.forEach(function(row) {
      const rowArray = [];

      for (let i = 0; i < self.cols.length; i++) {
        const colType = self.cols[i]['type'];
        // todo convert types to constants
        if (colType!=='href') {
          const columnValue = row[i];
          // we have to check typeof because number is of type string from switch
          // TODO switch should have a type number
          if (colType==='string' && typeof columnValue === 'string') {
            rowArray.push(columnValue.replace(/[#,]/g, ' '));
          } else {
            rowArray.push(columnValue);
          }
        }
      }
      row = rowArray.join(SEPARATOR);
      csvContent += row + '\r\n'; // add carriage return
    });


    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);

    if ('export' in this.e.details) { // TODO verify properties existence
      link.setAttribute('download', this._processExportFileNameTemplate(this.e.details['export']['csv']['filename']));
    } else {
      link.setAttribute('download', this.e.defaultValue + '.csv');
    }

    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named this.e.defaultValue".csv".
  }

  /**
     * Sets the default type if passed value is null or invalid
     *
     * @param x
     * @return {string}
     * @private
     */
  _validateType(x) {
    return ('type' in x) ? x['type'].toLowerCase() : 'table';
  }

  _validateAlert(x) {
    return ('alert' in x) ? x['alert'] : false;
  }

  _validateState(x) {
    return x.state ? x.state : {};
  }

  /**
   * Sets the default page_limits if passed value is null or invalid
   *
   * @param x
   * @return {string}
   * @private
   */
  // _validatePageLimits(x) {
  //   return ('page_limits' in x) ? x['page_limits'] : [];
  // }

  generatePDF() {
    const self = this;
    // Only pt supported (not mm or in)
    var doc = new jsPDF();

    const rows = [];

    this.rows.forEach(function(row) {
      const rowArray = [];
      for (let i = 0; i < self.cols.length; i++) {
        if (self.cols[i]['type']!='href') {
          rowArray.push(row[i]);
        }
      }
      rows.push(rowArray);
    });

    const table = new AutoTable(doc);
    table.autoTable(this.cols.filter(col=>col['type']!='href').map(function(i) {
      return i['label'];
    }), rows, {
      theme: 'grid', // 'striped', 'grid' or 'plain'
      styles: {
        overflow: 'linebreak', // visible, hidden, ellipsize or linebreak
      },
      columnStyles: {text: {columnWidth: 'auto'}},
      margin: {top: 10, horizontal: 7},
    });

    if ('export' in this.e.details) { // TODO verify properties existence
      doc.save(this._processExportFileNameTemplate(this.e.details['export']['pdf']['filename']));
    } else {
      doc.save(this.e.defaultValue + '.pdf');
    }
  }

  onMqttMessage(message) {
    super.onMqttMessage(message);
    var self = this;
    console.log('datalist on-mqtt-message');
    var payload = JSON.parse(message.payloadString);
    console.info(payload);

    self.parseResponseIntoProperties(payload);
    // self.$.datasource._parsePayload(payload);
  }

  validate() {

    // console.log(" VALIDATE BASE CALLED!!");

    if(this.selectable){
      //pass selected to server
      // console.log('ACTION ROW IS', this.actionRow);

      this.updateParams(this.actionRow, false);

      
    }
    
    // if required but there is a default value, it is not invalid
    /*
        if(this.required && !this.getValue()){
            return new this.Validation(false,'invalid');
        }
        */
    return new this.Validation(true, 'valid');
  }

  getName() {
    return this.e.formName;
  }

  getValue() {
    if(this.selectable){
      //pass selected to server
      // console.log('ACTION ROW IS', this.actionRow);

      return this.actionRow;

      
    }
    return null;
  }

  valid(validation) {
  }

  invalid(validation) {
  }


  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.required = this.e.required || (pElement.min && pElement.min > 0);

    self.title = DataListElementBase.toTitleCase(pElement.name);
    self.params = loader.pl.paramsCopy();

    if ('selectable' in this.e.details) {
      self.selectable = this.e.details['selectable'];

      'select_type' in this.e.details ? self.selectType = this.e.details['select_type'] : self.selectType = 'multi';

    }

    if('empty_message' in this.e.details ){
      self.message = this.e.details['empty_message']
    }else{
      self.message = 'There is no data to preview at this time'
    }
    if('gateway' in this.e.details ){
      self.gateway = this.e.details['gateway']
    }

    self.loader = this.loadData();
  }
};
