import { css } from "lit-element";

export const ServiceDescriptionStyles = css`
  .cont {
    border: 0.7px solid black;
    border-radius: 7px;
    padding: 32px;
    margin: 16px;
  }
  .card {
    padding: 16px;
    background: #fff;
    border: 0.4px solid black;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .columns {
    max-height: 80vh;
    overflow-y: auto;
    margin: 0 !important;
    padding-top: 7px;
  }
  h5 {
    margin: 0 !important;
  }
  .c-title,
  .c-desc {
    text-align: center;
    pointer-events: none;
    margin-bottom: 0 !important;
  }
  .fas {
    pointer-events: none;
    margin-bottom: 20px !important;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    border-color: var(--primary);
  }
  .selected {
    border: 1.2px solid var(--link) !important;
  }
  .card:hover .overlay {
    transform: scale(4) translateZ(0);
  }
  .unavailable {
    cursor: pointer;
    color: var(--primary) !important;
    text-align: center;
  }
  .unavailable:hover {
    color: var(--link) !important;
  }
  .unavailable:active {
    transform: scale(0.9);
  }
  .more {
    cursor: pointer;
    width: fit-content;
    color: var(--primary) !important;
    text-align: flex-start;
  }
  .more:hover {
    color: var(--link) !important;
  }
  .more:active {
    transform: scale(0.9);
  }
  .button {
    background-color: var(--primary);
    padding: 0 35px;
    border-color: none;
    color: white;
  }
  .button:hover {
    background-color: var(--linkr);
  }
  #warning-text {
    display: none;
  }
  .title-danger {
    color: #ff2b56 !important;
  }
  .title-success {
    color: #23d160 !important;
  }
  .card-success {
    border-color: #23d160 !important;
  }
  .cont-success {
    border-color: #23d160 !important;
  }
  .cont-danger {
    border-color: #ff2b56 !important;
  }
  input {
    appearance: none;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: 2px solid var(--primary);
    transition: 0.2s all linear;
    margin-right: 5px;
  }
  input:checked {
    border: 5px solid var(--link);
  }
  .input-success {
    border: 5px solid #23d160 !important;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  .input-warning {
    color: #ff3860;
    display: none;
    position: absolute;
    top: 37px;
  }
  @media (max-width: 800px) {
    .dr {
      display: none;
    }
  }
  @media (max-width: 600px) {
    .columns {
      border-bottom: 1px solid black;
    }
  }
`;
