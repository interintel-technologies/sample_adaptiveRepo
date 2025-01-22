import { css } from "lit-element";

export const FloatingThemeToggleStyles = css`
  .float {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: var(--primary);
    cursor: pointer;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 2px rgb(52 52 52);
  }
  .float:hover {
    background-color: var(--link);
  }
  .float:hover .icon {
    color: #fff;
  }
`;
