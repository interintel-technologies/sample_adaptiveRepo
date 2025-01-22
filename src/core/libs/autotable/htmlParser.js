import {parseCss} from './cssParser';
import state from './state';
export function parseHtml(input, includeHiddenHtml = false, useCss = false) {
  let tableElement;
  if (typeof input === 'string') {
    tableElement = window.document.querySelector(input);
  }
  else {
    tableElement = input;
  }
  if (!tableElement) {
    console.error('Html table could not be found with input: ', input);
    return;
  }
  const head = parseTableSection(window, tableElement.tHead, includeHiddenHtml, useCss);
  let body = [];
  for (var i = 0; i < tableElement.tBodies.length; i++) {
    body = body.concat(parseTableSection(window, tableElement.tBodies[i], includeHiddenHtml, useCss));
  }
  const foot = parseTableSection(window, tableElement.tFoot, includeHiddenHtml, useCss);
  return {head, body, foot};
}
function parseTableSection(window, sectionElement, includeHidden, useCss) {
  const results = [];
  if (!sectionElement) {
    return results;
  }
  for (let i = 0; i < sectionElement.rows.length; i++) {
    const row = sectionElement.rows[i];
    const resultRow = [];
    const rowStyles = useCss ? parseCss(row, state().scaleFactor(), ['cellPadding', 'lineWidth', 'lineColor']) : {};
    for (let i = 0; i < row.cells.length; i++) {
      const cell = row.cells[i];
      const style = window.getComputedStyle(cell);
      if (includeHidden || style.display !== 'none') {
        const cellStyles = useCss ? parseCss(cell, state().scaleFactor()) : {};
        resultRow.push({
          rowSpan: cell.rowSpan,
          colSpan: cell.colSpan,
          styles: useCss ? cellStyles : null,
          _element: cell,
          content: parseCellContent(cell),
        });
      }
    }
    if (resultRow.length > 0 && (includeHidden || rowStyles.display !== 'none')) {
      resultRow._element = row;
      results.push(resultRow);
    }
  }
  return results;
}
function parseCellContent(orgCell) {
  // Work on cloned node to make sure no changes are applied to html table
  const cell = orgCell.cloneNode(true);
  // Remove extra space and line breaks in markup to make it more similar to
  // what would be shown in html
  cell.innerHTML = cell.innerHTML
    .replace(/\n/g, '')
    .replace(/ +/g, ' ');
  // Preserve <br> tags as line breaks in the pdf
  cell.innerHTML = cell.innerHTML
    .split('<br>')
    .map(part => part.trim())
    .join('\n');
  // innerText for ie
  return cell.innerText || cell.textContent || '';
}
