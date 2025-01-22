
import {css} from 'lit-element';

export const EmailSummaryStyles = css`
    section {
        margin:16px;
    }
    .columns {
        display: flex!important;
        flex-direction: row!important;
    }
    .group {
        display: flex!important;
        flex-direction: column!important;
    }
    .group-title{
        margin-top: 8px;
    }
    .content-2{
        width:100%;
        max-height: 295px;
        overflow: auto;
    }
    .image-container{
        position:relative;
        margin-left: 16px;
        border-right: 1.5px solid rgb(221 208 208);;
        padding-right: 16px;
    }
    .screen-shot{
        border: 18px solid var(--app-default-color);
        background-image: url("src/themes/dsv1.0/img/isometic/email_screenshot.png");
        background-repeat: no-repeat;
        width: 620px;
        background-size: cover;
        background-position-y: 10%;
        border-radius: 25px;
        height: 312px;
    }
    .text{
        position: absolute;
        top: 35%;
        left: 7%;
        max-height: 135px;
        background-color: transparent;
        padding: 4px;
        text-align: initial;
        width: 85%;
        overflow-x: hidden;
        line-break: auto;
        overflow-y: auto;
        border-radius: 8px;
    }
    .text-message{
        font-weight: 400!important;
        padding: 2px;
    }
    h1{
        font-size: 18px!important;
        font-weight: 500!important;
        padding-left: 29px!important;
    }
    .column {
        display: block;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        padding: 0px;
        margin: 1.75rem 2rem 1.75rem 1.75rem;
        box-shadow: 0px 3px 6px #00000029;
        border: 1px solid #707070;
        border-radius: 10px;
        opacity: 1;
        backdrop-filter: blur(28px);
        -webkit-backdrop-filter: blur(28px);
        border-top: none;
    }
    .summary-p{
        background-color: var(--app-default-color)!important;
        padding: 0.5rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .summary-info{
        margin-bottom: 15px;
        text-align: center;
        font-weight: 600!important;
    }
    @media screen and (max-width:1294px) {
        .text{
            position: absolute;
            top: 30%;
            left: 11%;
            width: 80%;
        }
    }

    @media screen and (max-width:1084px) {
        .columns {
            display: flex!important;
            flex-direction: column!important;
            justify-content: center;
            align-items: center;
            margin-top: 16px;
        }
        .text{
            position: absolute;
            top: 33%;
            max-height: 250px;
            overflow-y: auto;
            overflow-x:hidden;
            width: 80%;
            left: 5%;
        }
        .image-container {
            border-right: none;
            border-bottom: 1.5px solid rgb(221, 208, 208);
            padding-bottom: 16px;
        }
        .group{
            justify-content: center;
            align-items: center;
        }
        .column{
            width: 84%;
        }
    }
    @media screen and (max-width:946px) {
        .text{
            width: 13%;
            max-height: 176px;
            width: 84%;
            left: 8%;
            overflow-y: auto;
        }
    }
    @media screen and (max-width:852px) {
        .text{
            left: 12%;
            max-height: 176px;
            width: 75%;
        }
    }
    @media screen and (max-width:756px) {
        .text{
            width: 75%;
            left: 11%;
            overflow-y: hidden;
        }
    }
    @media screen and (max-width:675px) {
        .text{
            width: 75%;
            left: 14%;
            overflow-y:auto;
        }
    }
    @media screen and (max-width:580px) {
        .text{
            top: 26%;
            left: 18%;
            width: 50%;
        }
    }
    @media screen and (max-width:580px) {
        .text{
            top: 26%;
            left: 18%;
            overflow-y: auto;
        }
    }
    @media screen and (max-width:512px) {
        .text{
            width: 40%;
            left: 20%;
        }
    }
`;
