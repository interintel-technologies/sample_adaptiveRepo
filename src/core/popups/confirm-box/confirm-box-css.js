import { css } from 'lit-element';

export const ConfirmBoxStyles = css`
.modal-content{
  width:640px;
}
.buttons .button {
  flex-grow: 1;
}
h2.title{
  text-align:center;
}
.box{
  text-align:center;
}
.box p{
  margin-bottom:1rem;
}

@media(max-width:768px){
  .modal-content{
    width:85%;
  }
}
`