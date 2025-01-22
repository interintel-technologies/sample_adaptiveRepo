/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const SummaryTabStyles = css`
.columns {
    display: flex!important;
    flex-direction: column!important;
}
.group {
    display: flex!important;
    flex-direction: row!important;
    
}
h1{
    font-size: 18px!important;
    font-weight: 500!important;
    padding-left: 29px!important;
}
.column {
    display:flex;
}
.details {
    display: flex;
    justify-content:space-between;
    align-items:center;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 1.75rem;
    padding-right: 2rem;
    border:1px solid grey;
    border-radius:4px;
}
.block {
    margin-bottom:0;
}
.summary-p{
    color:white;
}
.summary-info{
    color:white;
    font-weight: normal!important;
    margin-bottom: 15px;
}

@media screen and (max-width:720px) {
    .group {
        display: flex!important;
        flex-direction: column!important;
        
    }
}




`;