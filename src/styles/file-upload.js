/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const FileUploadStyles = css`
.file-preview{
    width: 10%;
    background: #e5e5e5;
}
.drop-area{
    width: 100%;
}
.drop-area form.upload-form{
    width: 100%;
   
    padding-bottom: 16px
}
.ii-file-input {
    display: inline-block;
    text-align: left;
    background: #fff;
    padding:3px 13px;
    width: 100%;
    position: relative;
    border-radius: 3px;
}
.ii-file-input > [type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;
    cursor: pointer;
}
.ii-file-input > .button {
    display: inline-block;
    cursor: pointer;
    background: #eee;
    padding: 8px 16px;
    border-radius: 2px;
    margin-right: 8px;
}
.ii-file-input:hover > .button {
    background: dodgerblue;
    color: white;
}
.ii-file-input .label {
    white-space: nowrap;
    opacity: .9;
    position: relative;
    margin-left: 20px;
    top: 6px;
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #4A4A4A;
    padding-top: 4px;
}
.ii-file-input.-chosen .label {
    opacity: 1;
}
.file-btn{
    font-size: 14px;
    font-weight: 600;
    color: #fff!important;
    background-color: var(--primary)!important;
    padding: 20px 30px;
}
`;