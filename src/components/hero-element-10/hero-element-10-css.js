import { css } from 'lit-element';

export const HeroElement10Styles = css`
    .hero {
        background: var(--app-default-color);
    }
    .hero-body {
        flex-direction:column;
    }
    .title {
        color:var(--white);
        text-align:center;
        transform:translateY(-50%);
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.125;
    }
    .title.is-4 {
        font-size: 1.5rem;
    }
    .mid-title {
        max-width:45%;
    }
    .subtitle {
        color:white;
        text-align:center;
        max-width:50%;
        transform:translateY(-50%);
        color:var(--white);
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
        transform:translateY(-50%);
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
        border: 4px var(--app-secondary-color) solid!important ;
        padding:21px;
    }
    .item-appear-animation {
        opacity:1;
        transform:translateY(0px);
        transition: 1.2s transform ease-in-out, 1.2s opacity ease-in-out;
    }

    @media screen and (max-width: 600px){ 
        .mid-title {
            max-width:90%;
        }
        .subtitle {
            max-width:90%;
        }
    }
`;