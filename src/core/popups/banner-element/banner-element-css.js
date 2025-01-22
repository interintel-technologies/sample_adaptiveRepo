import { css } from 'lit-element';

export const BannerElementStyles = css`
    :host {
        display: block;
    }
    .banner{
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    
        width: 100vw;
    }
    .visible {
        display: block;
    }
    .cancel{
        cursor: pointer;
        right: 20px;
        position: relative;
    }
    .success{
        background-color: #23d160;
        color: #fff;
    }
    .danger{
        background-color: #f14668;
        color: #fff;
    }
    .info{
        background-color: var(--info);
        color: #fff;
    }
    .slide-bottom {
        -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: s
    }
    .banner.visible {
        animation: fade-in 0.3s ease-in-out forwards;
    }
    .banner.hidden {
        animation: fade-out 0.3s ease-in-out forwards;
    }
    @-webkit-keyframes slide-bottom {
        0% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
        100% {
            -webkit-transform: translateY(1px);
            transform: translateY(1px);
        }
    }

    @keyframes fade-in {
        from { opacity: 0; transform: translateY(-100%); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fade-out {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-100%); }
    }

    @keyframes slide-bottom {
        0% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
        100% {
            -webkit-transform: translateY(1px);
            transform: translateY(1px);
        }
    }

`