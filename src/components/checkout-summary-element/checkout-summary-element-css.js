import { css } from 'lit-element';

export const CheckOutSummaryElementStyles = css`
.column {
    padding: 0;
}
.total-payment p:first-of-type{
    color: var(--grey-darker);
}
.payment-btns{
    width: 100%;
}
.total-payment .amount{
    border: 2px solid var(--grey-darker);
}
.payment-tabs .column li{
    display: block;
    margin: 4px 5px;
    border: 2px solid var(--primary);
    color: var(--primary);
    cursor: pointer;
    transition: color 300ms ease, transform 300ms ease;
}
.payment-tabs .column li:hover{
    background-color: var(--primary);
    color: #fff;
}
.payment-tabs .column li:active{
    transform: scale(0.8);
}
.payment-tabs .column a.active{
    background: var(--primary);
    color: #fff;
}
.payment-tabs-content{
    display: none;
}
.payment-tabs-content.active {
    display: block;
}
@media screen and (min-width: 769px){

}
`