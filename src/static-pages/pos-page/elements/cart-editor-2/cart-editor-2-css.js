import { css } from "lit-element";

export const CartEditor2Styles = css`
.content{
    padding:.75rem;
}
.hdr{
    border-top:2px solid var(--grey-darker);
    border-bottom:2px solid var(--grey-darker);
    line-height:60px;
    height:60px;
}
.hdr .column{
    padding-top:1rem !important;
}
.hdr .column:not(:first-child) {
    text-align:center;
}
.hdr h5{
    text-transform:uppercase;

}
.cart-item .qtyCol, .priceCol, .amountCol, .iconCol{
        display: flex;
        justify-content:center;
        padding-top:1.5rem !important;
}
.cart-item .descCol{
    text-align:left !important;
    justify-content:center;
    align-items:center;
    padding-top:1.5rem !important;
}
.cart-item .column.iconCol{
    padding-top:1.5rem !important; 
    padding-left:0 !important;  
}
ul{
    list-style-type:none !important;
}
.cart-list{
    margin-left:0 !important;
    margin-top:0 !important;
    /* height:40vh;
    overflow-y:auto; */
    width:100%;
    border-bottom:2px solid rgb(183, 181, 181,.8);
}
.cart-item{
    border-bottom:1px solid rgb(183, 181, 181,.6);
    min-height:60px;
    /* line-height:60px; */
    margin-bottom:0 !important;
}
.cart-item:last-child{
    border-bottom:none !important;
}
.iconCol .icon{
    color:var(--primary--dark-color);
    cursor:pointer;
}

.ftr{
    color:var(--link);
}
.couponCol{
    cursor:pointer;
    border-top:2px solid rgb(183, 181, 181,.8);
    border-bottom:2px solid rgb(183, 181, 181,.8);
}
.couponCol h6{
    color:var(--link);
    margin-bottom:0 !important;
}
.calcCol ul{
    margin-top:0 !important;
    margin-left:0 !important;
}
.calcCol .iconCol{
    justify-content:center !important;
    display:flex;
    padding-top:.75rem !important;
}
.labelCol{
    text-align:left;
    padding-left:30%;
}
.figureCol{
    text-align:right;
}
.ttp{
    border-top:2px solid rgb(183, 181, 181);
    border-bottom:2px solid rgb(183, 181, 181);
    height:50px;
    line-height:50px;
}
.ttp2{
    padding-bottom:0 !important;
}
.buttonsCol{
    padding-top:0 !important;
    padding-left:0 !important;
    padding-right:0 !important;
}
.btn{
    text-align:center;
    display:flex;
    justify-content:center;
    border:2px solid var(--link) !important;
    padding:10px 0 10px 0;
    cursor:pointer;
}
.btn h6{
    text-transform:uppercase;
    color:var(--link);
    margin-bottom:0 !important;
}
.clearBtn h6{
    color:var(--link) !important;
}
.proceedBtn{
    background-color:var(--link);
    height:44px;
    vertical-align:middle;
}
.proceedBtn h6{
    color:var(--link--color-invert) !important;
    margin-top:.25em !important;
}
.columns:not(:last-child) {
  margin-bottom:0 !important;
}
.modal-content{
    width:60%;
}
.quantityArrows{
   vertical-align:middle;  
}
.quantityField{
    height:35px;
    vertical-align:middle;
}
.quantityField .icon i{
    fill: var(--grey-darker);
    cursor:pointer;
}
.quantityField h6{
    font-weight:400;
}
.quantity h6{
    margin-bottom:0 !important;
    margin-top: 0.2em;
}
.field{
    width:100%;
}
#submitBtn{
    background-color:var(--link);
    color:var(--link--color-invert);
    width:100%;
    border:none !important;
}
@media(max-width:768px){
    .cart-item .qtyCol, .priceCol, .amountCol, .iconCol{
        overflow:hidden;
    }
    .content h6{
        font-size:.9em;
    }
}
`;