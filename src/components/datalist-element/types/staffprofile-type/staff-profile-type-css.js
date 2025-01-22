/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const StaffProfileTypeStyles = css`

.table td, .table th{
    padding: 15px 0;
  }
  .staff-profile{
    width: 100%;
    background: #fff;
    border-radius: 6px;
    margin-bottom: 10px;
  } 
  .staffTitle h3, .staffTitle p{
    font-size: 20px;
  }
  .staffTitle p{
    cursor: pointer;
    color: var(--app-primary-color);
  }

  .staff-header{
    padding: 5px 30px;
    border-bottom: 1px solid #e5e5e5;
  }
  .staff-table{
    padding: 5px 30px;
  }

  .table thead td, .table thead th{
    border-bottom: 0 solid transparent;
    border: 0;
    border-width: 0 0 0!important;
  }

`;