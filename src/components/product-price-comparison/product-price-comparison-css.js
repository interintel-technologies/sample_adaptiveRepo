import { css } from 'lit-element';

export const ProductPriceComparisonStyles = css`
    .columns {
        margin: 0!important;
    }
    ul {
        margin: 0!important;
        max-height:50vh;
        overflow-y: auto;
        list-style: none;
    }
    li {
        border-bottom: 1px solid black;
    }
    li > .column {
        margin: auto;
    }
    .stock {
        padding: 0.75rem 0 !important;
    }
    h4 {
        margin: 0!important;
    }
    .pill {
        border-radius: 200px;
        background-color: #ccc;
    }
    .pill > h4 {
        font-style: italic;
        padding: 7px;
    }
    .button {
        box-shadow: none !important;
        background-color: var(--app-default-color) !important;
        color: white !important;
        border-radius:100px;
        padding: 2px 30px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        transform: scale(1.05);
        background-color: var(--app-secondary-color) !important;
    }
    .button:active {
        transform: scale(0.95);
    }
    .button > h4 {
        color: white !important;
    }
`;