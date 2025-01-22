import {css} from 'lit-element';

export const PriceCardsStyles = css`

/*animations*/
.columns {
    margin:0 !important;
}
.animate1{
    opacity:0;
    transform:translateY(40px);
    transition:0.7s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateY(0px);

}

.column{
    width: 100%;
    margin:.75rem;
    padding:0px ! important;
    justify-content: center;
}
.card{
    flex-direction:column;
    padding:10px;
    align-items:center;
    border: 2px solid var(--primary);
    border-radius: 6px;
    min-width: 100%;
    background: var(--paper);
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
}

.card:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    border-color:var(--app-secondary-color);

}

.check-icon {
    margin-right:20px;
    width:15px !important;
    height: 15px !important;
}
.block{
    padding:0 20px;
    align-self:flex-start;
}
.price-content {
    padding:20px;
}

.title{
    font-size: 25px!important;
    padding-bottom: 8px!important;
}
.contents:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.subtitle {
    line-height:2.3;
    font-size: 18px;
}
.group-summary {
    margin-bottom: 28px!important;
    margin-top: 28px!important;
}

.price {
    text-align: center;
    border-radius: 50%;
    background: transparent;
    transition: all 1s ease 0s;
}

.price p {
    font-size: 29px;
    font-weight: 500;
}

.price:hover {

}
.description {
    margin-top: 16px;
    text-align: center;
}

.description p {
    margin-top: 16px;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 8px;
}
.button {
    margin-top:16px;
    margin-bottom:38px;
    width: 70%!important;
    border:2px solid var(--app-default-color)!important;
    border-radius:20px 20px !important;
}
.button:hover {
    border-color: var(--app-secondary-color)!important;
}
.item-index {
    display: flex;
    width:35px;
    height:35px;
    margin:16px;
    border-radius:50%;
    background-color:var(--app-secondary-color)!important;
    color: white;
    font-size:24px;
    justify-content: center;
    align-items: center;
}
.item-index:hover {
    background-color:var(--app-accent-color)!important;
}


.ii__product{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: auto;
    border-radius: 8px;
    position: relative;
    color: #4a4a4a;
  }
  .ii__product:hover{
   
  }

  .ii__product-logo img 
  {
   max-width: 50px;
   max-height: 50px;
   margin-left:25px;
  }
  
  .ii__product-logo{
      display: flex;
      align-items: center;
      width: 95px;
      height: 95px;
      background: var(--app-accent-color);
      border-radius: 50%;
      margin: 0 auto;
  }
  .read_more{
    color:var(--app-accent-color);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .show_less{
    color:var(--app-accent-color);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .is-custom-color{
    background-color: var(--app-accent-color);
    color: #fff;
  }
  .ii__content{
    margin-top:10px;
  }

  @media screen and (max-width: 950px){
    .column{
        width: 100%;
        max-width: 100%;
        margin:0 0 .75rem 0;
    }

    .columns{
        display:flex!important;
        flex-direction:column!important;
    }
    
}
hr {
    height: 3px;
    width: 90%;
    margin: 0;
}
.level {
    justify-content: flex-start;
}
.selected.column {
    border-color:var(--app-secondary-color);
    border-width:4px;
}
#warning-text{
    display:none;
}
.selected.button {
    background-color:var(--app-secondary-color);
    border-color: var(--app-secondary-color)!important;
}
.selected.button p {
    color:white;
}

  @media screen and (max-width: 775px){
    .column{
        width: 100%;
        max-width: 100%;
    }
    
}

`;
