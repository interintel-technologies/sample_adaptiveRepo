import {css} from 'lit-element';

export const SummaryCardStyles = css`
.container{
    padding:.75rem;
}
.card{
    box-sizing: border-box;
    padding: 20px;
    gap: 18px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;
    background-color:var(--paper);
}
.titleDiv{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:55%;
    margin-left:auto;
    margin-right:auto;
    gap:1.5rem;
}
.titleDiv p{
    font-size:18px;
    line-height:18px;
    font-weight:400;
    color:var(--md-sys-color-onBackground) !important;
}
.titleDiv:hover{
    cursor:pointer;
}
.svgDiv:hover{
    cursor:pointer;
}
.svgDiv{
    text-align:left;
    height:130px;
    vertical-align:bottom;
    flex-direction: column;
     justify-content: flex-end;
     display:flex;
    margin-left:auto;
    margin-right:auto;
    padding-top:2.5rem;
    border-bottom-left-radius:var(--CornerLarge);
    border-bottom-right-radius:var(--CornerLarge);
    width:50%
}
.svgDiv p{
    font-size:16px;
    line-height:24px;
    letter-spacing:.5px;
    color:#000;
}
#svgDiv-0{
    background:url('https://i.postimg.cc/LX0PjbsR/chart.png') no-repeat center center;
    background-size: cover;
}
#svgDiv-1{
    background:url('https://i.postimg.cc/pTd8hHRq/chart2.png') no-repeat center center;
    background-size: cover;
}

adaptive-ui-icon{
    height:30px;
    width:30px;
}
.column{
    padding:1.5rem;
}
@media(max-width:768px){
    .svgDiv{
        width:75%;
    }
    .titleDiv{
        gap:.25rem;
        width:100%;
    }
}
@media(max-width:480px){
    
}

`;