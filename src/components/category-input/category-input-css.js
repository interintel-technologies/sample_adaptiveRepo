import { css } from "lit-element";

export const CategoryInputStyles=css`
    .content{
        position:relative !important;
        width:100% !important;
    }
    ul{
        background-color: var(--body-background-color) !important;
        border-radius: 4px !important;
        color: var(--grey-darker) !important;
        list-style:none !important;
        margin-top:0 !important;
        margin-left:0 !important;
        box-shadow: inset 0 .0625em .125em var(--scheme-invert--5--rgba) !important;
        position:absolute !important;
        z-index:1 !important;
        width:100% !important;
        
        
    }
    
    .selected{
        background-color: var(--input-border-color) !important;
    }

    li{
        cursor:pointer !important;
        background-color: var(--body-background-color) !important;
        border-color: var(--input-border-color) !important;  
        border: 1.5px solid var(--input-border-color) !important;      
        margin-top:0 !important;
        padding-top:.25rem;
        padding-bottom:.25rem;
        padding-left:.5rem;
    }
    li:first-child{
        border-top-left-radius:4px !important;
        border-top-right-radius:4px !important;
        border: 1.5px solid var(--input-border-color) !important;
    }
    li:last-child{
        border-bottom-left-radius:4px !important;
        border-bottom-right-radius:4px !important;
        border: 1.5px solid var(--input-border-color) !important;
    }
    li:hover{  
        background-color: var(--input-border-color) !important;
    }
    .select select{
        font-family:var(--family-sans-serif) !important;
    }

`;