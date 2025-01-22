

// column types
// string
// date
// datetime
// boolean
// href

export class DatalistColumn {
  constructor() {
    this.type = null; // string date  datetime  boolean  href
    this.actions = false;
    this.header = ''; // The name of the header for this column.
    this.property = ''; // Property which will be available in data (throught paper-datatable-api).
    this.propertyPath = '';
    this.otherProperties = []; //
    this.sortable = false; // If true, the colum can be sort.
    this.draggableColumn = false; // If true, the column can be draggable.
    this.hidden = false; // If true, the column is hidden.
    this.sortDirection = false; // Current sort direction (asc or desc).
    this.sorted = false; // If true, the column is currently sorted.
    this.filter = false; // If true, the column can be filtered.
    this.date = false; // If true, a date picker is displayed when the column is sorted.
    this.hideable = true; // If true, the column can be hidden.
    this.position = false; // Position of the column in the table.
    this.activeFilter = false;
    this.choices = false; // If set, the choices are displayed in place of the paper-input (in filter mode)
  }

  toString() {
    return this.header;
  }
}


