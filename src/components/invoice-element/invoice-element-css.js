import { css } from "lit-element";

export const InvoiceElementStyles = css`
  :host {
    display: block;
  }
  .invoice-box {
    max-width: 800px;
    margin: auto;
    padding: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    background:var(--paper)
    font-size: 16px;
    line-height: 24px;
    color: #555;
  }

  .invoice-box table {
    width: 100%;
    line-height: inherit;
    text-align: left;
  }

  .invoice-box table td {
    padding: 5px;
    vertical-align: top;
    color: var(--grey-darker);
  }

  .invoice-box table tr td:nth-child(2) {
    text-align: right;
  }

  .invoice-box table tr.top table td {
    padding-bottom: 20px;
  }

  .invoice-box table tr.top table td.title {
    font-size: 45px;
    line-height: 45px;
    color: #333;
  }

  .invoice-box table tr.information table td {
    padding-bottom: 40px;
  }

  .invoice-box table tr.heading td {
    border-bottom: 1px solid #ddd;
    font-weight: bold;
    color: var(--grey-darker);
  }

  .invoice-box table tr.details td {
    padding-bottom: 20px;
  }

  .invoice-box table tr.item td {
    border-bottom: 1px solid #eee;
  }

  .invoice-box table tr.item.last td {
    border-bottom: none;
  }

  .invoice-box table tr.total td:nth-child(2) {
    border-top: 2px solid #eee;
    font-weight: bold;
  }

  @media only screen and (max-width: 600px) {
    .invoice-box table tr.top table td {
      width: 100%;
      display: block;
      text-align: center;
    }

    .invoice-box table tr.information table td {
      width: 100%;
      display: block;
      text-align: center;
    }
  }

  /** RTL **/
  .rtl {
    direction: rtl;
  }

  .rtl table {
    text-align: right;
  }

  .rtl table tr td:nth-child(2) {
    text-align: left;
  }
`;
