import { css } from 'lit-element';

export const HeroElementStyles = css`
    .hero::-webkit-scrollbar {
        display: none;
    }
    #content{
        overflow:hidden !important;
    }
    .card {
        width: 45%;
        position: absolute;
        right: 50px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 24px -1px;
        backdrop-filter: blur(20px);
        align-items: center;
        border-radius: 40px;
        border-width: 4px;
        border-style: double;
        border-color: transparent;
        border-image: initial;
        background: linear-gradient(127deg, rgba(255, 255, 255, 0.4) 12.11%, rgba(255, 255, 255, 0.1) 73.08%) border-box padding-box, border-box;
      }
    .hero{
        min-height: 800px !important;
        background-color: #f4f7fa;
        background-size: contain;
        display:flex;
        align-items: flex-end;
        width:100%;
        position: relative;
        z-index: 0;
        overflow-y:hidden;
    }
    .hero-body{
        width: 100%;
        margin:0px auto;
    }
    .hero-body::-webkit-scrollbar {
        display: none !important;
    }
    .hero::-webkit-scrollbar {
        display: none !important;
    }
    #content{
        overflow:hidden !important;
    }
    .columns {
        width: 100%;
        z-index: 10;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .button {
        width: fit-content;
        display: flex;

        border-radius: 0px;
        text-align: center;
        text-transform: capitalize;
        transition: all 300ms linear 0s;
        border-radius:6px;

    }
 
    .sub-heading{
        margin-bottom: 50px;
        width:70%

    }

    .image{
        height:80%;
        margin:auto
    }
    .card {
        width: 45%;
        border-radius: 40px;
        border-style:solid;
        border: double 4px transparent;
         /* border-image: linear-gradient(124.48deg, #FFFFFF 14.54%, #FCF5D5 38.19%, var(--primary--light-color) 54.86%, var(--primary) 88.98%) 20; */
        position: absolute;
        right: 50px;
        backdrop-filter: blur(20px);
        align-items: center;
        background-origin: border-box;
  background-clip: padding-box, border-box;
    }
    .card-content {
        max-width: 80%;
    }
    .parallax {
        /* The image used */
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 100%;
        min-height:100%;
        filter: blur(7px);
        opacity: 0.68;
        box-shadow: 0px 3px 6px #00000029;
        margin: -3rem;
    }
    @media screen and (max-width: 500px){
        .parallax {
            margin: -1.5rem;
        }
        .main-heading {
            font-size: 55px !important;

        }
        .sub-heading{
            font-size: 35px !important;
            margin-bottom: 20px;
            width:100%

        }
    }

    /* Adjust styles for .main-heading on screens with a maximum width of 768px (tablets) */
    @media (max-width: 768px) {
        .hero-body{
            width: 90%;
            margin:0px auto;
        }
      .main-heading {
        font-size: 36px !important;
        margin-bottom: 20px;
      }
      .sub-heading{
        margin-bottom: 20px;
        width:100%
    }
    }

    /* Adjust styles for .main-heading on screens with a maximum width of 480px (mobile) */
    @media (max-width: 480px) {
      .main-heading {
        font-size: 26px !important;
        margin-bottom: 10px;
      }
      .sub-heading{
        font-size: 16px !important;
        margin-top: 20px !important;
        margin-bottom: 30px !important;
        width:100%;
        line-height: 24px;

    }
      .hero-body{
        width: 100%;
        margin:0px auto;
    }
    }


`