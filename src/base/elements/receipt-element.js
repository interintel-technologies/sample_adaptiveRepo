import {BaseElement} from '../../core/base-element';

import {format} from 'date-fns';
import 'jspdf';
import { utilsMixin } from '../mixins/utils-mixin';


export const ReceiptElementBase = class extends utilsMixin(BaseElement) {
  constructor() {
    super();
    this.e = {};
    const rP = window.parsed_payload;

    this.seller = {
      'name': rP.name,
      'logo': rP.logo,
    };
    this.buyer = {
      'name': rP.profile? (rP.profile.firstName+' '+rP.profile.lastName) : 'Customer',
    };
    this.items = [];
  }

  static get is() {
    return 'receipt-element';
  }

  static get properties() {
    return {
      items: Array,
      sums: Object,
      invoice: Number,
      reference: String,
      created: String,
      seller: Object,
      buyer: Object,
      e: { type: Object }
    };
  }


  updated(changedProperties) {
    if (
        changedProperties.has('e')
      ) {
        const self = this;

        // console.log(dsc);
        var sums = {};
        var data = [];
        for (var i = 0; i < dsc.rows.length; i++) {
          var item = {};
          var itemLinks = [];
          for (var j = 0; j < dsc.cols.length; j++) {
            // TODO this should be accessible as an API, it already is
            if (dsc.cols[j]['value'] === 'cart_item__total') {
              if (!sums[dsc.cols[j]['value']]) {
                sums[dsc.cols[j]['value']] = {
                  'name': dsc.cols[j]['label'],
                  'value': 0,
                };
              }
              sums[dsc.cols[j]['value']]['value'] += parseInt(dsc.rows[i][j]);
            }
            if (dsc.cols[j]['type'] === 'href') {
              // target.cols[j]['type']
              var links = self.cols[j]['links'];
              for (var link in links) {
                var linkObject = links[link];
                // console.log(link + " -> " + linkObject);
                var linkProcessed = {};
                linkProcessed['service'] = linkObject['service'];
                linkProcessed['icon'] = linkObject['icon'];
  
                linkProcessed['params'] = {};
                for (var linkParamKey in linkObject['params']) {
                  var linkParam = linkObject['params'][linkParamKey];
                  // get from item, simple hack since links are the always the last
                  linkProcessed['params'][linkParamKey] = item[linkParam];
                }
                itemLinks.push(linkProcessed);
                // console.log(item);
                // console.log(linkProcessed);
              }
            } else {
              item[dsc.cols[j]['label']] = dsc.rows[i][j];
            }
          }
          item['links'] = itemLinks;
          data.push(item);
        }
        self.items = data;
        self.sums = sums;
  
        if (self.items.length) {
          self.created = format( new Date(self.items[0]['created']), 'dd/MM/yyyy');
        }

        self.service = this.e.service;
        if (this.e.defaultValue) {
          const defaultValueAr = this.e.defaultValue.split('=');
          self.invoice = defaultValueAr[1];
        }
        self.reference = this.e.kind || '';
            
}
}

 


  print() {
    // return html2canvas(this.$.invoice, {
    //     background: "#ffffff",
    //     onrendered: function(canvas) {
    //         var myImage = canvas.toDataURL('image/png');
    //         // Adjust width and height
    //         var imgWidth = (canvas.width * 20) / 100;
    //         var imgHeight = (canvas.height * 10) / 45;
    //         // jspdf changes
    //         var pdf = new jsPDF('p', 'mm', 'a4');
    //         pdf.addImage(myImage, 'PNG', 25, 30, imgWidth, imgHeight); // 2: 19
    //
    //         pdf.autoPrint();
    //
    //         // pdf.output("dataurlnewwindow");
    //
    //     }
    // });
    this.printPdf(true);
  }

  save() {
    this.printPdf(false);
  }


  dscDataName() {
    return this.e.defaultValue;
  }


  _getOverallTotal(sums) {
    if (sums && sums['cart_item__total']) {
      return sums['cart_item__total']['value'];
    }
    return 0.0;
  }

  _getColumnTotal(column) {
    if (this.sums) {
      return this.sums[column]['value'];
    }
    return 0.0;
  }

  printPdf(autoPrint) {
    const self = this;

    var doc = new jsPDF('p', 'mm', 'a3');

    let WIDTH = 210;
    const HEIGHT = 297;

    let X = 0;
    let Y = 0;


    // add a margin on top
    Y+=5;

    // print receiver
    X+= 60;

    const LINE_HEIGHT = 7;

    Y+=20;
    // todo should be bolder
    doc.setFontType('bold');
    doc.text(X, Y, self.seller.name);
    doc.setFontType('normal');
    // Y+=LINE_HEIGHT;
    // doc.text( X,Y, '2059 Camden Ave, #118');
    // Y+=LINE_HEIGHT;
    // doc.text(X,Y, 'San Jose, CA 95124');
    // Y+=LINE_HEIGHT;
    // doc.text(X,Y, '(408) 625-7188');
    // Y+=LINE_HEIGHT;
    // todo should be email link
    // doc.text(X,Y, 'ar@andolasoft.com');
    // Y+=LINE_HEIGHT;
    // doc.text( X,Y, 'http://www.andolasoft.com');

    Y+=20;
    X = 20;
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(30);
    doc.text(X, Y, 'INVOICE');

    doc.setFontSize(16);
    doc.setTextColor(31, 8, 34);


    const GAP = 200;


    Y+=LINE_HEIGHT;
    doc.setFontType('bold');
    doc.text( X, Y, 'BILL TO');
    doc.setFontType('normal');
    doc.text( X+GAP, Y, 'Receipt #'+self.invoice);

    // print payer
    Y+=LINE_HEIGHT;
    doc.text( X, Y, self.buyer.name);
    doc.text( X+GAP, Y, 'DATE '+self.created);

    Y+=LINE_HEIGHT;
    // doc.text( X,Y, 'Westlands Commercial Centre, ');
    // doc.text( X+GAP,Y, 'DUE DATE 11/06/2017');
    // Y+=LINE_HEIGHT;
    // doc.text( X,Y, 'Ring Road Westlands, Nairobi, ');
    doc.text( X+GAP, Y, 'TERMS Due on receipt');
    Y+=LINE_HEIGHT;
    doc.text( X, Y, 'Kenya');


    Y+=10;
    doc.setLineWidth(1.5);
    doc.line(X, Y, 290, Y);

    Y+=20;
    doc.setFillColor(222, 234, 242);
    doc.rect(X, Y, 290, 10, 'F');
    Y+=10;

    // Items Table
    const c1 = 0.4;
    const c2 = 0.2;
    const c3 = 0.2;
    const c4 = 0.2;

    // X += ;
    Y-=4;

    WIDTH = 300;
    doc.setTextColor(77, 150, 202);

    const x1 = X;

    doc.text(x1, Y, 'ITEM');
    const x2 = x1+(c1*WIDTH);
    doc.text(x2, Y, 'QTY');

    const x3 = x2+(c3*WIDTH);
    doc.text(x3, Y, 'RATE');

    const x4 = x3+(c4*WIDTH);
    doc.text(x4, Y, 'AMOUNT');
    doc.setTextColor(31, 8, 34);

    Y+=10;

    for (var i=0; i<self.items.length; i++) {
      const item = self.items[i];

      Y+=LINE_HEIGHT;
      doc.setFontType('bold');
      doc.text(x1, Y, item['name']);
      doc.setFontType('normal');

      doc.text(x2, Y, item['quantity'].toString());
      doc.text(x3, Y, item['unit_price'].toString());
      doc.text(x4, Y, item['sub_total'].toString());
    }

    Y+=20;

    doc.setDrawColor(255, 0, 0); // draw red lines
    doc.setLineWidth(1.3);
    this.dottedLine(doc, X, Y, 300, Y, 8);

    Y += LINE_HEIGHT;
    doc.text(x1, Y, 'Final amount for order .');

    Y+=10;

    const INDENT = 200;
    doc.text(INDENT, Y, 'PAYMENT');
    doc.text(INDENT+50, Y, String(self._getColumnTotal('cart_item__total')));

    Y+=LINE_HEIGHT;
    doc.text(INDENT, Y, 'BALANCE DUE');
    doc.setFontType('bold');
    doc.text(INDENT+50, Y, '$0.00');
    doc.setFontType('normal');


    doc.setFontSize(60);
    doc.setTextColor(0, 255, 0);
    doc.text(100, 140, 'PAID', null, 35);

    if (autoPrint) {
      doc.autoPrint();
      var iframe = this.qs('#iframe');
      iframe.src = doc.output('dataurlstring');
    } else {
      doc.save('Invoice'+self.reference+'.pdf');
    }
  }

  /**
     * Draws a dotted line on a jsPDF doc between two points.
     * Note that the segment length is adjusted a little so
     * that we end the line with a drawn segment and don't
     * overflow.
     */
  dottedLine(doc, xFrom, yFrom, xTo, yTo, segmentLength) {
    // Calculate line length (c)
    var a = Math.abs(xTo - xFrom);
    var b = Math.abs(yTo - yFrom);
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    // Make sure we have an odd number of line segments (drawn or blank)
    // to fit it nicely
    var fractions = c / segmentLength;
    var adjustedSegmentLength = (Math.floor(fractions) % 2 === 0) ? (c / Math.ceil(fractions)) : (c / Math.floor(fractions));

    // Calculate x, y deltas per segment
    var deltaX = adjustedSegmentLength * (a / c);
    var deltaY = adjustedSegmentLength * (b / c);

    var curX = xFrom; var curY = yFrom;
    while (curX <= xTo && curY <= yTo)
    {
      doc.line(curX, curY, curX + deltaX, curY + deltaY);
      curX += 2*deltaX;
      curY += 2*deltaY;
    }
  }

  // init(pElement, loader) {
  //   super.init(pElement, loader);
  //   var self = this;
  //   self.params = loader.pl.paramsCopy();
  //   self.service = pElement.service;
  //   if (pElement.defaultValue) {
  //     const defaultValueAr = pElement.defaultValue.split('=');
  //     self.invoice = defaultValueAr[1];
  //   }
  //   self.reference = pElement.kind || '';
  //   self.loader = this.loadData();
  // }
};
