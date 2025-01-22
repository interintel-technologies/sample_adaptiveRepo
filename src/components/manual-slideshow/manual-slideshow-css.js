/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import { css } from "lit-element";

export const ManualSlideShowStyles = css`
  .slideshow-container {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    margin: auto;
    position: relative;
  }
 
  .slick-slide  img{
    width: 100% !important;
  }
  .slide {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    justify-content: space-evenly;
  }
  .numbertext {
    color: black;
    font-size: 14px;
    padding: 8px 12px;
    position: absolute;
    top: -13px;
    right: 0;
    margin: 16px;
    border-radius: 4px;
    font-weight: 700;
  }
  .dots-container {
    text-align: center;
  }
  .dot {
    cursor: pointer;
    border-radius: 3px;
    width: 18px;
    height: 7px;
    margin: 0 2px;
    display: inline-block;
    transition: background-color 1.2s ease;
    background-color: #bbb;
  }

  .active,
  .dot:hover {
    background-color: var(--link);
  }
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  .captions {
    position: absolute;
    bottom: 30px;
    max-width: 60%;
    background-color: var(--paper);
    padding: 20px;
    margin-left: 30px;
  }
  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }

    to {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 300px) {
    .prev,
    .next,
    .text {
      font-size: 11px;
    }
  }
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    background-color: #fff;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover,
  .next:hover {
    background-color: var(--link);
  }
`;
