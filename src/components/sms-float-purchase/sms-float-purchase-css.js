
import {css} from 'lit-element';

export const SmsFloatPurchaseStyles = css`

.cal-area {
    display: none;
    justify-content: space-evenly;
    background-color: #ccfce1;
    padding: 18px;
    margin-bottom: 16px;
    border-radius: 6px;
    overflow-x: visible;
    overflow-y: visible;
}

.p-text {
  font-size: 16px;
  font-weight: 700;
}

input {
    font: 500 14px / 24px Lato, Arial, sans-serif;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    border-radius: 6px;
    padding: 16px 13.5px;
    color: rgb(1, 50, 67);
}

.field{
    margin-top:42px!important;
}

.calc {
    width: 50%!important;
    margin: 0 auto!important;
}
.button{
    width: 100%!important;
    background-color: var(--primary)!important;
    color: #fff!important;
}


#warning-text{
  display: none;
  position: relative;
  margin-top: 8px;
  
}

  .dropdown-container{
    width: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
    // margin-left: 36px;
  }
  .ss-dropdown-header, .ss-dropdown-collapsable {
    // width: 100%;
    padding: 9.5px 20px;
    background-color: #fff;
    border-radius: 4px;
    color: rgb(1, 50, 67);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(183, 181, 181);
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)
  }
  .ss-icons{
    display: flex;
    justify-content: center;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    top: 2px;
  }
  .label-name{
    position: relative;
    top: 0px;
    transition: all 0.4s ease 0s;
    color: rgb(1, 50, 67);
    font-size: 16px;
}
  
  
  .ss-single-selected .ss-arrow {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    margin: 0 6px 0 6px; 
  }
  .ss-single-selected .ss-arrow span {
    border: solid #666666;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transition: transform .2s, margin .2s; 
  }
  .ss-single-selected .ss-arrow span.arrow-up {
      transform: rotate(-135deg);
      margin: 10px 0 0 0; 
      top: 4px;
      position: relative;
  }
  .ss-single-selected .ss-arrow span.arrow-down {
      transform: rotate(45deg);
      // margin: -17px; 
  }
  .ss-dropdown-collapsable{
    top: 73px;
    display: none;
    position: absolute;
    padding-right: 16px;
    overflow-y: auto;
    right: 0;
    left: 0;
    z-index: 99;
    cursor: initial;
    transform-origin: center top;
    transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
    opacity: 0;
  }
  .ss-dropdown-collapsable::before{
    content: '';
    width: 0;
    height: 10px;
    position: absolute;
    top: -30px;
    border-bottom: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
  }
  
  .ss-dropdown-collapsable .ss-search {
    width: 100%;
  }
  
  .ss-dropdown-collapsable .ss-search input {
    display: inline-flex;
    font-size: inherit;
    line-height: inherit;
    flex: 1 1 auto;
    width: inherit;
    min-width: 0px;
    height: 30px;
    padding: 6px 8px;
    margin: 0;
    border: 1px solid rgb(183, 181, 181);
    border-radius: 4px;
    background-color: #ffffff;
    outline: 0;
    text-align: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-appearance: textfield; 
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
    max-height: 196px;
    overflow-y: auto;
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items li {
    padding: 10px;
    cursor: pointer;
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items li:hover{
    background-color: #e5e5e5;
  }
  
  .ss-option:not(.ss-disabled).ss-option-selected{
    background-color:var(--primary);
    color: #fff;
  }
  
  .ss-dropdown-collapsable.ss-open{
    opacity: 1;
    display: block;
    transform: scaleY(1);
  }
  .ss-plus{
    display: none;
  }
  .ss-plus.active{
    display: block;
    position: absolute;
    right: 43px;
  }
  .form-field--is-active .label-name{
    transform: translateY(-24px);
    position: absolute;
    font-size: 12px;
    left:3px;
    font-weight: 700;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;
    padding-bottom: 10px;
  }
  .is-arrow-danger {
    border-color:rgb(255, 56, 96)!important;
  }
  .is-arrow-success{
    border-color: #23d160 !important;
  }
  
  .lbl-danger{
    color: #ff2b56;
  }
  .cont-danger{
    border: 2px solid #ff2b56;
  }
  
  .lbl-success{
    color: #23d160 !important;
  }
  .cont-success{
    border: 2px solid #23d160;
  }


  @media screen and (max-width:800px) {   
    .calc {
      width: 80%!important;
      margin: 0 auto!important;
    }
  
  }

  @media screen and (max-width:600px) {   
    .calc {
      width: 100%!important;
      margin: 0 auto!important;
    }
  
  }



`;
