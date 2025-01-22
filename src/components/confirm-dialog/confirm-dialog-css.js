import { css } from 'lit-element';

export const ConfirmDialogStyles = css`
.button{
  font-family:var(--family-sans-serif);
  text-transform:capitalize;
}
.control{
  width:100% !important;
}
.modal-card-head {
  border-bottom: 1px solid transparent!important;
}
.modal-card-head, .modal-card-foot{
  background-color: #fff!important;
  border-top: 0 solid transparent!important;
}
.icon-danger, .icon-danger i{
  color: hsl(348, 100%, 61%)!important;
}
.icon-success,  .icon-success i {
  color: #23d160!important;
}
.modal-card-head p{
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
}
.modal-card-body p{
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
}
.modal-card-foot{
  display: flex;
  justify-content: flex-end!important;
}
.modal-card-head .icon{
  margin-right: 15px!important;
}


`