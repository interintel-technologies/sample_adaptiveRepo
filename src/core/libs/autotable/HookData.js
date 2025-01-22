import state from './state';
export class HookData {
  constructor() {
    const table = state().table;
    this.table = table;
    this.pageNumber = table.pageNumber;
    this.settings = table.settings;
    this.cursor = table.cursor;
    this.doc = state().doc;
  }
  get pageCount() {
    return this.pageNumber;
  }
}
export class CellHookData extends HookData {
  constructor(cell, row, column) {
    super();
    this.cell = cell;
    this.row = row;
    this.column = column;
    this.section = row.section;
  }
}
