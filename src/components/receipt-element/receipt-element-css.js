import {css} from 'lit-element';

export const ReceiptElementStyles = css`

.card{
        box-sizing: border-box;
        align-items: center;
        padding: 20px;
        gap: 8px;
        border-top-left-radius: var(--CornerLarge) !important;
        border-top-right-radius: var(--CornerLarge) !important;
        /* box-shadow:var(--mui-shadows-3) !important; */
        box-shadow: 
            0px -20px 20px var(--mui-shadows-3)
            -20px 0px 20px var(--mui-shadows-3),
            20px 0px 20px var(--mui-shadows-3); 
        background-color:var(--paper);
        position:relative;
        width:80%;
        margin-left:auto;
        margin-right:auto;
}
.card::before {
  content: "";
  position: absolute;
  bottom: 0; /* Position at the bottom */
  left: 0;
  width: 100%;
  height: 25px; /* Height of the serration */
  background: radial-gradient(circle, var(--primary) 30%, transparent 30%) repeat-x;
  background-size: 80px 45px; /* Size of each scallop */
  z-index: 1;
  opacity:.2;
  
}
.card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);
    color:var(--grey-darker);

}

.header{
    position:relative; 
    text-align:center;
    display:flex;
    justify-content:center;
}
.hdr-content{
    display:block;
    text-align:center;
    padding-top:1.5rem;
    padding-bottom:.75rem;
}
.hdr-content h6{
    font-weight:500;
    line-height:24px;
    font-size:16px;
}
.hdr-content p{
    font-weight:400;
    line-height:20px;
    font-size:16px;
    color:var(--md-sys-color-secondary) !important;
}
.total-content{
    display:block;
    text-align:center;
    padding-top:.75rem;
    padding-bottom:.75rem;
}
.total-content p{
    font-weight:400;
    line-height:20px;
    font-size:14px;
    color:var(--md-sys-color-secondary) !important;
}
.total-content h5{
    font-weight:400;
    font-size:22px;
    line-height:28px;
}
.circle{
  position:absolute;
    border-radius:50%;
    padding:.5rem;
    width:56px;
    height:56px;
    box-shadow: 0px 6px 16px 0px rgba(122, 122, 122, 0.12);
    justify-content:center;
    display:flex;
    align-items:center;
    background-color:var(--paper);
    bottom:3%;
}
.circle adaptive-ui-icon{
    width:32px;
    height:32px;
}
#items{
    padding:.75rem;
    /* gap:12px; */
    justify-content:center;
}
.item{
    border:1px solid rgba(237, 237, 237, 1);
    border-radius:var(--CornerSmall);
    padding:12px;
}
.item p{
    color:var(--md-sys-color-secondary) !important;
    line-height:16px;
    font-size:12px;
    letter-spacing:.4px;
}
.print-div{
    display:flex;
    justify-content:center;
}
.print-div:hover{
    cursor:pointer;
}
.print-div h5{
    line-height:20px;
    font-weight:500 !important;
    letter-spacing:.1px;
    font-size:14px;
}
.modal.is-active{
    z-index:1200;
    border-radius:0;
    padding-top:0 !important;
}
.modal-background{
    backdrop-filter: blur(5px);
    /* z-index: 1200; */
    height:100% !important;
    
}
#closeBtn{
    border-radius:100px;
    background-color: var(--md-sys-color-inversePrimary);
    color: var(--white);
    margin-top: 10px;
    width: 100%;
    text-transform:capitalize;
    font-family:'Montserrat';
    box-shadow:none !important;
    cursor:pointer;
    border:none;
}
@media(max-width:768px){
    .card{
        width:90%;
    }
}
`;
