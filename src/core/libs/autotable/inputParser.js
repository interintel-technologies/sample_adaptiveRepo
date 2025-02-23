import {Row, Cell, Column, Table} from './models';
import {getTheme, defaultConfig, defaultStyles} from './config';
import {parseHtml} from './htmlParser';
import {assign} from './polyfills';
import {getStringWidth, marginOrPadding} from './common';
import state, {getGlobalOptions, getDocumentOptions} from './state';
import validateInput from './inputValidator';
/**
 * Create models from the user input
 */
export function parseInput(args) {
  const tableOptions = parseUserArguments(args);
  const globalOptions = getGlobalOptions();
  const documentOptions = getDocumentOptions();
  const allOptions = [globalOptions, documentOptions, tableOptions];
  validateInput(allOptions);
  const table = new Table();
  state().table = table;
  table.id = tableOptions.tableId;
  const doc = state().doc;
  table.userStyles = {
    // Setting to black for versions of jspdf without getTextColor
    textColor: doc.getTextColor ? doc.getTextColor() : 0,
    fontSize: doc.internal.getFontSize(),
    fontStyle: doc.internal.getFont().fontStyle,
    font: doc.internal.getFont().fontName,
  };
  // Merge styles one level deeper
  for (const styleProp of Object.keys(table.styles)) {
    const styles = allOptions.map(opts => opts[styleProp] || {});
    table.styles[styleProp] = assign({}, ...styles);
  }
  // Append hooks
  for (const opts of allOptions) {
    for (const hookName of Object.keys(table.cellHooks)) {
      if (opts && typeof opts[hookName] === 'function') {
        table.cellHooks[hookName].push(opts[hookName]);
      }
    }
  }
  table.settings = assign({}, defaultConfig(), ...allOptions);
  table.settings.margin = marginOrPadding(table.settings.margin, defaultConfig().margin);
  if (table.settings.theme === 'auto') {
    table.settings.theme = table.settings.useCss ? 'plain' : 'striped';
  }
  if (table.settings.startY === false) {
    delete table.settings.startY;
  }
  const previous = state().doc.previousAutoTable;
  const isSamePageAsPrevious = previous && previous.startPageNumber + previous.pageNumber - 1 === state().pageNumber();
  if (table.settings.startY == null && isSamePageAsPrevious) {
    table.settings.startY = previous.finalY + 20 / state().scaleFactor();
  }
  let htmlContent = {};
  if (table.settings.html) {
    htmlContent = parseHtml(table.settings.html, table.settings.includeHiddenHtml, table.settings.useCss) || {};
  }
  table.settings.head = htmlContent.head || table.settings.head || [];
  table.settings.body = htmlContent.body || table.settings.body || [];
  table.settings.foot = htmlContent.foot || table.settings.foot || [];
  parseContent(table);
  table.minWidth = table.columns.reduce((total, col) => (total + col.minWidth), 0);
  table.wrappedWidth = table.columns.reduce((total, col) => (total + col.wrappedWidth), 0);
  if (typeof table.settings.tableWidth === 'number') {
    table.width = table.settings.tableWidth;
  }
  else if (table.settings.tableWidth === 'wrap') {
    table.width = table.wrappedWidth;
  }
  else {
    table.width = state().pageWidth() - table.margin('left') - table.margin('right');
  }
  return table;
}
function parseUserArguments(args) {
  // Normal initialization on format doc.autoTable(options)
  if (args.length === 1) {
    return args[0];
  }
  else {
    // Deprecated initialization on format doc.autoTable(columns, body, [options])
    const opts = args[2] || {};
    opts.body = args[1];
    opts.columns = args[0];
    opts.columns.forEach(col => {
      // Support v2 title prop in v3
      if (typeof col === 'object' && col.header == null) {
        col.header = col.title;
      }
    });
    return opts;
  }
}
function parseContent(table) {
  const settings = table.settings;
  table.columns = getTableColumns(settings);
  for (const sectionName of ['head', 'body', 'foot']) {
    const rowSpansLeftForColumn = {};
    const sectionRows = settings[sectionName];
    if (sectionRows.length === 0 && settings.columns && sectionName !== 'body') {
      // If no head or foot is set, try generating one with content in columns
      const sectionRow = generateSectionRowFromColumnData(table, sectionName);
      if (sectionRow) {
        sectionRows.push(sectionRow);
      }
    }
    sectionRows.forEach((rawRow, rowIndex) => {
      let skippedRowForRowSpans = 0;
      const row = new Row(rawRow, rowIndex, sectionName);
      table[sectionName].push(row);
      let colSpansAdded = 0;
      let columnSpansLeft = 0;
      for (const column of table.columns) {
        if (rowSpansLeftForColumn[column.index] == null || rowSpansLeftForColumn[column.index].left === 0) {
          if (columnSpansLeft === 0) {
            let rawCell;
            if (Array.isArray(rawRow)) {
              rawCell = rawRow[column.index - colSpansAdded - skippedRowForRowSpans];
            }
            else {
              rawCell = rawRow[column.dataKey];
            }
            const styles = cellStyles(sectionName, column, rowIndex);
            const cell = new Cell(rawCell, styles, sectionName);
            // dataKey is not used internally anymore but keep for backwards compat in hooks
            row.cells[column.dataKey] = cell;
            row.cells[column.index] = cell;
            columnSpansLeft = cell.colSpan - 1;
            rowSpansLeftForColumn[column.index] = {left: cell.rowSpan - 1, times: columnSpansLeft};
          }
          else {
            columnSpansLeft--;
            colSpansAdded++;
          }
        }
        else {
          rowSpansLeftForColumn[column.index].left--;
          columnSpansLeft = rowSpansLeftForColumn[column.index].times;
          skippedRowForRowSpans++;
        }
      }
    });
  }
  table.allRows().forEach(row => {
    for (const column of table.columns) {
      const cell = row.cells[column.index];
      if (!cell)
      {continue;}
      table.callCellHooks(table.cellHooks.didParseCell, cell, row, column);
      cell.contentWidth = cell.padding('horizontal') + getStringWidth(cell.text, cell.styles);
      if (typeof cell.styles.cellWidth === 'number') {
        cell.minWidth = cell.styles.cellWidth;
        cell.wrappedWidth = cell.styles.cellWidth;
      }
      else if (cell.styles.cellWidth === 'wrap') {
        cell.minWidth = cell.contentWidth;
        cell.wrappedWidth = cell.contentWidth;
      }
      else { // auto
        const defaultMinWidth = 10 / state().scaleFactor();
        cell.minWidth = cell.styles.minCellWidth || defaultMinWidth;
        cell.wrappedWidth = cell.contentWidth;
        if (cell.minWidth > cell.wrappedWidth) {
          cell.wrappedWidth = cell.minWidth;
        }
      }
    }
  });
  table.allRows().forEach(row => {
    for (const column of table.columns) {
      const cell = row.cells[column.index];
      // For now we ignore the minWidth and wrappedWidth of colspan cells when calculating colspan widths.
      // Could probably be improved upon however.
      if (cell && cell.colSpan === 1) {
        if (cell.wrappedWidth > column.wrappedWidth) {
          column.wrappedWidth = cell.wrappedWidth;
        }
        if (cell.minWidth > column.minWidth) {
          column.minWidth = cell.minWidth;
        }
      }
      else {
        // Respect cellWidth set in columnStyles even if there is no cells for this column
        // or of it the column only have colspan cells. Since the width of colspan cells
        // does not affect the width of columns, setting columnStyles cellWidth enables the
        // user to at least do it manually.
        // Note that this is not perfect for now since for example row and table styles are
        // not accounted for
        const columnStyles = table.styles.columnStyles[column.dataKey] || table.styles.columnStyles[column.index] || {};
        const cellWidth = columnStyles.cellWidth;
        if (cellWidth && typeof cellWidth === 'number') {
          column.minWidth = cellWidth;
          column.wrappedWidth = cellWidth;
        }
      }
      if (cell) {
        // Make sure all columns get at least min width even though width calculations are not based on them
        if (cell.colSpan > 1 && !column.minWidth) {
          column.minWidth = cell.minWidth;
        }
        if (cell.colSpan > 1 && !column.wrappedWidth) {
          column.wrappedWidth = cell.minWidth;
        }
        table.callCellHooks(table.cellHooks.didParseCell, cell, row, column);
      }
    }
  });
}
function generateSectionRowFromColumnData(table, sectionName) {
  const sectionRow = {};
  table.columns
    .forEach(col => {
      const columnData = col.raw;
      if (sectionName === 'head') {
        const val = columnData && columnData.header ? columnData.header : columnData;
        if (val) {
          sectionRow[col.dataKey] = val;
        }
      }
      else if (sectionName === 'foot' && columnData.footer) {
        sectionRow[col.dataKey] = columnData.footer;
      }
    });
  return Object.keys(sectionRow).length > 0 ? sectionRow : null;
}
function getTableColumns(settings) {
  if (settings.columns) {
    const cols = settings.columns.map((input, index) => {
      const key = input.dataKey || input.key || index;
      return new Column(key, input, index);
    });
    return cols;
  }
  else {
    const firstRow = settings.head[0] || settings.body[0] || settings.foot[0] || [];
    const columns = [];
    Object.keys(firstRow)
      .filter(key => key !== '_element')
      .forEach(key => {
        const colSpan = firstRow[key] && firstRow[key].colSpan ? firstRow[key].colSpan : 1;
        for (let i = 0; i < colSpan; i++) {
          let id;
          if (Array.isArray(firstRow)) {
            id = columns.length;
          }
          else {
            id = key + (i > 0 ? `_${i}` : '');
          }
          columns.push(new Column(id, id, columns.length));
        }
      });
    return columns;
  }
}
function cellStyles(sectionName, column, rowIndex) {
  const table = state().table;
  const theme = getTheme(table.settings.theme);
  const otherStyles = [theme.table, theme[sectionName], table.styles.styles, table.styles[`${sectionName}Styles`]];
  const columnStyles = table.styles.columnStyles[column.dataKey] || table.styles.columnStyles[column.index] || {};
  const colStyles = sectionName === 'body' ? columnStyles : {};
  const rowStyles = sectionName === 'body' && rowIndex % 2 === 0 ? assign({}, theme.alternateRow, table.styles.alternateRowStyles) : {};
  return assign(defaultStyles(), ...[...otherStyles, rowStyles, colStyles]);
}
