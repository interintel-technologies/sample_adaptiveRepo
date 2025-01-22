import { css } from 'lit-element';

export const AdsCarouselStyles = css`
    .nav {
        position: absolute;
        top: 50%;
        transition: background-color 0.7s ease;
        cursor: pointer;
        color: #fff;
    }
   
    .nav:hover {
        background-color: var(--paper);
    }
    #prev {
        left: 20px;
    }
    #next {
        right: 20px;
    }
    .ads-title{
        width: 60%;
    }
    .ads-title h3{
        font-size: 35px;
        font-weight: 600;
        line-height: 47px;
        letter-spacing: 0em;
        text-align: left;
    }
    .ads-title h4{
        font-size: 24px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;   
    }
    adaptive-ui-icon {
        width: 48px;
        height: 48px;
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
        background-color: var(--primary);
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
        background-color: var(--paper);
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
       
        margin-bottom: 0 !important;
        margin-right: 12px;
    }
    img {
        width: 100%;
        height: 90%;
        object-fit: contain;
    }
    #serviceCarousel {
        position: relative;
        padding: 30px 40px;
        /* margin: 0 auto; */
    }
    .hero-body {
        border-radius: 20px;
        position: fixed;
        margin: -30px -48px;
        position:relative;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0.2px);
        -webkit-backdrop-filter: blur(0.2px);
    }
    .content {
        flex-direction: column;
    }
    .columns {
        height: 420px;
        padding: 30px;
    }
    .columns.column {
        height: 100%;
    }
    @media screen and (max-width: 500px){ 
        .hero-body,#serviceCarousel {
            height: fit-content !important;
        }
    }
    
    .ads-body{
        flex-direction: row;
        display: flex!important;
    }
    @media only screen and (max-device-width: 768px){
        .dots-container {
            position: absolute;
            bottom: 20px;
            width: fit-content;
            transform: translateX(50%);
            right: 50%;
            bottom: -19px;
        }

        .hero-body{
            border-radius: 7px;
            margin: 0 -29px;
        }

        #serviceCarousel {
            position: relative;
            padding: 30px 40px;
            top: 0;
            right: 0;
            width: inherit;
        }
        .carousel-wrapper {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
            flex: 0 0 100%;
            box-sizing: border-box;
        }
        .dots-container {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
        }
        .dot {
            width: 10px;
            height: 10px;
            background-color: #fff;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
        }
        .dot.active {
            background-color: #000;
        }
    }
`;
