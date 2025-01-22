import { css } from "lit-element";

export const ProductMetaViewStyles = css`
  #product-meta-view {
    background-color: var(--card-background-color);
  }
  li {
    cursor: pointer;
  }
  li > a {
    pointer-events: none;
  }
  .hero-body {
    padding: 0px !important;
  }
  .hero-body p {
    color: var(--grey-darker);
  }
`;
