import { css } from 'lit-element';

export const PaymentAmountStyles = css`
.payment-amount{
    margin-top: 25px;
    margin-bottom: 25px;
}
.payment-amount h1{
    text-align: left;
    color: #454040;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
}
.amount{
    justify-content: left;
    border-radius: 3px;
    border: 3px solid var(--link);
    background: #F0F5FF;
}
.amount .icon{
    color: var(--link);
}
.amount p{
    color: var(--link);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
}   
`