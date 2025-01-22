import { css } from 'lit-element';
export const PaymentsSetupStyles = css`
    .cont {
        border: 0.7px var(--primary-text);
        border-radius: 7px;
        padding: 32px;
        margin: 16px;
    }
    .button{
        background-color: var(--primary);
        padding: 0 35px;
        border-color: none;
        color: white;
    }
    .button:hover{
        background-color: var(--link);
    }
    .back{
        cursor: pointer; 
        color: var(--primary) !important;
        text-align: center;
    }
    .back:hover {
        color: var(--link) !important;
    }
    #warning-text{
        display:none;
    }
`;