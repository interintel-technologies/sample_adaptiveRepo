import { css } from "lit-element";

export const MessagesListStyles = css`
  .column.content {
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
  .hdr {
    padding: 24px 24px 8px 10px;
    justify-content: space-between;
    align-items: center;
  }
  .button {
    height: 40px !important;
    box-shadow: none !important;
    border-radius: 100px;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    background-color: var(--primary) !important;
    color: white !important;
  }
  .button:hover {
    background-color: var(--link) !important;
    color: white !important;
  }
  .button:active {
    transform: scale(0.95);
    color: white !important;
  }
`;
