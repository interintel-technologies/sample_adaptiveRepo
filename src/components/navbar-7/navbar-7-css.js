import {css} from 'lit-element';

export const Navbar7Styles = css`
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        width: 100vw;
    }
    .mid-bar, .bottom-bar {
        display: flex;
        justify-content: space-between;
        padding: 0px 40px;
    }
    .top-bar {
        display: flex;
        justify-content: flex-end;
        padding: 0px 40px;
    }
    .content {
        width: 100%;
    }
    #metaText {
        font-size: 12px;
    }
    .content p {
        margin-bottom: 0 !important;
    }
    #vr {
        height:80%;
        width: 2px;
        margin:0 7px;
        background-color: black;
    }
    .mid-bar {
        position: relative;
    }
    .bottom-bar {
        position: relative;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
        background-color: var(--app-secondary-color);
    }
    .bottom-bar > * {
        position: relative;
        top: 50%;
    }
    .all-categories{
        left: 0;
    }
    .search-container {
        display: flex;
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
        border-radius: 200px;
        padding: 2px 20px;
        border: 0.5px solid #ccc;
        background-color: white;
    }
    .navbar-item:hover {
        background-color: var(--app-default-color) !important;
    }
    .navbar-item h6 {
        color: white !important;
        margin:0;
    }
    img {
        max-height: 3rem;
    }
    #searchInput {
        border: none;
        box-shadow: none;
        outline:none !important;
        padding-left: 10px;
        min-width: 250px;
    }
    adaptive-ui-icon {
        cursor: pointer;
    }
    adaptive-ui-icon:hover {
        fill: var(--app-secondary-color);
    }
    select {
        border: none !important;
        box-shadow: none !important;
    }
    option {
        cursor: pointer;
    }
    option:first-child {
        color: 0.6;
        cursor: default;
    }
    .button {
        border: none;
        box-shadow: none;
    }
    .avatars {
        display: flex;
        align-items: center;
        padding: 7px 14px;
    }
    .avatar-btn {
        height: fit-content;
    }
    .avatar-btn:first-child {
        margin-right: 15px;
    }
    .avatar-btn:last-child {
        margin-left: 15px;
    }
    .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width:20px;
        height: 20px;
        border-radius: 100%;
        background-color: var(--app-secondary-color);
        right: 0;
        top: 0;
        transform: translateX(50%);
    }
    .badge p {
        margin: 0;
        font-size: 12px;
        color: white
    }
    .button {
        background-color: var(--app-secondary-color) !important;
    }
    .button h6, .navbar-item h6{
        color: white !important;
        margin: 0;
    }
    .dropdown-item > adaptive-ui-icon {
        margin-right: 10px;
    }
    #profile-dropdown-menu {
        left: -620% !important;
    }
    #profile-dropdown-content > .dropdown-item{
        cursor: pointer;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    #profile-dropdown-content > .dropdown-item:hover {
        transform: scale(1.05);
    }
    #profile-dropdown-content > .dropdown-item:active {
        transform: scale(0.95);
    }
    hr {
        margin: 0px !important;
    }
    .auth-container {
        display: flex;
        padding-top: 8px;
    }
    .auth-container p {
        cursor: pointer;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .display-categories-menu {
        display: none;
    }
    .burger {
        width: 30px;
        height: 30px;
    }
    .burger:hover {
        fill: black !important;
    }
    .auth-container p:hover {
        color: var(--app-secondary-color) !important;
    }
    .auth-container p:active {
        transform: scale(0.95);
    }
    .dropdown-item {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .dropdown-item h6{
        margin-left: 15px;
        margin-bottom: 0px;
    }
    .display-categories {
        right: 0;
        display: flex;
        margin-left: 10%;
        width: 100%;
        justify-content: space-evenly;
    }
    .navbar-item {
        display: flex;
        padding: 0 0.75rem;
    }
    @media screen and (max-width: 1023px){
        .top-bar, .display-categories {
            display: none;
        }
        .all-categories {
            left: 100%;
            transform: translateX(-100%);
        }
        .dropdown-menu {
            top: 150% !important;
        }
        .all-categories .dropdown-menu {
            right: 0 !important;
            left: initial;
        } 
        .mid-bar {
            margin-bottom: 4rem;
            margin-top: 5px; 
            padding: 0 20px;
        }
        .search-container {
            transform: translate(50%);
            bottom: -3.5rem;
            top: auto;
            height: fit-content;
        }
        .display-categories-menu {
            display: block;
            right: 100%;
            transform: translateX(100%);
        }
        #searchInput {
            min-width: 150px !important;
        }
    }
`;
