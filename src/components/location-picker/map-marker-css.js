/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const MapMarkerStyles = css`

:host {
    display: block;
    width: 100%;
    height: 500px;
 }
/*
.centerMarker {
  position: relative;
  background: url('data:image/png;base64,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') no-repeat;
  background-size: 100%;
  top: -50%;
  left: 50%;
  z-index: 1;
  margin-left: -14px;
  margin-top: -43px;
  height: 44px;
  width: 28px;
  cursor: pointer;
}

*/


.gm-style .controls {
font-size: 28px;  /* this adjusts the size of all the controls */

background-color: white;
box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
box-sizing: border-box;
border-radius: 2px;
cursor: pointer;
font-weight: 300;
height: 1em;
margin: 6px;
text-align: center;
user-select: none;
padding: 2px;
width: 1em;
}
.gm-style .controls button {
border: 0;
background-color: white;
color: rgba(0, 0, 0, 0.6);
}
.gm-style .controls button:hover {
color: rgba(0, 0, 0, 0.9);
}

.gm-style .controls.zoom-control {
display: flex;
flex-direction: column;
height: auto;
}
.gm-style .controls.zoom-control button {
font: 0.85em Arial;
margin: 1px;
padding: 0;
}

.gm-style .controls.maptype-control {
display: flex;
flex-direction: row;
width: auto;
}
.gm-style .controls.maptype-control button {
display: inline-block;
font-size: 0.5em;
margin: 0 1px;
padding: 0 6px;
}
.gm-style .controls.maptype-control.maptype-control-is-map .maptype-control-map {
font-weight: 700;
}
.gm-style .controls.maptype-control.maptype-control-is-satellite .maptype-control-satellite {
font-weight: 700;
}

.gm-style .controls.fullscreen-control button {
display: block;
font-size: 1em;
height: 100%;
width: 100%
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon {
border-style: solid;
height: 0.25em;
position:absolute;
width: 0.25em;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-left {
border-width: 2px 0 0 2px;
left: 0.1em;
top: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-left {
border-width: 0 2px 2px 0;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-right {
border-width: 2px 2px 0 0;
right: 0.1em;
top: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-right {
border-width: 0 0 2px 2px;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-left {
border-width: 0 0 2px 2px;
left: 0.1em;
bottom: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-left {
border-width: 2px 2px 0 0;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-right {
border-width: 0 2px 2px 0;
right: 0.1em;
bottom: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-right {
border-width: 2px 0 0 2px;
}




`;
