/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const NavbarOneStyles = css`
body{
    font-family: 'Montserrat', sans-serif;
  }
  .btn{
    border-radius: 5px;
    width: 120px;
    height: 3em!important;
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
  }
  .btn:hover{
    background-color: #fff;
    color: var(--app-secondary-color)!important;
    border: 2px solid var(--app-secondary-color)!important;
  }
  .btnless{
    border: 0 solid transparent;
  }
  nav{
    margin: 14px 0 0 0;
  }
  .nav__item{
    color: var(--app-default-color)!important;
  }
  .nav__item:hover{
    color: #4a4a4a!important;
  }
  .navbar-item img {
    max-height: 100%;
  }

  @media screen and (min-width: 1024px){
    .navbar {
        min-height: 5.25rem!important;
    }
  }
`;