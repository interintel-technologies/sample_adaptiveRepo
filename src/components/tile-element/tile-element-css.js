import {css} from 'lit-element';

export const TileElementStyles = css`
/* Services Section */
.mainCol{
        margin-left:auto;
        margin-right:auto;
        justify-content:center;
    }

.service-cards{
    width:70%;
    margin:0px auto;
}
.service--row .col-md-6:last-child{
    margin: 15px auto;
  }
  .card-service {
      padding: 40px 35px;
      border: 0;
      border-radius: 0;
      background: #fff;
      border: 1px solid #e8edf1;
      z-index: 22;
      position: relative;
      transition: all 300ms linear 0s;
  }
  .card-service__icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      margin-bottom: 12px;
      height: 40px;
      width: 40px;
    background: var(--primary);
      text-align: center;
      line-height: 72px;
      border-radius: 40px;
      margin-bottom: 32px;
  }
  .card-service__icon i {
      color: #ffffff;
    font-size: 35px;
  }
  
.card_title{
    font-weight:700;
    text-transform:capitalize;
    font-size:24px !important;
}
.paragraph{
    text-align:left;
    margin-top:2.5rem !important;
    font-weight:400;
}
.initials{
    text-transform:uppercase;
    font-weight:600;
    color:var(--black);
}

`;