import { css } from 'lit-element';

export const FlexiRadioButtonsStyle = css`
.flexi-container {
    padding: 10px;
}

.horizontal .form-group{
    display: inline-block;
    margin-right: 5px;
}

.vertical .form-group{
    display: block;
    margin-left: 0!important;
}

.form-group {
    display: block;
    margin-bottom: 15px;
}

.form-group input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
}

.form-group label {
    position: relative;
    cursor: pointer;
}

.form-group input[type=radio] + label:before {
    content:'';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid var(--grey-darker);
    border-radius: 50px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
    top: -2px;
}
.form-group input[type=checkbox] + label:before {
    content:'';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid var(--grey-darker);
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 10px;
    top: -2px;
}
.form-group input:checked + label:before{
    border: 2px solid var(--link);
} 
.form-group input:checked + label{
    color: var(--link)
}

.form-group input[type=checkbox]:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid var(--link);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.form-group input[type=radio]:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 5px;
    width: 14px;
    height: 14px;
    border: solid var(--link);
    border-radius: 50px;
    background: var(--link);
}
`