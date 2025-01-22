/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const GroupedBarChartStyles = css`
    .chart-container {
        padding:16px;
    }
    .card {
        justify-content: center;
        padding: 16px;
    }
    .tooltip {   
        position: absolute;           
        text-align: center;           
        width: fit-content;                  
        height: fit-content;                 
        padding: 4px;             
        font: 16px sans-serif;  
        color: white;   
        font-weight: 500;   
        background: black;   
        border: 0px;      
        border-radius: 4px;           
        pointer-events: none;         
    }
    .filters-element {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    select {
        margin: 0 6px;
    }
    .title {
        position: absolute;   
        top: 16px;
        left: 16px;
        text-decoration: underline;
    }
    h4, h5 {
        margin: 0 !important;
    }
    .legend {
        display: flex;
        flex-direction: row;
	    justify-content: center;
        width: -webkit-fill-available;
        overflow-x: auto;
        height:fit-content;
        position: absolute;
        padding:5px;     
        top:43px;
        max-height:100px;
    }
    .legend-color {
        width:15px;
        height:15px;
        margin-right:16px;
    }
    .legend-item {
        display: flex;
        flex-direction: row;
        margin-right:16px;
        justify-content:flex-start;
		padding: 5px;
        align-items: center;
    }
    .calender-block {
        position: relative;
        width: 350px !important;
    }
    .close-calender {
        position: absolute;
        top: 3px;
        right: 3px;
        cursor: pointer;
        margin: 16px !important;
    }
    .close-calender:hover {
        color: red;
        transform: scale(1.03);
    }
    .date-range {
        padding-top: 0 !important;
    }
    p {
        margin: 0 !important;
    }
    .datalist-column-header:hover {
        color: var(--app-secondary-color) !important;
    }
    .calender {
        position: absolute;
        display: none;
        top: -155%;
        padding: 0px;
        width: 25%;
        right: -52px;
        background: rgb(255, 255, 255);
        z-index: 1;
        width: 350px !important;
        transform: scale(0.7);
    }
`;