/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const HeroElement11Styles = css`
    .title {
        font-size: 3.5rem!important;
        margin-bottom: 3.5rem!important;
    }

    .p-padding {
        padding-top: 8px!important;
        padding-bottom: 8px!important;
    }

    .hero-body {
        clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 80%);
        background-color: var(--app-default-color)!important;
        
    }
    .columns {
        height:fit-content;
        flex-wrap:wrap;
    }
    .column {
        display: flex;
        flex-direction: column;
        height:fit-content;
        padding:110px 35px 0 50px;
        opacity:0;
    }
    #imageContainer{
        align-items:center;
    }
    .slide {
        display:flex;
        flex-direction: column;
        align-items: center;
        animation:slide-animation 5s infinite;
    }
    .desc {
        margin-bottom:10px;
    }
    .str-btn {
        border-radius: 5px!important;
        width:fit-content;
        background-color: var(--app-secondary-color)!important;
        color: #fff!important;
        margin-top: 20px;
        border: none!important;
        font-weight: bold;
        padding:25px;
        font-size: 19px!important;
    }
    .dot {
        cursor:pointer;
        border-radius: 3px;
        width: 11px;
        height: 11px;
        border-radius:50%;
        margin: 0 2px;
        display: inline-block;
        transition: background-color 1.2s ease;
        background-color: #bbb;
    }
    .active, .dot:hover {
        background-color: var(--app-secondary-color);
      }
    .slide-image{
        height:300px;
        object-fit:contain;
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
        border: 4px var(--app-secondary-color) solid!important ;
        padding:21px;
    }
    .column-appear-animation{
        opacity: 1;
        transition:0.7s opacity ease-in-out;     
    }
    @keyframes slide-animation {
        0%   {opacity: 0;transform:translateX(50%);}
        7%  {opacity:1;transform:translateX(0px);}
        93% {opacity:1;transform:translateX(0px)}
        100% {opacity: 0;transform:translateX(-50%)}
    }

    @media screen and (max-width: 550px){ 
        .hero-body {
            clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 95%);
            height:fit-content;
            padding:50px 20px 20px 20px;
        }
        .column {
            padding:50px 15px 20px 15px;
            min-width:100%;
        }
    }
    @media screen and (min-width: 571px) and (max-width: 1025px){ 
        .hero-body {
            clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 90%);
            height:fit-content;
            padding:50px 20px 20px 20px;
        }
        .column {
            padding:180px 15px 20px 15px;
            min-width:100%;
        }
        #imageContainer {
            padding-top:50px;
        }
        .slide-image {
            height:350px;
        }
    }
`;
