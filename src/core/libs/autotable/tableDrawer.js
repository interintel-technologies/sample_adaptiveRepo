import {FONT_ROW_RATIO} from './config';
import {addTableBorder, applyStyles, applyUserStyles, getFillStyle} from './common';
import {Cell, Row} from './models';
import state from './state';

// const assign = require('object-assign');
import {assign} from './polyfills';
import {default as autoTableText} from './autoTableText';

export function drawTable(table) {
  const settings = table.settings;
  table.cursor = {
    x: table.margin('left'),
    y: settings.startY == null ? table.margin('top') : settings.startY,
  };
  let minTableBottomPos = settings.startY + table.margin('bottom') + table.headHeight + table.footHeight;
  if (settings.pageBreak === 'avoid') {
    minTableBottomPos += table.height;
  }
  if (settings.pageBreak === 'always' || settings.startY != null && settings.startY !== false && minTableBottomPos > state().pageHeight()) {
    nextPage(state().doc);
    table.cursor.y = table.margin('top');
  }
  table.pageStartX = table.cursor.x;
  table.pageStartY = table.cursor.y;
  table.startPageNumber = state().pageNumber();
  // An empty row used to cached cells those break through page
  applyUserStyles();
  if (settings.showHead === true || settings.showHead === 'firstPage' || settings.showHead === 'everyPage') {
    table.head.forEach((row) => printRow(row));
  }
  applyUserStyles();
  table.body.forEach(function(row, index) {
    printFullRow(row, index === table.body.length - 1);
  });
  applyUserStyles();
  if (settings.showFoot === true || settings.showFoot === 'lastPage' || settings.showFoot === 'everyPage') {
    table.foot.forEach((row) => printRow(row));
  }
  addTableBorder();
  table.callEndPageHooks();
}
function getRemainingLineCount(cell, remainingPageSpace) {
  const fontHeight = cell.styles.fontSize / state().scaleFactor() * FONT_ROW_RATIO;
  const vPadding = cell.padding('vertical');
  const remainingLines = Math.floor((remainingPageSpace - vPadding) / fontHeight);
  return Math.max(0, remainingLines);
}
function modifyRowToFit(row, remainingPageSpace, table) {
  const remainderRow = new Row(row.raw, -1, row.section);
  remainderRow.spansMultiplePages = true;
  row.spansMultiplePages = true;
  row.height = 0;
  row.maxCellHeight = 0;
  for (const column of table.columns) {
    const cell = row.cells[column.index];
    if (!cell)
    {continue;}
    if (!Array.isArray(cell.text)) {
      cell.text = [cell.text];
    }
    let remainderCell = new Cell(cell.raw, {}, cell.section);
    remainderCell = assign(remainderCell, cell);
    remainderCell.textPos = assign({}, cell.textPos);
    remainderCell.text = [];
    const remainingLineCount = getRemainingLineCount(cell, remainingPageSpace);
    if (cell.text.length > remainingLineCount) {
      remainderCell.text = cell.text.splice(remainingLineCount, cell.text.length);
    }
    cell.contentHeight = cell.getContentHeight();
    if (cell.contentHeight > row.height) {
      row.height = cell.contentHeight;
      row.maxCellHeight = cell.contentHeight;
    }
    remainderCell.contentHeight = remainderCell.getContentHeight();
    if (remainderCell.contentHeight > remainderRow.height) {
      remainderRow.height = remainderCell.contentHeight;
      remainderRow.maxCellHeight = remainderCell.contentHeight;
    }
    remainderRow.cells[column.index] = remainderCell;
  }
  for (const column of table.columns) {
    const remainderCell = remainderRow.cells[column.index];
    if (remainderCell) {
      remainderCell.height = remainderRow.height;
    }
    const cell = row.cells[column.index];
    if (cell) {
      cell.height = row.height;
    }
  }
  return remainderRow;
}
function shouldPrintOnCurrentPage(row, remainingPageSpace, table) {
  const pageHeight = state().pageHeight();
  const marginHeight = table.margin('top') - table.margin('bottom');
  const maxTableHeight = pageHeight - marginHeight;
  const minRowFits = row.getMinimumRowHeight() < remainingPageSpace;
  if (row.getMinimumRowHeight() > maxTableHeight) {
    console.error(`Will not be able to print row ${row.index} correctly since it's minimum height is larger than page height`);
    return true;
  }
  const rowHasRowSpanCell = table.columns.filter(column => {
    const cell = row.cells[column.index];
    if (!cell)
    {return false;}
    return cell.rowSpan > 1;
  }).length > 0;
  if (!minRowFits) {
    return false;
  }
  const rowHigherThanPage = row.maxCellHeight > maxTableHeight;
  if (rowHigherThanPage) {
    if (rowHasRowSpanCell) {
      console.error(`The content of row ${row.index} will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.`);
    }
    return true;
  }
  if (rowHasRowSpanCell) {
    // Currently a new page is required whenever a rowspan row don't fit a page.
    return false;
  }
  if (table.settings.rowPageBreak === 'avoid') {
    return false;
  }
  // In all other cases print the row on current page
  return true;
}
function printFullRow(row, isLastRow) {
  const table = state().table;
  const remainingPageSpace = getRemainingPageSpace(isLastRow);
  if (row.canEntireRowFit(remainingPageSpace)) {
    printRow(row);
  }
  else {
    if (shouldPrintOnCurrentPage(row, remainingPageSpace, table)) {
      const remainderRow = modifyRowToFit(row, remainingPageSpace, table);
      printRow(row);
      addPage();
      printFullRow(remainderRow, isLastRow);
    }
    else {
      addPage();
      printFullRow(row, isLastRow);
    }
  }
}
function printRow(row) {
  const table = state().table;
  table.cursor.x = table.margin('left');
  row.y = table.cursor.y;
  row.x = table.cursor.x;
  for (const column of table.columns) {
    const cell = row.cells[column.index];
    if (!cell) {
      table.cursor.x += column.width;
      continue;
    }
    applyStyles(cell.styles);
    cell.x = table.cursor.x;
    cell.y = row.y;
    if (cell.styles.valign === 'top') {
      cell.textPos.y = table.cursor.y + cell.padding('top');
    }
    else if (cell.styles.valign === 'bottom') {
      cell.textPos.y = table.cursor.y + cell.height - cell.padding('bottom');
    }
    else {
      cell.textPos.y = table.cursor.y + cell.height / 2;
    }
    if (cell.styles.halign === 'right') {
      cell.textPos.x = cell.x + cell.width - cell.padding('right');
    }
    else if (cell.styles.halign === 'center') {
      cell.textPos.x = cell.x + cell.width / 2;
    }
    else {
      cell.textPos.x = cell.x + cell.padding('left');
    }
    if (table.callCellHooks(table.cellHooks.willDrawCell, cell, row, column) === false) {
      table.cursor.x += column.width;
      continue;
    }
    const fillStyle = getFillStyle(cell.styles);
    if (fillStyle) {
      state().doc.rect(cell.x, table.cursor.y, cell.width, cell.height, fillStyle);
    }
    autoTableText(state().doc,cell.text, cell.textPos.x, cell.textPos.y, {
      halign: cell.styles.halign,
      valign: cell.styles.valign,
      maxWidth: Math.ceil(cell.width - cell.padding('left') - cell.padding('right')),
    });
    table.callCellHooks(table.cellHooks.didDrawCell, cell, row, column);
    table.cursor.x += column.width;
  }
  table.cursor.y += row.height;
}
function getRemainingPageSpace(isLastRow) {
  const table = state().table;
  let bottomContentHeight = table.margin('bottom');
  const showFoot = table.settings.showFoot;
  if (showFoot === true || showFoot === 'everyPage' || (showFoot === 'lastPage' && isLastRow)) {
    bottomContentHeight += table.footHeight;
  }
  return state().pageHeight() - table.cursor.y - bottomContentHeight;
}
export function addPage() {
  const table = state().table;
  applyUserStyles();
  if (table.settings.showFoot === true || table.settings.showFoot === 'everyPage') {
    table.foot.forEach((row) => printRow(row));
  }
  table.finalY = table.cursor.y;
  // Add user content just before adding new page ensure it will
  // be drawn above other things on the page
  table.callEndPageHooks();
  addTableBorder();
  nextPage(state().doc);
  table.pageNumber++;
  table.cursor = {x: table.margin('left'), y: table.margin('top')};
  table.pageStartX = table.cursor.x;
  table.pageStartY = table.cursor.y;
  if (table.settings.showHead === true || table.settings.showHead === 'everyPage') {
    table.head.forEach((row) => printRow(row));
  }
}
function nextPage(doc) {
  const current = state().pageNumber();
  doc.setPage(current + 1);
  const newCurrent = state().pageNumber();
  if (newCurrent === current) {
    doc.addPage();
  }
}
