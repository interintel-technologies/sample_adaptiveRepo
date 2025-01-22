import { css } from 'lit-element';

export const ProductViewStyles = css`
    img {
        width: 100%;
        object-fit: contain;
        /* padding: 10px; */
    }
    .image {
        border: 1.5px solid var(--input-border-color);
        border-radius:20px;
        margin-left:auto;
        margin-right:auto;
    }
    .button {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 20px 35px;
        width: 100%;
        color:var(--link);
    }
    .buttons {
        border-radius: 0 !important;
        flex-wrap: nowrap;
    }
    .icon {
        width: 40px;
        height: 40px;
        fill: black;
    }
    .heart {
        border-radius: 0 !important;
        border: 1px solid black !important;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        padding: 12px !important;
        width: fit-content !important;
        justify-content:center;
        
    }
    .heart:hover {
        border-radius: 0 !important;
        border: 1px solid var(--link) !important;
    }
    .heart:active {
        transform: scale(1.05);
    }
    .heart adaptive-ui-icon{
        fill:var(--link-color-invert);
        padding-top:5px;
        color:var(--link-color-invert);
    }
    .block {
        flex-direction: column;
        justify-content: space-between;
    }
    .hero-body {
        padding: 80px !important;
        margin: 0px;
    }
    #actions {
        margin-top: 30px;
        position: relative;
        margin: 0px !important;
        flex-wrap: wrap;
    }
    .content h4 {
        margin-top: 20px;
    }
    #previousPrice {
        text-decoration: line-through;
        opacity: 0.3;
    }
    #currentPrice {
        color: var(--grey-darker);
        margin-left: 5px;
        margin-top:.6em;
    }
    .small-image {
        cursor: pointer;
    }
    .small-image:hover{
        border-color: var(--link);
    }
    .selected {
        border-color: var(--grey-darker) !important;
        border-width: 2px !important;
    }
    .checked{
        font-weight:600 !important;
    }
    hr{
        margin: 1rem 0px !important;
    }
    .category{
        color:var(--grey);
        font-weight:500;
    }
    .tooltip {
        position: absolute;
        bottom: -35px;
        right: 0;
        opacity: 0;
        transition: opacity 1s;
        background-color: black;
        color: var(--grey-darker);
        text-align: center;
        border-radius: 6px;
        padding: 5px 7px;
        z-index: 1;
    }
    .show-tooltip {
        opacity: 1;
    }
    .tooltip p {
        color: white;
    }
    .subImgs{
        margin-top:0px;
    }
    #buttonsInput {
        display: flex;
    }
    #numberInput {
        display: none;
    }
    #quantitySelector.number-input > #numberInput {
        display: flex;
    }
    #quantitySelector.number-input > #buttonsInput {
        display: none;
    }
    
    #qtyBtn {
        border: 1px solid var(--link) !important;
        box-shadow: none !important;
        margin: 0 !important;
        border-radius: 0px;
        width: 100%;
        color: var(--link--invert-color);
        background-color:var(--card-background-color);
    }
    #removeBtn, #addBtn {
        cursor: pointer;
        width: 100%;
        background-color: var(--link);
        border: 1px solid var(--link) !important;
        box-shadow: none !important;
        margin: 0px !important;
        color:var(--link--color-invert);
    }
    #removeBtn{
        border-radius:30px 0 0 30px;
    }
    #addBtn{
        border-radius: 0 30px 30px 0;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    figure{
        overflow:hidden;
    }
    .small-image img{
        width:100%;
        height:96px;
    }
    #addToCartBtn{
        font-family:var(--family-sans-serif);
        color:var(--link--color-invert);
        background-color:var(--link);
        border-radius:30px;
        padding-top: .75em;
        padding-bottom: .75em;
    }
    #addToCartBtn:hover{
        background-color:var(--primary);
        color:var(--link--color-invert);   
    }
    .stockStatus{
        margin-left:.5em;
        white-space: nowrap; 
    }
    .stockStatusSpan{
        background-color:rgba(32,181,38,.2);
        color:rgba(44,116,47,1.0);
        border-radius:5px 5px 5px 5px;
        font-size:.8em !important;
        font-weight:600;
    }
    .description{
        margin-bottom:0 !important;
        color:var(--grey) !important;
    }
    label.radio{
        font-size:16px !important;
        margin-left:.5em;
    }
    radio .radio input[type="radio"]{
        font-size:16px !important;
    }
    radio .radio input[type="radio"]:checked + label{
        background-color:var(--link) !important;
        font-weight:600;
    }
    .radio + .radio {
            margin-left: .5em;
            margin-right:.5em;
    }
    .optionSelection{
        margin-top:1em;
    }
    .optionSelection label{
        font-weight:600;
    }
    .optionList{
        list-style:none !important;
        display:inline-flex;
        margin-left:0 !important;
        margin-top:.5em !important;
        width:100%;
        justify-content:flex-start;
    }
    .optionListItem{
        border:1px solid var(--input-border-color);
        margin-left:.3em;
        margin-right:.3em;
        max-height:37px;
        text-align:center;
        border-radius:5px 5px 5px 5px;
        vertical-align:middle;
        cursor:pointer;
    }
    .optionListItem.selected p{
        color:var(--grey-darker);
    }
    .optionListItem p{
        font-size:.9em;
        color:var(--grey);
    }
    .optionList > li:first-of-type{
        margin-top:0.25em !important;
    }
    .disabled{
        color:var(--grey-lighter);
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
        background: 
         linear-gradient(to top left,
             rgb(219, 219, 219) 0%,
             rgb(219, 219, 219) calc(50% - 0.8px),
             var(--grey) 50%,
             rgb(219, 219, 219) calc(50% + 0.8px),
             rgb(219, 219, 219) 100%);
    }
    .packSelection .control{
        /* display: flex; */
         /* flex-direction: row;  */
         vertical-align: middle
    }
    @media(max-width:768px){
        .radio + .radio {
            margin-left: 0 !important;
        }
        label.radio{
            margin-left: 0 !important;
        }
    }
    @media screen and (max-width: 550px) {
        .heart {
            margin: auto !important;
        }
        .hero-body {
            padding: 10px !important;
        }
      #addToCartBtn {
            width: 100%;
        }
    }
    @media(max-width:480px){
        .small-image{
            width:64px !important;
            height:64px !important;
        }
    }
`;