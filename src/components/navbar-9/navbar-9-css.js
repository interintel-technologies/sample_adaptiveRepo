/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const NavbarNineStyles = css`
.ii__container-main{
    margin: 0 auto;
    padding: 0 90px;
    background-color: var(--app-default-color);
}
/* header */
.ii__main-header{
    background-color: var(--app-default-color);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: 0 1px 0 0 #d9d9d9;
    /* background: #fff; */
}
.navbar{
    background: transparent;
    height: 5.5em;
    background-color: var(--app-default-color);
}
.nav__item{
    font-weight: regular;
    font-size: 16px;
    color: #fff;
    font-weight: 450;
}
.nav__item:hover{
    /* font-weight: bolder; */
    position: relative;
    color: #fff!important;
    position: relative;
    background: transparent!important;
}
.nav__item:hover::after{
    position: absolute;
    width: 100%;
    border-bottom: 4px solid var(--app-secondary-color);
    z-index: 9999;
    content: '';
    bottom: 0;
    left: 0;
}
.nav__item:focus::after{
    position: absolute!important;
    width: 100%!important;
    border-bottom: 4px solid var(--app-secondary-color)!important;
    z-index: 9999!important;
    content: ''!important;
    bottom: 0!important;
    left: 0!important;
    background-color:var(--app-default-color)!important;
    color:#fff!important;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
    background-color:var(--app-default-color)!important;
    color:#fff!important;
}
/* .nav__item:hover::after{
    content: '';
    position: absolute;
    width: 90%;
    height: 3px;
    top: 50px;
    left: 0;
    background: #409DB5;
} */
.navbar-item .buttons .button{
    font-size: 13px;
    font-weight: inherit;
    width: 115px;
    height: 3em;
}
.navbar-item .logo-img {
  height: auto;
  object-fit: contain;
  width: 100%;
}
.navbar-item img{
  min-height: 3.75rem!important; 
}
.navbar-menu{
    background-color: var(--app-default-color)!important;
}
.navbar-burger{
    color:#fff!important;
}
@media screen and (max-width: 1023px){
  .ii__container-main{
        margin: 0 auto;
        padding: 0 10px;
    }
    .top{
        position: relative;
        top: 44px;
    }
}
`;