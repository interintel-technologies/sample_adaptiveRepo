import { css } from "lit-element";

export const QuoteElelementStyles = css`
  .quotes-section {
    background-color: var(--card-background-color);
  }
  .quotes-section h2 {
    width: 50%;
    margin: 0 auto;
  }
  .wrap {
    width: 100%;
    overflow: hidden;
  }
  .quotes-container {
    display: flex;
    height: 250px;
    width: 100%;
    max-width: 1020px;
    flex: 0 0 auto;
    position: relative;
    overflow-x: hidden;
    transition: all 0.5s ease-in-out;
  }
  .quotes {
    display: inline-block;
    height: 100%;
    width: 100%;
    max-width: 1020px;
    position: relative;
    width: 100%;
    text-align: center;
    flex-direction: column;
  }

  .dots {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 60px;
    left: 0;
    display: block;
    z-index: 3333;
    height: 12px;
  }

  .dots .dot {
    list-style-type: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    margin: 0 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    position: relative;
  }

  .dots .dot.active,
  .dots .dot:hover {
    background: var(--primary);
    border-color: var(--primary);
  }

  .dots .dot.active {
    -webkit-animation: testim-scale 0.5s ease-in-out forwards;
    -moz-animation: testim-scale 0.5s ease-in-out forwards;
    -ms-animation: testim-scale 0.5s ease-in-out forwards;
    -o-animation: testim-scale 0.5s ease-in-out forwards;
    animation: testim-scale 0.5s ease-in-out forwards;
  }
  .arrow {
    display: block;
    position: absolute;
    color: var(--primary);
    cursor: pointer;
    font-size: 2em;
    top: 30%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding: 5px;
    z-index: 22222222;
  }

  .arrow:before {
    cursor: pointer;
  }

  .arrow.left {
    left: 221px;
  }

  .arrow.right {
    right: 270px;
  }
  @media screen and (max-width: 768px) {
    .quotes-container {
      height: auto;
    }
    .arrow.right {
      right: 69px;
      top: 357px;
    }
    .arrow.left {
      left: 45px;
      top: 361px;
    }
  }
`;
