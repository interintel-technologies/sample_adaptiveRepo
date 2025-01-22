import { css } from "lit-element";

export const TagInputStyles=css`
.card{
    box-shadow:none !important;
}
.card-header{
    cursor:pointer !important;   
    min-height:40px;
    height:auto !important;
    box-shadow:none !important;
}
.card-header-title{
    min-height:40px;
    height:auto;
    width:100%;
    padding:0 0 0 1rem !important;
}
.card-header-title.has-values{
    display:flex;
    min-height:40px !important;
    flex:1;

}
.card-header-title.has-values .lblActive{
    top: -2.6rem;
}
.searchBar{
    list-style:none !important;
    margin-left:0 !important;
    margin-top:0 !important;
    margin-bottom:0.5rem !important;
    padding-left:0.5rem !important;
}

.optionsList{
    list-style:none !important;
    margin-left:0 !important;
    margin-top:0 !important;
    padding-left:0.5rem !important;
}

.card-content{
    border-top:1px solid var(--primary);
    position: absolute;
    width: 99%;
    z-index:10;
    box-sizing: border-box;
    background-color:var(--paper);
    padding:0.35rem 0.35rem 0.35rem 0 !important;
    transform-origin: center top;
    animation-name: openDown;
    animation-duration: .25s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
}

.label-name{
    cursor:pointer;
    line-height:20px;
}

.content-name{
    padding-top:0;
    padding-bottom:0;
}

.fa-plus{
    transform: rotate(0deg);
    transition: all 0.5s ease;
}
.mainBtn{
    background-color:var(--md-sys-color-surfaceContainerLow) !important;
}
.fa-plus.rotate{
    transform: rotate(45deg);
}

.is-hidden{
    /* display:none;   */
    animation-name: closeUp;
    animation-duration: .25s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;  
}

.btnDiv{
    justify-content:end;
}

.ssBtn{
    background-color:var(--primary);
    margin: 3px 5px 3px 0;
    animation-name: scaleIn;
    animation-duration: .2s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    border-radius:var(--CornerSmall) !important;
 
}
.ssBtn:hover{
    color:"white"!important;
}

.deleteIcon{
    margin: 15px 0 0 15px;
}

.ssLabel{
    justify-content:start;
}

.ss-option{
    padding-left:0.35rem;
    font-family: var(--family-sans-serif), sans-serif !important;
    border-radius:var(--CornerSmall)
}

::placeholder{
    font-family: var(--family-sans-serif), sans-serif !important;
}
.ss-option:hover{
    cursor:pointer;
}

.ss-option-selected{
    background-color:var(--primary);
    border-radius:var(--CornerSmall);
    color:white;
}

.ss-values{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 100%;
    width: calc(100% - 30px);
    padding:2px 10px 2px 5px;
    position:relative;
    height:auto;
}

.lblActive{
    width: 100%;
    top: -3.7rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--grey-darker);
    position: relative;
    left: -75px;
    padding-left:14px;
    margin-bottom: -2.5rem;
}


@keyframes scaleIn {
0% {
  transform: scale(0);
  opacity: 0; }
100% {
  transform: scale(1);
  opacity: 1; } 
}

@keyframes openDown {
0% {
  transform: scaleY(0);
  opacity: 0; }
100% {
  transform: scaleY(1); 
  opacity: 1; } 
}

@keyframes closeUp {
0% {
    transform: scaleY(1); 
    opacity: 1; }
  
100% {
    transform: scaleY(0);
    opacity: 0; }
}

@media(min-width:768px){
    .card{
        margin-top:2rem !important;
    }
}
@media(max-width:768px){
    #content{
        margin-top:1.5rem;
    }
}
`;