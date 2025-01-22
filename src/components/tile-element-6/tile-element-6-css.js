
import { css } from 'lit-element';

export const TileElement6Styles = css`
    .card {
        margin: 30px 30px !important;
        padding: 20px;
        border: 1px solid var(--input-border-color) !important;
        border-radius: 12px;
        transition:.2s ease-out;
        background:linear-gradient(45deg, var(--paper) 35%, var(--primary) 105%);
    }
    .card:hover{
       transform:scale(1.02);
    }
    img {
        width: 250px;
        object-fit: contain;
        margin: auto !important;
    }
    p {
        width: 90% !important;
        color:var(--grey-dark);
    }
    #textCol{
        padding-top:4rem;
    }
    #title{
        font-weight:600;
        font-size:24px;
    }
    .button {
        border-color: var(--primary) !important;
        color: var(--primary) !important;
        padding: 0 20px !important;
    }
    .button:hover {
        border-color: var(--link) !important;
        color: var(--link) !important;
    }
    .button:active {
        transform: scale(0.9);
    }
    @media(max-width:768px){
        #textCol{
            padding-top:1rem;
            padding-bottom:1.5rem;
        }
    }

    @media screen and (max-width: 430px) {
        p {
            width: 94% !important;
        }
        hr {
            width: 94% !important;
        }
    }
`;