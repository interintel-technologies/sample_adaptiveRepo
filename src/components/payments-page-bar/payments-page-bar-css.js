
import { css } from 'lit-element';

export const PaymentsPageBarStyles = css`
    :host {
        display: block;
        position: relative;
    }
    .payments-banner-container{
        width: 65%;
        background-image: linear-gradient(to right bottom,#ff9a4f, #ff9d51, #ff9449, #ff9f52,#ff9d51);
        border-radius: 20px;
        margin-right:auto;
        margin-left:auto;
    }
    .columns{
        height: 270px;
    }
    .imgCol{
        display:inline-flex;
        vertical-align:bottom;
    }
    .img{
        max-width: 100%;
        position:relative;
        bottom:-12px;
    }
    .hero-content{
        flex-direction: column;
    }
    .content h2{
        color:var(--info--color-invert) !important;
        font-family:var(--family-sans-serif) !important;
        font-size: 1.25em;
    }
    .content{
        font-weight: bold;
        color: #fff;
    }
    .services img{
        width: 50px;
        border-radius:15px 15px 15px 15px;
        
    }
    .content .numberSpan{
        font-size:48px;
    }
    .support{
        font-size:20px;
    }
    @media(max-width:1100px){
        .columns{
        height: 280px;
        }
       .img{
        max-width: 100%;
       }
       .payments-banner-container{
        width: 80%;
       }
    }
    @media(max-width:768px){
        .payments-banner-container{
            overflow:clip !important;
            overflow-wrap:break-word !important;
            margin-right:auto;
            margin-left:auto;
            width: 90%;
        }
        .content{
            font-weight: bold;
        }
        .columns{
        height: 330px;
        }
        .is-5 {
            display: none;
        }
        .services{
            text-align:center;
        }
        .content .numberSpan{
        font-size:82px !important;
        }
        .hero-content{
            padding:.75em .75em .75em .75em;
        }
    }
    @media(max-width:480px){
        .columns{  
            height: 350px;
        }
        .content .numberSpan{
            font-size:42px !important;
        }
    }
`;