import { css } from 'lit-element';

export const SplitButtonStyles = css`
    .active-option{
        width:75%;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .active-option:active {
        transform: scale(1.05);
    }
    .dropdown {
        width: 25% !important;
    }
    .selected-option {
        width: 75% !important;
    }
    
    .button {
        background-color: var(--primary);
        color: white;
        border: none !important;
        border-radius:0 !important;
    }
    .button:hover {
        background-color: var(--link);
        color: white !important;
        border: none !important;
    }
    .dropdown-item,h4{
        cursor: pointer;
    }
    .dropdown-trigger{
        width:100%;
    }
    .options-btn {
        width:100% !important;
        filter: brightness(90%);
    }
`