import { css } from 'lit-element';


export const LoadingStyles = css`
    .loading {
        background-color: #ededed !important;
        background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, .5) 50%,
            rgba(255, 255, 255, 0) 60%
    ) var(#ededed) !important;
        background-size: 200% 100% !important;
        background-position-x: 180% !important;
        animation: 1s loading ease-in-out infinite;
    }

    @keyframes loading {
        to {
            background-position-x: -20%;
        }
    }
`;
