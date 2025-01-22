import { css } from "lit-element";

export const StaffInfoStyles = css`
.content{
    padding:.75em;
}
h2{
    text-transform:capitalize;
}
h4{
      text-transform:capitalize;
}
h5{
      text-transform:capitalize;
}
h6{
    text-transform:capitalize;
}

.imgDiv{
    justify-content:center;
    display:flex;
}
.name{
 margin-top:1.75em;   
}
.name h4 span{
    color:var(--google-grey-500);
    text-transform:capitalize !important;
}
.avtr{
    padding-top:2.5em;
    padding-bottom:2.5em;
    border-bottom:1.75px solid rgb(183, 181, 181);
    
}
.avtr .icon{
    color:var(--input-background-color);
}
.todayDetails{
    padding:1em 20% 0 20%;
}
.todayDetails .column{
    text-align:center;    
}
.todayDetails h5{
    color:var(--google-grey-500);  
}
.todayDetails h4{
    font-weight:bold;
}
.staffDiv{
    background-color:var(--card-background-color);
    padding-top:2em;
    padding-bottom:2.5em;
}
.buttonsList{
    padding:2.5em 20% .85em 20%;
}
.buttonsList li{
    background-color:var(--link);
    text-align:center;
    justify-content:center;
    display:flex;
    padding-top:.25em;
    padding-bottom:.25em;
    margin-bottom:1.3em;
    box-shadow: 0 .07em .15em rgba(183, 181, 181,.5);
}
.buttonsList li:hover{
    transform:scaleY(1.05) scaleX(1.02);
    transition:ease-out .5s;
}
.buttonsList li h5{
    margin-top:.8888em;
    color:var(--link--color-invert);
}
.content ul{
    margin-left:0 !important;
}
.shiftSpan{
    margin-top:2.75em;
}
.shiftSpan span{
    color:var(--google-grey-500);  
}

@media(max-width:768px){
    .buttonsList{
    padding:2.5em 10% .85em 10%;
    }
}
`;