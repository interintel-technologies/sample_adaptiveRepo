import { css } from 'lit-element';

export const ShareButtonStyles = css`
    .button {
        background-color: var(--primary);
        color: white;
        width: 100%;
        height: 40px !important;
        border: none;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--link);
        color: white !important;
        border: none !important;
    }
    .button:active {
        transform: scale(1.05);
        color: white !important;

    }
    .fas {
        margin-right: 16px;
        color: var(--link);
    }
    .button:hover .fas {
        color: var(--primary);
    }
`;