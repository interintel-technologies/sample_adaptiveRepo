import { css } from 'lit-element';

export const HeroElement14Styles = css`
    .columns {
        flex-wrap:wrap;
        margin: 0 !important;
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
        color: #4e4e4e!important;
        font-size: 2rem!important;
        font-weight: 500!important;
        line-height: 2.125!important;
    }
    .subtitle {
        max-width:85%;
        text-align:left;
        color: #4a4a4a!important;
        font-size: 18px!important;
        font-weight: 390!important;
        line-height: 1.50!important;
    }
    .image-column-disappear {
        opacity:0;
        transform:translateX(-20%);
    }
    .text-column-disappear {
        opacity:0;
        transform:translateX(20%);
    }
    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 0.7s all ease-in-out;
    }
    ul { 
        padding: 20px !important;
    }
    li {
        list-style-type: disc;
    }
    p {
        max-width: 70%;
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
        p {
            max-width: 90%;
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
`