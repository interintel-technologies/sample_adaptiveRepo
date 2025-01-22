import {BaseElement} from '../../core/base-element';
import {dataSourceMixin} from '../../core/mixins/datasource-mixin';
import 'jspdf';


// todo make mixin
class Printer {
  static get BOLD() {
    return 'bold';
  }

  static get NORMAL() {
    return 'normal';
  }

  constructor(doc) {
    this.doc = doc;

    this.width = doc.internal.pageSize.width;
    this.height = doc.internal.pageSize.height;

    this.x = 0;
    this.y = 0;
  }

  moveY() {
    this.y += 5;
  }

  moveX() {
    this.x += 5;
  }

  setX() {
    this.x = 20;
  }

  printText(text, font) {
    this.doc.setFontType(font);
    this.doc.text(this.x, this.y, text);
    this.doc.setFontType(Printer.NORMAL);
  }
}

export const ReportsSummaryBase = class extends dataSourceMixin(BaseElement) {
  static get is() {
    return 'reports-summary';
  }

  constructor() {
    super();

    this.participants = [];
    this.priceChanges = [];
  }

  static get properties() {
    return {

      bidName: String,
      bidOpeningDate: String,
      bidClosingDate: String,
      bidOpeningPrice: String,
      closingBidder: String,
      bidClosingPrice: String,
      participants: {type: Array},
      priceChanges: {type: Array},
      buyer: Boolean,
    };
  }
  dscDataName() {
    return this.e.defaultValue;
  }
  dataResponseType() {
    return Symbol.for('DATA');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;

    this.loader.then(dsc => {
      // console.log(payload);
      for (let i = 0; i < self.groups.length; i++) {
        const groupName = self.groups[i];
        let group;

        switch (groupName) {
        case 'Bid Details':
          group = self.data[i][0];

          self.bidName = group['name'];
          self.bidOpeningDate = group['Opening Date'];
          self.bidClosingDate = group['Closing Date'];
          break;
        case 'Bid Opening Price':
          group = self.data[i][0];

          self.bidOpeningPrice = group['price'];
          break;
        case 'Bid Closing Price':
          group = self.data[i][0];

          self.bidClosingPrice = group['price'];
          self.closingBidder = group['supplier'];
          break;
        case 'Bid Participants':
          group = self.data[i];
          const participants = [];
          for (let j = 0; j < group.length; j++) {
            participants.push(
              {
                'name': group[j]['institution_name'],
                'openingPrice': group[j]['opening_price'],
                'closingPrice': group[j]['closing_price'],
              }
            );
          }
          self.participants = participants;
          break;
        case 'Bid Price Changes':
          group = self.data[i];
          const priceChanges = [];
          for (let j = 0; j < group.length; j++) {
            priceChanges.push(
              {
                'date': group[j]['Date'],
                'price': group[j]['price'],
              }
            );
          }
          self.priceChanges = priceChanges;
          break;
        }
      }

      self.drawChart();

      self.loading = false;
    });
  }


  drawChart() {
    const self = this;

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540],

        // Date, Institution1, Institution2, Institution3
        // 2004, 10,            10,          10
        // 2005, 20,            20,          20
        // 2006, 30             30,          30

      ]);

      var options = {
        title: 'Prices Chart',
        curveType: 'function',
        legend: {position: 'bottom'},
      };

      var chart = new google.visualization.LineChart(self.shadowRoot.querySelector('#curve_chart'));

      chart.draw(data, options);
    }
  }

  _computeSavingAmount(oP, cP) {
    return Number(oP) - Number(cP);
  }

  _serviceCharge(oP, cP) {
    return 25 * (Number(oP) - Number(cP)) / 100;
  }

  generatePDF() {
    const self = this;

    const autoPrint = false;
    var doc = new jsPDF('p', 'mm', 'a3');

    const printer = new Printer(doc);
    // add a margin on top
    printer.moveY(5);
    // print bid name
    printer.moveX(60);
    printer.printText('Bid Details', Printer.BOLD);
    printer.moveY(20);
    printer.printText('Bid Name: ' + this.bidName, Printer.NORMAL);
    printer.moveY(20);
    printer.printText('Bid Opening Date: ' + this.bidOpeningDate, Printer.NORMAL);
    printer.moveY(20);
    printer.printText('Bid Closing Date: ' + this.bidClosingDate, Printer.NORMAL);
    printer.moveY(20);
    printer.printText('Bid Opening Price: ' + this.bidOpeningPrice, Printer.NORMAL);
    printer.moveY(20);
    printer.printText('Bid Closing Price: ' + this.bidClosingPrice, Printer.NORMAL);

    if (this.buyer) {
      printer.moveY(20);
      printer.printText('Bid Participants ', Printer.BOLD);
      for (let i = 0; i < this.participants.length; i++) {
        const participant = this.participants[i];

        printer.moveY(10);
        printer.printText('Participant Name: ' + participant.name, Printer.NORMAL);
        printer.moveY(10);
        printer.printText('Opening price: ' + participant.openingPrice, Printer.NORMAL);
        printer.moveY(10);
        printer.printText('Closing price: ' + participant.closingPrice, Printer.NORMAL);
        printer.moveY(10);
      }
      printer.moveY(20);
      printer.printText('Auction Summary', Printer.BOLD);
      printer.moveY(20);
      printer.printText('Winning Bid: ' + this.bidClosingPrice, Printer.NORMAL);
      printer.moveY(20);
      printer.printText('Winning Supplier: ' + this.closingBidder, Printer.NORMAL);
      printer.moveY(20);
      printer.printText('Saving Amount: ' + this._computeSavingAmount(this.bidOpeningPrice, this.bidClosingPrice), Printer.NORMAL);
      printer.moveY(20);
      printer.printText('Service Charges: ' + this._serviceCharge(this.bidOpeningPrice, this.bidClosingPrice), Printer.NORMAL);
    } else {
      printer.moveY(20);
      printer.printText('Bid Price Changes ', Printer.BOLD);
      for (let i = 0; i < this.priceChanges.length; i++) {
        const participant = this.priceChanges[i];

        printer.moveY(10);
        printer.printText('Price: ' + participant.price, Printer.NORMAL);
        printer.moveY(10);
        printer.printText('Date: ' + participant.date, Printer.NORMAL);
        printer.moveY(10);
      }
    }


    if (autoPrint) {
      doc.autoPrint();
      var iframe = this.$.iframe;
      iframe.src = doc.output('dataurlstring');
    } else {
      doc.save('report.pdf');
    }
  }


  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.buyer = (pElement.details['report_type'] === 'buyer');
    self.loader = this.loadData();
  }
};

