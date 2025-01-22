import { css } from 'lit-element';

export const CartEditorStyles = css`

    .cart-btns .cont-btn{
        font-family:var(--family-sans-serif) !important;
        color:var(--link) !important;
        background-color:var(--body-background-color);
        border:1px solid var(--primary) !important;
    }
    .cart-btns .proceed-btn{
        font-family:var(--family-sans-serif) !important;
        color:var(--primary--color-invert) !important;
        background-color:var(--primary);
    }
    .cart-btns .proceed-btn h6{
        color:var(--white);
    }
    #couponColumn .button{
        font-family:var(--family-sans-serif) !important;
        color:var(--primary--color-invert) !important;
        background-color:var(--link);
    }
    .buttons {
        border-radius: 0 !important;
        flex-wrap: nowrap;
    }
    .qty-btn {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        width: 100%;
        pointer-events: none; 
        color: var(--link--invert-color);
        background-color:transparent;
        min-width:50px;
        
    }
    .qty-btn h5{
        font-weight:400 !important;
        font-family:var(--family-sans-serif);
    }
    .qty-btn > .icon {
        pointer-events: none !important;
    }
    .remove-btn, .add-btn {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        cursor: pointer;
        background-color:var(--md-sys-color-secondaryContainer);
      border-radius:50% !important;
      width:45px;
      height:45px;
    }
    .remove-btn adaptive-ui-icon .icon,  .add-btn adaptive-ui-icon .icon{
        width: 24px !important;
        height: 24px !important;
        color:var(--primary);
    }
    .circular{
        width:50px;
        height:50px;
        background-color:var(--md-sys-color-secondaryContainer);
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        display: flex;
        border: 2px solid transparent;
        box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--md-sys-color-secondaryContainer); 
    }
    .circular h4{
        margin-bottom:0 !important;
        font-weight:400;
        font-size: 20px !important; 
        display: block !important;

    }
    .image {
        display: flex;
        margin: 0 !important;
        background-color:transparent;
        border-radius: 6px  6px 6px 6px;
    }
    img {
        object-fit: contain;
    }
    .product-column {
        display: flex;
        align-items: center;
    }
    .title{
        color:var(--primary);
        font-weight:400 !important;
        line-height:20px;
        letter-spacing:.5px;
        font-size:14px !important;
        margin-bottom:.5rem !important;
    }
    .hdr{
        margin: 0px;
        /* border:1px solid rgb(183, 181, 181); */
        background-color:var(--md-sys-color-surfaceBright);
    }   
    .hdr h5, .product h5 {
        margin-bottom: 0 !important;
        color:var(--link-color-invert) !important;
        font-weight:400;
        font-size:14px !important;
    }
    .buttons-input {
        display: flex;
    }
    .num-input {
        display: none !important;
    }
    .quantity-selector.number-input > .num-input {
        display: flex !important;
    }
    .quantity-selector.number-input > .buttons-input {
        display: none;
    }
    .qty-total{
        flex-direction: column!important;
        justify-content: center;
        align-items: flex-start
    }
    ul {
        list-style: none;
        max-height: 55vh;
        overflow-y: auto;
        margin-left: 0 !important;
        margin-bottom: 0 !important;
        margin-top: 0 !important;
        border-bottom: 1px solid var(--md-sys-color-outlineVariant);
    }
    .product {
        border-bottom: 0.5px solid var(--md-sys-color-outlineVariant);
    }
    .columns:not(:last-child){
        margin-bottom:0 !important;
    }
    .cart-btns {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        padding-left: 4%;
        padding-right: 2%;
    }
    #total {
        text-align: end;
        padding-right: 2%;
    }
    #total span{
        color:var(--link);
    }
    .label {
        display: none;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    .price-cont{
        width: 100%;
        position: relative;
        margin: 20px 0;
    }
    .price-cont .cont{
        position: relative;
        right: 0;
    }   
    .cont h5{
        font-weight:400 !important;
        font-size:16px !important;
        color:var(--md-sys-color-outline);
    }
    @media screen and (max-width: 770px) {
        #cartEditor{
            margin-top:5%;
        }
        ul{
            list-style:none !important;
            border-top:1px solid rgb(183, 181, 181) !important;
            padding-top:3%;
        }
        .hdr {
            display: none;
        }
        #addToCartBtn {
            width: 100%;
        }
        /* .cart-btns {
            justify-content: center;
        }
        .cart-btns > .btn {
            margin-left: 0 !important;
            margin-bottom: 20px;
        } */
        #total {
            text-align: center;
        }
        .product-column {
            justify-content: space-between;
        }
        .label {
            display: block;
        }
        .qty-total{
            flex-direction:row !important;
        }
    }
`;
