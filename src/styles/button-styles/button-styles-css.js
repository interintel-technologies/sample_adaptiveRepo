
import { css } from 'lit-element';

export const ButtonStyles = css`
    .button {
        transition: .2s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12) !important;
    }
    .button:hover {
        transform: scale(1.005);
    }
    .button:active {
        transform: scale(0.995);
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .submit-animation::before {
        content: '';
        position: absolute;
        box-sizing: border-box;
        width: 20px;
        height: 20px;
        border: 2px solid #ccc;
        border-top-color: #333;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
`;
