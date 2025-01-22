/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const HeroElement2Styles = css`

canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #100101;
    overflow: hidden;
}
.ii__container-main{
    margin: 0 auto;
    padding: 0 90px;
}
.ii__container.ii__container--home{
    padding-top: 30px;
}

.ii__container{
    max-width: 1068px;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
}
.wa__container{
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
}
a.navbar-item:hover {
    background-color: transparent;
    color: inherit;
}
.ii__title {
    margin-top: 0px;
    margin-bottom: 16px;
    color: #000;
    font-size: 42px;
    line-height: 52px;
    font-weight: 600;
    letter-spacing: 0.2px;
}
.c-title-container {
    max-width: 630px;
    margin-right: auto;
    margin-bottom: 86px;
    margin-left: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    color: #a8a9b7;
    text-align: center;
}
/* Hero */
.ii__canvas-hero{
    width: 100%;
    height: 100vh;
    min-height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}
.ii__hero-container{
    width: 55%;
    margin: 0 auto;
    position: relative;
    top: 55px;
    background: transparent;
}
.ii__hero--text{
    margin-top: 8px;
    margin-bottom: 18px;
    color: #fff;
    font-size: 25px;
    line-height: 58px;
    font-weight: 600;
    letter-spacing: 0.22px;
}
.ii__paragraph {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 0.15px;
    color: rgba(255, 255, 255, .7);
}
.ii__hero--footer-button{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 310px;
    margin: 30px auto 0 auto;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: center;
}
.ii__button.ii__button--ctaviolet.u-mr14 {
    margin-right: 14px;
}
.ii__button.ii__button--ctaviolet {
    min-width: 227px;
    padding-right: 16px;
    padding-left: 16px;
    padding: 10px;
    font-family: Eina03, sans-serif;
    color: #ec2227;
    font-weight: 600;
    text-align: center;
    border: 2px solid #ec2227;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    transition: ease .5s;
}
.ii__button.ii__button--ctaviolet:hover{
    color: #fff;
    background: #ec2227;
}
.scroll{
    position: relative;
}
.scroll-indicator {	
    position: absolute;
    left: 50%;
    font-size: 50px;
    cursor: pointer;
    margin-top: 250px;
    
    -webkit-animation: bounce 1s infinite; 
    animation: bounce 1s infinite;
}

@-webkit-keyframes bounce {
    0% { top: 15%; }
    50%   { top: 20%; }
    100% { top: 15%; }
}

@keyframes bounce {
    0% { top: 15%; }
    50%   { top: 20%; }
    100% { top: 15%; }
}

`;
