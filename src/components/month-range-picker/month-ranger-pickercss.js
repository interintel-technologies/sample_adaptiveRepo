
import { css } from 'lit-element';

export const MonthPickerStyles = css`
.content {
  display: flex;
  justify-content: flex-start; 
  /* align-items: center; */
  padding: 14px;
}


.select-container {
  display: flex;
  justify-content: center; 
  align-items: center;     
  height: 100%; 
}


.select select {
  margin: 0 8px;
  appearance: none;
  font-weight: 400 !important;
  font-size:16px !important;
  cursor: pointer;
  border: 0;

}
.select select:focus {
  outline: none !important;
  border: 0 !important;
  font-weight: bold ;
}
.select select:active {
  outline: none !important;
  border: 0 !important;
  font-weight: bold ;
}
.select select:not([multiple]) {
  padding-right: 0 !important;
}
option {
  display: block;
  padding: 0px 2px 1px !important;
  white-space: nowrap; 
  background-color:var(--paper);
  font-size:14px !important
}
.month-container {
  border: 1px solid var(--md-sys-color-surfaceVariant);
  width:85%;
  border-radius: 20px;
  padding: 10px;
  display:flex;
  overflow: hidden;
}
.icon-container {
  display: flex;           
  justify-content: center; 
  align-items: center;     
}

.select:not(.is-multiple):not(.is-loading)::after {
  border: none !important;
}

label{
  display:flex;
  align-items: center;
}

@media (max-width: 600px) { 

  .content{
        width: 80vw;
        position: relative;
        left: -11px;
        overflow:hidden;
  }

  .icon-container{
    display:none
  }
 
}
`;