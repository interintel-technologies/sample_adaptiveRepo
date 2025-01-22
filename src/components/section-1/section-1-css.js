import { css } from "lit-element";

export const Section1Styles = css`
  .solution-area {
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    padding: 110px;
  }
  .bg {
    background-color: #f2f6f9;
  }
  .solution-contaniner {
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .section-title {
    text-align: center;
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
    margin-top: -6px;
  }
  .section-title h2 {
    margin-bottom: 0;
    font-size: 40px;
    font-weight: 700;
    font-size: 42px !important;
    line-height: 52px !important;
    font-weight: 600 !important;
  }
  .section-title p {
    max-width: 520px;
    margin-bottom: 0;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .single-services-box {
    background-color: #ffffff;
    margin-bottom: 30px;
    padding: 30px 25px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    position: relative;
  }
  .single-services-box::before {
    content: "";
    height: 3px;
    width: 20px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-color: var(--primary);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  .single-services-box .icon {
    margin-bottom: 18px;
    background-color: var(--link);
    border-radius: 5px;
    width: 253px;
    height: 200px;
    line-height: 75px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    text-align: center;
    color: var(--link);
  }
  .single-services-box h3 {
    margin-bottom: 0;
    font-size: 23px;
    font-weight: 600 !important;
  }
  .single-services-box p {
    margin-top: 12px;
    margin-bottom: 0;
    font-size: 16px !important;
    font-weight: 390 !important;
  }
  .single-services-box:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.05);
  }

  a {
    color: var(--primary) !important;
  }
  a:hover {
    cursor: unset !important;
    color: var(--primary) !important;
  }

  /*animations*/

  .animate1 {
    opacity: 0;
    transform: translateX(100px);
    transition: 0.7s all ease-in-out;
  }
  .animate1-appear {
    opacity: 1;
    transform: translateX(0px);
  }
  @media screen and (max-width: 430px) {
    .solution-area {
      padding: 20px;
    }
  }
`;
