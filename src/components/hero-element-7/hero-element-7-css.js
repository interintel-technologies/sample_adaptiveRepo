
/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const HeroElement7Styles = css`
a {
    display: block;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    text-decoration: none;
    color: #333333;
}
.zua-c{
    background: var(--primary)!important;
    color: #fff!important;
}
.hero{
    width: 100%;
    height: 91vh;
    position: relative;
    overflow: hidden;
    margin-top: 83px;
    flex-direction: row !important;
    flex-wrap:wrap;
}

.hero-img-cont .overlay{
    width: 100%;
    height: 91vh;
    opacity: .4;
    background-color: var(--secondary);
    border-top-left-radius: 50px;
    position: absolute;
    top: 0;
    left: 0;
}
.hero-img-cont img{
    border-top-left-radius: 50px;
    object-fit: cover;
    width: 100%;
    height: 100%
}
.hero-text-container{
    width: 50%;
    height: 100vh;
    border-top-left-radius: 50px;
    position: relative;
    padding-left: 25px;
    margin: 155px 0 0 0;
    /* left: 0; */
   
}
.hero-text-container h1{
    text-transform: capitalize!important;
    /* position: absolute; */
    animation: loadIn 0.5s ease 1s forwards;

}
.hero-content{
    position: relative;
    overflow: hidden;
}
.hero-content h2{
    margin-top: 30px;

}
.hero-content p{
    margin-top: 30px;
    width: 600px;

}
.hero-cta a.btn{
    background-color: var(--secondary);
    color: var(--white);
    margin-top: 30px;
    height: 4em!important;
    width: 267px!important;
    border:none !important;

}
.parallax-cont {
    position:relative;
    width:50%;
}
.btn.button:hover{
    background-color: var(--secondary)!important;

}
// @keyframes loadIn {
// 0% {
//     transform: translateY(80px);
// }
// 100% {
//     transform: translateY(0px);
// }
// }


/*animations*/

.animate1{
    opacity:0;
    transform:translateX(-40px);
    transition:0.7s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateX(0px);

}




@media screen and (max-width: 550px){
    .wrapper{
        width: 100% !important;
        position: relative !important;
    }
    .hero-text-container{
        width: 100% !important;
        height: 80vh !important;
        padding-top: 80px !important;
    }
}
@media screen and (max-width: 1030px){
    .hero{
        margin-top: 62px ;
        overflow-y:auto ;
    }
    .hero-img-cont,
    .hero-img-cont img,
    .hero-img-cont .overlay,
    .parallax-cont{
        width: 100% ;
        border-radius: 0 ;
        height: 50vh ;
    }
    .hero-text-container{
        width: 100%;
        height: 50vh;
    }
    .hero-img-cont {
        background-size: contain;
        background-position-x: unset;
        background-attachment: inherit;
    }
    .hero-text-container {
        width: 100%;
        padding: 39px;
        margin: 0;
        padding-top: 160px;
    }
    .hero-text-container h1{
        font-size: 55px !important;
        width: 100%;
    }
    .hero-content p{
        margin-top: 30px;
        width: 95%;
    
    }
}
@media screen and (max-width: 290px){
    .hero-text-container h1 {
        font-size: 43px !important;
    }
    .hero-cta a.btn {
        width: 100% !important;
    }
    .hero-text-container{
        height: 85vh !important;
    }
}
`;

