import { css } from "lit-element";

export const PaymentMethodSummaryStyles = css`
  .label {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;
    padding-bottom: 10px;
  }
  .icon {
    width: 200px;
    height: 200px;
  }
  .columns {
    margin: 0 0 10px 0 !important;
  }
  .column.is-flex {
    flex-direction: column;
    justify-content: center;
  }
  .button {
    color: white !important;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .button:hover {
    border: none !important;
    transform: scale(1.01);
  }
  .button:active {
    transform: scale(0.99);
  }
  .remove {
    color: var(--link);
    cursor: pointer;
    margin-top: 10px;
    text-decoration: underline;
  }
  ul {
    list-style: disc;
  }
  .connected {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .check-icon {
    width: 38px !important;
    height: 38px !important;
    fill: #23d160;
  }
  .title-danger {
    color: #ff2b56;
  }
  .title-success {
    color: #23d160 !important;
  }
  #warning-text {
    display: none;
  }
`;
