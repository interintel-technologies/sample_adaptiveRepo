import { css } from 'lit-element';

export const PaymentSelectorStyles = css`
    .column {
        padding: 16px;
    }
    .payment-selector-list {
        display: flex;
        flex-direction: row;
        overflow:auto;
        margin: 10px 0;
    }
    .card {
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-width:170px;
        margin: 0 20px;
        padding: 15px;
        border: 2.8px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    .card-image {
        width: 140px;
        object-fit: contain;
    }
    .subtitle {
        text-align:center;
    }
    .check-icon {
        display:none;
        position:absolute;
        top: 50%;
        transform: translateY(-50%);
        right:-20px;
        width:38px !important;
        height: 38px !important;
        fill: var(--primary);
        background-color:white;
    }
    .card:hover {
        border-color: var(--primary);
    }
    .selected {
        border-color: var(--primary);
    }
    .title-danger{
        color: #ff2b56;
    }
    .title-success{
        color: #23d160 !important;
    }
    .selected-success {
        border-color: #23d160 !important;   
        fill: #23d160 !important;
    }
    #warning-text{
        display:none;
    }
    @media screen and (max-width: 550px) {
        .card {
            margin:0 10px;
        }
    }
`;