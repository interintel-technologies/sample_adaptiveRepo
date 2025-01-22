import { css } from 'lit-element';

export const TileElement8Styles = css`
    #parentCol{
        padding: 4%;
    }
    .tile{
        display:flex;
        flex-direction:column;   
        text-align:left; 
        background:var(--paper);
        border-right:dashed 1px var(--md-sys-color-outline);
    }
    .tile:last-of-type {
        border-right: none;
    }
    .tile h4{
        font-weight:500;  
        
        color: var(--primary-text) !important;
    }
    .tile p{
        color:var(--grey-darker--800--lighten);
        font-weight:400;
        padding-right:25%;
        word-wrap:normal;
        word-break:break-word;
    }
    .imgBox{
        object-fit: contain;
        width: 17%;
        height:auto;
        background-color:var(--card-background-color);
        border-radius:15% 15% 15% 15%;
    }
    @media(max-width:768px){
        .tile{
            display:flex;
            text-align:center;
            justify-content:center;
            align-items:center;
        }
        .tile p{
            padding-right:0;
        }
    }
`;