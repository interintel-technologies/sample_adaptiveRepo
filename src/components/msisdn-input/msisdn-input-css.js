/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const MsisdnInputStyles = css`
.column {
  padding:0 !important;
}
.msisdn-container{
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--md-sys-color-outlineVariant);

}
.msisdn-container.is-danger{
  border: #ff3860 2px solid;
}
.msisdn-container.is-danger input,
.msisdn-container.is-danger p, 
.msisdn-container.is-danger ~ label{
  color: #ff3860;
}
.msisdn-container.is-success{
  border: #23d160 2px solid;
}
.msisdn-container.is-success input,
.msisdn-container.is-success p, 
.msisdn-container.is-success ~ label{
  color: #23d160;
}
.input-left{
  width: 80px;
}
.country-code{
  cursor: pointer;
  min-height: 100%;
}
.country-code p{
  position: relative;
  left: 29%;
  top: 10px;
  color: rgb(1, 50, 67);
  letter-spacing: 0.5px;
  pointer-events: none;
  transition: all 0.3s ease 0s;
}

.input-right:before{
  content: '';
  background-color: #b7b5b5;
  width: 1px;
  height: 30px;
  position: absolute;
  top: 5px;
  z-index: 1;
}
.input-right{
  width: 95%;
  position: relative;
}
.input-right input{
  width: 100%;
  border: 0 solid transparent;
  padding: 13px 15px;
}
.input-right input:focus{
  outline: 0;
}
.input-right input ~ label.input-label{
  position: absolute;
  left: 11px;
  top: 8px;
  width: 100%;
  color: rgb(1, 50, 67);
  letter-spacing: 0.5px;
  pointer-events: none;
  transition: all 0.3s ease 0s;
}
// .icon{
//   top: 5px!important;
// }

#danger-icon {
  visibility: hidden;
  margin-top: 8px;
}

#check-icon {
  visibility: hidden;
  margin-top: 8px;
}
#warning-text {
  display: none;
}
.form_lists{
  display: none;
  position: absolute;
  /*padding: 0 20px;*/

  width: 200px;
  max-height: 350px;
  overflow: scroll;
  z-index: 1000;
  border: 1px solid #b7b5b5;
  border-radius: 4px;
  margin-top: 10px;
}
.form__list{
  padding: 5px 10px;
  cursor: pointer;
}
.form__list:hover{
  background-color: var(--app-default-color);
  color: #fff;
}
.lbl.is-success{
  color: #23d160!important;
}
.lbl.is-danger{
  color: #ff3860!important;
}
input{
    background:transparent;
    padding: 13.5px 45px;
    border: 1px solid var(--md-sys-color-outlineVariant);

}
`;