import { css } from "lit-element";

export const ProductsCarouselStyles = css`
  .img-cont {
    justify-content: center;
  }
  .section {
    position: relative;
  }
  .image {
    height: 300px;
    object-fit: contain;
    cursor: pointer;
  }
  .iron-icon {
    width: 28px !important;
    height: 28px !important;
  }
  .nav {
    cursor: pointer;
    height: 50px;
    width: 25px;
    background-color: var(--link);
    position: absolute;
    transform: translateY(50%);
  }
  .nav {
    background-color: var(--link);
    justify-content: center;
    align-items: center;
  }
  .prev {
    left: 0;
    border-radius: 0px 25px 25px 0;
  }
  .next {
    right: 0;
    border-radius: 25px 0 0 25px;
  }
  .dot {
    cursor: pointer;
    border-radius: 3px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    margin: 0 2px;
    display: inline-block;
    transition: background-color 1.2s ease;
    background-color: #bbb;
  }
  .active,
  .dot:hover {
    background-color: var(--link);
  }
  .navigation {
    justify-content: center;
    margin-top: 16px;
  }
  .dots-container {
    text-align: center;
    width: fit-content;
  }
  .slide-in-left {
    animation: slide-in-left 0.3s ease-in-out;
  }
  .slide-out-left {
    animation: slide-out-left 0.3s ease-in-out;
  }
  .slide-in-right {
    animation: slide-in-right 0.3s ease-in-out;
  }
  .slide-out-right {
    animation: slide-out-right 0.3s ease-in-out;
  }
  @keyframes slide-in-left {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes slide-out-left {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%);
    }
  }
  @keyframes slide-out-right {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(50%);
    }
  }
  @keyframes slide-in-right {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
