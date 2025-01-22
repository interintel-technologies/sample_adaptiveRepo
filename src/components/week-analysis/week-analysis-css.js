import { css } from "lit-element";
export const WeekAnalysisStyles = css`
  .candle {
    height: 35vh;
    width: 30px;
    border-radius: 50px;
  }
  .columns.is-mobile {
    overflow-x: auto;
  }
  .column.is-flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card-header {
    box-shadow: none;
  }
  .card-header-title {
    margin: 0 !important;
  }
  .count-box {
    background-color: var(--primary);
    color: white;
    height: 40px !important;
    border: none;
    padding: 7px 21px;
    width: 60px;
    margin-right: 20px;
    border-radius: 6px;
  }
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 10px;
  }
  .summary {
    margin-bottom: 17px;
    align-items: center;
  }
  .button {
    box-shadow: none !important;
    border: 2.4px solid var(--primary);
    background-color: var(--primary) !important;
    color: white !important;
    border-radius: 100px;
    padding: 10px 30px;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .button:hover {
    background-color: var(--link) !important;
  }
  .button:active {
    transform: scale(0.95);
  }
  .block.is-flex {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    .block.is-flex {
      align-items: center;
    }
  }
`;
