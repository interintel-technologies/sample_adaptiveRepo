import { css } from "lit-element";

export const ServiceSelectStyles = css`

  .card {
    box-shadow:var(--mui-shadows-3) !important;
    background:var(--paper) !important;
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    height:100%;
    border-radius:var(--CornerSmall);
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card:active {
    transform: scale(0.95);
  }
`;
