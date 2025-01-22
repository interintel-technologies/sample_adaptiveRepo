/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const DatasourceListStyles = css`
    #demo {
        margin: 20px auto;
        max-width: 960px;
    }
    
    #demo h1 {
        font-size: 2.4rem;
        line-height: 3.2rem;
        letter-spacing: 0;
        font-weight: 300;
        color: #212121;
        text-transform: inherit;
        margin-bottom: 1rem;
        text-align: center;
    }
    #demo h2 {
        font-size: 1.5rem;
        line-height: 2.8rem;
        letter-spacing: 0.01rem;
        font-weight: 400;
        color: #212121;
        text-align: center;
    }
    .topnav {
        overflow: hidden;
        /*background-color: #ffffff;*/
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
        color: #FFFFFF;
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
            background-color: #ffffff;
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
    }
`;
