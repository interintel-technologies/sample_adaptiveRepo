import { css } from "lit-element";

export const ScrollToTopStyles = css`
  button {
    width: 50px;
    height: 50px;
    right: 90px;
    bottom: 35%;
    border-radius: 50%;
    opacity: 0.9;
    background: var(--card-background-color);
    cursor: pointer;
    position: fixed;
    z-index: 2000;
    transition: all 0.4s ease-in-out;
    padding: 10px;
    border: none;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
  }
  button:hover {
    opacity: 1;
    background-color: #F49D37;
  }
  button:hover adaptive-ui-icon {
    fill: white;
  }
  .hide-btn {
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s ease-in-out;
  }
  adaptive-ui-icon {
    width: 100%;
    height: 100%;
    fill: #F49D37;
  }
`;
