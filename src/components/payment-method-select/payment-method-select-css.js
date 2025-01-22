
import { css } from 'lit-element';

export const PaymentMethodSelectStyles = css`
    img {
        width: 1.5rem;
        height: 1.5rem;
    }
    .button {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .card{
        box-shadow:none !important;
    }
    #card2{
        padding:1.5em;
        border:1px solid var(--input-border-color) !important;
        border-radius:4px;
    }
    /* #card2 .field label.label{
        color:var(--grey-dark);
        font-weight:400 !important;
    } */
    #card2 .field{
        margin-top:2em;
    }
    .imgHeader{
        display:inline-flex;
    }
    .img{
        width:75px;
        height:40px;
        margin-bottom:.5em;
    }
    .mpesa{
        color:#39B54A;
        font-weight:800;
        font-size:20px;
        font-family:var(--family-sans-serif);
    }
    ::placeholder{
        color:var(--grey) !important;
        font-weight:400 !important;
    }
    .icon-text{
        font-weight:600 !important;
        cursor:pointer !important;
    }
   
`;
