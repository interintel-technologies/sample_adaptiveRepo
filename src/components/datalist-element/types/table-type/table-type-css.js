/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const TableTypeStyles = css`

.column-list {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: var(--paper);
    border-radius: 5px;
    position: absolute;
    left: 47vw;
    top: 4%;
    width: auto;
    z-index: 2;
    text-align: left;
    border: solid var(--primary-text);
}

.column-item {
    margin-bottom: 5px;
    display: flex;
    justify-content: left;
    column-gap: 7%;
}


.column{
    display:flex;
    align-items:center;
}
.radio {
    position: relative;
    display: inline-block;
    padding-left:30px;
    cursor:pointer;
}

.radio input[type="radio"] {
    display:none;

}
.table.is-bordered tbody td, .table.is-bordered thead th {
    border-right: none;
    border-left: none;
    padding-left: 20px;
    padding-right: 20px;
}

.table thead{
    height:70px;
}

.table th {
    white-space: nowrap;
}
span.s-clickable.is-fullheight{
    height:100%
}
.radio span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid var(--app-default-color);
    display:block;
    position: absolute;
    left:0;
    top:-18px;
}

.radio span:after {
    content:"";
    height: 11px;
    width: 11px;
    background: var(--app-default-color);
    display:block;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%) scale(0);
    border-radius:50%;
    transition: 300ms ease-in-out 0s;

}

.radio input[type="radio"]:checked ~ span:after {
    transform: translate(-50%,-50%) scale(1);

}
.selected {
    color: var(--app-secondary-color) !important;
}
.nested {
    display:none
}
.disappear {
    opacity:0;
    transform:translateY(-10%);
    transition:0.2s all ease-out;
}
.appear {
    display:block;
    opacity:1;
    transform:translateY(0px);
    transition:0.2s all ease-in;
}
.show-more {
    color: var(--app-default-color);
    font-size:25px;
    cursor:pointer;
}
.show-more:hover {
    color: var(--app-secondary-color);
}

table-type-header .table-header-buttons{
    position:sticky; 
    top:0;
    z-index:2; 
    background-color:var(--card-background-color) !important;
}
tbody{
    border-left:0 !important;
    border-right:0 !important;
}
tbody tr{
    background-color: transparent !important;
    border-left:0 !important;
    border-right:0 !important;
}
.table-container {
    overflow-y: auto;
    overflow-x: auto;
    /* border:1px solid var(--grey-lighter); */
}

/* For Webkit-based browsers (Chrome, Safari, Edge) */
.table-container::-webkit-scrollbar {
    width: 10px; /* Width of the vertical scrollbar */
    height: 8px; /* Height of the horizontal scrollbar */
}

/* Track (background of the scrollbar) */
.table-container::-webkit-scrollbar-track {
    background: var(--grey-lighter); /* Custom track color */
    border-radius: 10px; /* Rounded track */
}

/* Handle (draggable part of the scrollbar) */
.table-container::-webkit-scrollbar-thumb {
    background-color: var(--primary); /* Custom handle color */
    border-radius: 10px; /* Rounded handle */
    border: 2px solid var(--grey-lighter); /* Add border for a gap around the thumb */
}

/* Handle on hover */
.table-container::-webkit-scrollbar-thumb:hover {
    background-color: var(--primary); /* Darker color on hover */
}

/* For Firefox */
.table-container {
    scrollbar-color: var(--primary) var(--grey-lighter); /* Handle and track colors */
    scrollbar-width: thin; /* Narrow scrollbar */
}



.table-container table.dt-table tr td{
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    border-bottom:1px solid var(--input-border-color) !important;
}
tr td span{
    font-size:14px !important;
    
}

tr td::before{
    margin-right:5px;
}

th{
    background-color:var(--grey-light);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    border-bottom:1px solid var(--input-border-color) !important;
    border-top:1px solid var(--input-border-color) !important;
}
paper-checkbox #checkbox{
    border-color:var(--input-border-color) !important;

}
paper-checkbox #checkbox.checked{
    background-color: var(--link) !important;
    border-color: var(--link) !important;
}
.pagination{
    justify-content:center;
    display:block;
}
nav.pagination .pagination-list{
    overflow-x: auto; 
    white-space: nowrap;
    display:inline-block;
    margin-bottom: 0 !important;
    padding-bottom:1rem;
    width:fit-content !important;
}
.pagination-list li{
    display: inline-block;
}
.content ul{
    margin-top:0 !important;
    margin-left:auto !important;
    margin-right:auto !important;
}
.pagination-previous{
    margin-top:.2rem !important;
}
.pagination-next{
    margin-top:.2rem !important;
}
@media(max-width:1024px){
    paper-checkbox{
        transform:translateY(-1.7rem) translateX(-1.2rem) !important;
        margin-right:-1.2rem;
    }
}
@media(max-width:768px){
    .pagination-previous{
    margin-top:.4rem !important;
}
.pagination-next{
    margin-top:.4rem !important;
}
}

.button-holder{
    justify-content: center;align-items: center;display: flex;
}

option{
    background:var(--paper);
    color:var(--primary-text)
}

@media screen and (max-width: 1118px) {
    .footer-d-none-mobile{
        display:none !important
    }
}




`;
