let defaultsDocument = null;
let previousTableState;
let tableState = null;
export let globalDefaults = {};
export let documentDefaults = {};
export default function() {
  return tableState;
}
export function getGlobalOptions() {
  return globalDefaults;
}
export function getDocumentOptions() {
  return documentDefaults;
}
class TableState {
  constructor(doc) {
    this.doc = doc;
  }
  pageHeight() {
    return this.pageSize().height;
  }

  pageWidth() {
    return this.pageSize().width;
  }

  pageSize() {
    let pageSize = this.doc.internal.pageSize;
    // JSPDF 1.4 uses get functions instead of properties on pageSize
    if (pageSize.width == null) {
      pageSize = {
        width: pageSize.getWidth(),
        height: pageSize.getHeight(),
      };
    }
    return pageSize;
  }

  scaleFactor() {
    return this.doc.internal.scaleFactor;
  }

  pageNumber() {
    const pageInfo = this.doc.internal.getCurrentPageInfo();
    if (!pageInfo) {
      // Only recent versions of jspdf has pageInfo
      return this.doc.internal.getNumberOfPages();
    }
    return pageInfo.pageNumber;
  }
}
export function setupState(doc) {
  previousTableState = tableState;
  tableState = new TableState(doc);
  if (doc !== defaultsDocument) {
    defaultsDocument = doc;
    documentDefaults = {};
  }
}
export function resetState() {
  tableState = previousTableState;
}
export function setDefaults(defaults, doc = null) {
  if (doc) {
    documentDefaults = defaults || {};
    defaultsDocument = doc;
  }
  else {
    globalDefaults = defaults || {};
  }
}
