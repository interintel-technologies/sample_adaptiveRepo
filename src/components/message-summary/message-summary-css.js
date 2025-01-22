import { css } from "lit-element";

export const MessageSummaryStyles = css`
  .columns {
    display: flex !important;
    flex-direction: row !important;
  }
  .group {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center;
  }
  .group-title {
    margin-top: 8px;
  }
  h5 {
    margin-bottom: 0 !important;
  }
  .content {
    width: 100%;
    max-height: 510px;
    overflow-y: auto;
    border-left: 2px solid var(--link);
    padding-left: 16px;
  }
  .image-cont {
    display: flex;
  }
  .text {
    background-color: rgb(206, 206, 206);
    padding: 4px;
    text-align: end;
    width: 50%;
    line-break: auto;
    border-radius: 8px;
    position: relative;
    margin-left: 22px;
    margin-top: 83px;
    min-height: fit-content;
    max-height: 320px;
    overflow-y: auto;
  }
  .text-message {
    font-weight: 400 !important;
    padding: 2px;
    text-align: left;
    font-size: 14px;
  }
  .column {
    width: 70%;
    margin-left: 20px;
  }
  h4,
  h5 {
    color: var(--primary) !important;
  }
  hr {
    height: 1px;
    width: 90%;
    background-color: var(--link) !important;
  }
  .title.is-6 {
    text-decoration-thickness: inherit;
  }
  .subtitle {
    padding-left: 20px;
  }
  .summary-p {
    background-color: var(--primary) !important;
    color: #fff !important;
    padding: 0.5rem;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .summary-info {
    margin-bottom: 15px;

    text-align: center;
    font-weight: 600 !important;
  }

  @media screen and (max-width: 1456px) {
    .image-cont {
      width: 68%;
    }
  }
  @media screen and (max-width: 1413px) {
    .image-cont {
      width: 70%;
    }
  }

  @media screen and (max-width: 1360px) {
    .image-cont {
      width: 72%;
    }
  }
  @media screen and (max-width: 1316px) {
    .image-cont {
      width: 76%;
    }
  }

  @media screen and (max-width: 1264px) {
    .image-cont {
      width: 79%;
    }
  }
  @media screen and (max-width: 1212px) {
    .image-cont {
      width: 83%;
    }
  }
  @media screen and (max-width: 1165px) {
    .image-cont {
      width: 86%;
    }
  }

  @media screen and (max-width: 1134px) {
    .image-cont {
      width: 89%;
    }
  }

  @media screen and (max-width: 1096px) {
    .columns {
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      display: flex !important;
    }
    .message-container {
      width: 70%;
      margin-left: -4%;
    }

    .image-cont {
      background-image: url("src/themes/dsv1.0/img/isometic/iphone landscape.png");
      width: 100%;
    }

    .text {
      margin-left: 30px;
      width: 70%;
      overflow-y: auto;
    }

    .content {
      border-top: 1.5px solid var(--link);
      border-left: none;
      padding-top: 8px;
    }
    .content h1 {
      text-align: center !important;
    }

    h1 {
      font-size: 24px !important;
      font-weight: 500 !important;
      padding-left: 0px !important;
    }
  }

  @media screen and (max-width: 1040px) {
    .group {
      display: flex !important;
      flex-direction: column !important;
    }
    .text {
      height: 200px;
      overflow-y: auto;
      margin-top: 97px;
    }
  }
  @media screen and (max-width: 500px) {
    .text {
      width: 85%;
      max-height: 105px;
      margin-left: 13px;
      overflow-y: auto;
      text-align: center;
      margin-top: 145px;
    }
  }
  @media screen and (max-width: 852px) {
    .text {
      height: 150px;
      margin-top: 120px;
    }
  }
  @media screen and (max-width: 756px) {
    .column {
      width: 100%;
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 732px) {
    .message-container {
      width: 90%;
    }
  }
  @media screen and (max-width: 675px) {
  }

  @media screen and (max-width: 595px) {
    .message-container {
      width: 100%;
      margin: 0;
    }
    .block {
      overflow-x: auto;
    }
  }
  @media screen and (max-width: 512px) {
  }
`;
