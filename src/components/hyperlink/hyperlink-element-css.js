
import {css} from 'lit-element';

export const HyperlinkElementStyles = css`
    .button{
        width: 100%;
    }
    .icon {
        margin-right: 10px !important;
    }
    .link-container{
        position: relative;
        display: flex!important;
        align-items: center!important;
        justify-content: center!important;
        text-decoration: underline!important;
        color: var(--primary)!important;
        cursor: pointer!important;
    }

    .link-container:hover{
        text-decoration: none!important;
    }

`;