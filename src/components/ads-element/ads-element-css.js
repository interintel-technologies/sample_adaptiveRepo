import { css } from "lit-element";

export const AdsElementCss=css`

    .columns{
        margin:0 !important;
        padding-right:10%;
        padding-left:10%;
        
    }
    .slides{
        flex-direction:row !important;
        display:flex;
        overflow-x:hidden;
        border-radius:16px;
        height:auto;
        max-height:300px;
        z-index: 10;
        position: relative;
    }
    .slide {
        width: 100%;
    }
    .parCol{
        display:flex;
        align-items: center;
    
    }
    .imgCol{
        padding-bottom:0px;
        align-items:baseline;
        display:flex;
    }
    .imgCol img{
        height:190px;
        width:100%;
        position:relative;
        object-fit:contain;
    }
    @media(max-width:768px){
        .columns{
            padding-left:0;
            padding-right:0;
        }
        .slides{
            flex-direction:column;
            max-height:320px;
            overflow-y:hidden;
        }
        .parCol{
            text-align:center;
        }
        
    }

    .carousel-wrapper {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }
    .carousel-item {
        flex: 0 0 100%;
        box-sizing: border-box;
    }
    .dots-container {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    }
    .dot {
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }
    .dot.active {
        background-color: #000;
    }
`;
