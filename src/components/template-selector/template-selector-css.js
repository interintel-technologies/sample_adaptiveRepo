
import { css } from 'lit-element';

export const TemplateSelectorStyle = css`
    #template-selector-container {
        position:relative;
    }
    .content-container {
        display:flex;
        justify-content:space-between;
        padding:7px 25px 7px 25px;
        align-items:center;
        border: 1px solid rgb(183, 181, 181);
        border-radius:6px;
        height:fit-content;
        
    }
    .title-label {
        font-size: 16px;
        width: 100%;
        pointer-events: none;
        transition: all 0.3s ease 0s;
    }
    .selected-template-label {
        display:none;
        width:fit-content;
        margin:0;
        font-size:14px;
        transition: all 0.4s ease 0s;
    }
    .templates {
        display:flex;
        flex-direction:column;
        max-height:0;
        align-items:center;
        margin: 10px 10px 0 10px;
        overflow-y:auto;
    }
    .arrow {
        position:relative;
        content: '';
        width: 10px;
        height: 10px;
        border-left: 2px solid #4a4a4a;
        border-bottom: 2px solid #4a4a4a;
        border-right: 2px solid transparent;
        border-top: 2px solid transparent;
        transform: rotate(-45deg);
        right:0;
    }
    .arrow-up {
        transform: rotate(135deg);
        transition:all 0.4s ease-in-out;
    }
    .arrow-down {
        transform: rotate(-45deg);
        transition:all 0.4s ease-in-out;
    }
    .show-templates {
        max-height:300px;
        transition:all 0.4s ease-in-out;
    }
    .hide-templates {
        max-height:0;
        transition:all 0.4s ease-in-out;
    }
    .template {
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        height:150px;
        margin:5px;
    }   
    .template:hover {
        cursor:pointer;
    }
    .template:active {   
        margin-right:8px;
        margin-left:8px;
        transition: all 0.17s ease-out;
    }
    .template-name {
        padding-left:7px;
    }
    .template-image {
        height:130px;
        width:100%;
        object-fit:contain;
        border: 1px solid rgb(183, 181, 181);
        border-radius: 6px;
        padding:3px;
    }
    .selected {
        border-color:var(--link);
    }
    .is-arrow-danger {
        border-color:rgb(255, 56, 96)!important;
    }
    .is-arrow-success{
        border-color: #23d160 !important;
    }  
    .lbl-danger{
        color: #ff2b56;
    }
    .cont-danger{
        border: 2px solid #ff2b56;
    }
    .lbl-success{
        color: #23d160 !important;
    }
    .cont-success{
        border: 2px solid #23d160;
    }
    #warning-text{
        display:none;
    }
`