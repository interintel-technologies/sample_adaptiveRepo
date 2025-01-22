import {Command} from './command';
import {format, parseISO} from 'date-fns';
import {DatalistColumn} from './dsc/datalist-column';
import {Logger} from '../../logger';

export class DataSource extends Command {
  constructor(dataSourceResponse, config) {
    super(dataSourceResponse, config);
  
  }
  /**
   * Returns a new instance of a a Parsed data_source Response,
   * The parser can be controlled by the response type.
   *
   * @param config .response.data_source
   * @param {Symbol} dataResponseType Symbol.for('DATA')|Symbol.for('LIST')|Symbol.for('STRING')
   */
  parse(config={}) {
    this._parsePayload(this.commandResponse, config['responseType']);
  }

  /**
   * Retrieves the values of the params of a link into an object
   * TODO update documentation
   * TODO make private
   * @param paramsConfig
   * @param item
   */
  linkParams(paramsConfig, item) {
    const params = {};
    for (var linkParamKey in paramsConfig) {
      var linkParam = paramsConfig[linkParamKey];
      params[linkParamKey] = item[linkParam];
    }
    return params;
  }

  /**
   * Parse data_source Response, performs the following modifications
   * - Generates data from LIST response types
   * - Generates action Links
   * - Pagination (calculating page size)
   * - Parsing of Columns, i.e
   *      date/datetime from iso to local,
   *      JSON to a key:value list
   * - Adds a Selection column if selectable
   *
   * @param {Object} payload
   * @param {Symbol} responseType
   */
  _parsePayload(payload, responseType) {
    const self = this;
    
    const dataSource = payload?.response?.response?.data_source;

    if (!dataSource || !dataSource.cols || !dataSource.rows || !dataSource.groups) {
      self.cols = [];
      self.rows = [];
      self.groups = [];
      self.totalElements = 0;
      self.data = []
      return; // Exit early if the structure is missing
    }

    self.cols = payload.response.response.data_source.cols;

    // todo does this also only exists for `DATA` response type
    self.groups = payload.response.response.data_source.groups;

    if (payload.response.response.data_source.row_count) {
      self.totalElements = payload.response.response.data_source.row_count;
    } else {
      Logger.i.switchConfiguration('Datalist response without row_count');
    }

    const maxId = payload.max_id;
    // self.max = max_id;
    const minId = payload.min_id;
    // self.min = min_id;

    if (responseType === Symbol.for('LIST')) {
      self.rows = payload.response.response.data_source.rows;

      // generation of data from LIST
      // TODO make this conditional
      var items = [];
     
      for (var i = 0; i < self.rows.length; i++) {
        var item = {};
        var itemLinks = [];

        for (var j = 0; j < self.cols.length; j++) {
          const col = self.cols[j];
          if (col['type'] === 'href') {
            if ('links' in col) {
              // NOTE  Old deprecated links parsing
              Logger.i.switchConfiguration(
                `DSC query should be updated to use [Datalist Link Query] instead of [Links and Link params]`, this
              );
            } else {
              // dynamic links with variable params
              const linkString = self.rows[i][j];

              // links that don't match case field and value are empty
              let linkParts = {};
              try {
                linkParts = JSON.parse(linkString);
              } catch (e) {
                console.error(e);
                continue;
              }

              const linkProcessed = {};
              linkProcessed['service'] = linkParts['service'];
              linkProcessed['icon'] = linkParts['icon'];
              linkProcessed['title'] = col['label'];

              linkProcessed['params'] = this.linkParams(
                linkParts['params'],
                item
              );
              itemLinks.push(linkProcessed);
            }
          } else if (col['type'] === 'datetime') {
            // console.log(parseISO(self.rows[i][j]));
            item[col['label']] = self.rows[i][j] ? format(parseISO(self.rows[i][j]), 'MMM dd yyyy, h:mm:ss a') : '';
          } else if (col['type'] === 'date') {
            item[col['label']] = self.rows[i][j] ? format(parseISO(self.rows[i][j]), 'MMM dd yyyy') : '';
          } else {
            item[col['label']] = self.rows[i][j];
          }
        }

        item['links'] = itemLinks;

        // Ensure we have an id property
        if (!('id' in item)) {
          if ('index' in item) {
            item['id'] = item['index'];
          }
        }

        items.push(item);
        // console.log(item);
      }

      if(payload.response.response.data_source.data && payload.response.response.data_source.data.length > 0){
        self.data = payload.response.response.data_source.data;
      }
      else{
        self.data = items;
      }


      // console.log(JSON.stringify(self.data));

      // TODO move_columns generation into datalist
      // console.log(self.data);
      const columns = [];
      let processedActions = false;

      // add selectable column
      if (self.selectable) {
        const datalistColumnS = new DatalistColumn();
        datalistColumnS.header = '';
        columns.push(datalistColumnS);
      }

      self.cols.forEach(function(col) {
        const datalistColumn = new DatalistColumn();
        datalistColumn.type = col['type'];

        if (col['type'] === 'href') {
          if (!processedActions) {
            datalistColumn.header = '';
            datalistColumn.actions = true;

            columns.push(datalistColumn);
            processedActions = true;
          }
        } else {
          datalistColumn.header = col['label'];
          datalistColumn.filter = 'search_filters' in col && col['search_filters'];
          datalistColumn.date = 'date_filters' in col;
          datalistColumn.property = col['label'];
          datalistColumn.propertyPath = col['value'];

          datalistColumn.choices = (datalistColumn.date) ?
            'date_filters' in col && col['date_filters'] :
            'list_filters' in col && col['list_filters'];

          // list_filters
          // console.log(datalistColumn);
          columns.push(datalistColumn);
        }
      });

      self.columns = columns;
      // console.log(self.columns)
      // END TODO move_columns generation into datalist
      // self.data = payload.data;

    } else if (responseType === Symbol.for('DATA')) {
      self.data = payload.data;
      self.groups = payload.groups;
    } else if (responseType === Symbol.for('LINES')) {
      Logger.i.incompleteDev('Data source response type - LINES ');
    } else {
      throw new DOMException('[Critical Error] unknown dataResponseType ');
    }
  }
}
