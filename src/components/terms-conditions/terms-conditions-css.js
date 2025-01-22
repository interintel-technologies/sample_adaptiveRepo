import {css} from 'lit-element';

export const TermsConditionsStyles = css`
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 9; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 228px;
}


.close:hover,
.close:focus {
  color: var(--link);
  text-decoration: none;
  cursor: pointer;
}

.dialog-header{
    display: flex;
    justify-content: center;
    align-items: baseline;
}
.popup-image{
    display:flex;
    justify-content:center;
}
.content{
    max-height: 375px;
    overflow: auto;
}
img{
    width:15%;
}
a{
    color: var(--link)!important;
    cursor: pointer;
    text-decoration: none!important;
}
span{
    color:var(--link);
    font-style: italic;
    font-weight: 500;
    cursor: pointer;
}
.error{
    text-decoration: underline;
   text-decoration-color: red;
}
.checkbox input[type="checkbox"] {
    opacity: 0;
}

.checkbox label {
    position: relative;
    display: inline-block;
    
    /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
    
    padding-left: 24px;
    padding-top: 1px;
}

.checkbox label::before,
.checkbox label::after {
    position: absolute;
    content: "";
    
    /*Needed for the line-height to take effect*/
    display: inline-block;
}

/*Outer box of the fake checkbox*/
.checkbox label::before{
    height: 16px;
    width: 16px;
    
    border: 1px solid;
    left: 0px;
    
    /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
     *to vertically center it.
     */
    top: 3px;
}

/*Checkmark of the fake checkbox*/
.checkbox label::after {
    height: 5px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    
    transform: rotate(-45deg);
    
    left: 4px;
    top: 7px;
}

/*Hide the checkmark by default*/
.checkbox input[type="checkbox"] + label::after {
    content: none;
}

/*Unhide on the checked state*/
.checkbox input[type="checkbox"]:checked + label::after {
    content: "";
}

/*Adding focus styles on the outer-box of the fake checkbox*/
.checkbox input[type="checkbox"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
}

@media screen and (max-width: 930px) {
    .close {
        right: 100px;
      }
}
@media screen and (max-width: 594px) {
    .close {
        right: 80px;
      }
}
`;
