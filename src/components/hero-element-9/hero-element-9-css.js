
import { css } from 'lit-element';
export const HeroElement9Styles = css`
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
    }
    .subtitle {
        max-width:85%;
        text-align:left;
    }
    .image-column-disappear {
        opacity:0;
        transform:translateX(-100%);
    }
    .text-column-disappear {
        opacity:0;
        transform:translateX(100%);
    }
    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 1.5s all ease-in-out;
    }
    .underline {
        height:7px;
        width:60px;
        border-radius:2px;
        border-width:0px;
        background-color:var(--app-secondary-color)
    }
    #text-column {
        padding-left:20px;
    }
    .str-btn {
        border-radius: 5px!important;       
        background-color: var(--app-secondary-color)!important;
        color: #fff!important;
        margin-top: 30px;
        border: none!important;
        font-weight: bold;
        padding: 25px;
        font-size: 19px!important;
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
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
`