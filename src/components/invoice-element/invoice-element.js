import { html, css, unsafeCSS } from "lit-element";
import "@polymer/paper-button/paper-button";
import { InvoiceElementBase } from "../../base/elements/invoice-element";
import { InvoiceElementStyles } from "./invoice-element-css";
import globalStyles from '../../App.css?raw';
import { jsPDF } from "jspdf";

class InvoiceElement extends InvoiceElementBase {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      InvoiceElementStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  printPdf(autoPrint) {
    const self = this;

    var doc = new jsPDF("p", "mm", "a3");

    let WIDTH = 210;
    const HEIGHT = 297;

    let X = 0;
    let Y = 0;
    Y += 5;

    X += 60;

    const LINE_HEIGHT = 7;

    Y += 20;
    doc.setFontType("bold");
    doc.text(X, Y, self.seller.name);
    doc.setFontType("normal");

    Y += 20;
    X = 20;
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(30);
    doc.text(X, Y, "INVOICE");

    doc.setFontSize(16);
    doc.setTextColor(31, 8, 34);

    const GAP = 200;

    Y += LINE_HEIGHT;
    doc.setFontType("bold");
    doc.text(X, Y, "BILL TO");
    doc.setFontType("normal");
    doc.text(X + GAP, Y, "INVOICE #" + self.invoice);

    // print payer
    Y += LINE_HEIGHT;
    doc.text(X, Y, self.buyer.name);
    doc.text(X + GAP, Y, "DATE " + self.created);

    Y += LINE_HEIGHT;
    // doc.text( X,Y, 'Westlands Commercial Centre, ');
    // doc.text( X+GAP,Y, 'DUE DATE 11/06/2017');
    // Y+=LINE_HEIGHT;
    // doc.text( X,Y, 'Ring Road Westlands, Nairobi, ');
    doc.text(X + GAP, Y, "TERMS Due on receipt");
    Y += LINE_HEIGHT;
    doc.text(X, Y, "Kenya");

    Y += 10;
    doc.setLineWidth(1.5);
    doc.line(X, Y, 290, Y);

    Y += 20;
    doc.setFillColor(222, 234, 242);
    doc.rect(X, Y, 290, 10, "F");
    Y += 10;

    // Items Table
    const c1 = 0.4;
    const c2 = 0.2;
    const c3 = 0.2;
    const c4 = 0.2;

    // X += ;
    Y -= 4;

    WIDTH = 300;
    doc.setTextColor(77, 150, 202);

    const x1 = X;

    doc.text(x1, Y, "ITEM");
    const x2 = x1 + c1 * WIDTH;
    doc.text(x2, Y, "QTY");

    const x3 = x2 + c3 * WIDTH;
    doc.text(x3, Y, "RATE");

    const x4 = x3 + c4 * WIDTH;
    doc.text(x4, Y, "AMOUNT");
    doc.setTextColor(31, 8, 34);

    Y += 10;

    for (var i = 0; i < self.items.length; i++) {
      const item = self.items[i];

      Y += LINE_HEIGHT;
      doc.setFontType("bold");
      doc.text(x1, Y, item["name"]);
      doc.setFontType("normal");

      doc.text(x2, Y, item["quantity"].toString());
      doc.text(x3, Y, item["unit_price"].toString());
      doc.text(x4, Y, item["sub_total"].toString());
    }

    Y += 20;

    doc.setDrawColor(255, 0, 0); // draw red lines
    doc.setLineWidth(1.3);
    this.dottedLine(doc, X, Y, 300, Y, 8);

    Y += LINE_HEIGHT;
    doc.text(x1, Y, "Final amount for order .");

    Y += 10;

    const INDENT = 200;
    doc.text(INDENT, Y, "PAYMENT");
    doc.text(INDENT + 50, Y, String(self._getColumnTotal("cart_item__total")));

    Y += LINE_HEIGHT;
    doc.text(INDENT, Y, "BALANCE DUE");
    doc.setFontType("bold");
    doc.text(INDENT + 50, Y, "$0.00");
    doc.setFontType("normal");

    doc.setFontSize(60);
    doc.setTextColor(0, 255, 0);
    doc.text(100, 140, "PAID", null, 35);

    if (autoPrint) {
      doc.autoPrint();
      var iframe = this.qs("#iframe");
      iframe.src = doc.output("dataurlstring");
    } else {
      doc.save("Invoice" + self.reference + ".pdf");
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

  renderDefault() {
    return html`
      <div class="invoice-box card content">
        <paper-button @tap="${this.save}" style="color: var(--grey-darker)"
          >Save</paper-button
        >
        <paper-button @tap="${this.print}" style="color: var(--grey-darker)"
          >Print</paper-button
        >

        <table id="invoice" cellpadding="0" cellspacing="0">
          <tr class="top">
            <td colspan="2">
              <table>
                <tr>
                  <td class="title">
                    <img
                      src="/media/${this.seller.logo}"
                      alt="logo"
                      style="width:100%; max-width:200px;"
                    />
                  </td>
                  <td>
                    Invoice #: ${this.invoice}<br />
                    Ref: ${this.reference}<br />
                    Created: ${this.created}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="information">
            <td colspan="2">
              <table>
                <tr>
                  <td>${this.seller.name}.<br /></td>

                  <td>${this.buyer.name}<br /></td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="heading">
            <td>Item</td>

            <td>Quantity</td>

            <td>Price</td>
          </tr>

          ${this.items.map(
            (item) => html` <tr class="item">
              <td>${item.name}</td>

              <td>${item.quantity}</td>

              <td>${item.unit_price}</td>
            </tr>`
          )}

          <tr class="total">
            <td></td>

            <td>Total: ${this._getOverallTotal(this.sums)}</td>
          </tr>
        </table>
      </div>

      <iframe id="iframe" style="display:none"></iframe>
    `;
  }
}
customElements.define(InvoiceElement.is, InvoiceElement);
