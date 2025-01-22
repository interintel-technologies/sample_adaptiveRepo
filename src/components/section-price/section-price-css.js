/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const SectionPriceStyles = css`
header.header{
    padding: 20px;
}
div.price__item{
    box-shadow: 1px 2px 15px rgba(80,80,80,0.12);
    background-color: #fff;
}
div.price__item div.price__item-header{
    padding: 20px;
    background: #23d160;
    color: #fff;
    position: relative;
    z-index: 100;
}
div.price__item div.price__item-header:before{
    content: "";
    position: absolute;
    left: 50%;
    top: 63px;
    border-top: 10px solid #23d160;
    border-left: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;
}
.price__item-body{
    width: 100%;
    position: relative;
    background: #fff;
    z-index: 1;
}
.price__item-body .plan__title{
    padding: 35px 20px;
}
.price__item-body .plan__content{
    padding: 0 20px;
    font-size: 14px;
}
.price__item-body .plan__content ul li{
    text-align: center;
    margin-bottom: 10px;
}

.plan__cta a{
    padding: 10px;
    color: #4a4a4a;
    margin-top: 50px;
    background: #e5e5e5;
    display: inline-block;
    width: 100%
}

`;