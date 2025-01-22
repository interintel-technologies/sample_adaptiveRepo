import { css } from 'lit-element';

export const OrderSummaryStyles = css`
    #orderSummary {
        background-color: white;
    }
    p {
        margin: 0 10px;
        text-align: start;
    }
    ul {
        max-height: 60vh;
        overflow-y: auto;
        margin: 0 !important;
        padding: 0 !important;
    }
    .card {
        border-radius: 7px;
        box-shadow: none;
    }
    .order-title-center{
        text-align: center;
    }
    .order-content-center{
        position: relative;
        left: 37%;
    }
    .order-title-right, .order-content-right{
        text-align: right;
    }

    @media only screen and (max-width: 767px) {
        .order-title, .order-content{
            text-align: left!important;
            left: 0!important;
        }
    }
`;