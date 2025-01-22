import {defaultConfig, FONT_ROW_RATIO} from './config';
import state from './state';
import {CellHookData, HookData} from './HookData';
import {applyUserStyles, marginOrPadding, styles} from './common';

import {assign} from './polyfills';

class CellHooks {
  constructor() {
    this.didParseCell = [];
    this.willDrawCell = [];
    this.didDrawCell = [];
    this.didDrawPage = [];
  }
}
export class Table {
  constructor() {
    this.columns = [];
    this.head = [];
    this.body = [];
    this.foot = [];
    this.height = 0;
    this.width = 0;
    this.preferredWidth = 0;
    this.wrappedWidth = 0;
    this.minWidth = 0;
    this.headHeight = 0;
    this.footHeight = 0;
    this.startPageNumber = 1;
    this.pageNumber = 1;
    this.styles = {
      styles: {},
      headStyles: {},
      bodyStyles: {},
      footStyles: {},
      alternateRowStyles: {},
      columnStyles: {},
    };
    this.cellHooks = new CellHooks();
  }
  get pageCount() {
    return this.pageNumber;
  }
  allRows() {
    return this.head.concat(this.body).concat(this.foot);
  }
  callCellHooks(handlers, cell, row, column) {
    for (const handler of handlers) {
      if (handler(new CellHookData(cell, row, column)) === false) {
        return false;
      }
    }
    return true;
  }
  callEndPageHooks() {
    applyUserStyles();
    for (const handler of this.cellHooks.didDrawPage) {
      handler(new HookData());
    }
  }
  margin(side) {
    return marginOrPadding(this.settings.margin, defaultConfig().margin)[side];
  }
}
export class Row {
  constructor(raw, index, section) {
    this.cells = {};
    this.height = 0;
    this.maxCellHeight = 0;
    this.pageNumber = 1;
    this.spansMultiplePages = false;
    this.raw = raw;
    if (raw._element) {
      this.raw = raw._element;
    }
    this.index = index;
    this.section = section;
  }
  get pageCount() {
    return this.pageNumber;
  }
  canEntireRowFit(height) {
    return this.maxCellHeight <= height;
  }
  getMinimumRowHeight() {
    return state().table.columns.reduce((acc, column) => {
      const cell = this.cells[column.index];
      if (!cell)
      {return 0;}
      const fontHeight = cell.styles.fontSize / state().scaleFactor() * FONT_ROW_RATIO;
      const vPadding = cell.padding('vertical');
      const oneRowHeight = vPadding + fontHeight;
      return oneRowHeight > acc ? oneRowHeight : acc;
    }, 0);
  }
}
export class Cell {
  constructor(raw, themeStyles, section) {
    this.contentHeight = 0;
    this.contentWidth = 0;
    this.wrappedWidth = 0;
    this.minWidth = 0;
    this.textPos = {};
    this.height = 0;
    this.width = 0;
    this.rowSpan = raw && raw.rowSpan || 1;
    this.colSpan = raw && raw.colSpan || 1;
    this.styles = assign(themeStyles, raw && raw.styles || {});
    this.section = section;
    let text;
    let content = raw && raw.content != null ? raw.content : raw;
    content = content && content.title != null ? content.title : content;
    this.raw = raw && raw._element ? raw._element : raw;
    // Stringify 0 and false, but not undefined or null
    text = content != null ? '' + content : '';
    const splitRegex = /\r\n|\r|\n/g;
    this.text = text.split(splitRegex);
  }
  getContentHeight() {
    const lineCount = Array.isArray(this.text) ? this.text.length : 1;
    const fontHeight = this.styles.fontSize / state().scaleFactor() * FONT_ROW_RATIO;
    return lineCount * fontHeight + this.padding('vertical');
  }
  padding(name) {
    const padding = marginOrPadding(this.styles.cellPadding, styles([]).cellPadding);
    if (name === 'vertical') {
      return padding.top + padding.bottom;
    }
    else if (name === 'horizontal') {
      return padding.left + padding.right;
    }
    else {
      return padding[name];
    }
  }
}
export class Column {
  constructor(dataKey, raw, index) {
    this.preferredWidth = 0;
    this.minWidth = 0;
    this.wrappedWidth = 0;
    this.width = 0;
    this.dataKey = dataKey;
    this.raw = raw;
    this.index = index;
  }
}
