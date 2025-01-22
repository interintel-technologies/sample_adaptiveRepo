import { css } from 'lit-element';

export const CustomerSelectStyles = css`
.customer-select-container{
    position: relative;
}
.is-circle {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image img{
    object-fit: cover;
    height: 100%;
}
.delete{
    position: absolute;
    top: 27px;
    right: 34px;
}
.modal-delete{
    background: transparent;
    color: var(--grey-darker);
}
.delete::before, 
.delete::after {
    background-color: var(--grey-darker)!important;
}
.icon{
    color: #fff;
}
.icon.add{
    color: var(--link);
}
.dropdown-menu{
    display: block;
    width: 100%;
}
.control.has-icons-left .icon {
    fill: var(--grey-darker);
}
.card{
    box-shadow: transparent 0px 0.5em 1em -0.125em, transparent 0px 0px 0px 1px;;
}
.media{
    margin-bottom: 0!important;
}
.modal-card-head,
.modal-card-body,
.modal-card-foot{
    background: var(--body-background-color)!important;
}
.add-modal{
    display: flex;
}
.modal-background {
    background-color: rgba(10, 10, 10, 0.30);
    background: rgba(255, 255, 255, 0.11);
    background-color: rgba(255, 255, 255, 0.11);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
}
.modal-card-head{
    background: #fff;
    border: 0 solid transparent;
}
.modal-card-head p{
    text-align: center;
    margin-top: 21px;
    font-weight: bold;
}
.modal-search-btn{
    border-radius: 0;
}
.delete::before, .modal-close::after, .delete::after {
    background-color: rgb(0, 0, 0);
}
.modal-card-foot {
    justify-content: center;
    align-items: center;
    border: 0 solid transparent;
    background: #fff;
}
.customer-list{
    height: 150px;
    overflow-y: scroll;
}
.customer-list .table{
    background: var(--body-background-color);
}
.customer-list .table tr td{
    color: var(--link)!important;
}
.customer-list .button{
    border: 1px solid var(--link)!important;
}
.scale-up-center {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.slide-in-bck-center {
	-webkit-animation: slide-in-bck-center 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-bck-center 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.customer-select-btn-text{
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; 
    padding: 20px;
}
.customer-sub-text{
    color: #454040;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@-webkit-keyframes slide-in-bck-center {
    0% {
      -webkit-transform: translateZ(600px);
              transform: translateZ(600px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bck-center {
    0% {
      -webkit-transform: translateZ(600px);
              transform: translateZ(600px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }
  

@media screen and (min-width: 769px){
    .modal-content, .-card {
        margin: 0px auto;
        max-height: calc(100vh - 40px);
        width: 903px;
    }
}

`