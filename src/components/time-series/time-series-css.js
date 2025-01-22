
/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const TimeSeriesStyles = css`
    .chart-container {
        padding:16px;
    }
    .card {
        justify-content: center;
        padding: 16px;
    }
    #chart {
        width: 100%;
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
    .date {
        cursor: pointer;
    }
    .date-container {
        position: relative;
    }
    date-element-2 {
        position: absolute;
        right: -70px;
        top: -40px;
        z-index: 10;
        transform: scale(0.75);
    }
    .close-date-container-icon {
        position: absolute;
        top: 35px;
        z-index: 10;
        right: -30px;
        cursor: pointer;
    }
    .level {
        margin-bottom: 0 !important;
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
        width: 100%;
        height:fit-content;
        max-height:100px;
    }
    h4 {
        margin: 0 !important;
    }
    .legend-color {
        width:15px;
        height:15px;
        margin-right:16px;
    }
    .legend-item {
        display: flex;
        flex-direction: row;
        justify-content :center;
        align-items: center;
    }
`;