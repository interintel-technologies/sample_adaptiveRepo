
    /**
    @license
    Copyright (c) 2020 InterIntel Technologies. All rights reserved.

    */

    import {css} from 'lit-element';

    export const HeroElement6Styles = css`
    .text-container{
        width: 100%;
        position: absolute;
        height: 100vh;
        z-index: 9999;
        display: flex;
        align-items: center;
    }
    .text-container h1{
        color: #fff;
        font-size: 64px;
        line-height: 1.22;
        font-weight: 900;
        width: 779px;
    }
    .title-container{
        padding: 0px 20em;
    }
    .button-container{
        padding: 0px 14em;
    }
    .hero-container{
        position: relative;
        width: 100%;
        height: 100vh;
        justify-content: center;
        display: flex;
    }
    .element{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        flex: 1;
        transition: .5s;
        cursor: pointer;
        height: 100vh;
        overflow: hidden;
    } 
    .element:hover{
        flex-grow: 5;
    }
    .element .overlay{
        width: 100%;
        height: 100vh;
        background: #000;
        opacity: 0.7;
        position: absolute;
    }
    .element:hover ~ .element .overlay{
        opacity: 0.9;
    }
    .element img{
        object-fit: cover;
        height: 100vh;
    }
    `;
    
    