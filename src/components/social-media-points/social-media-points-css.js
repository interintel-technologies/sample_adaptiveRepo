import { css } from 'lit-element';

export const SocialMediaPointsStyles = css`
    .columns {
        margin: 0 !important;
    }
    li{
        list-style:none !important;
    }
   
    ul.column{
        overflow:hidden !important;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
    input:checked + .slider {
        background-color: var(--link);
    }
    input:focus + .slider {
        box-shadow: 0 0 1px var(--link);
    }
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    .slider.round {
        border-radius: 34px;
    }
    .slider.round:before {
        border-radius: 50%;
    }
    img {
        width: 60%;
        object-fit: contain;
    }
    p {
        width: 70%;
    }
    .column.is-2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .edit {
        text-align: center;
        color: var(--primary);
        cursor: pointer;
        margin: 10px;
        text-decoration: underline;
        text-decoration-color: var(--primary);
    }
    .edit:hover {
        color: var(--link);
        text-decoration-color: var(--link);
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    .button {
        background-color: var(--primary);
        color: white;
        padding: 7px 21px;
        height: 40px !important;
        border: none;
        margin-top: 15px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--link);
        color: white !important;
        border: none !important;
    }
    .button:active {
        transform: scale(1.05);
        color: white !important;
    }
    ul {
        border: 2px solid #ccc;
    }
    .modal-background {
        background-color: transparent !important;
    }
    .modal-title {
        margin-bottom: 15px;
        width: 100%;
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        border: 2.5px solid #ccc;
        border-radius: 7px;
    }
    .close-icon {
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
    .close-icon:hover {
        fill: var(--link);
    }
    .close-icon:active {
        transform: scale(1.05);
    }
    .is-flex.content{
        margin: 0 !important;
    }
    .content.is-flex {
        flex-direction: column;
        justify-content: center;
    }
    .column.is-8 {
        margin: auto !important;
    }
    @media screen and (max-width:800px) {   
        p {
            width: 100%;
        }
    }
`;