/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const ChartUIStyles = css`
    .card {
        justify-content: center;
        padding: 16px;
    }
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
    .legend {
        display: flex;
        flex-direction: row;
        height:fit-content;
        position: absolute;
        padding:5px;     
        top:43px;
        max-height:100px;
        overflow-y:auto;     
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
        align-items: center;
    }
`;