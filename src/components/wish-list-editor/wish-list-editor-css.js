import { css } from "lit-element";

export const WishListEditorStyles = css`
  .columns {
    margin: 0 !important;
    border-bottom: 1px solid #ccc;
  }
  .button {
    background-color: var(--primary);
    padding: 20px 35px;
    border: none;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .button:hover {
    background-color: var(--link);
    border: none !important;
  }
  .button:active {
    transform: scale(1.05);
  }
  .button h6 {
    color: white !important;
    margin: 0 !important;
  }
  adaptive-ui-icon {
    fill: black;
    margin: auto;
    cursor: pointer;
  }
  adaptive-ui-icon:hover {
    fill: red;
  }
  @media screen and (max-width: 770px) {
    .hdr {
      display: none;
    }
    .button {
      width: 100%;
    }
    .is-6 {
      flex-wrap: wrap;
    }
    figure {
      margin: auto !important;
    }
  }
`;
