
import {css} from 'lit-element';

export const DatalistHeaderStyles = css`
    .table-header-buttons{
        width: 100%;
        height: auto;
        position: relative;
    }
    .table-header-buttons h1{
        margin-bottom: 15px;
    }
    .search_box .dropdown{
        width: 150px;
        color: rgb(1, 50, 67);
        border-radius: 6px;
        position: relative;
        cursor: pointer;
    }
    .search_box .dropdown.cell-dropdown{
        border: 1px solid rgb(183, 181, 181);
        width: 100%;
    }
    .search_box .dropdown::before{
        content: '';
        position: absolute;
        top: 8px;
        right: -1px;
        border: 5px solid;
        border-color: #9B9B9B transparent transparent transparent;
    }
    .search_box .dropdown .default_option{
    
        padding: 9px 8px;
        font-size: 14px;
        position: relative;
        top: -3px;
    }
    .search_box .dropdown ul{
        display: none;
        position: absolute;
        top: 50px;
        left: 0px;
        background: #fff;
        width: 150px;
        -webkit-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
        -moz-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
        box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
        z-index: 999;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }
    .search_box .dropdown ul li{
        padding-bottom: 20px;
        padding: 10px;
    }
    .search_box .dropdown ul li:hover{
        background-color: #e5e5e5;
    }
`;
