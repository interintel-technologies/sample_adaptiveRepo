import {css} from 'lit-element';

export const DescriptionBoxStyles = css`
    .box{
        box-shadow: var(--mui-shadows-3);
        background-color:var(--paper) !important;
        border: 0.5px solid var(--primary--light-color) !important;
    }
    .box-left h1{
        font-weight:600 !important;
    }
    .box-left p {
        font-weight:400 !important;
    }
    .box-left .box{
        border-radius: 10px;
        background-color: var(--primary);
        padding: 0;
        height: 100%;
    }

    .box-right{
        right: 153px;
        top: 30px;
    }
    .box-right .box{
        padding: 20px;   
    }
    .box-right .box img{
        object-fit:contain;
        height:5rem;
        border-radius:10px;
    }
    .box-right .box h4{
        font-size:1.5em !important;
    }
   
    .box-right-cols{
        justify-content:center;
    }
    .box-right-cols .boxCol .box{
        max-height:300px;
        height:auto;
        min-height:190px; 
    }
    .box-right .box:hover{
        padding: 30px;
        padding: 20px;
        transform:scale(1.05);
        transition:500ms ease-in-out;
        cursor:pointer;
    }
    .box-right .box:hover h4, 
    .box-right .box:hover icon,
 

    .fadeIn{animation:fadeIn 500ms}

    @keyframes fadeIn{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
            transition:3s all ease-in-out;
        }
    }

    .fadeUp{
        animation:fade2 500ms
    
    }

    @keyframes fade2{
        0%{
            opacity:0;
            transform:translateY(40px);
        }
        100%{
            opacity:1;
            transform:translateY(0);
            transition:1s all ease-in-out;
        }
    }

    .mainInfo{
        padding:1.7rem;
    }

    @media screen and (max-width: 768px){
        .box{
            overflow: hidden;
        }
        .box-right{
            right: 0;
        }
        .box-right-cols{
            margin:auto;
        }
        .box-right-cols .boxCol .box{
            max-height:500px !important;
            min-height:280px;
            height:auto;
        }
    }

    @media screen and (min-width: 770px) and (max-width: 1075px){
        .box-right{
            right: 0;
        }

        .box-right .box{
            height: 100%;
        }
    }
`;
