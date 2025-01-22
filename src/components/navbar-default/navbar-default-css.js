/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const NavbarDefaultStyles = css`
nav {
    font-size: 16px;
}

a figure img#user-pic{
    border: solid 3px #157cf8;
}

.bind-box {
    margin-bottom: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem 4.5rem;

}
.menu-link-image{
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: 300;
}
.menu-link-image-label {
    position: absolute;
    top: 10px;
    left: -4px;
    background-color:#3273dc;
    padding: 3px 5px;
}

#site-name {
    font-size: 25px;
}    

#section2 .navbar .navbar-menu .navbar-start a, #section11 .navbar .navbar-menu a, #section12 .block .level a {
    color: #d4d3d3;
}
#section2 .navbar .navbar-menu .navbar-start a:hover, #section11 .navbar .navbar-menu a:hover, #section12 .block .level a:hover {
    color: #4a4a4a;
}
#section2 .navbar .navbar-menu .navbar-start a.is-active, #section11 .navbar .navbar-menu a.is-active, #section12 .block .level a.is-active {
    color: #4a4a4a;
}
#section2 div.block nav.level div.level-left p {
    padding:0 10px;
}
#section2 .tabs a {
    align-items: center;
    border-bottom-color: #fff;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    color: #4a4a4a;
    font-weight: 500;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
}
#section2 .tabs li.is-active a {
    border-bottom-color: #3273dc;
}
`;