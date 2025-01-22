import {css} from 'lit-element';

export const InfoCta3Styles = css`
.main-container{
    width: 100%;
    min-height:500px;
    position:relative;
    align-items: center;
}
.cont{
    align-items: center;
}
.info-cta{
    background-color: rgba(244, 255, 240) !important;
padding-bottom:1.5rem !important;

}
h3{
    font-size:45px !important;
    font-weight:400 !important;
    line-height:52px !important;
    margin-bottom:1em !important;
    margin-top: .25em !important;
}
h6{
    margin-bottom: 2.5em !important;
    max-width: 81%;
    font-size:16px !important;
    line-height:24px !important;
    letter-spacing:.5px !important;
    font-weight:400 !important;
}
.stores_title{
    display:flex;
    justify-content:start;
}
.stores span{
    color:var(--black)!important;
}
.stores_title h5{
    font-weight:400 !important;
    font-size:24px !important;
    line-height:32px !important;
    margin-bottom:.5em !important;
}
.stores .button{
    height:60px;
    border: 1px solid var(--md-sys-color-outlineVariant) !important;
    border-radius:var(--CornerSmall) !important;
    background-color:var(--white) !important;
    width:81%;
    font-size:14px !important;
}
.title{
    font-size: 40px!important;
    color: white;
    font-weight: 600!important;
    line-height: 1.125!important;
}
.screen-shot{
    display:flex;
    align-items:center;
    justify-content: center;
    width:40%;
    transition:0.7s all ease-in-out;
}
.screen-shot img {
    width:240px;
    object-fit:contain !important;
}
.or_div{
    justify-content:center;
    display:flex;
    width:81%;
}
.or_div::before,
.or_div::after {
    content: "";
    flex: 1; /* Makes the lines flexible to fill space */
    height: 5px; /* Line thickness */
    background-color: var(--md-sys-color-secondaryContainer); /* Match the light blue line color */
    margin: 9px 12px; /* Adds space between the lines and the text */
}
/* Animations */
.content-container{
    width:60%;
    flex-direction:column;
    justify-content:center;
    padding: 15px;
    transition:0.7s all ease-in-out;
}

.columns {
    margin: 10px 0px;
    padding: 10px !important;
}
.badge {
    height: 45px;
    width:30px;
    margin-right: 20px;
    object-fit: contain;
    transition: transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12) 0s, box-shadow 0.3s ease 0s, -webkit-transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12) 0s;
    cursor: pointer;
}
.badge:hover {
    transform: scale(1.05);
}
.badge:active {
    transform: scale(0.9);
}
.color-primary {
        color: var(--primary) !important; 
}
@media(max-width:768px){
    .content-container h3{
        margin-left:auto;
        margin-right:auto;
       
    }
    .content-container h6{
        margin-left:auto;
        margin-right:auto;
        max-width: 100%;
    }
    .stores{
        justify-content:center;
    }
    .screen-shot img {
        width:120px;
    }
    h3{
        font-size:32px !important;
        line-height:40px !important;
        margin-top:.35em !important;
        margin-bottom:.75em !important;
    }
    .stores .button{
        width:100% !important;
    }
    .or_div{
        width:100% !important;
    }
    .stores span{
        margin-left:10px !important;
    }
    .content-container{
        padding:5px !important;
    }
    h6{
        margin-bottom:2em !important;
    }
}
@media screen and (max-width: 459px) {
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
    p{
        margin-top:0px;
        text-align: center;
        display: flex;
        justify-content: center;
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
    .badge {
        margin:0;
    }
    .stores {
        justify-content: space-around;
    }
    h6{
        max-width: 90%;
    }  
}

`;