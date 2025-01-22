import { css } from "lit-element";

export const ProductsGridStyles = css`
  .card {
    height: 100%;
    border: 1px solid var(--input-border-color);
    box-shadow: none;
    overflow:hidden;
    border-radius:10px;
    background-color:var(--body-background-color);
    padding:4%;
  }
  .card:hover {
    border: 1px solid var(--link);
  }
  .card-content {
    border-top: 2px solid var(--input-border-color);
  }
  .card-content p{
    color:var(--link);
  }
  img {
    height: 20vh !important;
    object-fit:contain !important;
  }
  .button {
    border-color: none !important;
  }

  .nav span .is-active{
    background-color:var(--link);
    color:var(--link--color-invert);
  }

  .nav .prev{
    background-color:var(--grey-lighter);
    border-radius: 50%;
    height: 25px;
  }
  .nav .prev adaptive-ui-icon {
      fill:var(--grey)
  }
  .nav .next{
    border:.5px solid var(--input-border-color);
    border-radius: 50%;
    height: 25px;
  }
  .category-btn{
    border-radius:10px 10px 10px 10px !important;
  }
  #tabs-1 li a{
    border-radius:30px 30px 30px !important;
    border:none;
    background-color:var(---background-color);
  }

  #tabs-1 li.is-active a{
    background-color:hsl(219, 70%, 96%);
    color:var(--link);
    font-weight:600;
  }

  #tabs-2 li.is-active a{
    border:1px solid var(--link);
    background-color:hsl(219, 70%, 96%);
    color:var(--link);
    font-weight:600;
  }
  .wishListBtn{
    position:absolute;
    right:5%;
    top:8%;
    cursor:pointer;
    
  }
  .active{
    color:#ef2755;
  }

  .sortCol{
    border-bottom:1px solid var(--input-border-color);
    padding-left:.75em;
    padding-right:.75em;
    margin-left:.25em;
    margin-right:.25em;
  }
  .sortCol .column{
    cursor:pointer;
  }
  .sortCol .column:not(:first-child){
    text-align:center;
  }
  .listCol{
    align-items:center;
  }
  .listCol .column:not(:nth-child(2)){
    justify-content:center;
    text-align:center; 
  }
  .listCol h6{
    margin-bottom:0 !important;
    margin-top: .75em;
  }
  .listCol p{
    color:var(--link);
  }
  .listCol img{
    height:12vh !important;
  }
  .listCol .image{
    border:1px solid var(--input-border-color);
    border-radius:10px 10px 10px 10px;
  }
  .listCol #minusBtn{
    background-color:hsl(219, 70%, 96%);
    padding:20px 25px 20px 25px;
    border-radius:20px 20px 20px 20px;
    cursor:pointer;
  }
  .listCol #plusBtn{
    background-color:hsl(219, 70%, 96%);
    padding:20px 25px 20px 25px;
    border-radius:20px 20px 20px 20px;
    cursor:pointer;
  }
  .listCol #cartBtn{
    background-color:hsl(219, 70%, 96%);
    padding:20px 25px 20px 25px;
    border-radius:20px 20px 20px 20px;
    color:var(--link);
    cursor:pointer;
  }
  .listCol #wishlistBtn{
    background-color:hsl(219, 70%, 96%);
    padding:20px;
    border-radius:20px 20px 20px 20px;
    color:var(--link);
    cursor:pointer;
  }
  .selected{
    background-color:hsl(219, 70%, 96%);
    color:var(--link);
  }
  .sortBtns{
    display:inline-flex;
    justify-content:flex-end;
  }
  .quantityField .column{
    text-align:center;
    justify-content:center;
    padding:0 !important;
  }
  .spinContainer{
    margin-top: 25%;
    margin-left: 50%;
  }
  .spinContainer .icon{
    color:var(--link);
  }
  .spinTabContainer{
    margin-left: 50%;
  }
  .spinTabContainer .icon{
    color:var(--link);
  }

  @media(max-width:768px){
    .card{
      box-shadow: 0px 5px 18px 0px var(--scheme-invert--10--rgba);
      border: none;
    }
    .card-content {
      border-top: none;
    }
    h6{
      color: var(--grey) !important;
    }
    .listCol{
      border-radius:10px 10px 10px 10px;
      box-shadow: 0px 5px 18px 0px var(--scheme-invert--10--rgba);
      padding:1em;
    }
    .listCol .column:not(:first-child){
      text-align:left;
    }
    .listCol .column:nth-child(4){
      text-align:center;
    }
    .listCol .column:nth-child(3){
      padding-left:3em;
    }
    .quantityField{
      /* padding-left:1em; */
    }
    .quantityField .column{
      padding:.75em;
    }
    .quantityField .column{
      text-align:center !important;
    }
    .listCol .cartCol{
      text-align:right !important;
    }
    .listCol img{
      height:15vh !important;
    }
    .quantityField .column{
      padding:.75em;
    }
   
  }
`;
