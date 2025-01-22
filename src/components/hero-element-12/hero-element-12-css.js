import { css } from 'lit-element';

export const HeroElement12Styles = css`
    #hero-bdy{
        padding:80px;
    }
    .columns {
        flex-wrap:wrap;
    }
    .image {
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
        transform:translateX(100%);
    }
    .text-column-disappear {
        opacity:0;
        transform:translateX(-100%);
    }
    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 0.7s all ease-in-out;
    }
    .button{
        background-color: var(--app-default-color);
        color:white;
        padding:0 16px;
    }
    .button:hover {
        background-color: var(--app-secondary-color);
        color:white;
    }
    @media screen and (max-width: 550px){ 
        .image {
            min-width:100%;
        }
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
`