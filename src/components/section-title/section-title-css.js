import { css } from "lit-element";

export const SectionTitleStyles = css`
  .c-title-container {
    max-width: 630px;
    margin-right: auto;
    margin-bottom: 25px;
    margin-left: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    text-align: center;
  }
  .ii__title {
    margin-top: 0px;
    font-size: 36px;
    line-height: 52px;
    font-weight: 600;
    letter-spacing: 0.2px;
    font-family:var(--family-sans-serif);
    text-transform:capitalize;
  }
  .ii__paragraph {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 0.15px;
 
    font-family:var(--family-sans-serif);

  }
  .underline {
    height: 9px;
    width: 60px;
    border-radius: 20px;
    border-width: 0px;
    background-color:var(--primary);
    margin-right:5px;
    margin-left:5px;
  }
  .hr{
    display:inline-flex;
    justify-content:center;
  }
  hr{
    margin-top:0 !important;
  }
`;
