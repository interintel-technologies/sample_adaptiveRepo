import {css} from 'lit-element';

export const DropDownDetailsStyles = css`
.container{
    padding:.75rem;
}
.card{
    box-sizing: border-box;
    padding: 20px;
    gap: 18px;
    border-radius: 20px;
    /* box-shadow:var(--mui-shadows-3); */
    border-radius: var(--CornerLarge) !important;
    background-color:var(--md-sys-color-secondaryContainer);
}
.select select{
   padding-top:.75rem;
   padding-bottom:.75rem;
   background-color:var(--md-sys-color-surface);
   border-radius: var(--CornerMedium) !important;
   width:100%;
   border:none !important;
}
.select{
    height:50px;
    width:100%;
  
}
.select option{
    background-color:var(--md-sys-color-surfaceContainer);
    font-family:'montserrat' !important;
    font-size:16px !important;
    text-align:center !important;
    line-height:24px !important
}
#selectCol{
    padding:0 !important;
}
img{
    position:absolute;
    right:10%;
    bottom:12%;
    height:74px;
}
#valueCol{
    display:inline-flex;

}

#valueCol p{
    font-size:16px;
    font-weight:800;
    color:var(--md-sys-color-surface) !important;
}
#valueCol span{
    font-size:16px;
    font-weight:800;
    color:var(--md-sys-color-onBackground) !important;
}
.switch {
    display: flex;
    width: 55px; /* total width of two circles */
    height: 25px;
    border-radius: 25px;
    cursor: pointer;
    justify-content: space-between; /* keep circles spaced evenly */
    padding: 2.5px; /* add padding inside the container */
    transition: background-color 0.3s ease;
    /* background-color: var(--md-sys-color-surface); */
    align-items:center;
    z-index:2;
}

.circle {
    width: 24px;
    height: 24px;
    background-color: var(--md-sys-color-surface);
    border-radius: 50%;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
}
.circle:first-child{
    left:10%;
}

.switch.active .circle:first-child {
    transform: translateX(20px); /* moves first circle to the right */
}
adaptive-ui-icon {
    fill:var(--primary) !important;
}
`;