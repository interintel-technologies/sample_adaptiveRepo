
import { css } from 'lit-element';

export const DaysHoursSelectorStyles = css`
    .cont {
        border: 0.7px solid black;
        border-radius: 7px;
        padding: 32px;
        margin: 16px;
    }
    .column.is-flex {
        align-items: center;
        min-height: fit-content;
    }
    .c-title,
    .c-desc {
        text-align: center;
        pointer-events: none;
        margin-bottom:0 !important;
    }
    .fas{
        pointer-events: none;
        margin-bottom:20px !important;
    }
    .selected {
        border: 1.2px solid var(--link) !important;
    }
    .unavailable{
        cursor: pointer; 
        color: var(--primary) !important;
        text-align: center;
    }
    .unavailable:hover {
        color: var(--link) !important;
    }
    .unavailable:active {
        transform: scale(0.9);
    }
    .more {
        cursor: pointer; 
        width: fit-content;
        color: var(--primary) !important;
        text-align: flex-start;
    }
    .more:hover {
        color: var(--link) !important;
    }
    h4 {
        margin-bottom:0 !important;
    }
    .more:active {
        transform: scale(0.9);
    }
    .button{
        background-color: var(--primary);
        padding: 0 35px;
        border-color: none;
        color: white;
    }
    .button:hover{
        background-color: var(--link);
    }
    #warning-text{
        display:none;
    }
    .title-danger{
        color: #ff2b56 !important;
    }
    .title-success{
        color: #23d160 !important;
    }
    .card-success{
        border-color: #23d160 !important;
    }
    .cont-success {
        border-color: #23d160 !important;
    }
    .cont-danger {
        border-color: #ff2b56 !important;
    }
    input {
        border: 2px solid var(--primary);
        transition: 0.2s all linear;
        margin-right: 5px;
    }
    input:checked {
        border: 5px solid var(--link);
    }
    .input-success {
        border: 5px solid #23d160 !important;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    .input-warning {
        color:#ff3860;
        display:none;
        position: absolute;
        top: 37px;
    }
    .column .is-3 {
        padding-left: 0 !important;
        padding-right: 0 !important;   
    }
    .break-hours {
        display: none;
    }
    @media screen and (max-width:450px) {
        .column.is-flex {
            justify-content:center;
            flex-wrap: wrap;
        }

        h4 {
            width: 100%;
            text-align: center;
        }
        .day {
            border-bottom: 1px solid black;
        }
    }

`;