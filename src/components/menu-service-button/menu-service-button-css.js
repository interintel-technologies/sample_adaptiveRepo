/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const MenuServiceButtonStyles = css`
.ccc {
    width : 100%;
    min-width: 10em;
    padding: 1em 0.5em;
    text-align: center;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -ms-flex: 1 1 0.000000001px;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0.000000001px;
    flex-basis: 0.000000001px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.feature-wrap {
    font-size: 48px;
    padding: 32px;
    border-radius: 100%;
    text-align: center;
    background: blue;
    color: #ffffff;
    box-shadow: inset 0 0 0 5px #f2f2f2;
    -webkit-box-shadow: inset 0 0 0 5px #f2f2f2;
    -webkit-transition: 500ms;
    -moz-transition: 500ms;
    -o-transition: 500ms;
    transition: 500ms;
}

h3{
    font-weight: 300;
}
.feature-wrap:hover {
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
    opacity: 0.6;
    transform: scale(1.1);
}
iron-icon {
    color: #ffffff;
}
`;