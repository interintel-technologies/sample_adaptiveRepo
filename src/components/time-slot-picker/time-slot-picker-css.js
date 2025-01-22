import { css } from 'lit-element';

export const TimeSlotPickerStyles = css`
    h5 {
        margin-bottom: 0 !important;
        color: white !important;
        text-align: center;
    }
    input {
        margin-right: 1rem;
        cursor: pointer;
    }
    .card {
        border-radius: 7px;
    }
    h4 {
        text-align: center;
    }
    ul {
        margin-left: 0 !important;
        max-height: 60vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    li {
        align-items: center;
        margin-bottom: 1rem;
    }
    span {
        padding: 1rem;
        width: 100%;
        background-color: var(--paper);
        cursor: pointer;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    span:hover {
        transform: scale(1.03);
        background-color: var(--primary);
    }
    span:active {
        transform: scale(0.97);
    }
    .selected {
        background-color: var(--primary);
    }
    .valid{
        color :#23D160!important;
    }
    .valid-span {
        background-color: #23D160!important; 
    }
    .invalid{
        color: rgb(255, 56, 96)!important;
    }
    #warning-text{
        display: none;
    }
`;