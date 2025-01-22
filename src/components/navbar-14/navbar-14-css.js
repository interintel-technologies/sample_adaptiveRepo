import {css} from 'lit-element';

export const NavbarFourteenStyles = css`
.section11{
    position:relative;
}
.navbar-link:hover {
    background-color: var(--md-sys-color-surfaceContainerLowest) !important;
    color: var(--grey-dark) !important;
}
.navbar-item.has-dropdown:hover .navbar-link{
    background-color:  var(--default) !important;
    color:var(--grey-dark) !important;
}
.navbar-link{
   font-weight:500 !important;
}
.navbar-link:not(.is-arrowless)::after {
    border-color:var(--primary)!important;
    margin-top: -.375em;
    right: 1.125em;
}
.signup-btn {
    display: block;
    background-color: var(--link);
    color: var(--grey-darker);
    border-radius: 20px;
    font-size: 16px;
    font-weight: inherit;
    height: fit-content;
    padding: 7px 26px;
    margin: 7px;
    text-align: center;
    align-self: center;
}
.signup-btn:hover {
    padding: 6px 25px;
    border: 1px solid var(--primary);
}
.ii__container-main{
    margin: 0 auto;
    padding: 0 90px;
    background-color:  var(--body-background-color) !important;
}
/* header */
.ii__main-header{
    background-color: var(--body-background-color) !important;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: 0 1px 0 0 rgb(183,183,183);
    background: var(--body-background-color) !important;
    transition: top 0.3s ease-in-out;
    width: 100%; /* Make sure header does not exceed parent container */
    box-sizing: border-box; /* Include padding and border in width */
}
.navbar{
    background: transparent;
    height: 3.5em;
    background-color:var(--body-background-color) !important;
}

/**.navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
} */
.ii__main-header.is-scroll {
    top: -100px;
    z-index: 100;
    /*transform: translateY(-100%);*/
    transition: top 0.3s ease-in-out;
}

.nav__item{
    font-weight: regular;
    font-size: 16px;
    
    font-weight: 450;
}
.navbar-brand{
    color: var(--primary) !important;
}
.nav__item:hover{

    position: relative;
    background-color: var(--md-sys-color-surfaceContainerLowest) !important;
    color: var(--link) !important;

}

.mobile-navbar-time:hover{

    /* Link */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 12px;
gap: 12px;


/* orange white linear */
background: var(--paper);
/* M3/Elevation Light/1 */
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
z-index: 0;
border-left:solid var(--primary) 2px;

}

.mobile-navbar-time:focus::after{
    position: absolute !important;
    width: 100%!important;
    border-bottom: none !important;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    z-index: 9999!important;
    content: ''!important;
    bottom: 0!important;
    left: 0!important;
    background-color:var(--body-background-color) !important;
    color:var(--link-color-invert) !important;
}

.nav__item:hover::after{
    position: absolute;
    width: 100%;
    border-left: 10px solid var(--primary);
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    z-index: 9999;
    content: '';
    bottom: 0;
    left: 0;
}
.navbar-dropdown{
    background-color:var(--md-sys-color-surfaceContainerLowest) !important;
    border-radius:5px;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08) !important;
    border:.5px solid rgba(0, 0, 0, 0.08);
    padding:1.5rem !important;
    width:350px !important;
    left:-7.25rem !important;
}

.nav__item:focus::after{
    position: absolute !important;
    width: 100%!important;
    border-bottom: 10px solid var(--primary) !important;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    z-index: 9999!important;
    content: ''!important;
    bottom: 0!important;
    left: 0!important;
    background-color:var(--body-background-color) !important;
    color:var(--link-color-invert) !important;
}
a.navbar-item{
    font-weight:600 !important;
    font-size:12px !important;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
    color:var(--grey-dark) !important;
    font-weight:600 !important;
    background-color:transparent !important;
}
.show{
    display:block !important;
}

/* .nav__item:hover::after{
    content: '';
    position: absolute;
    width: 90%;
    height: 3px;
    top: 50px;
    left: 0;
    background: #409DB5;
} */
.navbar-item .buttons .button{
    font-size: 13px;
    font-weight: inherit;
    width: 115px;
    height: 3em;
}
.navbar-item .logo-img {
    height: auto;
    object-fit: contain;
    width: 100%;
}
.navbar-item img{
    min-height: 3.75rem!important; 
}
.navbar-menu{
    background-color: var(--body-background-color)!important;
}

.drawer-content{
    background: var(--primary);
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);

}
.navbar-burger{
    color:var(--link)!important;
}
adaptive-ui-icon{
    fill: var(--Background-Default-Light, #FFF);
    stroke-width: 0.319px;
    stroke: var(--primary);
    filter: drop-shadow(0px 1.276px 6.379px rgba(162, 26, 76, 0.20));
    fill:  #FFF;
    width:1.125rem;
}
.iconCol{
    display:flex;
    justify-content:center;  
}
.iconCol .icon{
    border-radius: 5px;
    border: 0.313px solid var(--primary);
    background: #FFF;
    box-shadow: 0px 1.253px 6.263px 0px rgba(162, 26, 76, 0.20);
    padding:.5rem;
}
.infoCol{
    display:flex;
    justify-content:flex-start;  
}
.serviceCol:hover{
    background-color:#FFF9EC;
    border-radius:5px;
    cursor:pointer;
}
@media screen and (max-width: 1023px){
    .ii__container-main{
        margin: 0 auto;
        padding: 0 10px;
    }
    .top{
        position: relative;
        top: 44px;
    }
    .signup-btn {
        border-radius: 0px;
        text-align: left;
        margin: 0px;
    }
    .navbar-menu{
        box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.5) !important;
    }
}
    @media(max-width:768px){
    .navbar-dropdown{
        width: 80vw !important; 
        display:none;
    }
}



`;