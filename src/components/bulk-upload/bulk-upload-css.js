/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const BulkUploadStyles = css`
    .column {
        padding:16px;
    }
    .files-drop-zone {
        display:flex;
        height:300px;
        border:2px dashed var(--primary);
        border-radius:10px;
        align-items:center;
        padding:10px;
        justify-content:center
    }
    /* .files-drop-zone * {pointer-events: none;} */
    .files-drop-zone-drag {
        border:2px solid var(--link);
    }
    .instructions-container {
        display:flex;
        flex-direction:column;
        width:fit-content;
        align-items:center;
        flex:1;
        padding:5px;
        height:fit-content;
    } 
    .icon-container {
        width:100px;
        height:100px;
        border-radius:50%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .instruction-text {
        text-align:center;
        color: var(--grey-darker);
    }
    .browse-text {
        color:var(--primary);
    }
    .browse-text:hover {
        color:var(--primary);
    }
    span * {
        pointer-events: auto !important;
        cursor: pointer !important;
    }
    .uploads-list {
        display:none;
        flex:1;
        flex-direction:column;
        height:100%;
        overflow-y:auto;
        padding:0;
        max-height:300px;
        overflow-x:hidden;
    }
    .show-list {
        display:flex;
    }
    #file-input {
        display:none;
    }
    
    .upload-item {
        display:flex;
        flex-direction:column;
        padding:25px 10px 10px 10px;
        margin: 6px;
        border:1px solid var(--grey-darker);
        border-radius:3px;
        position:relative;
    }
    .upload-image {
        height:140px;
        max-width:100%;
        object-fit:contain;
    }
    .upload-name {
        margin:5px;
        color: var(--grey-darker);
    }
    .remove-upload {
        position:absolute;
        top:0;
        right:0;
        margin:4px;
        width:20px !important;
        height: 20px !important;
    }
    .remove-upload:hover {
        cursor:pointer;
        border-radius:50%;
        background-color:#f5f6e9;
    } 
    .pro-container{
        margin:16px;
        margin-top:4px;
    } 
    .label {
        width: 100%;
        color: var(--grey-darker);
        letter-spacing: 0.5px;
        pointer-events: none;
        padding-bottom: 10px;
    }
`;
