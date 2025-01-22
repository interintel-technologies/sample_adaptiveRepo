import {Util} from './util';

export class PageInput {
  constructor(elementJson) {
    this._id = '';

    this._elementJson = elementJson;
    this._name = elementJson[1];

    // todo use loop
    this.__0 = elementJson[0];
    this.__1 = elementJson[1];
    this.__2 = elementJson[2];
    this.__3 = elementJson[3];
    this.__4 = elementJson[4];
    this.__5 = elementJson[5];
    this.__6 = elementJson[6];
    this.__7 = elementJson[7];
    this.__8 = elementJson[8];
    this.__9 = elementJson[9];
    this.__10 = elementJson[10];
    this.__11 = elementJson[11];
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get _0() {
    return this.__0;
  }
  get _1() {
    return this.__1;
  }
  get _2() {
    return this.__2;
  }

  get _3() {
    return this.__3;
  }
  get _4() {
    return this.__4;
  }
  get _5() {
    return this.__5;
  }
  get _6() {
    return this.__6;
  }
  get _7() {
    return this.__7;
  }
  get _8() {
    return this.__8;
  }
  get _9() {
    return this.__9;
  }
  get _10() {
    return this.__10;
  }
  get _11() {
    return this.__11;
  }

  get name() {
    return this.elementJson[0];
  }

  get variableType() {
    return this.elementJson[1];
  }
  get min() {
    return this.elementJson[2];
  }
  get max() {
    return this.elementJson[3];
  }

  get formName() {
    return this.elementJson[4];
  }

  get defaultValue() {
    return this.elementJson[5];
  }

  get icon() {
    return this.elementJson[6];
  }
  get sectionSize() {
    return this.elementJson[7];
  }
  get kind() {
    return this.elementJson[8];
  }

  get required() {
    return this.elementJson[9];
  }

  get styles() {
    return this.elementJson[10];
  }

  get service() {
    return this.elementJson[11];
  }
  get height() {
    return this.elementJson[12];
  }

  getString(index) {
    return this.elementJson[index];
  }

  get style() {
    return this.elementJson[11];
  }

  get details() {
    return Util.parseJsonOrObject(this.elementJson[14]);
  }

  get elementJson() {
    return this._elementJson;
  }

  toString() {
    return `${this.elementJson[0]} ${this.elementJson[1]} ${this.elementJson[2]} ${this.elementJson[3]}`;
  }
}
