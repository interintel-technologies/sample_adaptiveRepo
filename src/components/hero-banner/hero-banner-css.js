/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const HeroBannerStyles = css`

.hero-container{
    max-width: 100%;
    height: 100vh;
    min-height: 0;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
    padding-top: 80px;
    background-color: #fff!important;
    margin-top:10px;
    display:flex!important;
    justify-content:center!important;
    align-items:center!important;
}
.container{
    display:flex!important;
    justify-content:center!important;
    align-items:center!important;

}
.bg_image{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .9;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment:fixed;

    box-shadow: 0px 3px 6px #00000029;
    opacity: 0.68;
    filter: blur(7px);

}
.hero-column{
    margin-right:144px!important;
}
.hero-container::before, .row::before{
    display: table;
    content: " ";
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}
.row{
    margin-left: -10px;
    margin-right: -10px;
    margin-top: 42px;
}
.c-title-xl {
    margin-top: 8px;
    margin-bottom: 18px;
    color: var(--app-default-color)!important;
    
    font-weight: bold;
    
    letter-spacing: .22px;

    font-size: 80px;
    line-height: 77px;
}
.c-paragraph {
    font-size: 19px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: .15px;
    color: #fff!important;
}
.str-btn {
    border-radius: 5px!important;
    
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
    margin-top: 20px;
    border: none!important;
    font-weight: bold;

    width: 274px !important;
    height: 4em !important;
    font-size: 19px!important;
}

.str-btn:hover{
    background-color: var(--app-default-color)!important;
    color: var(--app-secondary-color)!important;
    border: 4px var(--app-secondary-color) solid!important ;

}

@media screen and (max-width: 414px){ 

    .c-title-xl {
        
        color: var(--app-default-color)!important;
        font-size: 50px;
    }

    .hero-column{
        margin-right: 66px !important;
    }
}

@media screen and (max-width: 375px){ 

    .c-title-xl {
        
        color: var(--app-default-color)!important;
        font-size: 45px;
    }

    
}

@media screen and (max-width: 360px){ 

    .c-title-xl {
        
        color: var(--app-default-color)!important;
        font-size: 40px;
    }

    
}

@media screen and (max-width: 320px){ 

    .c-title-xl {
        
        color: var(--app-default-color)!important;
        font-size: 35px;
    }

    
}

`;
