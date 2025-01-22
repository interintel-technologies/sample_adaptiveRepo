/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const InfoCta3Styles = css`
.main-container{
    width: 100%;
    min-height:500px;
    position:relative;
    align-items: center;
}
.cont{
    align-items: center;
}

h6{
    margin-bottom: 25px !important;
    max-width: 70%;
}
.title{
    font-size: 40px!important;
    color: white;
    font-weight: 600!important;
    line-height: 1.125!important;
}
.button {
    background-color: var(--app-default-color)!important;
    margin-left: 10px;
    border: none !important;
    color: white;
}
.button:hover {
    background-color: var(--app-secondary-color)!important;
    transform: scale(1.05);
    color: white;
}
.button:active {
    transform: scale(0.9);
    color: white;
}
.screen-shot{
    display:flex;
    align-items:center;
    justify-content: center;
    width:40%;
    transform:translateX(40px);
    transition:0.7s all ease-in-out;
}
img {
    width:200px;
    height:400px;
}
/* Animations */
.content-container{
    width:60%;
    flex-direction:column;
    justify-content:center;
    padding: 15px;
    transform:translateY(20px);
    transition:0.7s all ease-in-out;

}
.animate1-appear{
    transform:translateY(0px);
}
.columns {
    margin: 10px 0px;
    padding: 10px !important;
}
.animate2-appear{
    transform:translateX(0px);

}
.badge {
    width: 150px;
    height: fit-content;
    margin-right: 20px;
    object-fit: contain;
    transition: transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12) 0s, box-shadow 0.3s ease 0s, -webkit-transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12) 0s;
    cursor: pointer;
}
.badge:hover {
    transform: scale(1.05);
}
.badge:active {
    transform: scale(0.9);
}
@media screen and (max-width: 459px) {
    .main-container{
        width: 100%;
        min-height: 900px;
    }
    .mipay-info-cta{
        width: 100%;
        min-height: 900px;
    }
    .content-container{
        width: 100%;
    }
    .info-btn{
        right: 0;
        left: 20%;
        top: 30px!important;
    }

    .screen-shot{
        top: 77px!important;
        width: 100%;
        display: flex;
        justify-content: center;
        left: 0;
    }
    p{
        margin-top:0px;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .title{
        font-size: 35px!important;
        text-align: center;
        width: 100%;
    }
    .btn{
        width: 10em !important;
        height: 3em !important;
    }
    .info-btn{
        right: 0;
        width: 100%;
        left: 0;
        justify-content: center;
        display: flex;
    }
    .badge {
        margin:0;
    }
    .stores {
        justify-content: space-around;
    }
    h6{
        max-width: 90%;
    }
    
    
    
}

`;
