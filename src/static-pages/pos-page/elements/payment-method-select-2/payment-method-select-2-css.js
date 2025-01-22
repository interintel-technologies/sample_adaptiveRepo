import { css } from 'lit-element';

export const PaymentMethodSelectStyles2 = css`
    .imgCol{
        cursor:pointer;
    }
    .column{
        padding: .35rem .75rem .35rem .75rem !important;
    }
    .btn{
        text-align:center;
        display:flex;
        justify-content:center;
        border:2px solid var(--link) !important;
        padding:7px 0 7px 0;
        cursor:pointer;
    }
    .imgWrapper{
        border:1px solid var(--input-border-color);
        border-radius:10px;
        max-height:105px;
        min-height:90px;
        justify-content:center;
        vertical-align:middle;
    }

    .imgWrapper:hover{
        border:2px solid var(--link);
    }
   
    .is-active{
        border:2px solid var(--link);
    }
    .imgWrapper img{
        border-radius:9px;
        height:80px;
        width:100%;
        object-fit:contain;
    }
    .content figure{
        margin-left:.75em !important;
        margin-right:.75em !important;
    }
    .onHold{
        border:1px solid var(--link);
        color:var(--link);
        text-align:center;
        border-radius:3px;
        cursor:pointer;
    }
    .onHold p{
        font-weight:600;
    }
    
    .stkBtn{
        background-color:var(--link);
        text-align:center;
    }
    .stkBtn p {
        color: var(--link--color-invert);
    }
    @media(max-width:768px){
        number-pad{
            display:none !important;
        }
    }
`;
