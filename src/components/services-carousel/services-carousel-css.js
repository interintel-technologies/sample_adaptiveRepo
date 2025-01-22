import { css } from 'lit-element';

export const ServicesCarouselStyles = css`
    .nav {
        position: absolute;
        top: 50%;
        border:1px solid black;
        background-color: white;
        transition: background-color 0.7s ease;
        border-radius:50%;
        cursor: pointer;
    }
    h3, h4, h5 {
        color: black !important;
    }
    .nav:hover {
        background-color: var(--link);
    }
    #prev {
        left: 20px;
    }
    #next {
        right: 20px;
    }
    adaptive-ui-icon {
        width: 28px;
        height: 28px;
        fill: black;
    }
    .dots-container{
        position: absolute;
        bottom: 20px;
        width: fit-content;
        transform: translateX(50%);
        right: 50%;
    }
    .dot {
        cursor:pointer;
        border-radius: 3px;
        width: 8px;
        height: 8px;
        margin: 0 5px;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.7s ease;
        background-color: #bbb;
    }
    .columns > .column {
        padding: 1.1rem !important;
    }
    .active, .dot:hover {
        background-color: var(--link);
    }
    .button {
        background-color: var(--primary);
        color: white;
        padding: 20px 40px;
        height: 40px !important;
        border: none;
        margin-top: auto;
        width: fit-content;
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
    .button > adaptive-ui-icon {
        fill: white;
    }
    a > h5 {
        color: white !important;
        margin-bottom: 0 !important;
        margin-right: 12px;
    }
    img {
        width: 100%;
        height: 90%;
        object-fit: contain;
    }
    #serviceCarousel {
        height: 80vh;
        position: relative;
        padding: 30px 40px;
    }
    .hero-body {
        margin: -30px -60px;
        height: 80vh;
        position:relative;
        clip-path: polygon(100% 0, 100% 92%, 45% 100%, 0 88%, 0 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0.2px);
        -webkit-backdrop-filter: blur(0.2px);
    }
    .content {
        flex-direction: column;
    }
    .columns {
        height: 100%;
        padding: 30px;
    }
    .columns.column {
        height: 100%;
    }
    @media screen and (max-width: 500px){ 
        .hero-body,#serviceCarousel {
            height: fit-content !important;
        }
        .hero-body {
            clip-path: polygon(0 0, 100% 0, 100% 95%, 59% 100%, 0 100%, 0% 50%);
        }
    }
`;
