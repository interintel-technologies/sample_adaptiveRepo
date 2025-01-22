import { css } from "lit-element";

export const NumberPickerStyles=css`
.content{
    padding:0 !important;
}
.label{
    margin-bottom:1em !important;
}
.content h5 {
    margin-bottom:.35em !important;
    padding-left:.25em;
    font-size: 1rem !important;
}
.amount h5{
    margin-top: 0.62em !important;
    margin-bottom: 0.6em !important;
}
#mainCol{
    padding-left:.5em;
    padding-right:.5em;
}
.amount{
    border:1px solid var(--input-border-color);
    border-radius:4px 4px 4px 4px;
    justify-content:center;
    text-align:center;
    vertical-align:middle;
    max-height:46px !important;
    height:40px !important;
}
.amount:hover{
    cursor:pointer;
    background-color:var(--primary);
}
.amount:hover h5{
    color:var(--primary--color-invert) !important;
    transition:.2s;
}
.amount.selected{
    background-color:var(--primary);
    border:1px solid var(--primary) !important;
}
.amount.selected   h5{
    color:var(--primary--color-invert) !important;
   
}
`;