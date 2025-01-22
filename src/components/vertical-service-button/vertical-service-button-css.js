import { css } from "lit-element";

export const VerticalServiceButtonStyles = css`
  .service-button-container {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 1.875em;
    border-radius: 5px;
    padding: 0;
    border: 0px solid transparent;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  .service-button-container:hover {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 11px 0px;
  }
  .service-button-container .content-area {
    padding: 1.25em;
    position: relative;
    width: 100%;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    align-items: center;
    justify-content: center;
  }
  .icon-holder {
    background-color: var(--info);
    box-shadow: 0 14px 26px -12px var(--info) !important;
    position: absolute;
    top: -16px;
    left: 42%;
    padding: 12px;
    font-size: 24px;
    font-weight: normal;
    color: #fff;
    border-radius: 6px;
  }

  .content-txt {
    padding: 30px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    top: 17px;
  }
  .content-txt h1 {
    text-align: center;
  }
  .content-txt p {
    font-size: 10px;
    text-align: center;
  }
`;
