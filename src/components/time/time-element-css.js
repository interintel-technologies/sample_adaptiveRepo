/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const TimeElementStyles = css`
#warning-text{
  position: relative;
  top: 5px;
  font-size: 0.75rem;
  padding: 0px;
  margin: 0px 0px 0px 1px;
  display:none;
}

.close{
  position: absolute;
  top: 4px;
  right: 20px;
  cursor: pointer;
}
.is-danger {
  color: rgb(255, 56, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(255, 56, 96)!important;
  border-radius: 6px;
  border-image: initial;
  position: relative;
}

.is-success{
  color: rgb(35, 209, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(35, 209, 96)!important;
  border-radius: 6px;
  border-image: initial;
  position: relative;
}

.is-label-success{
  color: rgb(35, 209, 96)!important;
}
.is-label-danger{
  color: rgb(255, 56, 96)!important;
}

.dropdown-arrow{
  content: '';
  width: 8px;
  height: 8px;
  border-left: 2px solid #4a4a4a;
  border-bottom: 2px solid #4a4a4a;
  border-right: 2px solid transparent;
  border-top: 2px solid transparent;
  position: absolute;
  transform: rotate(-43deg);
  top: 13px;
  right: 23px;
}

.is-arrow-success{

  border-left: 2px solid #23D160!important;
  border-bottom: 2px solid #23D160!important;

}

.is-arrow-danger{

  border-left: 2px solid rgb(255, 56, 96)!important;
  border-bottom: 2px solid rgb(255, 56, 96)!important;

}

.timer-p{
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#dateSelected{
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.timer-container{
    width: 100%;
  }
  .timer-container{
   width: 100%;
   border: 1px solid rgb(183, 181, 181);;
   padding: 10px;
   border-radius: 4px;
   display: flex;
   align-items: center;
   cursor:pointer;
   justify-content: center;
   position: relative;
  }
  .calendar-select{
   border: 1px solid rgb(183, 181, 181);;
   border-radius: 6px;
   position: relative;
 }
 .calendar-select-header{
 width: 100%;
 background: #fff;
 padding: 10px;
 position: relative;
 cursor: pointer;
 border-radius: 6px;
 }
 .arrow{
 position: relative;
 }
//  .calendar-select-header::after{
//  content: '';
//  width: 8px;
//  height: 8px;
//  border-left: 2px solid #4a4a4a;
//  border-bottom: 2px solid #4a4a4a;
//  border-right: 2px solid transparent;
//  border-top: 2px solid transparent;
//  position: absolute;
//  transform: rotate(-43deg);
//  top: 13px;
//  right: 23px;
//  }
 
 
 .calendar-select-header p{
 font-size: 14px;
 font-weight: 500;
 }
 
 .calendar-select-header p a{
   color: #4a4a4a
 }
 .time-font-title {
   font-size: 14px;
   font-weight: 600;
   text-transform: capitalize;
 }
 
 .heading{
   padding-top: 10px;
 }
 
 a {
   color: #4A4A4A;
 }
 
 .calendar-select-body{
   width: 100%;
   margin-top: 15px;
   border-radius: 6px;
   display: none;
   z-index: 9999;
   border: 1px solid #e5e5e5;
   position: absolute;
 }
 
 .timer-radio{
   display: flex;
   align-items: flex-start;
   justify-content: space-around;
 }
 
 .time-active {
   background-color:var(--app-accent-color);
   color:#fff;
 }
 .time-active:hover  {
   background-color:var(--app-accent-color);
   color:#fff;
 }
 
  .timer-container .timer-element::after{
     content: '';
     width: 7px;
     position: absolute;
     right: 25px;
     border-left: 2px solid;
     height: 7px;
     border-bottom: 2px solid;
     transform: rotate(-45deg);
  }
  .timer-container .timer-element p a{
   color: inherit;
  }
  
 
 
  @media screen and (max-width: 768px){
 
   #timer-lineup li{
 
     /* margin-right: 320px ;
      margin-left:  60px; */
      overflow: auto;
      font-size: 150%;
      
    }
  
    ul#timer-lineup{
  
      height: 37px;
      
        
      
    }
  
    #timer-linuep-minutes li{
  
      margin-right: 315px ;
      margin-left:  60px;
      overflow: auto;
      font-size: 130%;
      
    }
  
    #timer-linuep-minutes{
      height: 37px;
      
    }
  
    .timer-radio {
  
      /* margin-right: 269px; */
      font-size: 130%;
      
    }
 
  }
 
 
  @media screen and (max-width: 414px){
 
   #timer-lineup li{
 
     /* margin-right:140px ;
      margin-left:  60px; */
      overflow: auto;
      font-size: 150%;
      
    }
  
    ul#timer-lineup{
  
      height: 37px;
      
        
      
    }
  
    #timer-linuep-minutes li{
  
      margin-right:135px ;
      margin-left:  60px;
      overflow: auto;
      font-size: 130%;
      
    }
  
    #timer-linuep-minutes{
      height: 37px;
      
    }
  
    .timer-radio {
  
      /* margin-right: 95px; */
      font-size: 130%;
      
    }
 
  }
 
 
  @media screen and (max-width: 375px){
 
   #timer-lineup li{
 
     /* margin-right: 120px ;
      margin-left:  60px; */
      overflow: auto;
      font-size: 150%;
      
    }
  
    ul#timer-lineup{
  
      height: 37px;
      
        
      
    }
  
    #timer-linuep-minutes li{
  
      margin-right: 115px ;
      margin-left:  60px;
      overflow: auto;
      font-size: 130%;
      
    }
  
    #timer-linuep-minutes{
      height: 37px;
      
    }
  
    .timer-radio {
  
      /* margin-right: 75px; */
      font-size: 130%;
      
    }
 
  }
 
  @media screen and (max-width: 360px){
           
   #timer-lineup li{
 
    /* margin-right:110px ;
     margin-left:  60px; */
     overflow: auto;
     font-size: 150%;
     
   }
 
   ul#timer-lineup{
 
     height: 37px;
     
       
     
   }
 
   #timer-linuep-minutes li{
 
     margin-right:105px ;
     margin-left:  60px;
     overflow: auto;
     font-size: 130%;
     
   }
 
   #timer-linuep-minutes{
     height: 37px;
     
   }
 
   .timer-radio {
 
     /* margin-right: 75px; */
     
   }
 
 
 }
 
 @media screen and (max-width: 320px){
           
   #timer-lineup li{
 
    /* margin-right:95px ;
     margin-left:  60px; */
     overflow: auto;
     font-size: 150%;
     
   }
 
   ul#timer-lineup{
 
     height: 37px;
     
       
     
   }
 
   #timer-linuep-minutes li{
 
     margin-right:90px ;
     margin-left:  60px;
     overflow: auto;
     font-size: 130%;
     
   }
 
   #timer-linuep-minutes{
     height: 37px;
     
   }
 
   .timer-radio {
 
     /* margin-right: 47px; */
     
   }
 
 
 }

 .timer-dropdown-container{
   background-color: var(--paper);
   padding: 20px;
  //  width: 200px;
   margin-top: 20px;
   box-shadow: 3px 8px 5px #e5e5e5; 
   flex-direction: row;
   justify-content: center;
   align-items: center;
   font-size: 25px;
   border: 1px solid rgb(183, 181, 181);
 }
 .timer-columns{
   align-items: center;
   justify-content: center;
 }
 .timer-column{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
 .column{
  padding:0
 }

`;
