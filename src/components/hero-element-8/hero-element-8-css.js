import { css } from 'lit-element';

export const HeroElement8Styles = css`
    .columns {
        flex-wrap:wrap;
    }
    .image {
        min-width:300px;
        height:300px;
        object-fit:contain;
        margin:auto;
    }
    .title {
        max-width:95%;
        text-align:left;
        color: var(--primary-text) !important;
        font-size: 2rem!important;
        font-weight: 500!important;
        line-height: 2.125!important;
    }
    .subtitle {
        max-width:85%;
        text-align:left;
        color: var(--primary-text) !important;
        font-size: 18px!important;
        font-weight: 390!important;
        line-height: 1.50!important;
    }
 

    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 0.7s all ease-in-out;
    }
    @media screen and (max-width: 550px){ 
        #text-column {
            min-width:100%;
        }
        .title {
            max-width:100%;
        }
    
        .subtitle{
            max-width:100%;
        }
    }

    @media screen and (max-width: 320px) {
  
        .image {
            min-width:250px
        }
        
    }
    @media screen and (max-width: 280px) {
  
        .image {
            min-width:200px
        }
        
    }

    .image-column-disappear, .text-column-disappear {
        opacity: 0;
        transform: translateY(50px); /* Initial hidden state */
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    }
    
    .column-appear-animation {
        opacity: 1;
        transform: translateY(0px); /* Element fades in and moves to its normal position */
    }

    
`