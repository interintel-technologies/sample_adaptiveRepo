
import {css} from 'lit-element';

export const CheckboxInputStyles = css`
    .checkbox input[type="checkbox"] {
        opacity: 0;
    }
    .checkbox label {
        position: relative;
        display: inline-block;
        /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
        padding-left: 22px;
    }
    .checkbox label::before,
    .checkbox label::after {
        position: absolute;
        content: "";
        
        /*Needed for the line-height to take effect*/
        display: inline-block;
    }
    /*Outer box of the fake checkbox*/
    .checkbox label::before{
        height: 16px;
        width: 16px;
        
        border: 1px solid;
        left: 0px;
        
        /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
        *to vertically center it.
        */
        top: 3px;
    }
    /*Checkmark of the fake checkbox*/
    .checkbox label::after {
        height: 5px;
        width: 9px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
        left: 4px;
        top: 7px;
    }
    /*Hide the checkmark by default*/
    .checkbox input[type="checkbox"] + label::after {
        content: none;
    }
    /*Unhide on the checked state*/
    .checkbox input[type="checkbox"]:checked + label::after {
        content: "";
    }
    /*Adding focus styles on the outer-box of the fake checkbox*/
    .checkbox input[type="checkbox"]:focus + label::before {
        outline: rgb(59, 153, 252) auto 5px;
    }
`;
