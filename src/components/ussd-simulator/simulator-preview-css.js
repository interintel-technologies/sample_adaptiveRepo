/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const SimulatorPreviewStyles = css`

*{
    box-sizing: border-box;
}

:host {
display: block;
position: absolute;
top: 100px;
left: 0;
right: 0;
background-color: black;
color: white;
border:1px solid gray;

padding: 5px;

/* 
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
text-align: center;
 */
will-change: transform;
transform: translate3d(0, 100%, 0);
transition-property: visibility, transform;
transition-duration: 0.2s;
visibility: hidden;
}
:host([active]) {
visibility: visible;
transform: translate3d(0, 0, 0);
}

.white-space-pre {
    white-space: pre-wrap;
}

`;