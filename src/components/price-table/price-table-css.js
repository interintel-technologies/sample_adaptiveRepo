
import { css } from "lit-element";

export const PriceTableStyles = css`
  .columns {
    margin: 0 !important;
  }
  /*animations*/

  .animate1 {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.7s all ease-in-out;
  }
  .animate1-appear {
    opacity: 1;
    transform: translateY(0px);
  }

  .column {
    width: 100%;
    margin: 0.75rem;
  }
  .card {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--mui-shadows-3);
    background: var(--paper);

  }
  .block {
    padding: 0 20px;
  }
  .price-content {
    padding: 20px;
  }

  .title {
    text-align: center !important;
    font-size: 25px !important;
    padding-bottom: 8px !important;
  }
  .contents:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .subtitle {
    text-align: center !important;
    line-height: 2.3;
    text-align: center;
    font-size: 18px;
  }
  .subtitle.is-4 {
    color: white !important;
  }

  .group-summary {
    margin-bottom: 28px !important;
    margin-top: 28px !important;
  }

  .price {
    text-align: center;
    border-radius: 50%;
    background: transparent;
    transition: all 1s ease 0s;
  }

  .price p {
    font-size: 29px;
    font-weight: 500;
  }

  .price:hover {
  }
  .description {
    margin-top: 16px;
    text-align: center;
  }

  .description p {
    margin-top: 16px;
    text-align: center;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 8px;
  }
  .button {
    margin-top: 16px;
    margin-bottom: 38px;
    width: 70% !important;
    background-color: var(--secondary) !important;
    color: #fff !important;
    border-radius: 20px 20px !important;
  }
  .button:hover {
    background-color: var(--info) !important;
    color: var(--secondary) !important;
    border: 3px solid var(--secondary) !important;
    border-color: var(--secondary) !important;
  }
  .item-index {
    display: flex;
    width: 35px;
    height: 35px;
    margin: 16px;
    border-radius: 50%;
    background-color: var(--secondary) !important;
    color: white;
    font-size: 24px;
    justify-content: center;
    align-items: center;
  }
  .item-index:hover {
    background-color: var(--secondary) !important;
  }

  .ii__product {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: auto;
    border-radius: 8px;
    position: relative;
    color: #4a4a4a;
  }
  .ii__product:hover {
  }

  .ii__product-logo img {
    max-width: 50px;
    max-height: 50px;
    margin-left: 25px;
  }

  .ii__product-logo {
    display: flex;
    align-items: center;
    width: 95px;
    height: 95px;
    background: var(--info);
    border-radius: 50%;
    margin: 0 auto;
  }
  .read_more {
    color: var(--info);
    font-weight: bolder;
    cursor: pointer;
  }
  .show_less {
    color: var(--info);
    font-weight: bolder;
    cursor: pointer;
  }
  .is-custom-color {
    background-color: var(--info);
    color: #fff;
  }
  .ii__content {
    margin-top: 10px;
  }

  @media screen and (max-width: 950px) {
    .column {
      width: 100%;
      max-width: 100%;
      margin: 0 0 0.75rem 0;
    }

    .columns {
      display: flex !important;
      flex-direction: column !important;
    }
  }

  @media screen and (max-width: 775px) {
    .column {
      width: 100%;
      max-width: 100%;
    }
  }
`;
