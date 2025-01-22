import { css } from "lit-element";

export const MultiStepStyles = css`
.content{
    padding:7vh 7vw;
    color: #170F49 !important;
    height: 100vh;
    overflow-y: auto;
}
.card{
    border: 1px solid rgba(239, 240, 246, 1);
    box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);
    border-radius: 34px;
    border: 1px solid var(--input-border-color);
    padding:2.5rem;
}
.card-header{
    border-bottom:2px solid rgb(219, 219, 219,.8);
}
.hdr{
    display: grid;
    justify-content: center;
    text-align: center;
}
.hdr h1{
    font-weight:700;
    color: rgba(23, 15, 73, 1);
}
.hdr p{
    color: rgba(111, 108, 144, 1);
}
.card-body{
    overflow:hidden;
}
.card-title{
    color: rgba(23, 15, 73, 1);
}
.card-subtitle{
    color: rgba(111, 108, 144, 1);
}
.button-cont{
    display: flex;
    justify-content: space-between;
}
.button-cont2{
    display: flex;
    justify-content: flex-end;
}
.prevBtn{
    padding:1.5rem 1rem;
    border-radius:30px;
    border: 1px solid #F4A14F;;
    color:#F4A14F;;
    box-shadow: 0px 3px 12px 0px rgba(9, 57, 227, .18);
;
    transition:.3s ease-in;
}
.prevBtn:hover{
    color:#F4A14F;;
}
.nextBtn:hover{
    color:white;
}
.nextBtn{
    padding:1.5rem 1rem;
    border-radius:30px;
    color:white;
    background-color: #F4A14F;
    border: 1px solid #F4A14F;
    transition:.3s ease-in;
}
.retryBtn{
    padding:1.5rem 1rem;
    border-radius:30px;
    background-color:#f14668;
    color:white;
}
.retryBtn:hover{
    color:white;
}
.slidesCont{
    flex-direction:row;
    display:inline-flex;
    overflow:hidden;
}
.slide{
    transition:.3s ease-in;
}
.input{
    border: 1px solid rgba(239, 240, 246, 1);
    border-radius:15px;
    box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
    height:3em!important;
}
.control span.icon{
    color:rgba(160, 163, 189, 1) !important;
}
input.input::placeholder{
    font-weight:400 !important;
    color: #6F6C90;

}
.input:focus{
    box-shadow: 0 0 0 .0625em #170F49;
}
.status-container{
    display:grid;
    justify-content:center;
    text-align:center;
}
.status-container img{
    margin-left:auto;
    margin-right:auto;
    object-fit:contain;
    height:100px;
}
.status-container a{
    color: #F4A14F;;
}
.hrLine{
    background-color: #D9D9D9; 
    height:2px; 
    width:100%;
    margin:.75em 0 !important;
}
.content h5{
    margin-bottom: 0 !important;
}
#summaryCard{
    background: linear-gradient(90deg, #FFFFFF 0%, #FFE2C5 100%);
}
#summaryCard h5{
    color: #8B88AB;
    font-size:16px;
}
#summaryCard .field{
    margin-top:2.5rem !important;
    margin-bottom:2.5rem !important;
}
#summaryCard .input{
    background-color:rgb(255, 255, 255);
}
.hide{
    display:none;
}
.select {
    width:100%
}
.select select{
    width:100%;
    border: 1px solid rgba(239, 240, 246, 1);
    border-radius:15px;
    box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
    height:3em!important;
    font-weight:400 !important;
    color: #6F6C90;
    background-color:rgb(255, 255, 255);
}
.button[disabled]{
    background-color:rgb(245, 245, 245);
}
.is-hidden{
    visibility:hidden;
}
.progressIcon img{
    width:100px;
    height:100px;
}
#receiptCard{
    background-color: #FFFFFF;
}
.desc{
     color:hsl(0, 0%, 48%) !important;
}
.redirectBanner{
    border-radius:20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height:160px;
    position:absolute;
    top:-29px;
    background-color: #FFFFFF;
    z-index:3;
    padding-left:2.5rem;
    padding-right:2.5rem;
    margin-left:auto;
    margin-right:auto;
    left:-3%;
    opacity:0;
    transition:ease-in-out .5s;
    border: 1px solid rgba(192, 192, 192, 1);
}
.redirectBanner a{
    border-radius:40px;
    cursor:pointer;
}
@media(max-width:768px){
    .redirectBanner{
        width:90vw !important;
        padding-left:2rem;
        padding-right:2rem;
    }
    .redirectBanner h4{
        font-size:16px;
    }
    

}
`;