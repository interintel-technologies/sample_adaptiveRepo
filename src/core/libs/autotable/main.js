import {drawTable} from './tableDrawer';
import {calculateWidths} from './widthCalculator';
import {parseInput} from './inputParser';
import {setDefaults, setupState, resetState} from './state';
import {applyUserStyles} from './common';
import {parseHtml} from './htmlParser';


export default class AutoTable {
  constructor(doc) {
    setupState(doc);
  }

  autoTable(...args) {
    // 1. Parse and unify user input
    const table = parseInput(args);
    // 2. Calculate preliminary table, column, row and cell dimensions
    calculateWidths(table);
    // 3. Output table to pdf
    drawTable(table);
    table.finalY = table.cursor.y;
    this.previousAutoTable = table;
    this.lastAutoTable = table;
    // this.autoTable.previous = table; // Deprecated
    applyUserStyles();
    resetState();
    return this;
  }
}


// TODO commented out left for reference with original
// jsPDF.API.autoTable = autoTable;
// // Assign false to enable `doc.lastAutoTable.finalY || 40` sugar;
// jsPDF.API.lastAutoTable = false;


// jsPDF.API.autoTableSetDefaults = function(defaults) {
//   setDefaults(defaults, this);
//   return this;
// };

// jsPDF.autoTableSetDefaults = function(defaults, doc) {
//   setDefaults(defaults, doc);
//   return this;
// };

// jsPDF.API.autoTableHtmlToJson = function(tableElem, includeHiddenElements) {
//   includeHiddenElements = includeHiddenElements || false;
//   if (!tableElem || !(tableElem instanceof HTMLTableElement)) {
//     console.error('A HTMLTableElement has to be sent to autoTableHtmlToJson');
//     return null;
//   }
//   const {head, body, foot} = parseHtml(tableElem, includeHiddenElements, false);
//   const firstRow = head[0] || body[0] || foot[0];
//   return {columns: firstRow, rows: body, data: body};
// };
