import { css } from "lit-element";

export const SavedOrdersStyles=css`

.card {
    height: 100%;
    border: 1px solid var(--input-border-color);
    box-shadow: none;
    overflow:hidden;
    border-radius:10px;
    background-color:var(--body-background-color);
    padding:4%;
    font-family:var(--family-sans-serif);
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

  .is-custom-width .modal-card {
    width: 900px;
  }
 
  .truncate-text {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
  }
    .product-id {
        width:100%;
    }  

.saveBtn{
    background-color:hsl(219, 70%, 96%);
    color:var(--grey-dark);
    padding:.35em .55em .35em .55em;
    border-radius:20px;
    cursor:pointer;
}
.cont{
    display:flex;
    justify-content:flex-end;
    border-radius:30px;
}
.saveBtn p{
    font-weight:600;
}
.timeStamp{
    cursor:pointer;
}
.iconCol {
    cursor:pointer;
}

@media(max-width:768px){
    .modal-card{
        width:85%;
    }
}
.order-qty{
    border-radius: 50%;
    background: #1F438B;
    color: white;
    padding: 2%;
    display:none;
    transition: display 0.3s ease-in;
}
.card:hover .order-qty {
    display: inline-block;
  }


`;