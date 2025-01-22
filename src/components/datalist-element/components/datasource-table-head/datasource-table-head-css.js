
import { css } from 'lit-element';

export const DatasourceTableHeadStyles = css`
    .filter-dates{
        font-size: 11px!important;
        background-color: var(--app-accent-color)!important;
        color: white!important;
        padding: 8px!important;
        margin-right: 20px!important;
     
    }
    #calender {
        background-color: white !important;
    }
    #calender-start {
        margin: 0 !important;
        list-style: none !important;
    }
    .head{
        text-align:left;
    }
    .head .flex p,span{
        margin-top:15px;
    }
    .column_header{
        padding-right: 5px;
    } 
    .control.is-expanded{
        bottom:15px;
    }
`;
