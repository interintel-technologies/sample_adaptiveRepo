import {css} from 'lit-element';

export const ServiceButtonStyles = css`
.service-button-container{
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin-bottom: 1.875em;
    border-radius: 5px;
    border: 0px solid transparent;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
}
.service-button-container:hover{
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 11px 0px;
}
.icon-holder{
    position: relative;
    padding: 15px;
    font-size: 24px;
    font-weight: normal;
    color: #fff;
    border-radius: 6px;
    background-color: var(--app-accent-color);
    box-shadow: 0 14px 26px -12px 
        rgba(0,0,0,0.12),0 8px 10px -5px !important;
}
.content-text{
    margin-left: 20px;
    display:flex;
    align-items: center;
}
.content-text h2{
    text-transform: capitalize;
}
.content-text p{
    font-size: 10px;
    text-transform: initial;
}

@media screen and (max-width: 1023px) {
    .action-icons, .dropdown-content{
        position: absolute;
        right: 0;
    }
    .dropdown-content{
        top: 30px;
    }
}

@media screen and (min-width: 280px) and (max-width: 320px){
    .service-button-container .content-area {
        padding: 10px;
    }
    .iron-icon{
        width: 20px;
        height: 20px;
    }
    .content-text{
        margin-left: 10px;
    }
    .content-text h2{
        font-size: 10px!important;
    }
    .icon-holder {
        padding: 5%;
    }
}

@media screen and (min-width: 321px) and (max-width: 359px){
    .service-button-container .content-area {
        padding: 10px;
    }
    .content-text{
        margin-left: 10px;
    }
    .icon-holder {
        padding: 5%;
    }
    .content-text h2{
        font-size: 13px!important;
    }
}
@media screen and (min-width: 360px) and (max-width: 406px){
    .service-button-container .content-area {
        padding: 10px;
    }
    .content-text{
        margin-left: 10px;
    }
    .icon-holder {
        padding: 5%;
    }
    .content-text h2{
        font-size: 15px!important;
    }
}
@media screen and (min-width: 407px) and (max-width: 480px){
    .service-button-container .content-area {
        padding: 10px;
    }
    .content-text{
        margin-left: 10px;
    }
    .icon-holder {
        padding: 5%;
        font-size: 12px!important;
    }
}
  
  
`;