import{i as t}from"./index-C2PWchud.js";const i=t`
    .chart-container {
        padding: 15px 20px!important;
        border-radius: 14px;
        background: var(--white);
        border: 1px solid #595959;
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
        align-items: center !important;
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
        width: 95%;
        height:fit-content;
        max-height:100px;
        margin: 0 auto;
        padding-top: 20px;
    }
    h4 {
        margin: 0 !important;
    }
    .legend-color {
        width:15px;
        height:15px;
        margin-right: 8px;
    }
    .legend-item {
        display: flex;
        flex-direction: row;
        justify-content :center;
        align-items: center;
    }
    

    .legend-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
  
      .legend-item {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
  
      .legend-color {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 5px;
      }
  
      .legend-label {
        font-size: 14px;
      }

      .level-item{
        display: block;
      }
    
    .dropdown-icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 14px;
        color: #333;
        pointer-events: none; 
    }
  
    .dropdown-header {
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
    }
  
    .dropdown-header span {
        display: inline-block;
        margin-right: 10px;
        font-weight: bold;
    }
  
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 250px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        padding: 10px;
    }
`;export{i as C};
