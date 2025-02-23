import {defaultStyles} from './config';
import state from './state';
import {assign} from './polyfills';
export function getStringWidth(text, styles) {
  applyStyles(styles);
  const textArr = Array.isArray(text) ? text : [text];
  const widestLineWidth = textArr
    .map(text => state().doc.getTextWidth(text))
  // Shave off a few digits for potential improvement in width calculation
    .map(val => Math.floor(val * 10000) / 10000)
    .reduce((a, b) => Math.max(a, b), 0);
  const fontSize = styles.fontSize / state().scaleFactor();
  return widestLineWidth;
}
/**
 * Ellipsize the text to fit in the width
 */
export function ellipsize(text, width, styles, ellipsizeStr = '...') {
  if (Array.isArray(text)) {
    const value = [];
    text.forEach(function(str, i) {
      value[i] = ellipsize(str, width, styles, ellipsizeStr);
    });
    return value;
  }
  const precision = 10000 * state().scaleFactor();
  width = Math.ceil(width * precision) / precision;
  if (width >= getStringWidth(text, styles)) {
    return text;
  }
  while (width < getStringWidth(text + ellipsizeStr, styles)) {
    if (text.length <= 1) {
      break;
    }
    text = text.substring(0, text.length - 1);
  }
  return text.trim() + ellipsizeStr;
}
export function addTableBorder() {
  const table = state().table;
  const styles = {lineWidth: table.settings.tableLineWidth, lineColor: table.settings.tableLineColor};
  applyStyles(styles);
  const fs = getFillStyle(styles);
  if (fs) {
    state().doc.rect(table.pageStartX, table.pageStartY, table.width, table.cursor.y - table.pageStartY, fs);
  }
}
export function getFillStyle(styles) {
  const drawLine = styles.lineWidth > 0;
  const drawBackground = styles.fillColor || styles.fillColor === 0;
  if (drawLine && drawBackground) {
    return 'DF'; // Fill then stroke
  }
  else if (drawLine) {
    return 'S'; // Only stroke (transparent background)
  }
  else if (drawBackground) {
    return 'F'; // Only fill, no stroke
  }
  else {
    return false;
  }
}
export function applyUserStyles() {
  applyStyles(state().table.userStyles);
}
export function applyStyles(styles) {
  const doc = state().doc;
  const styleModifiers = {
    fillColor: doc.setFillColor,
    textColor: doc.setTextColor,
    fontStyle: doc.setFontStyle,
    lineColor: doc.setDrawColor,
    lineWidth: doc.setLineWidth,
    font: doc.setFont,
    fontSize: doc.setFontSize,
  };
  Object.keys(styleModifiers).forEach(function(name) {
    const style = styles[name];
    const modifier = styleModifiers[name];
    if (typeof style !== 'undefined') {
      if (Array.isArray(style)) {
        modifier.apply(this, style);
      }
      else {
        modifier(style);
      }
    }
  });
}
// This is messy, only keep array and number format the next major version
export function marginOrPadding(value, defaultValue) {
  let newValue = {};
  if (Array.isArray(value)) {
    if (value.length >= 4) {
      newValue = {'top': value[0], 'right': value[1], 'bottom': value[2], 'left': value[3]};
    }
    else if (value.length === 3) {
      newValue = {'top': value[0], 'right': value[1], 'bottom': value[2], 'left': value[1]};
    }
    else if (value.length === 2) {
      newValue = {'top': value[0], 'right': value[1], 'bottom': value[0], 'left': value[1]};
    }
    else if (value.length === 1) {
      value = value[0];
    }
    else {
      value = defaultValue;
    }
  }
  else if (typeof value === 'object') {
    if (value['vertical']) {
      value['top'] = value['vertical'];
      value['bottom'] = value['vertical'];
    }
    if (value['horizontal']) {
      value['right'] = value['horizontal'];
      value['left'] = value['horizontal'];
    }
    for (const side of ['top', 'right', 'bottom', 'left']) {
      newValue[side] = (value[side] || value[side] === 0) ? value[side] : defaultValue;
    }
  }
  if (typeof value === 'number') {
    newValue = {'top': value, 'right': value, 'bottom': value, 'left': value};
  }
  return newValue;
}
export function styles(styles) {
  styles = Array.isArray(styles) ? styles : [styles];
  return assign(defaultStyles(), ...styles);
}
