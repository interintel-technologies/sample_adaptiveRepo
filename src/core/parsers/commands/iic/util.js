
export class Util {
  static parseJsonOrObject(stringOrObject) {
    if (typeof stringOrObject === 'object') {
      return stringOrObject;
    } else if ( stringOrObject ) {
      // typeof stringOrObject === 'string'
      return JSON.parse(stringOrObject);
    }

    return {};
  }
}
