/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const SlideShowStyles = css`
body, html{
    width: 100%;
    height: 100%;	
    margin: 0;
    overflow-X: hidden;/* optional */
}

#i1, #i2, #i3, #i4, #i5{ display: none;}

.slider-wrapper{
    margin: 0 auto;
    position: relative;
    height: 0;
    padding-bottom: 38%;
  user-select: none;
    background-color: #1c1c1c;
    border-radius:10px ; 
}

.slider-wrapper .slide_img{
    position: absolute;
    width: 100%;;
    height: 100%;
    margin-top: -21px;
}
.slider-wrapper .slide_img img{
    width: inherit;
    height: inherit;
}

 .prev, .next{
    width: 12%;
    height: inherit;
    position: absolute;
    top:0; 
    color:rgba(244, 244, 244,.9);
    z-index: 99;
    transition: .45s;
    cursor: pointer;
    text-align: center;
}

.next{right:0;}
.prev{left:0;}

label span{
    position: absolute;
    font-size: 50pt;
    top: 50%;
     transform: translateY(-50%);
}

.prev:hover, .next:hover{
    transition: .3s;
    background-color: rgba(88, 88, 89,.8);
    color: #ffffff; 
}

.slider-wrapper #nav_slide{
width: 100%;
bottom: 12%;
height: 11px;
position: absolute;
text-align: center;
z-index: 10;
cursor: default;
}

#nav_slide .dots{
top: -5px;
width: 18px;
height: 18px;
margin: 0 4px;
position: relative;
border-radius: 100%;
display: inline-block;
background-color: rgba(0, 0, 0, 0.6);
transition: .4s;
}

#nav_slide .dots:hover {
cursor: pointer;
background-color: rgba(255, 255, 255, 0.9);
transition: .25s
}

.slide_img{z-index: -1;}

#i0:checked ~ #slide_0  ,
#i1:checked ~ #slide_1  ,
#i2:checked ~ #slide_2 ,
#i3:checked ~ #slide_3  ,
#i4:checked ~ #slide_4 
{z-index: 9; animation: scroll 1s ease-in-out;}

#i0:checked  ~  #nav_slide #dot0,
#i1:checked  ~  #nav_slide #dot1,
#i2:checked  ~  #nav_slide #dot2,
#i3:checked  ~  #nav_slide #dot3,
#i4:checked  ~  #nav_slide #dot4
{ background-color: rgba(255,255,255,.9);}

@keyframes scroll{
0%{	opacity:.4;}
100%{opacity:1;}
}		

/* .yt{
margin: 0 auto;
margin-top: 50px;
position: relative;
width: 150px;
height:50px;
border: outset #2c2c2c 4px;
border-radius: 10px;
text-align: center;
font-size: 30pt;
transition: .5s;
}

.yt a{
text-decoration: none;
color: #4c4c4c;
transition: .5s;
}

.yt:hover{
background: #4c4c4c;
transition: .3s;
}

.yt:hover a{
color: #fff;
transition: .3s;
}
*/
@media screen and (max-width: 685px){
.slider-wrapper{
    border: none;
    width: 100%;
    height: 0;
    padding-bottom: 55%; 
}	

label span { font-size: 50pt; }

.prev, .next{
    width: 15%;
}	
#nav_slide .dots{
    width: 12px;
    height: 12px;
}
}
@media screen  and(min-width: 970px){
.me{ display: none;}
}
.checkbox{
margin: 0px;
visibility: hidden;
}
`;
