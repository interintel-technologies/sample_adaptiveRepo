/**
 * Ratio between font size and font height. The number comes from jspdf's source code
 */
export const FONT_ROW_RATIO = 1.15;
import state from './state';
export function defaultConfig() {
  return {
    // Html content
    html: null,
    // Custom content
    head: null,
    body: null,
    foot: null,
    // Properties
    includeHiddenHtml: false,
    startY: null,
    margin: 40 / state().scaleFactor(),
    pageBreak: 'auto',
    rowPageBreak: 'auto',
    tableWidth: 'auto',
    showHead: 'everyPage',
    showFoot: 'everyPage',
    tableLineWidth: 0,
    tableLineColor: 200,
    tableId: null,
    // Styling
    theme: 'striped',
    useCss: false,
    styles: {},
    headStyles: {},
    bodyStyles: {},
    footStyles: {},
    alternateRowStyles: {},
    columnStyles: {},
    // Hooks
    // Use to change the content of the cell before width calculations etc are performed
    didParseCell: function(data) {
    },
    willDrawCell: function(data) {
    },
    // Use to draw additional content such as images in table cells
    didDrawCell: function(data) {
    },
    // Use to draw additional content to each page such as headers and footers
    didDrawPage: function(data) {
    },
  };
}
// Base style for all themes
export function defaultStyles() {
  return {
    font: 'helvetica',
    fontStyle: 'normal',
    overflow: 'linebreak',
    fillColor: false,
    textColor: 20,
    halign: 'left',
    valign: 'top',
    fontSize: 10,
    cellPadding: 5 / state().scaleFactor(),
    lineColor: 200,
    lineWidth: 0 / state().scaleFactor(),
    cellWidth: 'auto',
    minCellHeight: 0,
  };
}
/**
 * Styles for the themes (overriding the default styles)
 */
export function getTheme(name) {
  const themes = {
    'striped': {
      table: {fillColor: 255, textColor: 80, fontStyle: 'normal'},
      head: {textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold'},
      body: {},
      foot: {textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold'},
      alternateRow: {fillColor: 245},
    },
    'grid': {
      table: {fillColor: 255, textColor: 80, fontStyle: 'normal', lineWidth: 0.1},
      head: {textColor: 255, fillColor: [26, 188, 156], fontStyle: 'bold', lineWidth: 0},
      body: {},
      foot: {textColor: 255, fillColor: [26, 188, 156], fontStyle: 'bold', lineWidth: 0},
      alternateRow: {},
    },
    'plain': {
      head: {fontStyle: 'bold'},
      foot: {fontStyle: 'bold'},
    },
  };
  return themes[name];
}
