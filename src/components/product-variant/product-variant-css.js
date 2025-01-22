import { css } from "lit-element";
export const ProductVariantStyles = css`
  .columns {
    margin: 0;
  }
  #vv-columns-container,
  #vt-columns-container {
    flex-direction: column;
  }
  #variant-titles {
    justify-content: space-between;
    max-width: fit-content;
  }
  #variant-values {
    flex: 1;
  }
  .card {
    width: 100%;
    padding: 15px;
  }
  .button {
    width: 100%;
    padding: 20px;
    border-radius: 0;
    border: 2px black solid;
  }
  .title.is-5 {
    text-align: center;
  }
  .title.is-6 {
    margin-bottom: 20px;
  }
  .variant-container {
    margin: 15px 0;
  }
  .variant-title {
    cursor: auto;
    margin: 0;
  }
  .variant-value {
    margin: 0 10px;
  }
  .variant-title:hover {
    border: 4px black solid;
  }
  .block {
    width: 100%;
  }
  .vl {
    height: 100%;
    width: 5px;
    margin-left: 20px;
    background-color: var(--link);
  }
  .is-1 {
    justify-content: center;
  }
  .selected {
    border-color: var(--link);
  }
  .title-success {
    color: #23d160;
  }
  .title-danger {
    color: #ff2b56;
  }
  .variant-title-success {
    border-color: #23d160;
  }
  .variant-title-danger {
    border-color: #ff2b56;
  }
  .selected-variant-value-success {
    border-color: #23d160;
  }
  #warning-text {
    display: none;
  }

  @media screen and (max-width: 800px) {
    #variant-values {
      overflow: auto;
    }
    #vv-columns-container {
      overflow: auto;
    }
    .column {
      padding: 0;
    }
    #line {
      display: none;
    }
    .variant-title {
      padding: 20px 10px;
      margin-left: 0px;
    }
  }
`;
