import { css } from "lit-element";

export const Navbar5Styles=css`
.field.has-addons{
    padding: 0!important;
    margin-bottom: 0;
}
header .top-nav{
    background-color: var(--primary);
    color: #fff;
    position: relative;
}
header .location, header .profile{
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
}
::placeholder{
    font-weight:600;
    color:var(--grey-light) !important;
}
#searchBar{
    color:var(--link) !important;
    fill:var(--link) !important;
}
header i{
    font-size: 12px;
}
header .cart-container i{
    font-size: 25px
}
header .cart-container p.title, header .cart-container p.subtitle{
    color: var(--gray-darker);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
}
.profile-dropdown{
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 40px;
    right: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.profile-dropdown p{
    color: #000;
}
.profile-dropdown li .icon{
    color: #000;
}
.profile-dropdown li a:hover{
    background-color: red;
}
header .cart-container p.subtitle{
    color: var(--link)!important
}
.search-icon{
    display: none!important;
}
.noti{
    background-color: red;
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 50%;
    top: -5px;
    right: 8px;
    font-size: 12px;
    color: #fff;
}
header .bottom-nav{
    border-bottom: 1px solid #000;
}
@media (max-width: 280px){
    .store{
        display: none;
    }
    header .nav-location{
        width: 40%;
    }
    header .nav-profile{
        width: 60%;
    }
}
@media (max-width: 768px) {
    .branding{
        display: none;
    }
    header .control, header .field{
        width: 100%;
    }
    header .top-nav,  header .bottom-nav{
        padding-left: 10px!important;
        padding-right: 10px!important;
        justify-content: space-between!important;
    }
    header .bottom-nav .icon i{
        font-size: 18px;
    }
    header .top-header span{
        font-size: 13px!important;
    }
    header .nav-location{
        width: 70%;
    }
    header .nav-profile{
        width: 30%;
    }
    header .nav-location .location{
        word-wrap: nowrap;
        font-size: 11px!important;
    }
    .hidden-mobile {
        display: none;
    }
    .search{
        display: none!important;
    }
    .search-icon{
        display: block!important;
    }
}

`;
