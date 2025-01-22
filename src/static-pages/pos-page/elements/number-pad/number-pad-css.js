import { css } from "lit";

export const NumberPadInputStyles = css`
.content{
    padding:0 !important;
    
}
.control{
    width:320px;
}
.mainDiv{
    height:auto;
    /* max-width:300px; */
    /* width:100%; */
    padding:0 !important;
    display:flex;
    background-color:var(--body-background-color);
    margin-top:10px;
}
.is-12{
   padding-bottom:0 !important;
}

.numBtn{
    justify-content:center;
    text-align:center;
    background-color:var(--link);
    border-radius: 10px;
    cursor:pointer;
} 
.numBtn:hover{
    transform:scaleY(1.05) scaleX(1.01);
    transition:ease-out .5s;
    background-color:var(--link--dark-color);
}
.column h5{
    justify-content:center;
    text-align:center;
    color:var(--link--color-invert) !important;
    font-family:var(--family-sans-serif);
    margin-top:.8888em;
}
.column .icon {
    color:var(--link--color-invert) !important;
    padding-top:1.76em;
    padding-bottom:1.5em;
}
.columns:not(:last-child){
    margin-bottom:0;
}
#numBtn0{
    background-color:var(--info) !important;
}
.resetBtn{
    display:flex;
    color:var(--link--color-invert) !important;
    background-color:var(--link) !important;
    justify-content:center;
    cursor:pointer;
}
.resetBtn:hover{
    transform:scaleY(1.05) scaleX(1.01);
    transition:ease-out .5s;
    background-color:var(--link--dark-color) !important;
}
.numrow .column{
  
    padding-left:.75em; 
    padding-right:.75em; 
    padding-bottom:0;
}

.numrow .column:nth-child(1){
padding-right:0;
/* padding-left:1.5em;    */
} 

.numrow .column:nth-child(4){
padding-right:0;
/* padding-left:1.5em;    */
} 

.numrow .column:nth-child(7){
padding-right:0;
/* padding-left:1.5em;    */
} 

.numrow .column:nth-child(10){
padding-right:0;
/* padding-left:1.5em;    */
} 

.numrow .column:nth-child(3){
padding-left:0;
/* padding-right:1.5em;    */
} 

.numrow .column:nth-child(6){
padding-left:0;
/* padding-right:1.5em;    */
} 

.numrow .column:nth-child(9){
padding-left:0;
/* padding-right:1.5em;    */
} 

.numrow .column:nth-child(12){
padding-left:0;
/* padding-right:1.5em;    */
} 

.numrow .column:nth-child(13){
/* padding-left:1.5em; */
/* padding-right:1.5em;  */
padding-bottom:.75em !important;     
} 

`;