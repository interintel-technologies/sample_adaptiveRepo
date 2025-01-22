import {css} from 'lit-element';

export const PaymentStatusStyles = css`
 #loader {
      display: none; /* Hidden by default */
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5em;
      color: var(--primary);
      padding-top: 1.5rem;
      padding-top: 1.5rem;
      text-align:center;
    
    }

    img{
        height: 60px;
        width: 60px;
        color: var(--primary); 
    }
    #alert{
       
        display:none;
    }
    #alert p{
        color:red !important;
    }
    #retryBtn{
        border-radius:100px;
        background-color: var(--primary);
        color: var(--white);
        margin-top: 10px;
        width: 100%;
        text-transform:capitalize;
        font-family:'Montserrat';
        box-shadow:none !important;
        cursor:pointer;
        border:none;
    }
`;