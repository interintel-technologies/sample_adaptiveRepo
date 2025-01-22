import {css} from 'lit-element';

export const InfoCtaStyles = css`
.main-container{
    width: 100%;
    min-height:500px;
    position:relative;
    align-items: center;
    background-color: var(--md-sys-color-surfaceContainerLowest);
}
.content{
    padding:0 !important;
}

.mipay-info-cta{
    width: 100%;
    min-height:500px;
    align-items: center;
    display: flex;
    max-width: inherit;
    position: absolute;
    opacity:1.50;
    /* The image used */
    background-color: var(--md-sys-color-surfaceContainerLowest)!important;
}
.cont{
    align-items: center;
}

.columnsw{
        width: 100%!important;
        position: absolute!important;
        top: 12%!important;
        left: 6%!important; 
}
p{
    font-size: 24px;
    color:white;
    color: var(--grey-darker);
    margin-top: 12px;
}
.title{
    font-size: 40px!important;
    color: white;
    font-weight: 600!important;
    color: var(--grey-darker);
    line-height: 1.125!important;
}

.info-btn{
    margin-right: 20px;
    position: relative;
    top: 35px;
    right: 33%;
    left: 0;
}
.btn{
    color: #fff!important;
    border-radius: 60px;
    background: var(--primary)!important;
    border-color: transparent!important;
    cursor:pointer!important;
    font-style: normal!important;
    font-size: 18px;
    font-weight: 600;
    padding:20px;
}
btn:hover{
    background: var(--primary)!important;
}

a:hover {
    background: var(--primary)!important;
}
.screen-shot{
    display:flex;
    align-items:center;
    justify-content: center;
    width:40%;
    transition:0.3s all ease-in-out;
}
img {
    width:200px;
    height:400px;
}
/* Animations */
.content-container{
    width:60%;
    flex-direction:column;
    justify-content:center;
    padding: 15px;
    

}

#animate1{animation:fadeIn1 500ms}

@keyframes fadeIn1{
    0%{
        opacity:0;
        transform:translateY(40px);
    }
    100%{ 
        opacity: 1;
        transform:translateY(0px);
    }
}

#animate2{animation:fadeIn2 500ms}

@keyframes fadeIn2{
    0%{
        opacity:0;
        
        transform:translateX(50px);
    }
    100%{ 
        opacity: 1;
        transform:translateX(0);

    }
}


.animate2-appear{
    opacity: 1;
    transform:translateX(0px);

}
@media screen and (max-width: 769px) {
    .main-container{
        width: 100%;
        min-height: 900px;
    }
    .mipay-info-cta{
        width: 100%;
        min-height: 900px;
    }
    .content-container{
        width: 100%;
    }
    .info-btn{
        right: 0;
        left: 20%;
        top: 30px!important;
    }

    .screen-shot{
        top: 77px!important;
        width: 100%;
        display: flex;
        justify-content: center;
        left: 0;
    }
    .columnsw{
        top: 10% !important;
    }
    p{
        margin-top:0px;
        text-align: center;
        display: flex;
        justify-content: center;
        color: var(--grey-darker);
    }
    .title{
        font-size: 35px!important;
        text-align: center;
        width: 100%;
    }
    .btn{
        width: 10em !important;
        height: 3em !important;
    }
    .info-btn{
        right: 0;
        width: 100%;
        left: 0;
        justify-content: center;
        display: flex;
    }    
}

`;
