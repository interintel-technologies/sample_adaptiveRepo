import { css } from "lit-element";

export const POSPageStyles = css`
    .page {
        height: 100vh;
        width: 100vw;
    }
    .body {
        overflow-y: hidden
    }
    .main-panel {
        display: block;
        overflow-y: auto;
        border-right: 1px solid var(--grey-lighter);
        height: 100%;
        width: 70%;
    }
    .side-panel{
        height: 100%;
        overflow-y: auto;
        width: 30%;
        padding: .5em;
    }
    .action-btn{
        background-color: var(--link);
        border-radius: 50%;
        position: absolute; 
        z-index: 9999;
        height: 60px;
        bottom: 30px; 
        width: 60px;
        right: 30px; 
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
    .action-btn .icon i{
        color: #fff;
    }
    .side-panel::-webkit-scrollbar {
        display: none;
    }
    .is-active{
        display:block !important;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .side-panel {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    @media screen and (max-width: 765px) {
        .side-panel{
            width: 100%;
            display: none;
            position:static !important;
        }
        .action-btn{
            display: flex;
            z-index: 9999;
        }
        .main-panel{
            width: 100%;
        }
    }
    @media screen and (min-width: 766px) {
        .side-panel{
            display: block!important;
        }
        .main-panel{
            display: block!important;
        }
        .action-btn{
            display: none;
            z-index: 9999;
        }
    }
    @media screen and (min-width: 765px) and (max-width: 1200px) {
        .side-panel{
          display: block!important;
          width:40%;
        }
        .main-panel{
            width:60%;
        }
    }

    @media(max-width:450px){
        .main-panel{
            width:100%;
        }
        .action-btn{
            display: flex;
            z-index: 9999;
        }
    }
`;