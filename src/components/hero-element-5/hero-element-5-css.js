
/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const HeroElement5Styles = css`
    .header{
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(laptopBG.jpeg); 
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(laptopBG.jpeg);
    background-attachment: fixed;
    height: 100vh;
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 188px;

    
     }   

.ui-header{
    color: #fff;
    font-weight: bold;
    
}

.ui-paragraph{

    color: #fff;
}

.dot, .dot-1 {
  height: 16px;
  width: 16px;
  border: 2px solid #fff;
  border-radius: 50%;
  
  display: inline-block;
}

.dot-1 {
  background-color: #f63f45;
  border: 2px solid #f63f45;
}

a.buy-btn, a.read-btn {
  color: #fff;
}

.buy-btn {
  
  border: 1px solid #f63f45;
  width: 185px;
  height: 22px;
  padding: 17px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  border-radius: 50px;
  margin-right: 25px;
 
  background-color: #f63f45;
}

.read-btn {

  border: 1px solid #fff;
  padding: 17px;
  border-radius: 50px;
  font-weight: bold;
}

.buttons-ui {

  margin-top: 60px;
}

.circles-ui {

  margin-top: 120px;
}

.previous-slide, .next-slide {
  border: 2px solid #d4d3d3;
  height: 40px;
  width: 40px;
  padding: 5px 5px 5px 0px;
  color: #d4d3d3;
  font-weight: bolder;
  border-radius: 50%;
}

.next-slide {

  position: absolute;
  right: 50px;
  top: 250px;
  padding: 5px 0px 5px 0px;
 
}

.previous-slide{

  left: 50px;
  top: 250px;
  position: absolute;
  

}

.breaking{

display: none;
} 

.breaking-assist{
  display: none;
}



/* RESPONSIVENESS  */

@media only screen and (max-width: 1024px ) { 


}

@media only screen and (max-width: 768px ) { 

  .breaking-assist {
   
    margin-top: 70px;
  }
}

@media only screen and (max-width: 414px ) {
    
 .header{

   padding: 40px;
 }
    
  .breaking{

    display: block;
    
  } 

  .breaking-assist {
    margin-top: 70px;
    display: inline-block;
  } 

  .previous-slide {
    left: 23px;
    top: 360px;
    position: fixed;
}

.next-slide{

   right: 23px;
    top: 360px;
    position: fixed;
}

}


@media only screen and (max-width: 375px ) {
    
    .header{
   
      padding: 22px;
    }
       
     .breaking{
   
       display: block;
       
     } 
   
     .breaking-assist {
       margin-top: 80px;
       display: inline-block;
     } 
   
     .previous-slide {
       left: 12px;
       top: 360px;
       position: fixed;
   }
   
   .next-slide{
   
      right: 12px;
       top: 360px;
       position: fixed;
   }
   
   }

   @media only screen and (max-width: 360px ) { 

     .header{
       padding: 7px;
     }

  }

@media only screen and (max-width: 320px ) { 
  .is-size-3 {
    /* font-size: 129%; */
    font-size: 1.2rem!important;
}

.circles-ui {
    margin-top: 52px;
}

.previous-slide {
    left: 12px;
    top: 333px;
    position: fixed;
}

.next-slide {
   
    right: 12px;
    top: 333px;
    position: fixed;

}

}
`;
    
    