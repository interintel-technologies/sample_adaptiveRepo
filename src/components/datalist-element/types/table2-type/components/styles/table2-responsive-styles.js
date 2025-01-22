/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */

 import {css} from 'lit-element';

 export const Table2ResponsiveStyles = css`
 
      
 /* -- Material Design Table style -------------- */
 /* .table {
     background-color: var(--body-background-color);
     width: 100%;
 }
 
 .table > thead > tr,
 .table > tbody > tr,
 .table > tfoot > tr {
     -webkit-transition: all 0.3s ease;
     -o-transition: all 0.3s ease;
     transition: all 0.3s ease;
 }
 
 .table > thead > tr > th,
 .table > tbody > tr > th,
 .table > tfoot > tr > th,
 .table > thead > tr > td,
 .table > tbody > tr > td,
 .table > tfoot > tr > td {
     text-align: left;
     padding: 8px 16px;
     align-items: center;
     font-size: 13px;
     color: #54667a;
     border-top: 0;
     -webkit-transition: all 0.3s ease;
     -o-transition: all 0.3s ease;
     transition: all 0.3s ease;
 }
 
 .table > thead > tr > th {
     font-weight: 400;
     color: #2d3436;
     vertical-align: bottom;
     font-size: 15px;
     padding: 15px 8px;
     text-transform: capitalize;
     border-bottom: 2px solid rgba(0, 0, 0, 0.12);
 }
 
 .table > caption + thead > tr:first-child > th,
 .table > colgroup + thead > tr:first-child > th,
 .table > thead:first-child > tr:first-child > th,
 .table > caption + thead > tr:first-child > td,
 .table > colgroup + thead > tr:first-child > td,
 .table > thead:first-child > tr:first-child > td {
     border-top: 0;
 }
 
 .table > tbody + tbody {
     border-top: 1px solid rgba(0, 0, 0, 0.12);
 }
 
 .table .table {
     background-color: var(--body-background-color);;
 }
 
 .table .no-border {
     border: 0;
 }
 
 .table-condensed > thead > tr > th,
 .table-condensed > tbody > tr > th,
 .table-condensed > tfoot > tr > th,
 .table-condensed > thead > tr > td,
 .table-condensed > tbody > tr > td,
 .table-condensed > tfoot > tr > td {
     padding: 0.8rem;
 }
 
 .table-bordered {
     border: 0;
 }
 
 .table-bordered > thead > tr > th,
 .table-bordered > tbody > tr > th,
 .table-bordered > tfoot > tr > th,
 .table-bordered > thead > tr > td,
 .table-bordered > tbody > tr > td,
 .table-bordered > tfoot > tr > td {
     border: 0;
     border-bottom: 1px solid #e0e0e0;
 }
 
 .table-bordered > thead > tr > th,
 .table-bordered > thead > tr > td {
     border-bottom-width: 2px;
 }
 
 .table-striped > tbody > tr:nth-child(odd) > td,
 .table-striped > tbody > tr:nth-child(odd) > th {
     background-color: #f5f5f5;
 }
 
 .table-hover > tbody > tr:hover > td,
 .table-hover > tbody > tr:hover > th {
     background-color: rgba(0, 0, 0, 0.12);
 }
  */
 .table-responsive-vertical {
     /* padding: 0; */
    /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); */
     /* overflow: auto; */
 }
 
 .table-responsive-vertical > tbody > tr {
    /* padding-top:.75em !important;
    padding-bottom:.75em !important;
    padding-left:.75em !important; */

 }
 
 @media screen and (max-width: 768px) {
     .table-responsive-vertical {
         /* margin: 16px; */
         /* padding-left:1.5em;
         padding-right:1.5em; */
         
     }

    .dt-table{
        /* width:99%; */
        width:auto;
        border-collapse: separate !important;
        border-spacing: 0 15px !important;
        border-left:2px solid rgba(183,181,181,.5);
        border-right:2px solid rgba(183,181,181,.5);
    }
     .table-responsive-vertical > .table {
         margin-bottom: 0;
         background-color: transparent;
     }
 
     .table-responsive-vertical > .table > thead,
     .table-responsive-vertical > .table > tfoot {
         display: none;
     }
 
     .table-responsive-vertical > .table > tbody {
         display: block;
         overflow-y: auto;
        overflow-x: hidden !important; 
     }
 
     .table-responsive-vertical > tbody > tr {
        display: block;
        border-radius: 2px;
        margin-bottom: 1.6rem;
        padding-top:.75em !important;
        padding-bottom:.5em !important;
        padding-left:.5em !important;
        padding-right:.75em !important;
     }
 
     .table-responsive-vertical > .table > tbody > tr > td {
         background-color: var(--body-background-color);
         display: block;
         vertical-align: middle;
         text-align: right;
         
     }
 
     .table-resposive-vertical > .table > tbody > tr > td[data-title]:before {
         content: attr(data-title);
         float: left;
         font-size: inherit;
         font-weight: 400;
         /* color: #757575; */
     }
 
 
 
 
 
     .table-responsive-vertical > .table-bordered {
         border: 0;
     }
 
     .table-responsive-vertical > .table-bordered > tbody > tr > td {
         border: 0;
         border-bottom: 1px solid #e0e0e0;
     }
 
     .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {
         border-bottom: 0;
     }
 
     .table-responsive-vertical > .table-striped > tbody > tr > td,
     .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {
         background-color: #f5f5f5;
     }
 
     .table-responsive-vertical > .table-hover > tbody > tr:hover > td,
     .table-responsive-vertical > .table-hover > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical > .table-hover > tbody > tr > td:hover {
         background-color: rgba(0, 0, 0, 0.12);
     }
 }
 @media (min-width:768px) and (max-width:1024px){
    .table-responsive-vertical > tbody > tr {
        display: block;
        border-radius: 2px;
        margin-bottom: 1.6rem;
        padding-top:.75em !important;
        padding-bottom:.5em !important;
        padding-left:.5em !important;
        padding-right:.75em !important;
     }
 }
 
 /* .table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {
     background-color: #fde0dc;
 }
 
 .table-hover.table-mc-red > tbody > tr:hover > td,
 .table-hover.table-mc-red > tbody > tr:hover > th {
     background-color: #f9bdbb;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {
         background-color: #fde0dc;
     }
 
     .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {
         background-color: #f9bdbb;
     }
 }
 
 .table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {
     background-color: #fce4ec;
 }
 
 .table-hover.table-mc-pink > tbody > tr:hover > td,
 .table-hover.table-mc-pink > tbody > tr:hover > th {
     background-color: #f8bbd0;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {
         background-color: #fce4ec;
     }
 
     .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {
         background-color: #f8bbd0;
     }
 }
 
 .table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {
     background-color: #f3e5f5;
 }
 
 .table-hover.table-mc-purple > tbody > tr:hover > td,
 .table-hover.table-mc-purple > tbody > tr:hover > th {
     background-color: #e1bee7;
 }
  */

 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {
         background-color: #f3e5f5;
     }
 
     .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {
         background-color: #e1bee7;
     }
 }
 
 .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {
     background-color: #ede7f6;
 }
 
 .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
 .table-hover.table-mc-deep-purple > tbody > tr:hover > th {
     background-color: #d1c4e9;
 }
  */

 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {
         background-color: #ede7f6;
     }
 
     .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {
         background-color: #d1c4e9;
     }
 }
 
 .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {
     background-color: #e8eaf6;
 }
 
 .table-hover.table-mc-indigo > tbody > tr:hover > td,
 .table-hover.table-mc-indigo > tbody > tr:hover > th {
     background-color: #c5cae9;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {
         background-color: #e8eaf6;
     }
 
     .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {
         background-color: #c5cae9;
     }
 }
 
 .table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {
     background-color: #e7e9fd;
 }
 
 .table-hover.table-mc-blue > tbody > tr:hover > td,
 .table-hover.table-mc-blue > tbody > tr:hover > th {
     background-color: #d0d9ff;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {
         background-color: #e7e9fd;
     }
 
     .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {
         background-color: #d0d9ff;
     }
 }
 
 .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {
     background-color: #e1f5fe;
 }
 
 .table-hover.table-mc-light-blue > tbody > tr:hover > td,
 .table-hover.table-mc-light-blue > tbody > tr:hover > th {
     background-color: #b3e5fc;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {
         background-color: #e1f5fe;
     }
 
     .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {
         background-color: #b3e5fc;
     }
 }
 
 .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {
     background-color: #e0f7fa;
 }
 
 .table-hover.table-mc-cyan > tbody > tr:hover > td,
 .table-hover.table-mc-cyan > tbody > tr:hover > th {
     background-color: #b2ebf2;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {
         background-color: #e0f7fa;
     }
 
     .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {
         background-color: #b2ebf2;
     }
 }
 
 .table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {
     background-color: #e0f2f1;
 }
 
 .table-hover.table-mc-teal > tbody > tr:hover > td,
 .table-hover.table-mc-teal > tbody > tr:hover > th {
     background-color: #b2dfdb;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {
         background-color: #e0f2f1;
     }
 
     .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {
         background-color: #b2dfdb;
     }
 }
 
 .table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {
     background-color: #d0f8ce;
 }
 
 .table-hover.table-mc-green > tbody > tr:hover > td,
 .table-hover.table-mc-green > tbody > tr:hover > th {
     background-color: #a3e9a4;
 } */
 
 /* @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {
         background-color: #d0f8ce;
     }
 
     .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {
         background-color: #a3e9a4;
     }
 }
 
 .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {
     background-color: #f1f8e9;
 }
 
 .table-hover.table-mc-light-green > tbody > tr:hover > td,
 .table-hover.table-mc-light-green > tbody > tr:hover > th {
     background-color: #dcedc8;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {
         background-color: #f1f8e9;
     }
 
     .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {
         background-color: #dcedc8;
     }
 }
 
 .table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {
     background-color: #f9fbe7;
 }
 
 .table-hover.table-mc-lime > tbody > tr:hover > td,
 .table-hover.table-mc-lime > tbody > tr:hover > th {
     background-color: #f0f4c3;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {
         background-color: #f9fbe7;
     }
 
     .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {
         background-color: #f0f4c3;
     }
 }
 
 .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {
     background-color: var(--body-background-color);de7;
 }
 
 .table-hover.table-mc-yellow > tbody > tr:hover > td,
 .table-hover.table-mc-yellow > tbody > tr:hover > th {
     background-color: var(--body-background-color);9c4;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {
         background-color: var(--body-background-color);de7;
     }
 
     .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {
         background-color: var(--body-background-color);9c4;
     }
 }
 
 .table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {
     background-color: var(--body-background-color);8e1;
 }
 
 .table-hover.table-mc-amber > tbody > tr:hover > td,
 .table-hover.table-mc-amber > tbody > tr:hover > th {
     background-color: #ffecb3;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {
         background-color: var(--body-background-color);8e1;
     }
 
     .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {
         background-color: #ffecb3;
     }
 }
 
 .table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {
     background-color: var(--body-background-color);3e0;
 }
 
 .table-hover.table-mc-orange > tbody > tr:hover > td,
 .table-hover.table-mc-orange > tbody > tr:hover > th {
     background-color: #ffe0b2;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {
         background-color: var(--body-background-color);3e0;
     }
 
     .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {
         background-color: #ffe0b2;
     }
 }
 
 .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,
 .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {
     background-color: #fbe9e7;
 }
 
 .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
 .table-hover.table-mc-deep-orange > tbody > tr:hover > th {
     background-color: #ffccbc;
 }
 
 @media screen and (max-width: 767px) {
     .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,
     .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {
         background-color: #fbe9e7;
     }
 
     .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
     .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {
         background-color: var(--body-background-color);;
     }
 
     .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {
         background-color: #ffccbc;
     }
 }
 */
 /* .topnav {
     overflow: hidden;
     background-color: var(--body-background-color);fff;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
 
 }
 
 .topnav .search-container {
     display: inline-block;
 }
 
 .topnav input[type=text] {
     padding: 12px;
     margin-top: 8px;
     margin-bottom: 8px;
     background-color: #f5f5f5;
     color: #606060;
     font-size: 14px;
     border: none;
     width: 600px;
 }
 
 .topnav .search-container button {
     padding: 12px;
     margin-top: 8px;
     margin-bottom: 8px;
     color: var(--body-background-color);FFF;
     background-color: var(--app-default-color);
     font-size: 14px;
     border: none;
     cursor: pointer;
 
 }
 
 .topnav .search-container button:hover {
     background: #ccc;
 }
 
 @media screen and (max-width: 790px) {
     .topnav {
         overflow: hidden;
         background-color: var(--body-background-color);fff;
         width: 100%;
         display: contents;
         justify-content: normal;
         align-items: normal;
 
     }
 
     .topnav .search-container {
         display: inline-block;
     }
 
     .topnav .search-container {
         display: contents;
         width: 100%;
         float: none;
     }
 
     .topnav a, .topnav input[type=text], .topnav .search-container button {
         float: none;
         display: block;
         text-align: left;
         width: 100%;
         margin: 0;
         padding: 14px;
     }
 
     .topnav input[type=text] {
         border: 1px solid #ccc;
     }
 } */ 
 /* .table-container{
     width: 100%;
     position: relative;
     overflow-x: scroll;
 }
 .table-container table.dt-table{
     width: 100%;
     border-spacing: 0;
     overflow-x: scroll;
 }
 .table-container table.dt-table tr{
     background: var(--body-background-color);;
     width: inherit;
     font-size: 14px;
     line-height: 1.14;
     padding: 18px 15px;
     text-align: left;
     box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.07);
 }
 .table-container table.dt-table tr th,
 .table-container table.dt-table tr td{
     margin: 4px 0;
     padding: 18px 10px;
 }
 .table-container table.dt-table tr th{
     color: #013243;
     font-weight: 500;
     text-transform: capitalize!important;
 }
 .table-container table.dt-table tr td{
   color: #6c7a89;
   padding: 15px 10px;
 }
 .table-container table.dt-table tr:hover{
     background: #f4f6f9;
 }
 td:nth-child(5){
   word-break: break-all;
 } */
 
 @media screen and (max-width: 1023px) {
 table {
 border: 0;
 }
 
 table caption {
 font-size: 1.3em;
 }
 
 table thead {
 border: none;
 clip: rect(0 0 0 0);
 height: 1px;
 margin: -1px;
 overflow: hidden;
 padding: 0;
 position: absolute;
 width: 1px;
 }
 
 table tr {
 border-bottom: 3px solid #ddd;
 display: block;
 margin-bottom: .625em;
 }
 
 table td {
 border-bottom: 1px solid #ddd;
 display: block;
 font-size: .8em;
 text-align: right;
 padding: 20px 0!important;
 }
 
 table td::before {
 /*
 * aria-label has no advantage, it won't be read inside a table
 content: attr(aria-label);
 */
 content: attr(data-label);
 float: left;
 font-weight: bold;
 text-transform: uppercase;
 }
 
 table td:last-child {
 border-bottom: 0;
 }
 }
 
 `;
 