/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const DescriptionBoxStyles = css`

.data{
    flex-direction: column;
}
.descriptionBox{
    width: 80%;
    margin:0 auto;
    padding: 10px;
  
}
/* .descriptionBox button{
    background: transparent!important;
    border: none;
    cursor: pointer;
} */
.descriptionBox__tabs{
    width: 28%;
    top: 0;
    right: 0;
    order: 2;
    border-left: 1px solid var(--mui-palette-primary-light)!important;
    position: relative;
}
.my-content{
    order:2;
    width:50%;
}
.content{
    width:100%;
}
.image-container{
    width: 100%;
    margin-right:0px;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
    display: flex;
    justify-content: center;
}
.image-container img{
    width: 50%;
}
.descriptionBox__item{
    padding: 10px 60px 10px 20px;
    min-height: 74px;
    border-bottom: 1px solid #ffffff!important;
    cursor: pointer;
    position: relative;
}
.descriptionBox__item:hover{
    background-color: var(--mui-palette-primary-light)!important;
    border-left: 3px solid var(--app-default-color);
    color: #fff!important;
}
.bodTItle{
    font-weight: 500;
    line-height: 18px;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}
.content h1, .content h4{
    text-align: center;
}
.my-content{
    width: 100%!important;
}
.content h1, 
.content p{
    text-align: center;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}
.content p {
    text-align: center;

}
.descriptionBox__content{
    padding: 20px;
    width: 100%;
}
.descriptionBox__content .content-container{
    width: inherit;
    display: none;
}   
.tab_drawer_heading{
    display: none;
}
.li-active {
    background-color: var(--mui-palette-primary-light)!important;
    color: #fff!important;
    border-left: 3px solid var(--app-default-color)!important;
}
.li-active:hover {
    background-color: var(--mui-palette-primary-light)!important;
    color:#fff!important;
    border-left: 3px solid var(--app-default-color)!important;
}

@media screen and (max-width: 800px) {
    .descriptionBox__tabs {
        display: none;
    }
    .tab_drawer_heading {
        background: var(--mui-palette-primary-light)!important;
        color: #fff;
        margin: 0;
        padding: 10px 40px;
        display: block;
        cursor: pointer;
        user-select: none;
    }
    .descriptionBox__content .content-container{
        width: inherit;
        display: block;
    } 
    .data{
        display: none;
        flex-direction: column;
        padding: 20px 4px;
    }
    .content h1{
        font-size: 16px;
    }
    .image-container img{
        width: 100%;
    }
    .content p {
        text-align: center;
    
    }
    
}

@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

`;
