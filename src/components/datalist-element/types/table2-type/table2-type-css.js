/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const Table2TypeStyles = css`

thead{
    height:70px !important;
    width:100%;
    border:2px solid rgba(183,181,181,.5) !important;
    background-color:var(--body-background-color) !important;
}

thead tr th{
    border-bottom:2px solid rgba(183,181,181,.5) !important;
}

.radio {
    position: relative;
    display: inline-block;
    padding-left:30px;
    cursor:pointer;
    border: 3px solid var(--grey-darker) !important;
}

.radio input[type="radio"] {
    display:none;

}

.radio span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid var(--grey-darker) !important;
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

table2-type-header .table-header-buttons{
    position:sticky; 
    top:0;
    z-index:2; 
    background-color:var(--card-background-color) !important;   
}
.dropdown-item{
    border:1px solid rgb(183,181,181) !important;
}
tbody{
    border-left:2px solid rgba(183,181,181,.5);
    overflow-x: hidden !important; 
}

tbody tr td{
    background-color:var(--card-background-color) !important;
    padding:1.5em;
    margin-top:.75em;
    margin-bottom:.75em;
    vertical-align:middle;    
}

tbody tr:not(:first-child) td:first-child { 
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}


tbody tr:not(:first-child) td:last-child { 
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

tbody tr:first-child td:first-child { 
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

tbody tr:first-child td:last-child { 
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.table-container table .dt-table tr td:first-child{
    border-radius:20px 20px 20px 20px !important;
}
.table-container{
    max-height: 70vh;
    overflow-y: auto;
    overflow-x: auto; 
    
}

.dt-table{ 
    border-collapse: separate;
    border-spacing: 9px 15px;
    border-left:2px solid rgba(183,181,181,.5);
    border-right:2px solid rgba(183,181,181,.5);
    /* overflow-x:auto !important; */
}

.table-container table.dt-table tr td{
    background-color:var(--input-background-color);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    outline: 5px solid var(--card-background-color);
    text-align:center;
}

table th{
    background-color:var(--input-background-color);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    vertical-align:middle;
    text-align:center;
    background-color:var(--body-background-color) !important;
    padding-left:1.5em;
    padding-right:1.5em;
}
paper-checkbox #checkbox{
    border-color:var(--input-border-color) !important;

}
paper-checkbox #checkbox.checked{
    background-color: var(--link) !important;
    border-color: var(--link) !important;
}
.image{
    height:80px;
    border-radius:10px 10px 10px 10px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width:768px){
    .dt-table{
        max-width: 100%;
        overflow-x: hidden;
        width:99.5%;
    }
    .table-container{
        /* width:70vw !important; */
    /* max-width: 95% !important; */
    /* overflow-y: auto; */
    margin-left:0 !important;
    /* margin-right:25px !important; */
    /* overflow-x: hidden; */
    }
    /* .table-header-buttons{
        position:sticky; 
        top:0;
        z-index:2; 
        background-color:var(--card-background-color) !important;
        flex-wrap:wrap;    
    } */

    paper-checkbox {
        transform: translateY(-3.2rem) translateX(-2.2rem) !important;
        margin-right: -1.2rem;
    }
    .table-container table.dt-table tr td{
        /* width:76vw; */
        border:none !important;
        outline:none;
        text-align:left;
    }
    .image{
        margin-left: 1.5em;
        
    }
    tbody tr:first-child td:not(:first-child) { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    tbody tr:first-child td:first-child { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    tbody tr:not(:first-child) td:not(:first-child) { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    tbody tr:not(:first-child) td:first-child { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
}
@media(min-width:768px) and (max-width:1024px){
   
    paper-checkbox{
        transform:translateY(-2.9rem) translateX(-1.9rem) !important;
        margin-right:-1.2rem;
    }
    
    .table-container .dt-table tbody tr td{
        border:none;
        outline:none !important;
        text-align:left;
    }
    .dt-table{
    width:99.6% !important;
    border-collapse: separate;
    border-spacing: 2px 15px;    
    }  
    .image{
        margin-left: 1.5em;
        
    }
    tbody tr:first-child td:not(:first-child) { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    } 
    tbody tr:first-child td:first-child { 
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        
       
    }
    
    tbody tr:first-child td:last-child { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    tbody tr:not(:first-child) td:not(:first-child) { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        
    }
    tbody tr:not(:first-child) td:first-child { 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    
    }
}
@media(min-width:1024px){
  
    .table-container table tbody tr td{
        border:none;
        outline:5.5px solid var(--card-background-color) !important;
    }
    .dt-table{
        width:99.75%;
        
    }
}
@media screen and (max-width: 1023px){
table td::before {
  content: attr(data-label);
  float: left;
  font-weight: bold;
  text-transform: uppercase;
  margin-right:1.5em !important;
  margin-left:.5em !important;
}

}

@media (max-width:480px){
    
    .button{
        padding:0 !important;
    }
    .searchBtn{
        font-size:12px !important;
    }
    .table-header-buttons .columns{
        overflow-x:hidden !important;
     }
     .dt-table{
        width:99.2%;
     }
}

`;
