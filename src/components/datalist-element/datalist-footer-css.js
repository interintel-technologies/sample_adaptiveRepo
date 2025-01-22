/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const DatalistFooterStyles = css`
:host {
    display: block;
  }
  .size{
    margin-right: 15px;
  }
  .btn{
    position: relative;
    cursor: pointer;
    top: 4px;
    left: 20px;
  }
  .right-btn::after, .left-btn::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-left: 2px solid #3a3a3a;
    border-bottom: 2px solid #3a3a3a;
  }
  .right-btn{
    position: relative;
  }
  .left-btn::after{
    transform: rotate(45deg);
  }
  .right-btn::after{
    left: 15px;
    transform: rotate(-135deg);
  }
  .perpage-dropdown .p-display{
    position: relative;
    cursor: pointer;
    margin: 0 15px 0 0;
  }
  .perpage-dropdown .p-display::after{
   
  }
  .per{
    position:relative;
    
  }
  .per::after{
    content:'';
    position: absolute;
    right: -14px;
    top: 4px;
    width: 5px;
    height: 5px;
    border-left: 2px solid #3a3a3a;
    border-bottom: 2px solid #3a3a3a;
    transform: rotate(-45deg);
  }
  .perpage-dropdown .p-dropdown{
    width: 100%;
    background: #fff;
    border: 1px solid #e5e5e5;
    position: absolute;
    top: auto;
    bottom: 100%;
    padding: 0 8px;
    display: none;
  }
  .perpage-dropdown .p-dropdown li a{
    text-align: right;
    display: inline-block;
    width: 100%;
    color: #4a4a4a;
  }
  .perpage-dropdown .p-dropdown li a:hover{
    background: #e5e5e5;
  }
  .active-list{
    background: #e5e5e5;
  }

`;
